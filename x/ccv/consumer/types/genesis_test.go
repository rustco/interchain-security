package types_test

import (
	"testing"
	"time"

	clienttypes "github.com/cosmos/ibc-go/v10/modules/core/02-client/types"
	commitmenttypes "github.com/cosmos/ibc-go/v10/modules/core/23-commitment/types"
	ibctmtypes "github.com/cosmos/ibc-go/v10/modules/light-clients/07-tendermint"
	"github.com/stretchr/testify/require"

	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"

	abci "github.com/cometbft/cometbft/abci/types"
	tmtypes "github.com/cometbft/cometbft/types"

	"github.com/cosmos/interchain-security/v7/testutil/crypto"
	"github.com/cosmos/interchain-security/v7/x/ccv/consumer/types"
	ccv "github.com/cosmos/interchain-security/v7/x/ccv/types"
)

const (
	chainID                      = "gaia"
	trustingPeriod time.Duration = time.Hour * 24 * 7 * 2
	ubdPeriod      time.Duration = time.Hour * 24 * 7 * 3
	maxClockDrift  time.Duration = time.Second * 10
)

var (
	height      = clienttypes.NewHeight(0, 4)
	upgradePath = []string{"upgrade", "upgradedIBCState"}
)

// TestValidateInitialGenesisState tests a NewInitialGenesisState instantiation,
// and its Validate() method over different genesis scenarios
func TestValidateInitialGenesisState(t *testing.T) {
	// generate validator public key
	cId := crypto.NewCryptoIdentityFromIntSeed(238934)
	pubKey := cId.TMCryptoPubKey()

	// create validator set with single validator
	validator := tmtypes.NewValidator(pubKey, 1)
	valSet := tmtypes.NewValidatorSet([]*tmtypes.Validator{validator})
	valHash := valSet.Hash()
	valUpdates := tmtypes.TM2PB.ValidatorUpdates(valSet)

	cs := ibctmtypes.NewClientState(chainID, ibctmtypes.DefaultTrustLevel, trustingPeriod, ubdPeriod, maxClockDrift, height, commitmenttypes.GetSDKSpecs(), upgradePath)
	consensusState := ibctmtypes.NewConsensusState(time.Now(), commitmenttypes.NewMerkleRoot([]byte("apphash")), valHash)

	params := ccv.DefaultParams()
	params.Enabled = true

	cases := []struct {
		name     string
		gs       *types.GenesisState
		expError bool
	}{
		{
			"valid new consumer genesis state",
			types.NewInitialGenesisState(cs, consensusState, valUpdates, params),
			false,
		},
		{
			"invalid new consumer genesis state: nil client state",
			types.NewInitialGenesisState(nil, consensusState, valUpdates, params),
			true,
		},
		{
			"invalid new consumer genesis state: invalid client state",
			types.NewInitialGenesisState(&ibctmtypes.ClientState{ChainId: "badClientState"},
				consensusState, valUpdates, params),
			true,
		},
		{
			"invalid new consumer genesis state: nil consensus state",
			types.NewInitialGenesisState(cs, nil, valUpdates, params),
			true,
		},
		{
			"invalid new consumer genesis state: invalid consensus state",
			types.NewInitialGenesisState(cs, &ibctmtypes.ConsensusState{Timestamp: time.Now()},
				valUpdates, params),
			true,
		},
		{
			"invalid new consumer genesis state: client id not empty",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "ccvclient",
				ProviderChannelId: "",
				NewChain:          true,
				Provider: ccv.ProviderInfo{
					ClientState:    cs,
					ConsensusState: consensusState,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{},
				PreCCV:                      false,
			},
			true,
		},
		{
			"invalid new consumer genesis state: channel id not empty",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "",
				ProviderChannelId: "ccvchannel",
				NewChain:          true,
				Provider: ccv.ProviderInfo{
					ClientState:    cs,
					ConsensusState: consensusState,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{},
				PreCCV:                      false,
			},
			true,
		},
		{
			"invalid new consumer genesis state: non-empty last transmission packet",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "",
				ProviderChannelId: "",
				NewChain:          true,
				Provider: ccv.ProviderInfo{
					ClientState:    cs,
					ConsensusState: consensusState,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{Height: 1},
				PreCCV:                      false,
			},
			true,
		},
		{
			"invalid new consumer genesis state: non-empty pending consumer packets",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "",
				ProviderChannelId: "",
				NewChain:          true,
				Provider: ccv.ProviderInfo{
					ClientState:    cs,
					ConsensusState: consensusState,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{List: []ccv.ConsumerPacketData{{}}},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{},
				PreCCV:                      false,
			},
			true,
		},
		{
			"invalid new consumer genesis state: nil initial validator set",
			types.NewInitialGenesisState(cs, consensusState, nil, params),
			true,
		},
		{
			"invalid new consumer genesis state: invalid consensus state validator set hash",
			types.NewInitialGenesisState(
				cs, ibctmtypes.NewConsensusState(
					time.Now(), commitmenttypes.NewMerkleRoot([]byte("apphash")), []byte("wrong_length_hash")),
				valUpdates, params),
			true,
		},
		{
			"invalid new consumer genesis state: initial validator set does not match validator set hash",
			types.NewInitialGenesisState(
				cs, ibctmtypes.NewConsensusState(
					time.Now(), commitmenttypes.NewMerkleRoot([]byte("apphash")), []byte("9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08")),
				valUpdates, params),
			true,
		},
		{
			"invalid new consumer genesis state: initial validator set does not match validator set hash",
			types.NewInitialGenesisState(
				cs, ibctmtypes.NewConsensusState(
					time.Now(), commitmenttypes.NewMerkleRoot([]byte("apphash")), []byte("9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08")),
				valUpdates, params),
			true,
		},
		{
			"invalid new consumer genesis state: invalid params - ccvTimeoutPeriod",
			types.NewInitialGenesisState(cs, consensusState, valUpdates,
				ccv.NewParams(
					true,
					ccv.DefaultBlocksPerDistributionTransmission,
					"",
					"",
					0, // CCV timeout period cannot be 0
					ccv.DefaultTransferTimeoutPeriod,
					ccv.DefaultConsumerRedistributeFrac,
					ccv.DefaultHistoricalEntries,
					ccv.DefaultConsumerUnbondingPeriod,
					[]string{},
					[]string{},
					ccv.DefaultRetryDelayPeriod,
					"1",
				)),
			true,
		},
		{
			"invalid new consumer genesis state: invalid params - distributionTransmissionChannel",
			types.NewInitialGenesisState(cs, consensusState, valUpdates,
				ccv.NewParams(
					true,
					ccv.DefaultBlocksPerDistributionTransmission,
					"badchannel/",
					"",
					ccv.DefaultCCVTimeoutPeriod,
					ccv.DefaultTransferTimeoutPeriod,
					ccv.DefaultConsumerRedistributeFrac,
					ccv.DefaultHistoricalEntries,
					ccv.DefaultConsumerUnbondingPeriod,
					[]string{},
					[]string{},
					ccv.DefaultRetryDelayPeriod,
					"1",
				)),
			true,
		},
		{
			"invalid new consumer genesis state: connection id is invalid",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "",
				ProviderChannelId: "",
				NewChain:          true,
				Provider: ccv.ProviderInfo{
					ClientState:    nil,
					ConsensusState: nil,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{},
				PreCCV:                      false,
				ConnectionId:                "invalid_connection/",
			},
			true,
		},
		{
			"invalid new consumer genesis state: client state provided with connection id",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "",
				ProviderChannelId: "",
				NewChain:          true,
				Provider: ccv.ProviderInfo{
					ClientState:    cs,
					ConsensusState: nil,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{},
				PreCCV:                      false,
				ConnectionId:                "connection-1",
			},
			true,
		},
		{
			"invalid new consumer genesis state: client state provided with connection id",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "",
				ProviderChannelId: "",
				NewChain:          true,
				Provider: ccv.ProviderInfo{
					ClientState:    nil,
					ConsensusState: consensusState,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{},
				PreCCV:                      false,
				ConnectionId:                "connection-1",
			},
			true,
		},
		{
			"valid new consumer genesis state: connection id",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "",
				ProviderChannelId: "",
				NewChain:          true,
				Provider: ccv.ProviderInfo{
					ClientState:    nil,
					ConsensusState: nil,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{},
				PreCCV:                      false,
				ConnectionId:                "connection-1",
			},
			false,
		},
	}

	for _, c := range cases {
		err := c.gs.Validate()
		if c.expError {
			require.Error(t, err, "%s did not return expected error", c.name)
		} else {
			require.NoError(t, err, "%s returned unexpected error", c.name)
		}
	}
}

