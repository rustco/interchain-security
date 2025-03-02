"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9625],{96582:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(85893),t=a(11151);const s={sidebar_position:4},o="Validator Instructions for Changeover Procedure",r={id:"validators/changeover-procedure",title:"Validator Instructions for Changeover Procedure",description:"More details available in Changeover Procedure documentation.",source:"@site/versioned_docs/version-v5.2.0/validators/changeover-procedure.md",sourceDirName:"validators",slug:"/validators/changeover-procedure",permalink:"/interchain-security/v5.2.0/validators/changeover-procedure",draft:!1,unlisted:!1,tags:[],version:"v5.2.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Consumer chain validator rewards",permalink:"/interchain-security/v5.2.0/validators/withdraw_rewards"},next:{title:"Joining Neutron",permalink:"/interchain-security/v5.2.0/validators/joining-neutron"}},d={},c=[{value:"Timeline",id:"timeline",level:2},{value:"1. <code>ConsumerAdditionProposal</code> on provider chain",id:"1-consumeradditionproposal-on-provider-chain",level:3},{value:"2. <code>SoftwareUpgradeProposal</code> on the standalone/consumer chain",id:"2-softwareupgradeproposal-on-the-standaloneconsumer-chain",level:3},{value:"3. Assigning a consumer key",id:"3-assigning-a-consumer-key",level:3},{value:"4. Perform the software upgrade on standalone chain",id:"4-perform-the-software-upgrade-on-standalone-chain",level:3},{value:"FAQ",id:"faq",level:2},{value:"Can I reuse the same validator key for the <code>consumer</code> chain that I am already using on the <code>standalone</code> chain? Will I need to perform a <code>AssignConsumerKey</code> tx with this key before spawn time?",id:"can-i-reuse-the-same-validator-key-for-the-consumer-chain-that-i-am-already-using-on-the-standalone-chain-will-i-need-to-perform-a-assignconsumerkey-tx-with-this-key-before-spawn-time",level:3},{value:"Can I continue using the same node that was validating the <code>standalone</code> chain?",id:"can-i-continue-using-the-same-node-that-was-validating-the-standalone-chain",level:3},{value:"Can I set up a new node to validate the <code>standalone/consumer</code> chain after it transitions to Interchain Security?",id:"can-i-set-up-a-new-node-to-validate-the-standaloneconsumer-chain-after-it-transitions-to-interchain-security",level:3},{value:"What happens to the <code>standalone</code> validator set after it transitions to Interchain Security?",id:"what-happens-to-the-standalone-validator-set-after-it-transitions-to-interchain-security",level:3},{value:"Credits",id:"credits",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"validator-instructions-for-changeover-procedure",children:"Validator Instructions for Changeover Procedure"}),"\n",(0,i.jsxs)(n.p,{children:["More details available in ",(0,i.jsx)(n.a,{href:"/interchain-security/v5.2.0/consumer-development/changeover-procedure",children:"Changeover Procedure documentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A major difference between launching a new consumer chain vs. onboarding a standalone chain to ICS is that there is no consumer genesis available for the standalone chain. Since a standalone chain already exists, its state must be preserved once it transitions to being a consumer chain."}),"\n",(0,i.jsx)(n.h2,{id:"timeline",children:"Timeline"}),"\n",(0,i.jsxs)(n.p,{children:["Upgrading standalone chains can be best visualised using a timeline, such as the one available ",(0,i.jsx)(n.a,{href:"https://app.excalidraw.com/l/9UFOCMAZLAI/5EVLj0WJcwt",children:"Excalidraw graphic by Stride"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"There is some flexibility with regards to how the changeover procedure is executed, so please make sure to follow the guides provided by the team doing the changeover."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Standalone to consumer transition timeline",src:a(27509).Z+"",width:"5307",height:"2157"})}),"\n",(0,i.jsxs)(n.h3,{id:"1-consumeradditionproposal-on-provider-chain",children:["1. ",(0,i.jsx)(n.code,{children:"ConsumerAdditionProposal"})," on provider chain"]}),"\n",(0,i.jsxs)(n.p,{children:["This step will add the standalone chain to the list of consumer chains secured by the provider.\nThis step dictates the ",(0,i.jsx)(n.code,{children:"spawn_time"}),". After ",(0,i.jsx)(n.code,{children:"spawn_time"})," the CCV state (initial validator set of the provider) will be available to the consumer."]}),"\n",(0,i.jsx)(n.p,{children:"To obtain it from the provider use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gaiad q provider consumer-genesis stride-1 -o json > ccv-state.json\njq -s '.[0].app_state.ccvconsumer = .[1] | .[0]' genesis.json ccv-state.json > ccv.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Transformation of the exported consumer genesis state to the target version of the consumer might be needed in case the provider and consumer formats are incompatible.\nRefer to the compatibility notes ",(0,i.jsx)(n.a,{href:"../../../RELEASES.md#backwards-compatibility",children:"here"})," to check if data transformation is needed for your case.\nInstructions on how to transform the exported CCV genesis state (",(0,i.jsx)(n.code,{children:"ccv-state.json"})," in the example above) to the required target version can be found ",(0,i.jsx)(n.a,{href:"/interchain-security/v5.2.0/consumer-development/consumer-genesis-transformation",children:"here"})]}),"\n",(0,i.jsxs)(n.h3,{id:"2-softwareupgradeproposal-on-the-standaloneconsumer-chain",children:["2. ",(0,i.jsx)(n.code,{children:"SoftwareUpgradeProposal"})," on the standalone/consumer chain"]}),"\n",(0,i.jsx)(n.p,{children:"This upgrade proposal will introduce ICS to the standalone chain, making it a consumer."}),"\n",(0,i.jsx)(n.h3,{id:"3-assigning-a-consumer-key",children:"3. Assigning a consumer key"}),"\n",(0,i.jsxs)(n.p,{children:["After ",(0,i.jsx)(n.code,{children:"spawn_time"}),", make sure to assign a consumer key if you intend to use one."]}),"\n",(0,i.jsxs)(n.p,{children:["Instructions are available ",(0,i.jsx)(n.a,{href:"/interchain-security/v5.2.0/features/key-assignment",children:"here"})]}),"\n",(0,i.jsx)(n.h3,{id:"4-perform-the-software-upgrade-on-standalone-chain",children:"4. Perform the software upgrade on standalone chain"}),"\n",(0,i.jsx)(n.p,{children:"Please use instructions provided by the standalone chain team and make sure to reach out if you are facing issues.\nThe upgrade preparation depends on your setup, so please make sure you prepare ahead of time."}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ccv.json"})," from step 1. must be made available on the machine running the standalone/consumer chain at standalone chain ",(0,i.jsx)(n.code,{children:"upgrade_height"}),". This file contains the initial validator set and parameters required for normal ICS operation."]}),(0,i.jsxs)(n.p,{children:["Usually, the file is placed in ",(0,i.jsx)(n.code,{children:"$NODE_HOME/config"})," but this is not a strict requirement. The exact details are available in the upgrade code of the standalone/consumer chain."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Performing this upgrade will transition the standalone chain to be a consumer chain."})}),"\n",(0,i.jsxs)(n.p,{children:['After 3 blocks, the standalone chain will stop using the "old" validator set and begin using the ',(0,i.jsx)(n.code,{children:"provider"})," validator set."]}),"\n",(0,i.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(n.h3,{id:"can-i-reuse-the-same-validator-key-for-the-consumer-chain-that-i-am-already-using-on-the-standalone-chain-will-i-need-to-perform-a-assignconsumerkey-tx-with-this-key-before-spawn-time",children:["Can I reuse the same validator key for the ",(0,i.jsx)(n.code,{children:"consumer"})," chain that I am already using on the ",(0,i.jsx)(n.code,{children:"standalone"})," chain? Will I need to perform a ",(0,i.jsx)(n.code,{children:"AssignConsumerKey"})," tx with this key before spawn time?"]}),"\n",(0,i.jsxs)(n.p,{children:["Validators must either assign a key or use the same key as on the ",(0,i.jsx)(n.code,{children:"provider"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are validating both the ",(0,i.jsx)(n.code,{children:"standalone"})," and the ",(0,i.jsx)(n.code,{children:"provider"}),", you ",(0,i.jsx)(n.strong,{children:"can"})," use your current ",(0,i.jsx)(n.code,{children:"standalone"})," key with some caveats:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["you must submit an ",(0,i.jsx)(n.code,{children:"AssignConsumerKey"})," tx with your current ",(0,i.jsx)(n.code,{children:"standalone"})," validator key"]}),"\n",(0,i.jsxs)(n.li,{children:["it is best to submit ",(0,i.jsx)(n.code,{children:"AssignConsumerKey"})," tx before ",(0,i.jsx)(n.code,{children:"spawn_time"})]}),"\n",(0,i.jsxs)(n.li,{children:["if you do not submit the Tx, it is assumed that you will be re-using your ",(0,i.jsx)(n.code,{children:"provider"})," key to validate the ",(0,i.jsx)(n.code,{children:"standalone/consumer"})," chain"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"can-i-continue-using-the-same-node-that-was-validating-the-standalone-chain",children:["Can I continue using the same node that was validating the ",(0,i.jsx)(n.code,{children:"standalone"})," chain?"]}),"\n",(0,i.jsx)(n.p,{children:"Yes."}),"\n",(0,i.jsx)(n.p,{children:"Please assign your consensus key as stated above."}),"\n",(0,i.jsxs)(n.h3,{id:"can-i-set-up-a-new-node-to-validate-the-standaloneconsumer-chain-after-it-transitions-to-interchain-security",children:["Can I set up a new node to validate the ",(0,i.jsx)(n.code,{children:"standalone/consumer"})," chain after it transitions to Interchain Security?"]}),"\n",(0,i.jsx)(n.p,{children:"Yes."}),"\n",(0,i.jsxs)(n.p,{children:["If you are planning to do this please make sure that the node is synced with ",(0,i.jsx)(n.code,{children:"standalone"})," network and to submit ",(0,i.jsx)(n.code,{children:"AssignConsumerKey"})," tx before ",(0,i.jsx)(n.code,{children:"spawn_time"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"what-happens-to-the-standalone-validator-set-after-it-transitions-to-interchain-security",children:["What happens to the ",(0,i.jsx)(n.code,{children:"standalone"})," validator set after it transitions to Interchain Security?"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"standalone"})," chain validators will stop being validators after the first 3 blocks are created while using Interchain Security. The ",(0,i.jsx)(n.code,{children:"standalone"})," validators will become ",(0,i.jsx)(n.strong,{children:"governors"})," and still can receive delegations if the ",(0,i.jsx)(n.code,{children:"consumer"})," chain is using the ",(0,i.jsx)(n.code,{children:"consumer-democracy"})," module."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Governors DO NOT VALIDATE BLOCKS"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Instead, they can participate in the governance process and take on other chain-specific roles."}),"\n",(0,i.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,i.jsx)(n.p,{children:"Thank you Stride team for providing detailed instructions about the changeover procedure."})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},27509:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/ics_changeover_timeline_stride-9bcad1834fef24a0fea7f2c80c9ccd71.png"},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>o});var i=a(67294);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);