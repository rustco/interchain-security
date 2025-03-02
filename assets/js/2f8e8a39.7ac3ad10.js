"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3784],{28204:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=t(85893),s=t(11151);const o={sidebar_position:4,title:"Cryptographic verification of equivocation evidence"},a="ADR 005: Cryptographic verification of equivocation evidence",c={id:"adrs/adr-005-cryptographic-equivocation-verification",title:"Cryptographic verification of equivocation evidence",description:"Changelog",source:"@site/versioned_docs/version-v6.1.0/adrs/adr-005-cryptographic-equivocation-verification.md",sourceDirName:"adrs",slug:"/adrs/adr-005-cryptographic-equivocation-verification",permalink:"/interchain-security/v6.1.0/adrs/adr-005-cryptographic-equivocation-verification",draft:!1,unlisted:!1,tags:[],version:"v6.1.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Cryptographic verification of equivocation evidence"},sidebar:"tutorialSidebar",previous:{title:"Equivocation governance proposal",permalink:"/interchain-security/v6.1.0/adrs/adr-003-equivocation-gov-proposal"},next:{title:"Throttle with retries",permalink:"/interchain-security/v6.1.0/adrs/adr-008-throttle-retries"}},r={},h=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Light Client Attack",id:"light-client-attack",level:3},{value:"Double Signing Attack",id:"double-signing-attack",level:3},{value:"Decision",id:"decision",level:2},{value:"Light Client Attack",id:"light-client-attack-1",level:3},{value:"Double Signing Attack",id:"double-signing-attack-1",level:3},{value:"Current limitations:",id:"current-limitations",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"References",id:"references",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"adr-005-cryptographic-verification-of-equivocation-evidence",children:"ADR 005: Cryptographic verification of equivocation evidence"}),"\n",(0,n.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"5/1/2023: First draft"}),"\n",(0,n.jsx)(i.li,{children:"7/23/2023: Add light client attacks handling"}),"\n",(0,n.jsx)(i.li,{children:"9/6/2023: Add double signing attacks handling"}),"\n",(0,n.jsx)(i.li,{children:"11/3/2023: Update limitations to clarify amnesia attacks are ignored"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"status",children:"Status"}),"\n",(0,n.jsx)(i.p,{children:"Accepted"}),"\n",(0,n.jsx)(i.h2,{id:"context",children:"Context"}),"\n",(0,n.jsx)(i.p,{children:"Currently, we use a governance proposal to slash validators for equivocation (double signing and light client attacks).\nEvery proposal needs to go through a (two weeks) voting period before it can be approved.\nGiven a three-week unbonding period, this means that an equivocation proposal needs to be submitted within one week since the infraction occurred."}),"\n",(0,n.jsx)(i.p,{children:"This ADR proposes a system to slash validators automatically for equivocation, immediately upon the provider chain's receipt of the evidence. Another thing to note is that we intend to introduce this system in stages, since even the partial ability to slash and/or tombstone is a strict improvement in security.\nThe feature is implemented in two parts, each with its dedicated endpoint. One endpoint handles light client attacks, while the other handles double signing attacks."}),"\n",(0,n.jsx)(i.h3,{id:"light-client-attack",children:"Light Client Attack"}),"\n",(0,n.jsx)(i.p,{children:"In a nutshell, the light client is a process that solely verifies a specific state machine's\nconsensus without executing the transactions. The light clients get new headers by querying\nmultiple nodes, called primary and witness nodes."}),"\n",(0,n.jsxs)(i.p,{children:["Light clients download new headers committed on chain from a primary. Headers can be verified in two ways: sequentially,\nwhere the block height of headers is serial, or using skipping. This second verification method allows light clients to download headers\nwith nonconsecutive block height, where some intermediate headers are skipped (see ",(0,n.jsx)(i.a,{href:"https://arxiv.org/pdf/2010.07031",children:"Tendermint Light Client, Figure 1 and Figure 3"}),").\nAdditionally, light clients are cross-checking new headers obtained from a primary with witnesses to ensure all nodes share the same state."]}),"\n",(0,n.jsxs)(i.p,{children:["A light client attack occurs when a Byzantine validator sends invalid headers to a light client.\nAs the light client doesn't execute transactions, it can be deceived into trusting corrupted application state transitions.\nFor instance, if a light client receives header ",(0,n.jsx)(i.code,{children:"A"})," from the primary and header ",(0,n.jsx)(i.code,{children:"B"})," from a witness for the same block height ",(0,n.jsx)(i.code,{children:"H"}),",\nand both headers are successfully verified, it indicates a light client attack.\nNote that in this case, either the primary or the witness or both are malicious."]}),"\n",(0,n.jsxs)(i.p,{children:["The types of light client attacks are defined by analyzing the differences between the conflicting headers.\nThere are three types of light client attacks: lunatic attack, equivocation attack, and amnesia attack.\nFor details, see the ",(0,n.jsx)(i.a,{href:"https://github.com/cometbft/cometbft/blob/main/spec/light-client/attacks/notes-on-evidence-handling.md#evidence-handling",children:"CometBFT specification"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["When a light client agent detects two conflicting headers, it will initially verify their traces (see ",(0,n.jsx)(i.a,{href:"https://github.com/cometbft/cometbft/blob/v0.34.28/light/detector.go#L28",children:"cometBFT detector"}),") using its primary and witness nodes.\nIf these headers pass successful verification, the Byzantine validators will be identified based on the header's commit signatures\nand the type of light client attack. The agent will then transmit this information to its nodes using a ",(0,n.jsx)(i.a,{href:"https://github.com/cometbft/cometbft/blob/v0.34.28/spec/consensus/evidence.md#light-client-attacks",children:(0,n.jsx)(i.code,{children:"LightClientAttackEvidence"})})," evidence to be eventually voted on and added to a block.\nNote that from a light client agent perspective, it is not possible to establish whether a primary or a witness node, or both, are malicious.\nTherefore, it will create and send two evidences: one against the primary (sent to the witness), and one against the witness (sent to the primary).\nBoth nodes will then verify it before broadcasting it and adding it to the ",(0,n.jsx)(i.a,{href:"https://github.com/cometbft/cometbft/blob/v0.34.28/evidence/pool.go#L28",children:"evidence pool"}),".\nIf an evidence is finally committed to a block, the chain's evidence module will execute it, resulting in the jailing and the slashing of the validators responsible for the light client attack."]}),"\n",(0,n.jsxs)(i.p,{children:["Light clients are a core component of IBC. In the event of a light client attack, IBC relayers notify the affected chains by submitting an ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/v4.4.2/proto/ibc/lightclients/tendermint/v1/tendermint.proto#L79",children:"IBC misbehavior message"}),".\nA misbehavior message includes the conflicting headers that constitute a light client attack evidence. Upon receiving such a message,\na chain will first verify whether these headers would have convinced its light client. This verification is achieved by checking\nthe header states against the light client consensus states (see ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/v4.4.2/modules/light-clients/07-tendermint/types/misbehaviour_handle.go#L24",children:"IBC misbehaviour handler"}),'). If the misbehaviour is successfully verified, the chain will then "freeze" the\nlight client, halting any further trust in or updating of its states.']}),"\n",(0,n.jsx)(i.h3,{id:"double-signing-attack",children:"Double Signing Attack"}),"\n",(0,n.jsxs)(i.p,{children:["A double signing attack, also known as equivocation,\noccurs when a validator votes for two different blocks in the same round of the CometBFT consensus.\nThis consensus mechanism operates with multiple voting rounds at each block height,\nand it strictly prohibits sending two votes of the same type during a round\n(see ",(0,n.jsx)(i.a,{href:"https://github.com/cometbft/cometbft/blob/v0.34.28/spec/consensus/consensus.md#state-machine-overview",children:"CometBFT State Machine Overview"}),")."]}),"\n",(0,n.jsxs)(i.p,{children:["When a node observes two votes from the same peer, it will use these two votes to create\na ",(0,n.jsx)(i.a,{href:"https://github.com/cometbft/cometbft/blob/v0.34.28/types/evidence.go#L35",children:(0,n.jsx)(i.code,{children:"DuplicateVoteEvidence"})}),"\nevidence and gossip it to the other nodes in the network\n(see ",(0,n.jsx)(i.a,{href:"https://github.com/cometbft/cometbft/blob/v0.34.28/spec/consensus/evidence.md#detection",children:"CometBFT equivocation detection"}),").\nEach node will then verify the evidence according to the CometBFT rules that define a valid double signing infraction, and based on this verification, they will decide whether to add the evidence to a block.\nDuring the evidence verification process, the signatures of the conflicting votes must be verified successfully.\nNote that this is achieved using the public key of the misbehaving validator, along with the chain ID of the chain where the infraction occurred (see ",(0,n.jsx)(i.a,{href:"https://github.com/cometbft/cometbft/blob/v0.34.28/spec/consensus/evidence.md#verification",children:"CometBFT equivocation verification"}),")."]}),"\n",(0,n.jsxs)(i.p,{children:["Once a double signing evidence is committed to a block, the consensus layer will report the equivocation to the evidence module of the Cosmos SDK application layer.\nThe application will, in turn, punish the malicious validator through jailing, tombstoning and slashing\n(see ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.16-ics-lsm/x/evidence/keeper/infraction.go#L263",children:"handleEquivocationEvidence"}),")."]}),"\n",(0,n.jsx)(i.h2,{id:"decision",children:"Decision"}),"\n",(0,n.jsx)(i.h3,{id:"light-client-attack-1",children:"Light Client Attack"}),"\n",(0,n.jsxs)(i.p,{children:["In the first part of the feature, we introduce a new endpoint: ",(0,n.jsx)(i.code,{children:"HandleConsumerMisbehaviour(ctx sdk.Context, misbehaviour ibctmtypes.Misbehaviour)"}),".\nThe main idea is to leverage the current IBC misbehaviour handling and update it to solely jail and slash the validators that\nperformed a light client attack. Note that in this context, we assume that chains connected via a light client\nshare a subset of the validator set of the provider."]}),"\n",(0,n.jsx)(i.p,{children:"This endpoint reuses the IBC client libraries to verify that the misbehaviour headers would have fooled the light client.\nAdditionally, it\u2019s crucial that the endpoint logic results in the slashing and jailing of validators under the same conditions\nas a light client agent detector. Therefore, the endpoint ensures that the two conditions are met:\nthe headers in the misbehaviour message have the same block height, and\nthe light client isn\u2019t expired."}),"\n",(0,n.jsx)(i.p,{children:"After having successfully verified a misbehaviour, the endpoint executes the jailing and slashing of the malicious validators similarly as in the evidence module."}),"\n",(0,n.jsx)(i.h3,{id:"double-signing-attack-1",children:"Double Signing Attack"}),"\n",(0,n.jsxs)(i.p,{children:["In the second part of the feature, we introduce a new endpoint ",(0,n.jsx)(i.code,{children:"HandleConsumerDoubleVoting( ctx sdk.Context, evidence *tmtypes.DuplicateVoteEvidence, chainID string, pubkey cryptotypes.PubKey)"}),".\nSimply put, the handling logic verifies a double signing evidence against a provided\npublic key and chain ID and, if successful, executes the jailing of the malicious validator who double voted."]}),"\n",(0,n.jsxs)(i.p,{children:["We define a new\n",(0,n.jsx)(i.code,{children:"MsgSubmitConsumerDoubleVoting"})," message to report a double voting evidence observed\non a consumer chain to the endpoint of the provider chain. This message contains two fields:\na double signing evidence\n",(0,n.jsx)(i.code,{children:"duplicate_vote_evidence"})," and a light client header for the infraction block height,\nreferred to as ",(0,n.jsx)(i.code,{children:"infraction_block_header"}),".\nThe latter provides the malicious validator's public key and the chain ID required to verify the signature of the votes contained in the evidence."]}),"\n",(0,n.jsxs)(i.p,{children:["Note that double signing evidence is not verified using the same conditions as in the implementation CometBFT (see\n",(0,n.jsx)(i.a,{href:"https://github.com/cometbft/cometbft/blob/v0.34.28/evidence/verify.go#L19",children:(0,n.jsx)(i.code,{children:"verify(evidence types.Evidence)"})})," method). Specifically, we do not check that the evidence hasn't expired.\nMore details can be found in the ",(0,n.jsx)(i.a,{href:"#current-limitations",children:'"Current limitations"'})," section below."]}),"\n",(0,n.jsxs)(i.p,{children:["Upon a successful equivocation verification, the misbehaving validator is jailed for the maximum time\n(see ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.16-ics-lsm/x/evidence/types/params.go#L11",children:"DoubleSignJailEndTime"}),"\nin the SDK evidence module)."]}),"\n",(0,n.jsx)(i.h3,{id:"current-limitations",children:"Current limitations:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"We cannot derive an infraction height from the evidence, so it is only possible to jail validators, not actually slash them.\nTo explain the technical reasons behind this limitation, let's recap the initial consumer initiated slashing logic.\nIn a nutshell, consumer heights are mapped to provider heights through VSCPackets, namely through the so called vscIDs.\nWhen an infraction occurs on the consumer, a SlashPacket containing the vscID obtained from mapping the consumer infraction height\nis sent to the provider. Upon receiving the packet, the provider maps the consumer infraction height to a local infraction height,\nwhich is used to slash the misbehaving validator. In the context of untrusted consumer chains, all their states, including vscIDs,\ncould be corrupted and therefore cannot be used for slashing purposes."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"For the same reasons explained above, the age of a consumer double signing evidence can't be verified,\neither using its infraction height or its unsigned timestamp. Note that changes the jailing behaviour, potentially leading to a validator's jailing based on some \"old\" evidence from a consumer, which wouldn't occur if the consumer were a standalone chain."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["In the first stage of this feature, validators are jailed indefinitely without being tombstoned.\nThe underlying reason is that a malicious validator could take advantage of getting tombstoned\nto avoid being slashed on the provider (",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/interchain-security/pull/1232#issuecomment-1693127641",children:"see comment"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Currently, the endpoint can only handle ",(0,n.jsx)(i.em,{children:"equivocation"})," light client attacks. This is because the ",(0,n.jsx)(i.em,{children:"lunatic"})," attacks require the endpoint to possess the ability to dissociate which header is conflicted or trusted upon receiving a misbehavior message. Without this information, it's not possible to extract the Byzantine validators from the conflicting headers (see ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/interchain-security/pull/826#discussion_r1268668684",children:"comment"}),'). In addition, "amnesia" attacks are ignored, similar to CometBFT (see ',(0,n.jsx)(i.a,{href:"https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-047-handling-evidence-from-light-client.md#negative",children:"ADR-056"}),")."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"consequences",children:"Consequences"}),"\n",(0,n.jsx)(i.h3,{id:"positive",children:"Positive"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"It is now possible for the provider chain to jail validators who committed\nlight client or double signing attacks on a consumer chain."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"negative",children:"Negative"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"N/A"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/cosmos/interchain-security/pull/826",children:"ICS misbehaviour handling PR"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/cosmos/interchain-security/pull/1232",children:"Consumer double voting handler PR"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://docs.google.com/document/d/1fe1uSJl1ZIYWXoME3Yf4Aodvz7V597Ric875JH-rigM/edit#heading=h.rv4t8i6d6jfn",children:"Architectural diagrams"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/cosmos/interchain-security/blob/main/docs/docs/adrs/adr-013-equivocation-slashing.md",children:"ADR on equivocation slashing"})}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>c,a:()=>a});var n=t(67294);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);