"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7485],{21846:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=o(85893),i=o(11151);const s={sidebar_position:10,title:"Soft Opt-Out"},a=void 0,r={id:"adrs/adr-009-soft-opt-out",title:"Soft Opt-Out",description:"ADR 009: Soft Opt-Out",source:"@site/versioned_docs/version-v5.2.0/adrs/adr-009-soft-opt-out.md",sourceDirName:"adrs",slug:"/adrs/adr-009-soft-opt-out",permalink:"/interchain-security/v5.2.0/adrs/adr-009-soft-opt-out",draft:!1,unlisted:!1,tags:[],version:"v5.2.0",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Soft Opt-Out"},sidebar:"tutorialSidebar",previous:{title:"Throttle with retries",permalink:"/interchain-security/v5.2.0/adrs/adr-008-throttle-retries"},next:{title:"Standalone to Consumer Changeover",permalink:"/interchain-security/v5.2.0/adrs/adr-010-standalone-changeover"}},l={},d=[{value:"ADR 009: Soft Opt-Out",id:"adr-009-soft-opt-out",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"adr-009-soft-opt-out",children:"ADR 009: Soft Opt-Out"}),"\n",(0,n.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"6/13/23: Initial draft of ADR. Feature already implemented and in production."}),"\n",(0,n.jsx)(t.li,{children:"6/19/24: Change status to deprecated"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,n.jsxs)(t.p,{children:["Deprecated\nDeprecated by ",(0,n.jsx)(t.a,{href:"/interchain-security/v5.2.0/adrs/adr-015-partial-set-security",children:"Partial Set Security"})]}),"\n",(0,n.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,n.jsxs)(t.p,{children:["Some small validators may not have the resources needed to validate all consumer chains. Therefore a need exists to allow the bottom ",(0,n.jsx)(t.code,{children:"x%"})," of validators to opt-out of validating a consumer chain. Meaning downtime infractions for these validators are dropped without ever reaching the provider."]}),"\n",(0,n.jsx)(t.p,{children:"This document specifies a modification to the ccv protocol which allows the bottom x% of the validator set by power to opt out of validating consumer chains without being jailed or otherwise punished for it. The feature is implemented with entirely consumer-side code."}),"\n",(0,n.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,n.jsxs)(t.p,{children:["A consumer param exists, known as ",(0,n.jsx)(t.code,{children:"SoftOptOutThreshold"}),", which is a string decimal in the range of [0, 0.2], that determines the portion of validators which are allowed to opt out of validating that specific consumer."]}),"\n",(0,n.jsxs)(t.p,{children:["In every consumer beginblocker, a function is ran which determines the so called  ",(0,n.jsx)(t.em,{children:"smallest non opt-out voting power"}),". Validators with voting power greater than or equal to this value must validate the consumer chain, while validators below this value may opt out of validating the consumer chain."]}),"\n",(0,n.jsxs)(t.p,{children:["The smallest non opt-out voting power is recomputed every beginblocker in ",(0,n.jsx)(t.code,{children:"UpdateSmallestNonOptOutPower()"}),". In a nutshell, the method obtains the total voting power of the consumer, iterates through the full valset (ordered power ascending) keeping track of a power sum, and when ",(0,n.jsx)(t.code,{children:"powerSum / totalPower > SoftOptOutThreshold"}),", the ",(0,n.jsx)(t.code,{children:"SmallestNonOptOutPower"})," is found and persisted."]}),"\n",(0,n.jsxs)(t.p,{children:["Then, whenever the ",(0,n.jsx)(t.code,{children:"Slash()"})," interface is executed on the consumer, if the voting power of the relevant validator being slashed is less than ",(0,n.jsx)(t.code,{children:"SmallestNonOptOutPower"})," for that block, the slash request is dropped and never sent to the provider."]}),"\n",(0,n.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,n.jsx)(t.h3,{id:"positive",children:"Positive"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Small validators can opt out of validating specific consumers without being punished for it."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"negative",children:"Negative"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The bottom ",(0,n.jsx)(t.code,{children:"x%"})," is still part of the total voting power of the consumer chain. This means that if the soft opt-out threshold is set to ",(0,n.jsx)(t.code,{children:"10%"})," for example, and every validator in the bottom ",(0,n.jsx)(t.code,{children:"10%"})," opts out from validating the consumer, then a ",(0,n.jsx)(t.code,{children:"24%"})," downtime of the remaining voting power would halt the chain. This may be especially problematic during consumer upgrades."]}),"\n",(0,n.jsxs)(t.li,{children:["In nominal scenarios, consumers with soft opt out enabled will be constructing slash packets for small vals, which may be dropped. This is wasted computation, but necessary to keep implementation simple. Note that the sdk's ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/d3f09c222243bb3da3464969f0366330dcb977a8/x/slashing/keeper/infractions.go#L75",children:"full downtime logic"})," is always executed on the consumer, which can be computationally expensive and slow down certain blocks."]}),"\n",(0,n.jsx)(t.li,{children:"In a consumer chain, when a validator that has opted out becomes the proposer, there will naturally be no proposal made and validators would need to move to the next consensus round for the same height to reach a decision. As a result, we would need more time to finalize blocks on a consumer chain."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"neutral",children:"Neutral"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Validators in the bottom of the valset who don't have to validate, may receive large delegation(s) which suddenly boost the validator to the subset that has to validate. This may catch the validator off guard."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Original issue with some napkin math ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/interchain-security/issues/784",children:"#784"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var n=o(67294);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);