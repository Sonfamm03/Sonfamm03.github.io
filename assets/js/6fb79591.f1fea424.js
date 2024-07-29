"use strict";(self.webpackChunkmirai_sdk_doc=self.webpackChunkmirai_sdk_doc||[]).push([[399],{1707:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=i(5893),r=i(1151);const l={slug:"/sdk/guides/unreal-engine"},t="Unreal Engine",d={id:"SDK/SDK Guides/Unreal Engine SDK",title:"Unreal Engine",description:"Quickstart",source:"@site/docs/2. SDK/SDK Guides/3. Unreal Engine SDK.md",sourceDirName:"2. SDK/SDK Guides",slug:"/sdk/guides/unreal-engine",permalink:"/sdk/guides/unreal-engine",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/sdk/guides/unreal-engine"},sidebar:"defaultSidebar",previous:{title:"JavaScript SDK",permalink:"/sdk/guides/javascript"},next:{title:"Prerequisites",permalink:"/integrations"}},a={},c=[{value:"Quickstart",id:"quickstart",level:2},{value:"Initialize",id:"initialize",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Class: ShardsTech",id:"class-shardstech",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3}];function o(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"unreal-engine",children:"Unreal Engine"}),"\n",(0,n.jsx)(s.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,n.jsx)(s.p,{children:"Import and configure the Unreal Engine SDK for your project."}),"\n",(0,n.jsx)(s.h2,{id:"initialize",children:"Initialize"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cpp",children:'ShardsTech::Init("clientID",[](bool success){\n    UE_LOG(LogTemp,Display,TEXT("Init done %d"),success);\n});\n'})}),"\n",(0,n.jsx)(s.h2,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"When you login/logout your system please call ShardsTech::Login / ShardsTech::Logout;"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cpp",children:'ShardsTech::Login("token",[](bool success)=>{\n    UE_LOG(LogTemp,Display,TEXT("Login done %d"),success);\n});\nShardsTech::Logout();\n'})}),"\n",(0,n.jsx)(s.h2,{id:"class-shardstech",children:"Class: ShardsTech"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"ShardsTech"})," class encapsulates functionality for interacting with the ShardsTech API."]}),"\n",(0,n.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"ShardsTechConfig: Configuration settings for ShardsTech."}),"\n",(0,n.jsx)(s.li,{children:"MyUser: Information about the current user."}),"\n",(0,n.jsx)(s.li,{children:"MyGuild: Information about the guild associated with the current user."}),"\n",(0,n.jsx)(s.li,{children:"MySlotOnSale: Information about the slot currently on sale by the user."}),"\n",(0,n.jsx)(s.li,{children:"MeIsOwner: Indicates whether the current user is the owner of the guild."}),"\n",(0,n.jsx)(s.li,{children:"IsLinkedAddress: Indicates whether the current user has a linked address."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Init(): Initializes the ShardsTech API asynchronously."}),"\n",(0,n.jsx)(s.li,{children:"GetLeaderboards(): Retrieves leaderboard data."}),"\n"]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:[" ",(0,n.jsx)("b",{children:"1 #region User"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Login(string token): Logs in the user using the provided authorization header."}),"\n",(0,n.jsx)(s.li,{children:"Logout(): Logs out the current user."}),"\n",(0,n.jsx)(s.li,{children:"LinkAddress(): Links the user's address."}),"\n",(0,n.jsx)(s.li,{children:"FetchMyUser(): Retrieves information about the current user."}),"\n",(0,n.jsx)(s.li,{children:"GetUserHistories(): Retrieves user transaction history."}),"\n",(0,n.jsx)(s.li,{children:"GetUserScores(): Retrieves user scores for a specific leaderboard."}),"\n"]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:[" ",(0,n.jsx)("b",{children:"2 #region Guild"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"CreateGuild(): Creates a guild."}),"\n",(0,n.jsx)(s.li,{children:"GetGuildScores(): Retrieves guild scores for a specific leaderboard."}),"\n",(0,n.jsx)(s.li,{children:"GetGuildHistories(): Retrieves guild transaction history."}),"\n",(0,n.jsx)(s.li,{children:"GetUsersOfGuild(): Retrieves users belonging to a guild."}),"\n"]}),(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:[" ",(0,n.jsx)("b",{children:"2.1 #region MyGuild"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"FetchMyGuild(): Retrieves information about the guild associated with the current user."}),"\n",(0,n.jsx)(s.li,{children:"UpdateGuild(): Updates guild information."}),"\n",(0,n.jsx)(s.li,{children:"UpdateLogoDescriptionGuild(): Updates guild logo and description."}),"\n"]}),(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:[" ",(0,n.jsx)("b",{children:"2.1.1#region Chat"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"OnlineUsersMyGuild(): Retrieves online users in the current guild."}),"\n",(0,n.jsx)(s.li,{children:"GetChatHistory(): Retrieves chat history."}),"\n",(0,n.jsx)(s.li,{children:"SendChat(): Sends a chat message."}),"\n"]})]})]}),(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:[" ",(0,n.jsx)("b",{children:"2.2 #region JoinGuildRequest"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"CreateJoinGuildRequest(): Creates a join guild request."}),"\n",(0,n.jsx)(s.li,{children:"GetJoinGuildRequestsOfUser(): Retrieves join guild requests of the current user."}),"\n",(0,n.jsx)(s.li,{children:"GetJoinGuildRequests(): Retrieves join guild requests for a specific guild."}),"\n"]})]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:[" ",(0,n.jsx)("b",{children:"3 #region Share"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"GetMyShares(): Retrieves the current user's shares."}),"\n",(0,n.jsx)(s.li,{children:"GetTotalShareOfGuild(): Retrieves the total share of a guild."}),"\n",(0,n.jsx)(s.li,{children:"GetMyShareOfGuild(): Retrieves the user's share of a guild."}),"\n",(0,n.jsx)(s.li,{children:"GetBuySharePrice(): Retrieves the buy share price."}),"\n",(0,n.jsx)(s.li,{children:"GetSellSharePrice(): Retrieves the sell share price."}),"\n",(0,n.jsx)(s.li,{children:"BuyShare(): Buys shares from a guild."}),"\n",(0,n.jsx)(s.li,{children:"SellShare(): Sells shares to a guild."}),"\n"]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:[" ",(0,n.jsx)("b",{children:"4 #region Slot"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"GetSlotsOnSale(): Retrieves slots on sale."}),"\n",(0,n.jsx)(s.li,{children:"GetBuySlotPrice(): Retrieves the buy slot price."}),"\n",(0,n.jsx)(s.li,{children:"BuySlot(): Buys a slot from a user."}),"\n",(0,n.jsx)(s.li,{children:"SellSlot(): Sells a slot."}),"\n",(0,n.jsx)(s.li,{children:"FetchMySlotOnSale(): Retrieves information about the slot currently on sale by the user."}),"\n",(0,n.jsx)(s.li,{children:"UpdateSellSlotPrice(): Updates the price of a slot on sale."}),"\n",(0,n.jsx)(s.li,{children:"CancelSellSlot(): Cancels the sale of a slot."}),"\n",(0,n.jsx)(s.li,{children:"BurnSlot(): Burns a slot."}),"\n"]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.p,{children:"This draft provides an overview of the classes, properties, and methods available in the ShardsTech API."})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>d,a:()=>t});var n=i(7294);const r={},l=n.createContext(r);function t(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);