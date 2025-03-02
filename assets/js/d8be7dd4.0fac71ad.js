"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4750],{53949:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=r(85893),s=r(11151);const t={sidebar_position:2},o="Reward Distribution",a={id:"features/reward-distribution",title:"Reward Distribution",description:"Sending and distributing rewards from consumer chains to the provider chain is handled by the Reward Distribution sub-protocol.",source:"@site/versioned_docs/version-v6.1.0/features/reward-distribution.md",sourceDirName:"features",slug:"/features/reward-distribution",permalink:"/interchain-security/v6.1.0/features/reward-distribution",draft:!1,unlisted:!1,tags:[],version:"v6.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Key Assignment",permalink:"/interchain-security/v6.1.0/features/key-assignment"},next:{title:"Consumer Initiated Slashing",permalink:"/interchain-security/v6.1.0/features/slashing"}},d={},c=[{value:"Reward distribution with power capping",id:"reward-distribution-with-power-capping",level:2},{value:"Whitelisting Reward Denoms",id:"whitelisting-reward-denoms",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"reward-distribution",children:"Reward Distribution"}),"\n",(0,i.jsxs)(n.p,{children:["Sending and distributing rewards from consumer chains to the provider chain is handled by the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/overview_and_basic_concepts.md#reward-distribution",children:"Reward Distribution sub-protocol"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Consumer chains have the option of sharing ",(0,i.jsx)(n.em,{children:"a portion of"})," their block rewards (inflation tokens and fees) with the provider chain as ICS rewards.\nThese rewards are periodically sent from the consumer to the provider according to ",(0,i.jsx)(n.a,{href:"/interchain-security/v6.1.0/build/modules/consumer#parameters",children:"consumer chain parameters"})," using an IBC transfer channel.\nThis channel is created during consumer chain initialization, unless it is provided when creating a new consumer chain (see the ",(0,i.jsx)(n.a,{href:"/interchain-security/v6.1.0/build/modules/consumer#distributiontransmissionchannel",children:"DistributionTransmissionChannel param"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["Providing an IBC transfer channel enables a consumer chain to reuse one of the existing channels to the provider for consumer chain rewards distribution.\nThis will preserve the ",(0,i.jsx)(n.code,{children:"ibc denom"})," that may already be in use.\nThis is especially important for standalone chains transitioning to become consumer chains.\nFor more details, see the ",(0,i.jsx)(n.a,{href:"/interchain-security/v6.1.0/consumer-development/changeover-procedure",children:"changeover procedure"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Once on the provider, the ICS rewards are distributed to the opted in validators and their delegators.\nNote that rewards are ",(0,i.jsx)(n.strong,{children:"only"})," distributed to validators that are opted in and have been validating the consumer chain\nfor a continuous number of epochs (see ",(0,i.jsx)(n.code,{children:"NumberOfEpochsToStartReceivingRewards"})," param)."]}),"\n",(0,i.jsx)(n.p,{children:"To avoid spam, the provider must whitelist denoms before accepting them as ICS rewards."}),"\n",(0,i.jsx)(n.h2,{id:"reward-distribution-with-power-capping",children:"Reward distribution with power capping"}),"\n",(0,i.jsxs)(n.p,{children:["If a consumer chain has set a ",(0,i.jsx)(n.a,{href:"/interchain-security/v6.1.0/features/power-shaping#capping-the-validator-powers",children:"validators-power cap"}),", then the total received\nrewards are distributed proportionally to validators with respect to their capped voting power on the consumer and ",(0,i.jsx)(n.strong,{children:"not"}),"\nwith respect to their voting power on the provider."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, assume that the provider chain has 4 validators, ",(0,i.jsx)(n.code,{children:"A"}),", ",(0,i.jsx)(n.code,{children:"B"}),", ",(0,i.jsx)(n.code,{children:"C"}),", and ",(0,i.jsx)(n.code,{children:"D"})," with voting powers 100, 1, 1, 1 respectively.\nSo, validators ",(0,i.jsx)(n.code,{children:"A"}),", ",(0,i.jsx)(n.code,{children:"B"}),", ",(0,i.jsx)(n.code,{children:"C"}),", and ",(0,i.jsx)(n.code,{children:"D"})," have ~97%, ~1%, ~1%, and ~1% of the total voting power of the provider respectively.\nNow, assume that all those 4 validators opt in on a consumer chain that has set a validators-power cap set to 30%.\nAs a result, validators ",(0,i.jsx)(n.code,{children:"A"}),", ",(0,i.jsx)(n.code,{children:"B"}),", ",(0,i.jsx)(n.code,{children:"C"}),", and ",(0,i.jsx)(n.code,{children:"D"})," have their powers modified (only) on the consumer chain to\n30, 25, 24, and 24 and now have ~29%, ~25%, ~23%, and ~23% of the total voting power of the consumer.\nRoughly speaking, when rewards are sent from the consumer to the provider, validator ",(0,i.jsx)(n.code,{children:"A"})," would get ~29% of the rewards\nbecause it has 29% of the total voting power on the consumer, regardless of ",(0,i.jsx)(n.code,{children:"A"}),"'s 97% of the total power on the provider.\nSimilarly, validator ",(0,i.jsx)(n.code,{children:"B"})," would get 25% of the rewards, etc."]}),"\n",(0,i.jsx)(n.h2,{id:"whitelisting-reward-denoms",children:"Whitelisting Reward Denoms"}),"\n",(0,i.jsxs)(n.p,{children:["The ICS distribution system works by allowing consumer chains to send rewards to a module address on the provider called the ",(0,i.jsx)(n.code,{children:"ConsumerRewardsPool"}),".\nOnly whitelisted denoms from the ",(0,i.jsx)(n.code,{children:"ConsumerRewardsPool"})," are then distributed to validators and their delegators."]}),"\n",(0,i.jsxs)(n.p,{children:["The whitelisted denoms can be adjusted through governance by sending a ",(0,i.jsx)(n.code,{children:"MsgChangeRewardDenoms"})," message.\n",(0,i.jsx)(n.code,{children:"MsgChangeRewardDenoms"})," is used to update the set of denoms accepted by the provider as rewards.\nNote that a ",(0,i.jsx)(n.code,{children:"MsgChangeRewardDenoms"})," is only accepted on the provider chain if at least one of the ",(0,i.jsx)(n.code,{children:"denomsToAdd"})," or ",(0,i.jsx)(n.code,{children:"denomsToRemove"})," fields is populated with at least one denom.\nAlso, a denom cannot be repeated in both sets."]}),"\n",(0,i.jsxs)(n.p,{children:["An example of a ",(0,i.jsx)(n.code,{children:"MsgChangeRewardDenoms"})," message:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n "@type": "/interchain_security.ccv.provider.v1.MsgChangeRewardDenoms",\n "denoms_to_add": [\n  "ibc/42C7464F6415DC7529A8C7581FE0991C7A090D60176BC90998B1DAF75B868635"\n ],\n "denoms_to_remove": [],\n "authority": "cosmos10d07y265gmmuvt4z0w9aw880jnsr700j6zn9kn"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Besides native provider denoms (e.g., ",(0,i.jsx)(n.code,{children:"uatom"})," for the Cosmos Hub), please use the ",(0,i.jsx)(n.code,{children:"ibc/*"})," denom trace format.\nFor example, for ",(0,i.jsx)(n.code,{children:"untrn"})," transferred over the path ",(0,i.jsx)(n.code,{children:"transfer/channel-569"}),", the denom trace can be queried using the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"> gaiad query ibc-transfer denom-hash transfer/channel-569/untrn\nhash: 0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then use the resulting hash when adding or removing denoms. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:' "denoms_to_add": [\n  "ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5"\n ]\n'})}),"\n",(0,i.jsx)(n.p,{children:"To query the list of whitelisted reward denoms on the Cosmos Hub, use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"> gaiad q provider registered-consumer-reward-denoms\ndenoms:\n- ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5\n- ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89\n- uatom\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Use the following command to get a human readable denom from the ",(0,i.jsx)(n.code,{children:"ibc/*"})," denom trace format:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:">  gaiad query ibc-transfer denom-trace ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5\ndenom_trace:\n  base_denom: untrn\n  path: transfer/channel-569\n"})})]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var i=r(67294);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);