"use strict";(self.webpackChunkmirai_sdk_doc=self.webpackChunkmirai_sdk_doc||[]).push([[51],{3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(5893),r=t(1151);const a={slug:"/integrations/partial"},s=void 0,l={id:"Types of Integrations /Partial Integration",title:"Partial Integration",description:"This integration process enables partners to fully manage their guild management front-end by utilizing our provided UI kit. The UI kit is equipped with all the necessary SDK features, ensuring partners can easily adapt the front-end to meet their specific needs while leveraging the extensive functionalities already built into the kit.",source:"@site/docs/3. Types of Integrations /3. Partial Integration.md",sourceDirName:"3. Types of Integrations ",slug:"/integrations/partial",permalink:"/integrations/partial",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/integrations/partial"},sidebar:"defaultSidebar",previous:{title:"External Integration",permalink:"/integrations/external"},next:{title:"Full Integration",permalink:"/integrations/full"}},o={},c=[{value:"Process",id:"process",level:2},{value:"Step 1: Partner create account in self-integration portal",id:"step-1-partner-create-account-in-self-integration-portal",level:3},{value:"Step 2: Install SDK package base on game engine",id:"step-2-install-sdk-package-base-on-game-engine",level:3},{value:"Step 3: Game server setup",id:"step-3-game-server-setup",level:3},{value:"Step 4: Integrate UI Kit React",id:"step-4-integrate-ui-kit-react",level:3},{value:"Installation",id:"installation",level:4},{value:"Usage",id:"usage",level:4},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This integration process enables partners to fully manage their guild management front-end by utilizing our provided UI kit. The UI kit is equipped with all the necessary SDK features, ensuring partners can easily adapt the front-end to meet their specific needs while leveraging the extensive functionalities already built into the kit."}),"\n",(0,i.jsx)(n.h2,{id:"process",children:"Process"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-partner-create-account-in-self-integration-portal",children:"Step 1: Partner create account in self-integration portal"}),"\n",(0,i.jsx)(n.p,{children:"TODO: Add image for illustration"}),"\n",(0,i.jsx)(n.h3,{id:"step-2-install-sdk-package-base-on-game-engine",children:"Step 2: Install SDK package base on game engine"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"../integrations#game-client",children:(0,i.jsx)("ins",{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Game Client"})})})})," section for more details"]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-game-server-setup",children:"Step 3: Game server setup"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"../integrations#game-server",children:(0,i.jsx)("ins",{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Game Server"})})})})," section for more details"]}),"\n",(0,i.jsx)(n.h3,{id:"step-4-integrate-ui-kit-react",children:"Step 4: Integrate UI Kit React"}),"\n",(0,i.jsx)(n.p,{children:"We provide a game UI kit with full features of Shards Tech on the client side (React web). With simple syntax, the integration testing process will be completed quickly."}),"\n",(0,i.jsx)(n.h4,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm i @mirailabs-co/ui-kit-shards-tech\n\nyarn add @mirailabs-co/ui-kit-shards-tech\n"})}),"\n",(0,i.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)("em",{children:"Parameters"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"interface UIKitProps {\n\taccessToken: string;\n\tclientId: string;\n\tenv?: string;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["accessToken: user token for verification with Shards. Details: ",(0,i.jsx)(n.a,{href:"https://docs.shards.tech/Integration%20Guidelines/Prepare/Server#api-authentication-require",children:"Authentication"})]}),"\n",(0,i.jsx)(n.li,{children:"clientId: ID of the game (provided when integrating with Shards)"}),"\n",(0,i.jsx)(n.li,{children:"env (default: development): environment of the game"}),"\n"]}),"\n",(0,i.jsx)("em",{children:"How to import"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"import UIKitShardsTech from \"@mirailabs-co/ui-kit-shards-tech\"\n\n...\n    const accessToken = `USER_ACCESS_TOKEN`;\n    const clientId = `GAME_CLIENT_ID`;\n    const env = 'production';\n\n\n    ...\n        <UIKitShardsTech\n            accessToken={accessToken}\n            clientId={clientId}\n            env={env}\n        >\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Git: ",(0,i.jsx)("a",{href:"https://github.com/tuunguyen99/guild-tech-demo",style:{color:"#007bff",textDecoration:"underline"},target:"_blank",children:"  React/Next And ShardsTech Demo  "})]}),"\n",(0,i.jsxs)(n.li,{children:["WebApp: ",(0,i.jsx)("a",{href:"https://shards-tech-demo.vercel.app/",style:{color:"#007bff",textDecoration:"underline"},target:"_blank",children:"  Demo ShardsTech  "})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(7294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);