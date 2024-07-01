"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[7872],{76564:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=i(43010),s=i(90887);const r={slug:"/security"},c="Security",o={id:"security",title:"Security",description:"The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. If you find a security bug, with that in mind, please do not file public issues. You can follow the instructions in the security policy to report it privately. We will fix it as soon as possible.",source:"@site/community/security.md",sourceDirName:".",slug:"/security",permalink:"/community/security",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/community/security.md",tags:[],version:"current",lastUpdatedBy:"dashuai",lastUpdatedAt:1719804084,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{slug:"/security"},sidebar:"community",previous:{title:"Team",permalink:"/community/team"},next:{title:"Contributing",permalink:"/community/contributing"}},a={},u=[{value:"v1.2.5",id:"v125",level:2},{value:"CVE-2024-29217",id:"cve-2024-29217",level:3},{value:"v1.2.1",id:"v121",level:2},{value:"CVE-2024-22393",id:"cve-2024-22393",level:3},{value:"CVE-2024-26578",id:"cve-2024-26578",level:3},{value:"CVE-2024-23349",id:"cve-2024-23349",level:3},{value:"v1.2.0",id:"v120",level:2},{value:"CVE-2023-49619",id:"cve-2023-49619",level:3}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(t.p,{children:["The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. If you find a security bug, with that in mind, please do not file public issues. You can follow the instructions in the ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-answer/security/policy",children:"security policy"})," to report it privately. We will fix it as soon as possible."]}),"\n",(0,n.jsx)(t.h1,{id:"security-fixes",children:"Security fixes"}),"\n",(0,n.jsx)(t.h2,{id:"v125",children:"v1.2.5"}),"\n",(0,n.jsx)(t.h3,{id:"cve-2024-29217",children:"CVE-2024-29217"}),"\n",(0,n.jsx)(t.p,{children:"XSS attack when user changes personal website. A logged-in user, when modifying their personal website, can input malicious code in the website to create such an attack."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-29217",children:"https://www.cve.org/CVERecord?id=CVE-2024-29217"})}),"\n",(0,n.jsx)(t.h2,{id:"v121",children:"v1.2.1"}),"\n",(0,n.jsx)(t.h3,{id:"cve-2024-22393",children:"CVE-2024-22393"}),"\n",(0,n.jsx)(t.p,{children:"Pixel Flood Attack by uploading large pixel files will cause server out of memory. A logged-in user can cause such an attack by uploading an image when posting content."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-22393",children:"https://www.cve.org/CVERecord?id=CVE-2024-22393"})}),"\n",(0,n.jsx)(t.h3,{id:"cve-2024-26578",children:"CVE-2024-26578"}),"\n",(0,n.jsx)(t.p,{children:"Repeated submission during registration resulted in the registration of the same user. When users register, if they rapidly submit multiple registrations using scripts, it can result in the creation of multiple user accounts simultaneously with the same name."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-26578",children:"https://www.cve.org/CVERecord?id=CVE-2024-26578"})}),"\n",(0,n.jsx)(t.h3,{id:"cve-2024-23349",children:"CVE-2024-23349"}),"\n",(0,n.jsx)(t.p,{children:"XSS attack when user enters summary. A logged-in user, when modifying their own submitted question, can input malicious code in the summary to create such an attack."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-23349",children:"https://www.cve.org/CVERecord?id=CVE-2024-23349"})}),"\n",(0,n.jsx)(t.h2,{id:"v120",children:"v1.2.0"}),"\n",(0,n.jsx)(t.h3,{id:"cve-2023-49619",children:"CVE-2023-49619"}),"\n",(0,n.jsx)(t.p,{children:"Under normal circumstances, a user can only bookmark a question once, and will only increase the number of questions bookmarked once. However, repeat submissions through the script can increase the number of collection of the question many times."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.cve.org/CVERecord?id=CVE-2023-49619",children:"https://www.cve.org/CVERecord?id=CVE-2023-49619"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},90887:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>c});var n=i(85170);const s={},r=n.createContext(s);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);