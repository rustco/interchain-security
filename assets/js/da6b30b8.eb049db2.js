"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1594],{98351:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=r(85893),t=r(11151);const o={sidebar_position:7},s="Consumer Genesis Transformation",a={id:"consumer-development/consumer-genesis-transformation",title:"Consumer Genesis Transformation",description:"Preparing a consumer chain for onboarding requires some information explaining how to run your chain. This includes a genesis file with CCV data where the CCV data is exported from the provider chain and added to the consumers genesis file (for more details check the documentation on Onboarding and Changeover).",source:"@site/versioned_docs/version-v4.5.0/consumer-development/consumer-genesis-transformation.md",sourceDirName:"consumer-development",slug:"/consumer-development/consumer-genesis-transformation",permalink:"/interchain-security/v4.5.0/consumer-development/consumer-genesis-transformation",draft:!1,unlisted:!1,tags:[],version:"v4.5.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Changeover Procedure",permalink:"/interchain-security/v4.5.0/consumer-development/changeover-procedure"},next:{title:"Overview",permalink:"/interchain-security/v4.5.0/validators/overview"}},c={},d=[{value:"1. Prerequisite",id:"1-prerequisite",level:2},{value:"2. Export the CCV data",id:"2-export-the-ccv-data",level:2},{value:"3. Transform CCV data",id:"3-transform-ccv-data",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"consumer-genesis-transformation",children:"Consumer Genesis Transformation"}),"\n",(0,i.jsxs)(n.p,{children:["Preparing a consumer chain for onboarding requires some information explaining how to run your chain. This includes a genesis file with CCV data where the CCV data is exported from the provider chain and added to the consumers genesis file (for more details check the documentation on ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.5.0/consumer-development/onboarding",children:"Onboarding"})," and ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.5.0/consumer-development/changeover-procedure",children:"Changeover"}),").\nIn case that the provider chain is running an older version of the InterChainSecurity (ICS) module than the consumer chain - or vice versa - the exported CCV data might need to be transformed to the format supported by the ICS implementation run on the consumer chain. This is the case if the consumer chain runs version 4 of ICS or later and the provider is running version 3 or older of the ICS module."]}),"\n",(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/blob/main/RELEASES.md#backwards-compatibility",children:"compatibility notes"})," for known incompatibilities between provider and consumer versions and indications if a consumer genesis transformation is required."]}),"\n",(0,i.jsx)(n.p,{children:"To transform such CCV data follow the instructions below"}),"\n",(0,i.jsx)(n.h2,{id:"1-prerequisite",children:"1. Prerequisite"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["used provider and consumer versions require transformation step as indicated in in the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/blob/main/RELEASES.md#backwards-compatibility",children:"compatibility notes"})]}),"\n",(0,i.jsx)(n.li,{children:"interchain-security-cd application supports the versions used by the consumer and provider"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-export-the-ccv-data",children:"2. Export the CCV data"}),"\n",(0,i.jsxs)(n.p,{children:["Export the CCV data from the provider chain as described in the ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.5.0/consumer-development/onboarding",children:"Onboarding"})," and ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.5.0/consumer-development/changeover-procedure",children:"Changeover"})," your following.\nAs a result the CCV data will be stored in a file in JSON format."]}),"\n",(0,i.jsx)(n.h2,{id:"3-transform-ccv-data",children:"3. Transform CCV data"}),"\n",(0,i.jsx)(n.p,{children:"To transform the CCV data"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["to the format supported by the current version of the consumer run the following command:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"interchain-security-cd genesis transform [genesis-file]\n"})}),"\n","where 'genesis-file' is the path to the file containing the CCV data exported in ",(0,i.jsx)(n.a,{href:"#2-export-the-ccv-data",children:"step 2"}),".\nAs a result the CCV data in the new format will be written to standard output."]}),"\n",(0,i.jsxs)(n.li,{children:["a specific target version of a consumer run the following command:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"interchain-security-cd genesis transform --to <target_version> [genesis-file]\n\n"})}),"\n","where ",(0,i.jsx)(n.code,{children:"<target_version"})," is the ICS version the consumer chain is running.\nUse ",(0,i.jsx)(n.code,{children:"interchain-security-cd genesis transform --help"})," to get more details about supported target versions and more."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Use the new CCV data as described in the procedure you're following."})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var i=r(67294);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);