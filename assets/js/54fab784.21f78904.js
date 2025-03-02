"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97],{35086:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=i(85893),o=i(11151);const t={sidebar_position:6},r="Changeover Procedure",c={id:"consumer-development/changeover-procedure",title:"Changeover Procedure",description:"Chains that were not initially launched as consumers of Interchain Security can still participate in the protocol and leverage the economic security of the provider chain. The process where a standalone chain transitions to being a consumer chain is called the changeover procedure and is part of the Interchain Security protocol. After the changeover, the new consumer chain will retain all existing state, including the IBC clients, connections and channels already established by the chain.",source:"@site/versioned_docs/version-v4.5.0/consumer-development/changeover-procedure.md",sourceDirName:"consumer-development",slug:"/consumer-development/changeover-procedure",permalink:"/interchain-security/v4.5.0/consumer-development/changeover-procedure",draft:!1,unlisted:!1,tags:[],version:"v4.5.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Offboarding Checklist",permalink:"/interchain-security/v4.5.0/consumer-development/offboarding"},next:{title:"Consumer Genesis Transformation",permalink:"/interchain-security/v4.5.0/consumer-development/consumer-genesis-transformation"}},a={},d=[{value:"Consumers on ICS Version <code>v6.4.0+</code>",id:"consumers-on-ics-version-v640",level:2},{value:"1. Create a new consumer chain on the provider",id:"1-create-a-new-consumer-chain-on-the-provider",level:3},{value:"2. Add consumer module to standalone chain",id:"2-add-consumer-module-to-standalone-chain",level:3},{value:"Consumers on ICS Version <code>&lt; v6.4.0</code>",id:"consumers-on-ics-version--v640",level:2},{value:"Adapt the consumer module genesis state",id:"adapt-the-consumer-module-genesis-state",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"changeover-procedure",children:"Changeover Procedure"}),"\n",(0,s.jsxs)(n.p,{children:["Chains that were ",(0,s.jsx)(n.strong,{children:"not"})," initially launched as consumers of Interchain Security can still participate in the protocol and leverage the economic security of the provider chain. The process where a standalone chain transitions to being a consumer chain is called the ",(0,s.jsx)(n.strong,{children:"changeover procedure"})," and is part of the Interchain Security protocol. After the changeover, the new consumer chain will retain all existing state, including the IBC clients, connections and channels already established by the chain."]}),"\n",(0,s.jsxs)(n.p,{children:["In a nutshell, to become an ICS consumer chain, a standalone chain needs to add the ",(0,s.jsx)(n.code,{children:"x/ccv/consumer"})," module (via a coordinated upgrade) and to transfer validation responsibilities to the provider validators as stated in ",(0,s.jsx)(n.code,{children:"consumer_genesis.json"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The relevant protocol specifications are available below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/overview_and_basic_concepts.md#channel-initialization-existing-chains",children:"ICS-28 with existing chains"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/interchain-security/v4.5.0/adrs/adr-010-standalone-changeover",children:"ADR in ICS repo"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"consumers-on-ics-version-v640",children:["Consumers on ICS Version ",(0,s.jsx)(n.code,{children:"v6.4.0+"})]}),"\n",(0,s.jsxs)(n.p,{children:["For chains that are using ICS ",(0,s.jsx)(n.code,{children:"v6.4.0"})," or newer, the standalone to consumer changeover consists of the following steps."]}),"\n",(0,s.jsx)(n.h3,{id:"1-create-a-new-consumer-chain-on-the-provider",children:"1. Create a new consumer chain on the provider"}),"\n",(0,s.jsxs)(n.p,{children:["Submit a ",(0,s.jsx)(n.code,{children:"MsgCreateConsumer"}),' message to the provider chain. This is a "normal" ',(0,s.jsx)(n.a,{href:"/interchain-security/v4.5.0/build/modules/provider#msgcreateconsumer",children:"MsgCreateConsumer message"})," as described in the ",(0,s.jsx)(n.a,{href:"/interchain-security/v4.5.0/consumer-development/onboarding",children:"onboarding checklist"}),", but with the following important notes."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"chain_id"})," ",(0,s.jsx)(n.strong,{children:"MUST"})," be equal to the standalone chain id."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The consumer initialization parameters (i.e., ",(0,s.jsx)(n.code,{children:"initialization_parameters"}),") must be adapted for the changeover procedure:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initial_height"})," is not used as the provider uses an existing client of the standalone chain.."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spawn_time"})," is the time on the provider when the consumer module genesis state is being generated,\nwhich means that at this time the provide creates the initial validator set that will validate the standalone chain once it becomes a consumer chain.\nConsequently, ",(0,s.jsx)(n.code,{children:"spawn_time"})," ",(0,s.jsx)(n.strong,{children:"MUST"})," occur before the standalone chain is upgraded and the consumer module is added as the upgrade requires the consumer module genesis state."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"unbonding_period"})," ",(0,s.jsx)(n.strong,{children:"MUST"})," correspond to the value used on the standalone chain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"distribution_transmission_channel"})," ",(0,s.jsx)(n.strong,{children:"SHOULD"})," be set to the canonical IBC token transfer channel between the provider and the standalone chain. This will preserve the ",(0,s.jsx)(n.code,{children:"ibc denom"})," that may already be in use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"connection_id"})," ",(0,s.jsx)(n.strong,{children:"MUST"})," be set to the ID of the connection end on the provider chain on top of which the canonical IBC token transfer channel was created."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-add-consumer-module-to-standalone-chain",children:"2. Add consumer module to standalone chain"}),"\n",(0,s.jsxs)(n.p,{children:["The standalone chain ",(0,s.jsx)(n.strong,{children:"MUST"})," go through an upgrade to include the ",(0,s.jsx)(n.code,{children:"x/ccv/consumer"})," module.\nNote that adding the ",(0,s.jsx)(n.code,{children:"x/ccv/consumer"})," module requires the consumer module genesis state which is created by the provider at ",(0,s.jsx)(n.code,{children:"spawn_time"}),".\nConsequently, the ",(0,s.jsx)(n.code,{children:"spawn_time"})," ",(0,s.jsx)(n.strong,{children:"MUST"})," occur before this upgrade."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the consumer module genesis state can be obtained from the provider using the ",(0,s.jsx)(n.a,{href:"/interchain-security/v4.5.0/build/modules/provider#consumer-genesis",children:"consumer genesis query"}),", i.e.,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"interchain-security-pd query provider consumer-genesis [consumer-id] [flags]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The consumer genesis state must be exported to a file and placed in the correct folder on the standalone chain before the upgrade.\nThe file must be placed at the exact specified location, otherwise the upgrade will not be executed correctly.\nUsually the file is placed in ",(0,s.jsx)(n.code,{children:"$NODE_HOME/config"}),", but the file name and the exact directory is dictated by the upgrade code on the ",(0,s.jsx)(n.code,{children:"standalone"})," chain."]}),"\n",(0,s.jsxs)(n.p,{children:["After the ",(0,s.jsx)(n.code,{children:"consumer_genesis.json"})," file has been made available, the process is equivalent to a normal on-chain upgrade. The standalone validator set will sign the next couple of blocks before transferring control to the initial ICS validator set."]}),"\n",(0,s.jsxs)(n.p,{children:["Once upgraded, the ",(0,s.jsx)(n.code,{children:"x/ccv/consumer"}),' module will act as the "staking module" for the consumer chain, i.e., it will provide the validator set to the consensus engine. For staking a native token (e.g., for governance), the ',(0,s.jsx)(n.code,{children:"x/ccv/democracy/staking"})," module allows the cosmos-sdk ",(0,s.jsx)(n.code,{children:"x/staking"})," module to be used alongside the ",(0,s.jsx)(n.code,{children:"x/ccv/consumer"})," module. For more details, check out the ",(0,s.jsx)(n.a,{href:"/interchain-security/v4.5.0/build/modules/democracy",children:"democracy modules"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"consumers-on-ics-version--v640",children:["Consumers on ICS Version ",(0,s.jsx)(n.code,{children:"< v6.4.0"})]}),"\n",(0,s.jsxs)(n.p,{children:["Chains that are using older version of ICS (i.e., ",(0,s.jsx)(n.code,{children:"< v6.4.0"}),'), must "force" the provider to create a new client of the standalone chain (on top of which the CCV channel will be created).\nThis is because older versions of the consumer module expects both a client state and a consensus state in order to create a new provider client.\nTherefore, when creating a new consumer chain on the provider, the following changes are necessary in the consumer initialization parameters:']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"connection_id"})," ",(0,s.jsx)(n.strong,{children:"MUST"})," be set to an empty string (i.e., ",(0,s.jsx)(n.code,{children:'""'}),"). As a result, the provider will create a new client of the consumer chain and a new connection on top of it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initial_height"})," will be used by the provider when creating the new consumer client, so it ",(0,s.jsx)(n.strong,{children:"MUST"})," be set according to the following rules:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"initial_height" : {\n    // must correspond to current revision number of standalone chain\n    // e.g. stride-1 => "revision_number": 1\n    "revision_number": 1,\n\n    // must correspond to a height that is at least 1 block after the upgrade\n    // that will add the `consumer` module to the standalone chain\n    // e.g. "upgrade_height": 100 => "revision_height": 101\n    "revision_height": 101,\n},\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"adapt-the-consumer-module-genesis-state",children:"Adapt the consumer module genesis state"}),"\n",(0,s.jsxs)(n.p,{children:["Before the upgrade of the standalone chain (i.e., adding the ",(0,s.jsx)(n.code,{children:"x/ccv/consumer"})," module), the consumer module genesis state created by the provider at ",(0,s.jsx)(n.code,{children:"spawn_time"})," must be adapted to older versions of the consumer module. This consists of two changes."]}),"\n",(0,s.jsxs)(n.p,{children:["First, by setting ",(0,s.jsx)(n.code,{children:"connection_id"})," in the consumer initialization parameters to an empty string, the provider will set the ",(0,s.jsx)(n.code,{children:"preCCV"})," flag in the ",(0,s.jsx)(n.code,{children:"ConsumerGenesisState"})," struct to ",(0,s.jsx)(n.code,{children:"false"}),". This must be changed to ",(0,s.jsx)(n.code,{children:"true"})," in order to trigger the changeover procedure logic on the ",(0,s.jsx)(n.code,{children:"x/ccv/consumer"})," module."]}),"\n",(0,s.jsxs)(n.p,{children:["Second, the ",(0,s.jsx)(n.code,{children:"connection_id"})," field of ",(0,s.jsx)(n.code,{children:"ConsumerGenesisState"})," must be removed to enable older versions of the consumer module to unmarshal the consumer module genesis state obtained from the provider. This can be done using the ",(0,s.jsx)(n.code,{children:"interchain-security-cd genesis transform"})," CLI command."]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(67294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);