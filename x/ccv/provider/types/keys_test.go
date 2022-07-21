package types

import (
	"testing"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Tests that all singular keys, or prefixes to fully resolves keys are a single byte long,
// preventing injection attacks into restricted parts of a full store.
func TestSameLength(t *testing.T) {

	keys := getSingleByteKeys()

	for _, keyByteArray := range keys {
		require.Equal(t, 1, len(keyByteArray))
	}
}

// Tests that all singular keys, or prefixes to fully resolves keys are non duplicate byte values.
func TestNoDuplicates(t *testing.T) {

	keys := getSingleByteKeys()

	for i, keyByteArray := range keys {
		keys[i] = nil
		require.NotContains(t, keys, keyByteArray)
	}
}

// Returns all singular keys, or prefixes to fully resolved keys,
// any of which should be a single byte.
func getSingleByteKeys() [][]byte {

	keys := make([][]byte, 16)
	i := 0

	keys[i], i = PortKey(), i+1
	keys[i], i = MaturedUnbondingOpsKey(), i+1
	keys[i], i = ValidatorSetUpdateIdKey(), i+1
	keys[i], i = ChainToChannelPrefix(), i+1
	keys[i], i = ChannelToChainPrefix(), i+1
	keys[i], i = ChainToClientPrefix(), i+1
	keys[i], i = PendingClientPrefix(), i+1
	keys[i], i = PendingStopProposalPrefix(), i+1
	keys[i], i = UnbondingOpPrefix(), i+1
	keys[i], i = UnbondingOpIndexPrefix(), i+1
	keys[i], i = ValsetUpdateBlockHeightPrefix(), i+1
	keys[i], i = ConsumerGenesisPrefix(), i+1
	keys[i], i = SlashAcksPrefix(), i+1
	keys[i], i = InitChainHeightPrefix(), i+1
	keys[i], i = PendingVSCsPrefix(), i+1
	keys[i] = LockUnbondingOnTimeoutPrefix()

	return keys
}

func TestPendingClientKeyAndParse(t *testing.T) {
	tests := []struct {
		timestamp time.Time
		chainID   string
	}{
		{timestamp: time.Now(), chainID: "1"},
		{timestamp: time.Date(
			2003, 11, 17, 20, 34, 58, 651387237, time.UTC), chainID: "some other ID"},
		{timestamp: time.Now().Add(5000 * time.Hour), chainID: "some other other chain ID"},
	}

	for _, test := range tests {
		key := PendingClientKey(test.timestamp, test.chainID)
		require.NotEmpty(t, key)
		// Expected bytes = prefix + time length + time bytes + length of chainID
		expectedBytes := 1 + 8 + len(sdk.FormatTimeBytes(time.Time{})) + len(test.chainID)
		require.Equal(t, expectedBytes, len(key))
		parsedTime, parsedID, err := ParsePendingClientKey(key)
		require.Equal(t, test.timestamp.UTC(), parsedTime.UTC())
		require.Equal(t, test.chainID, parsedID)
		require.NoError(t, err)
	}
}

func TestPendingStopProposalKeyAndParse(t *testing.T) {
	tests := []struct {
		timestamp time.Time
		chainID   string
	}{
		{timestamp: time.Now(), chainID: "5"},
		{timestamp: time.Date(
			2003, 11, 17, 20, 34, 58, 651387237, time.UTC), chainID: "some other ID"},
		{timestamp: time.Now().Add(5000 * time.Hour), chainID: "some other other chain ID"},
	}

	for _, test := range tests {
		key := PendingStopProposalKey(test.timestamp, test.chainID)
		require.NotEmpty(t, key)
		// Expected bytes = prefix + time length + time bytes + length of chainID
		expectedBytes := 1 + 8 + len(sdk.FormatTimeBytes(time.Time{})) + len(test.chainID)
		require.Equal(t, expectedBytes, len(key))
		parsedTime, parsedID, err := ParsePendingStopProposalKey(key)
		require.Equal(t, test.timestamp.UTC(), parsedTime.UTC())
		require.Equal(t, test.chainID, parsedID)
		require.NoError(t, err)
	}
}

func TestUnbondingOpIndexKeyAndParse(t *testing.T) {
	tests := []struct {
		chainID        string
		valsetUpdateID uint64
	}{
		{chainID: " some chain id", valsetUpdateID: 45},
		{chainID: " some chain id that is longer", valsetUpdateID: 54038},
		{chainID: " some chain id that is longer-er     ", valsetUpdateID: 9999999999999999999},
		{chainID: "2", valsetUpdateID: 0},
	}

	for _, test := range tests {
		key := UnbondingOpIndexKey(test.chainID, test.valsetUpdateID)
		require.NotEmpty(t, key)
		// This key should be of set length: prefix + hashed chain ID + separator + uint64
		require.Equal(t, 1+32+1+8, len(key))
		parsedVSCID, err := ParseUnbondingOpIndexKey(key)
		require.NotEmpty(t, parsedVSCID)
		asUint64 := sdk.BigEndianToUint64(parsedVSCID)
		require.Equal(t, test.valsetUpdateID, asUint64)
		require.NoError(t, err)
	}
}

// Test key packing functions with the format <prefix><separator><stringID>
func TestKeysWithSeparator(t *testing.T) {

	funcs := []func(string) []byte{
		ChainToChannelKey,
		ChannelToChainKey,
		ChainToClientKey,
		ConsumerGenesisKey,
		SlashAcksKey,
		InitChainHeightKey,
		PendingVSCsKey,
		LockUnbondingOnTimeoutKey,
	}

	expectedPrefixes := []byte{
		ChainToChannelBytePrefix,
		ChannelToChainBytePrefix,
		ChainToClientBytePrefix,
		ConsumerGenesisBytePrefix,
		SlashAcksBytePrefix,
		InitChainHeightBytePrefix,
		PendingVSCsBytePrefix,
		LockUnbondingOnTimeoutBytePrefix,
	}

	tests := []struct {
		stringID string
	}{
		{stringID: "test id 1"},
		{stringID: "2"},
		{stringID: "a longer id to test test test test test"},
	}

	for _, test := range tests {
		for funcIdx, function := range funcs {
			key := function(test.stringID)
			require.Equal(t, expectedPrefixes[funcIdx], key[0])
			require.Equal(t, byte('/'), key[1])
			require.Equal(t, []byte(test.stringID), key[2:])
		}
	}
}

func TestKeysWithUint64Payload(t *testing.T) {

	funcs := []func(uint64) []byte{
		UnbondingOpKey,
		ValsetUpdateBlockHeightKey,
	}

	expectedPrefixes := []byte{
		UnbondingOpBytePrefix,
		ValsetUpdateBlockHeightBytePrefix,
	}

	tests := []struct {
		integer uint64
	}{
		{integer: 0},
		{integer: 25},
		{integer: 3472843},
		{integer: 8503458034859305834},
	}

	for _, test := range tests {
		for funcIdx, function := range funcs {
			key := function(test.integer)
			require.Equal(t, expectedPrefixes[funcIdx], key[0])
			require.Equal(t, sdk.Uint64ToBigEndian(test.integer), key[1:])
		}
	}
}