// TestValidateRestartConsumerGenesisState tests a NewRestartGenesisState instantiation,
// and its Validate() method over different genesis scenarios
func TestValidateRestartConsumerGenesisState(t *testing.T) {
	// generate validator private/public key
	cId := crypto.NewCryptoIdentityFromIntSeed(234234)
	pubKey := cId.TMCryptoPubKey()

	// create validator set with single validator
	validator := tmtypes.NewValidator(pubKey, 1)
	valSet := tmtypes.NewValidatorSet([]*tmtypes.Validator{validator})
	valHash := valSet.Hash()
	valUpdates := tmtypes.TM2PB.ValidatorUpdates(valSet)

	slashConsumerPacket := ccv.ConsumerPacketData{
		Type: ccv.SlashPacket,
		Data: &ccv.ConsumerPacketData_SlashPacketData{
			SlashPacketData: ccv.NewSlashPacketData(
				abci.Validator{Address: pubKey.Address(), Power: int64(1)},
				1,
				stakingtypes.Infraction_INFRACTION_DOWNTIME),
		},
	}

	// create default height to validator set update id mapping
	heightToValsetUpdateID := []types.HeightToValsetUpdateID{
		{Height: 0, ValsetUpdateId: 0},
	}

	cs := ibctmtypes.NewClientState(chainID, ibctmtypes.DefaultTrustLevel, trustingPeriod, ubdPeriod, maxClockDrift, height, commitmenttypes.GetSDKSpecs(), upgradePath)
	consensusState := ibctmtypes.NewConsensusState(time.Now(), commitmenttypes.NewMerkleRoot([]byte("apphash")), valHash)

	params := ccv.DefaultParams()
	params.Enabled = true

	cases := []struct {
		name     string
		gs       *types.GenesisState
		expError bool
	}{
		{
			"valid restart consumer genesis state: handshake in progress ",
			types.NewRestartGenesisState("ccvclient", "", valUpdates, heightToValsetUpdateID,
				types.ConsumerPacketDataList{List: []ccv.ConsumerPacketData{slashConsumerPacket}}, nil, types.LastTransmissionBlockHeight{}, params),
			false,
		},
		{
			"invalid restart consumer genesis state: provider id is empty",
			types.NewRestartGenesisState("", "ccvchannel", valUpdates, heightToValsetUpdateID, types.ConsumerPacketDataList{}, nil, types.LastTransmissionBlockHeight{}, params),
			true,
		},
		{
			"invalid restart consumer genesis: client state defined",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "ccvclient",
				ProviderChannelId: "ccvchannel",
				NewChain:          false,
				Provider: ccv.ProviderInfo{
					ClientState:    cs,
					ConsensusState: nil,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{},
				PreCCV:                      false,
			},
			true,
		},
		{
			"invalid restart consumer genesis: consensus state defined",
			&types.GenesisState{
				Params:            params,
				ProviderClientId:  "ccvclient",
				ProviderChannelId: "ccvchannel",
				NewChain:          false,
				Provider: ccv.ProviderInfo{
					ClientState:    nil,
					ConsensusState: consensusState,
					InitialValSet:  valUpdates,
				},
				HeightToValsetUpdateId:      nil,
				OutstandingDowntimeSlashing: nil,
				PendingConsumerPackets:      types.ConsumerPacketDataList{},
				LastTransmissionBlockHeight: types.LastTransmissionBlockHeight{},
				PreCCV:                      false,
			},
			true,
		},
		{
			"invalid restart consumer genesis state: nil initial validator set",
			types.NewRestartGenesisState("ccvclient", "ccvchannel", nil, nil, types.ConsumerPacketDataList{}, nil, types.LastTransmissionBlockHeight{}, params),
			true,
		},
		{
			"invalid restart consumer genesis state: outstanding downtime defined when handshake is still in progress",
			types.NewRestartGenesisState("ccvclient", "",
				valUpdates, heightToValsetUpdateID, types.ConsumerPacketDataList{}, []types.OutstandingDowntime{{ValidatorConsensusAddress: "cosmosvalconsxxx"}},
				types.LastTransmissionBlockHeight{}, params),
			true,
		},
		{
			"invalid restart consumer genesis state: last transmission block height defined when handshake is still in progress",
			types.NewRestartGenesisState("ccvclient", "",
				valUpdates, heightToValsetUpdateID, types.ConsumerPacketDataList{}, nil, types.LastTransmissionBlockHeight{Height: int64(1)}, params),
			true,
		},
		{
			"invalid restart consumer genesis state: invalid params",
			types.NewRestartGenesisState("ccvclient", "ccvchannel", valUpdates, nil, types.ConsumerPacketDataList{}, nil, types.LastTransmissionBlockHeight{},
				ccv.NewParams(
					true,
					ccv.DefaultBlocksPerDistributionTransmission,
					"",
					"",
					0, // CCV timeout period cannot be 0
					ccv.DefaultTransferTimeoutPeriod,
					ccv.DefaultConsumerRedistributeFrac,
					ccv.DefaultHistoricalEntries,
					ccv.DefaultConsumerUnbondingPeriod,
					[]string{},
					[]string{},
					ccv.DefaultRetryDelayPeriod,
					"1",
				)),
			true,
		},
	}

	for _, c := range cases {
		err := c.gs.Validate()
		if c.expError {
			require.Error(t, err, "%s did not return expected error", c.name)
		} else {
			require.NoError(t, err, "%s returned unexpected error", c.name)
		}
	}
}
