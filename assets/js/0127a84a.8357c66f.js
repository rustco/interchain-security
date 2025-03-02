"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9657],{43114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(85893),r=t(11151);const o={sidebar_position:4},s="x/ccv/democracy",i={id:"build/modules/democracy",title:"x/ccv/democracy",description:"The democracy modules comprise x/ccv/democracy/staking and x/ccv/democracy/distribution with overrides and extensions required for normal operation when participating in ICS.",source:"@site/versioned_docs/version-v5.2.0/build/modules/04-democracy.md",sourceDirName:"build/modules",slug:"/build/modules/democracy",permalink:"/interchain-security/v5.2.0/build/modules/democracy",draft:!1,unlisted:!1,tags:[],version:"v5.2.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"x/ccv/consumer",permalink:"/interchain-security/v5.2.0/build/modules/consumer"},next:{title:"Create an ICS chain with Spawn",permalink:"/interchain-security/v5.2.0/consumer-development/create-with-spawn"}},c={},d=[{value:"Staking",id:"staking",level:2},{value:"Implications for consumer chains",id:"implications-for-consumer-chains",level:3},{value:"Governators (aka. Governors)",id:"governators-aka-governors",level:4},{value:"Tokenomics",id:"tokenomics",level:4},{value:"Integration",id:"integration",level:3},{value:"1. confirm that no modules are returning validator updates",id:"1-confirm-that-no-modules-are-returning-validator-updates",level:4},{value:"2. wire the module in app.go",id:"2-wire-the-module-in-appgo",level:4},{value:"Distribution",id:"distribution",level:2},{value:"How it works",id:"how-it-works",level:3},{value:"Integration",id:"integration-1",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"xccvdemocracy",children:"x/ccv/democracy"}),"\n",(0,a.jsxs)(n.p,{children:["The democracy modules comprise ",(0,a.jsx)(n.code,{children:"x/ccv/democracy/staking"})," and ",(0,a.jsx)(n.code,{children:"x/ccv/democracy/distribution"})," with overrides and extensions required for normal operation when participating in ICS."]}),"\n",(0,a.jsx)(n.p,{children:"The modules are plug-and-play and only require small wiring changes to be enabled."}),"\n",(0,a.jsxs)(n.p,{children:["For a full integration check the ",(0,a.jsx)(n.code,{children:"consumer-democracy"})," ",(0,a.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/blob/main/app/consumer-democracy/app.go",children:"example app"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"staking",children:"Staking"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"x/ccv/democracy/staking"})," module allows the cosmos-sdk ",(0,a.jsx)(n.code,{children:"x/staking"})," module to be used alongside the interchain security ",(0,a.jsx)(n.code,{children:"consumer"})," module."]}),"\n",(0,a.jsxs)(n.p,{children:["The module uses overrides that allow the full ",(0,a.jsx)(n.code,{children:"x/staking"})," functionality with one notable difference - the staking module will no longer be used to provide the validator set to the consensus engine."]}),"\n",(0,a.jsx)(n.h3,{id:"implications-for-consumer-chains",children:"Implications for consumer chains"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"x/ccv/democracy/staking"})," allows consumer chains to ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"separate governance from block production"})}),".\nThe validator set coming from the provider chain does not need to participate in governance - they only provide infrastructure (create blocks and maintain consensus)."]}),"\n",(0,a.jsx)(n.h4,{id:"governators-aka-governors",children:"Governators (aka. Governors)"}),"\n",(0,a.jsxs)(n.p,{children:["Validators registered with the ",(0,a.jsx)(n.code,{children:"x/ccv/democracy/staking"})," module become ",(0,a.jsx)(n.strong,{children:"Governators"}),".\nUnlike validators, governators are not required to run any chain infrastructure since they are not signing any blocks.\nHowever, governators retain a subset of the validator properties:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["new governators can be created (via ",(0,a.jsx)(n.code,{children:"MsgCreateValidator"}),")"]}),"\n",(0,a.jsx)(n.li,{children:"governators can accept delegations"}),"\n",(0,a.jsx)(n.li,{children:"governators can vote on governance proposals (with their self stake and delegations)"}),"\n",(0,a.jsxs)(n.li,{children:["governators earn block rewards -- the block rewards kept on the consumer (see the ",(0,a.jsx)(n.a,{href:"/interchain-security/v5.2.0/build/modules/consumer#consumerredistributionfraction",children:"ConsumerRedistributionFraction param"}),") are distributed to all governators and their delegators."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"With these changes, governators can become community advocates that can specialize in chain governance and they get rewarded for their participation the same way the validators do.\nAdditionally, governators can choose to provide additional infrastructure such as RPC/API access points, archive nodes, indexers and similar software."}),"\n",(0,a.jsx)(n.h4,{id:"tokenomics",children:"Tokenomics"}),"\n",(0,a.jsx)(n.p,{children:"The consumer chain's token will remain a governance token. The token's parameters (inflation, max supply, burn rate) are completely under the control of the consumer chain."}),"\n",(0,a.jsx)(n.h3,{id:"integration",children:"Integration"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"x/ccv/democracy/staking"})," module provides these ",(0,a.jsx)(n.code,{children:"x/staking"})," overrides:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-golang",children:"\n// InitGenesis delegates the InitGenesis call to the underlying x/staking module,\n// however, it returns no validator updates as validators are tracked via the\n// consumer chain's x/cvv/consumer module and so this module is not responsible for returning the initial validator set.\nfunc (am AppModule) InitGenesis(ctx sdk.Context, cdc codec.JSONCodec, data json.RawMessage) []abci.ValidatorUpdate {\n    var genesisState types.GenesisState\n\n    cdc.MustUnmarshalJSON(data, &genesisState)\n    _ = am.keeper.InitGenesis(ctx, &genesisState)  // run staking InitGenesis\n\n    return []abci.ValidatorUpdate{}  // do not return validator updates\n}\n\n// EndBlock delegates the EndBlock call to the underlying x/staking module.\n// However, no validator updates are returned as validators are tracked via the\n// consumer chain's x/cvv/consumer module.\nfunc (am AppModule) EndBlock(ctx sdk.Context, _ abci.RequestEndBlock) []abci.ValidatorUpdate {\n    _ = am.keeper.BlockValidatorUpdates(ctx)  // perform staking BlockValidatorUpdates\n    return []abci.ValidatorUpdate{}  // do not return validator updates\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To integrate the ",(0,a.jsx)(n.code,{children:"democracy/staking"})," follow this guide:"]}),"\n",(0,a.jsx)(n.h4,{id:"1-confirm-that-no-modules-are-returning-validator-updates",children:"1. confirm that no modules are returning validator updates"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Only the ",(0,a.jsx)(n.code,{children:"x/ccv/consumer"})," module should be returning validator updates."]})}),"\n",(0,a.jsx)(n.p,{children:"If some of your modules are returning validator updates please disable them while maintaining your business logic:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"func (am AppModule) InitGenesis(ctx sdk.Context, cdc codec.JSONCodec, data json.RawMessage) []abci.ValidatorUpdate {\n    var genesisState types.GenesisState\n\n    cdc.MustUnmarshalJSON(data, &genesisState)\n-\treturn am.keeper.InitGenesis(ctx, &genesisState)\n+ \t_ = am.keeper.InitGenesis(ctx, &genesisState)  // run InitGenesis but drop the result\n+\treturn []abci.ValidatorUpdate{}  // return empty validator updates\n}\n\n\nfunc (am AppModule) EndBlock(ctx sdk.Context, _ abci.RequestEndBlock) []abci.ValidatorUpdate {\n-\treturn am.keeper.BlockValidatorUpdates(ctx)\n+ \t_ = am.keeper.BlockValidatorUpdates(ctx)  // perform staking BlockValidatorUpdates\n+\treturn []abci.ValidatorUpdate{}  // return empty validator updates\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"2-wire-the-module-in-appgo",children:"2. wire the module in app.go"}),"\n",(0,a.jsxs)(n.p,{children:["You ",(0,a.jsx)(n.strong,{children:"do not need to remove"})," the cosmos-sdk ",(0,a.jsx)(n.code,{children:"StakingKeeper"})," from your wiring."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'import (\n    ...\n+   ccvstaking "github.com/cosmos/interchain-security/v4/x/ccv/democracy/staking"\n)\n\nvar (\n    // replace the staking.AppModuleBasic\n    ModuleBasics = module.NewBasicManager(\n        auth.AppModuleBasic{},\n        genutil.NewAppModuleBasic(genutiltypes.DefaultMessageValidator),\n        bank.AppModuleBasic{},\n        capability.AppModuleBasic{},\n-\t\tsdkstaking.AppModuleBasic{},\n+\t\tccvstaking.AppModuleBasic{},  // replace sdkstaking\n        ...\n    )\n)\n\n\nfunc NewApp(...) {\n    ...\n\n    // use sdk StakingKeepeer\n    app.StakingKeeper = stakingkeeper.NewKeeper(\n        appCodec,\n        keys[stakingtypes.StoreKey],\n        app.AccountKeeper,\n        app.BankKeeper,\n        authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    )\n\n    app.MintKeeper = mintkeeper.NewKeeper(\n        appCodec,\n        keys[minttypes.StoreKey],\n        app.StakingKeeper,\n        app.AccountKeeper,\n        app.BankKeeper,\n        authtypes.FeeCollectorName,\n        authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    )\n\n    // no changes required for the distribution keeper\n    app.DistrKeeper = distrkeeper.NewKeeper(\n        appCodec,\n        keys[distrtypes.StoreKey],\n        app.AccountKeeper,\n        app.BankKeeper,\n        app.StakingKeeper,  // keep StakingKeeper!\n        authtypes.FeeCollectorName,\n        authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    )\n\n+   // pre-initialize ConsumerKeeper to satsfy ibckeeper.NewKeeper\n+\tapp.ConsumerKeeper = consumerkeeper.NewNonZeroKeeper(\n+\t\tappCodec,\n+\t\tkeys[consumertypes.StoreKey],\n+\t\tapp.GetSubspace(consumertypes.ModuleName),\n+\t)\n+\n+\tapp.IBCKeeper = ibckeeper.NewKeeper(\n+\t\tappCodec,\n+\t\tkeys[ibchost.StoreKey],\n+\t\tapp.GetSubspace(ibchost.ModuleName),\n+\t\t&app.ConsumerKeeper,\n+\t\tapp.UpgradeKeeper,\n+\t\tscopedIBCKeeper,\n+\t)\n+\n+\t// Create CCV consumer and modules\n+\tapp.ConsumerKeeper = consumerkeeper.NewKeeper(\n+\t\tappCodec,\n+\t\tkeys[consumertypes.StoreKey],\n+\t\tapp.GetSubspace(consumertypes.ModuleName),\n+\t\tscopedIBCConsumerKeeper,\n+\t\tapp.IBCKeeper.ChannelKeeper,\n+\t\t&app.IBCKeeper.PortKeeper,\n+\t\tapp.IBCKeeper.ConnectionKeeper,\n+\t\tapp.IBCKeeper.ClientKeeper,\n+\t\tapp.SlashingKeeper,\n+\t\tapp.BankKeeper,\n+\t\tapp.AccountKeeper,\n+\t\t&app.TransferKeeper,\n+\t\tapp.IBCKeeper,\n+\t\tauthtypes.FeeCollectorName,\n+\t)\n+\n+\t// Setting the standalone staking keeper is only needed for standalone to consumer changeover chains\n+  \t// New chains using the democracy/staking do not need to set this\n+\tapp.ConsumerKeeper.SetStandaloneStakingKeeper(app.StakingKeeper)\n\n\n\n    // change the slashing keeper dependency\n    app.SlashingKeeper = slashingkeeper.NewKeeper(\n        appCodec,\n        legacyAmino,\n        keys[slashingtypes.StoreKey],\n-\t\tapp.StakingKeeper,\n+\t\t&app.ConsumerKeeper,  // ConsumerKeeper implements StakingKeeper interface\n        authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    )\n\n    // register slashing module StakingHooks to the consumer keeper\n+\tapp.ConsumerKeeper = *app.ConsumerKeeper.SetHooks(app.SlashingKeeper.Hooks())\n+\tconsumerModule := consumer.NewAppModule(app.ConsumerKeeper, app.GetSubspace(consumertypes.ModuleName))\n\n        // register the module with module manager\n    // replace the x/staking module\n    app.MM = module.NewManager(\n        ...\n-\t\tsdkstaking.NewAppModule(appCodec, &app.StakingKeeper, app.AccountKeeper, app.BankKeeper, app.GetSubspace(stakingtypes.ModuleName)),\n+\t\tccvstaking.NewAppModule(appCodec, *app.StakingKeeper, app.AccountKeeper, app.BankKeeper, app.GetSubspace(stakingtypes.ModuleName)),\n        ...\n    )\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"distribution",children:"Distribution"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"x/ccv/democracy/distribution"})," module allows the consumer chain to send rewards to the provider chain while retaining the logic of the ",(0,a.jsx)(n.code,{children:"x/distribution"})," module for internal reward distribution to governators and their delegators."]}),"\n",(0,a.jsx)(n.h3,{id:"how-it-works",children:"How it works"}),"\n",(0,a.jsxs)(n.p,{children:["First, a percentage of the block rewards is sent to the provider chain, where is distributed only to opted-in validators and their delegators.\nSecond, the remaining rewards get distributed to the consumer chain's governators and their delegators.\nThe percentage that is sent to the provider chain corresponds to ",(0,a.jsx)(n.code,{children:"1 - ConsumerRedistributionFraction"}),".\nFor example, ",(0,a.jsx)(n.code,{children:'ConsumerRedistributionFraction = "0.75"'})," means that the consumer chain retains 75% of the rewards, while 25% gets sent to the provider chain"]}),"\n",(0,a.jsx)(n.h3,{id:"integration-1",children:"Integration"}),"\n",(0,a.jsxs)(n.p,{children:["Change the wiring in ",(0,a.jsx)(n.code,{children:"app.go"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'import (\n    ...\n    distrkeeper "github.com/cosmos/cosmos-sdk/x/distribution/keeper"\n    distrtypes "github.com/cosmos/cosmos-sdk/x/distribution/types"\n    sdkdistr "github.com/cosmos/cosmos-sdk/x/distribution"\n\n+   ccvdistr "github.com/cosmos/interchain-security/v4/x/ccv/democracy/distribution"\n)\n\nvar (\n    // replace sdk distribution AppModuleBasic\n    ModuleBasics = module.NewBasicManager(\n        auth.AppModuleBasic{},\n        genutil.NewAppModuleBasic(genutiltypes.DefaultMessageValidator),\n        bank.AppModuleBasic{},\n        capability.AppModuleBasic{},\n        ccvstaking.AppModuleBasic{}, // make sure you first swap the staking keeper\n        mint.AppModuleBasic{},\n-\t\tsdkdistr.AppModuleBasic{},\n+\t\tccvdistr.AppModuleBasic{},\n    )\n)\n\nfunc NewApp(...) {\n    ....\n\n    app.DistrKeeper = distrkeeper.NewKeeper(\n        appCodec,\n        keys[distrtypes.StoreKey],\n        app.AccountKeeper,\n        app.BankKeeper,\n        app.StakingKeeper,  // connect to sdk StakingKeeper\n        consumertypes.ConsumerRedistributeName,\n        authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    )\n\n    // register with the module manager\n    app.MM = module.NewManager(\n        ...\n-\t\tsdkdistr.NewAppModule(appCodec, app.DistrKeeper, app.AccountKeeper, app.BankKeeper, *app.StakingKeeper, authtypes.FeeCollectorName,     app.GetSubspace(distrtypes.ModuleName)),\n\n+\t\tccvdistr.NewAppModule(appCodec, app.DistrKeeper, app.AccountKeeper, app.BankKeeper, *app.StakingKeeper, authtypes.FeeCollectorName, app.GetSubspace(distrtypes.ModuleName)),\n        ccvstaking.NewAppModule(appCodec, *app.StakingKeeper, app.AccountKeeper, app.BankKeeper, app.GetSubspace(stakingtypes.ModuleName)),\n        ...\n    )\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(67294);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);