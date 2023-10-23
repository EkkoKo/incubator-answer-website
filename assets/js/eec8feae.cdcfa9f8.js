"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[2927],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(4250),a=(n(9496),n(9613));const r={title:"How to Utilize Reputation and Privilege in Online Community",authors:["Anne"],category:"Tutorials",featured:!0,image:"2023-07-19-cover@4x.png",description:"Meet Answer\u2019s reputation and privilege systems and automate them for efficient community content management. "},o=void 0,s={permalink:"/blog/2023/07/19/how-to-utilize-reputation-and-privilege-in-online-community",source:"@site/blog/2023-07-19-how-to-utilize-reputation-and-privilege-in-online-community/index.md",title:"How to Utilize Reputation and Privilege in Online Community",description:"Meet Answer\u2019s reputation and privilege systems and automate them for efficient community content management. ",date:"2023-07-19T00:00:00.000Z",formattedDate:"July 19, 2023",tags:[],readingTime:2.9,hasTruncateMarker:!1,authors:[{name:"Anne Zhu",title:"Product Marketing Manager",url:"https://github.com/PrimmaAnna",imageURL:"https://avatars.githubusercontent.com/u/131739771?v=4",key:"Anne"}],frontMatter:{title:"How to Utilize Reputation and Privilege in Online Community",authors:["Anne"],category:"Tutorials",featured:!0,image:"2023-07-19-cover@4x.png",description:"Meet Answer\u2019s reputation and privilege systems and automate them for efficient community content management. "},prevItem:{title:"The Packaging Process for Answer Plugins",permalink:"/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way"},nextItem:{title:"The What, Why Using Tags for Online Community",permalink:"/blog/2023/07/11/the-what-why-using-tags-for-online-community"}},l={authorsImageUrls:[void 0]},u=[{value:"Purposes of Reputation",id:"purposes-of-reputation",level:2},{value:"Ways to Implement Reputation System in Answer",id:"ways-to-implement-reputation-system-in-answer",level:2},{value:"1. Trust Building",id:"1-trust-building",level:3},{value:"2. Rewards and Penalties",id:"2-rewards-and-penalties",level:3},{value:"3. Moderation and Governance",id:"3-moderation-and-governance",level:3},{value:"4. Community Engagement",id:"4-community-engagement",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Reputation score is a reflection of a community member\u2019s credibility. Community members establish this based on their actions and contributions. Simultaneously, a reputation system is formed to track participants' trustworthiness, credibility, and behavior."),(0,a.kt)("p",null,"Besides ",(0,a.kt)("a",{parentName:"p",href:"/blog/2023/07/11/the-what-why-using-tags-for-online-community"},"tagging"),", ",(0,a.kt)("a",{parentName:"p",href:"https://answer.apache.org/docs/recipes/contents/reputation"},"reputation")," is an important part of ",(0,a.kt)("strong",{parentName:"p"},"content management")," in Answer. Community members gain reputation scores by adhering to community guidelines and continuous contributions. Community moderators and administrators use reputation scores to determine user privileges. This helps run and maintain a healthy community environment and discourages disruptive behavior."),(0,a.kt)("h2",{id:"purposes-of-reputation"},"Purposes of Reputation"),(0,a.kt)("p",null,"In the mid-1900s, eBay introduced a feedback system, allowing buyers and sellers to rate each other based on transaction experience. This feedback mechanism, which influenced the reputation of users, helped build trust within the ",(0,a.kt)("a",{parentName:"p",href:"/blog/2023/05/12/what-is-q-and-a-platform-and-how-to-use-it"},"Q&A platform"),"."),(0,a.kt)("p",null,"You can still find this mechanism running in Answer \u2014 community members upvote question or answer, accept answer, etc. Find out how we implement it for different purposes for a thriving online community."),(0,a.kt)("h2",{id:"ways-to-implement-reputation-system-in-answer"},"Ways to Implement Reputation System in Answer"),(0,a.kt)("h3",{id:"1-trust-building"},"1. Trust Building"),(0,a.kt)("p",null,"A positive reputation indicates credibility, reliability, and expertise. In Answer, you can always find a reputation score next to the name, providing an initial impression of the community member."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reputation Score Next to Community Member in Answer",src:n(2900).Z,width:"800",height:"270"})),(0,a.kt)("p",null,"Click the name and jump to a community member\u2019s profile page, where it includes reputation and related contributions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Community Member Profile in Answer",src:n(1373).Z,width:"800",height:"466"})),(0,a.kt)("h3",{id:"2-rewards-and-penalties"},"2. Rewards and Penalties"),(0,a.kt)("p",null,"Answer appreciate and encourage positive contributions, such as providing helpful answers, valuable content, upvote useful answers. Meanwhile, negative actions like downvote, spamming or abusive behavior can result in reputation penalties."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reputation Rules in Answer",src:n(2082).Z,width:"800",height:"1022"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("a",{parentName:"p",href:"https://answer.apache.org/docs/recipes/contents/reputation"},"here")," for Answer's complete reputation rules that might inspire you."),(0,a.kt)("h3",{id:"3-moderation-and-governance"},"3. Moderation and Governance"),(0,a.kt)("p",null,"After activation in Answer, community members will gain 1 reputation score, and are allowed to participate in general activities in the community, such as asking questions, writing answers, upvote comment, etc. Reputation scores are also used by community moderators and administrators to determine user ",(0,a.kt)("a",{parentName:"p",href:"https://answer.apache.org/docs/recipes/contents/permission"},"privileges"),", such as posting more than 2 links at a time, creating a new tag, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add a New Tag in Answer",src:n(472).Z,width:"800",height:"414"})),(0,a.kt)("p",null,"In Answer, you\u2019ll need 125 reputation scores to downvote, while downvote someone\u2019s answer will reduce one reputation score. This prevents malicious downvoting and boosts answers through intentional others\u2019 answers. This helps maintain a healthy community environment and discourage disruptive behavior."),(0,a.kt)("p",null,"The scale of communities is different, so is the reputation system. We\u2019ve prepared 3 different privilege levels for teams at different scales."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Levels of Privileges in Answer",src:n(2514).Z,width:"800",height:"871"})),(0,a.kt)("h3",{id:"4-community-engagement"},"4. Community Engagement"),(0,a.kt)("p",null,"The reputation system allows community members to actively engage in the community. They can share expertise, contribute to discussions, and vote for better answers, fostering a positive and collaborative environment."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Reputation in an online community is a reflection of a user\u2019s contributions, engagement, and commitment to the community. We know the reputation system is dynamic, and it\u2019s hard to build one from the ground, that\u2019s why we\u2019ve already got a complete ",(0,a.kt)("a",{parentName:"p",href:"https://answer.apache.org/docs/recipes/contents/reputation"},"reputation")," and ",(0,a.kt)("a",{parentName:"p",href:"https://answer.apache.org/docs/recipes/contents/permission"},"permission")," rules for you, and it runs perfectly fine in our ",(0,a.kt)("a",{parentName:"p",href:"https://meta.answer.dev/"},"official community"),"."),(0,a.kt)("p",null,"By the time you ",(0,a.kt)("a",{parentName:"p",href:"https://answer.apache.org/docs/installation"},"install")," Answer successfully, the reputation system is already there. All you need to do is to choose the right reputation level for your community in the Admin page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chose Privileges Level in Answer Admin",src:n(4690).Z,width:"800",height:"329"})),(0,a.kt)("p",null,"By automating this reputation system, your members are encouraged to share and become a significant part of the community. ",(0,a.kt)("a",{parentName:"p",href:"https://answer.apache.org/docs/"},"Start Answer")," now and shape the growth of the community along with other like-minded community members."))}c.isMDXComponent=!0},472:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/AddaNewTag-5e3da1b56a31322d02f0c190193de33c.png"},2514:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/LevelsofPrivileges-1eeb224a1bb483a8b211f219372c4291.png"},4690:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/PrivilegesLevel-ec1201d55c5c3f1adda4abcc09cf7c3e.png"},2082:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/RewardsandPenalties-448faa7639ffacbc69e7d31536074486.png"},2900:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/TrustBuilding1-66ed75f7774a5c9af90a94a083682548.png"},1373:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/TrustBuilding2-0017ddc6b3f69669288f2ba37d50fcbc.png"}}]);