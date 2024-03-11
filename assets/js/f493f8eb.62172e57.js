"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[3600],{27150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(43010),i=t(90887);const o={slug:"/configfile"},r="Config File",c={id:"getting-started/configfile",title:"Config File",description:"We use yaml configuration file. It will be created automatically after answer init command. The default path is /data/conf/config.yaml",source:"@site/docs/getting-started/configfile.md",sourceDirName:"getting-started",slug:"/configfile",permalink:"/docs/configfile",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/docs/getting-started/configfile.md",tags:[],version:"current",lastUpdatedBy:"Shaobiao Lin",lastUpdatedAt:1710121782,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{slug:"/configfile"},sidebar:"docs",previous:{title:"Command Line",permalink:"/docs/command-line"},next:{title:"Environment Variables",permalink:"/docs/env"}},s={},d=[{value:"config.yaml description",id:"configyaml-description",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"config-file",children:"Config File"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["We use ",(0,a.jsx)(n.code,{children:"yaml"})," configuration file. It will be created automatically after ",(0,a.jsx)(n.code,{children:"answer init"})," command. The default path is ",(0,a.jsx)(n.code,{children:"/data/conf/config.yaml"})]})}),"\n",(0,a.jsx)(n.h2,{id:"configyaml-description",children:"config.yaml description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="/data/conf/config.yaml"',children:'server:\n  http:\n    addr: 0.0.0.0:80 # Project access port number\ndata:\n  database:\n    driver: "mysql" # Default database driver is mysql\n    connection: root:root@tcp(127.0.0.1:3306)/answer # MySQL database connection address\n  cache:\n    file_path: "/tmp/cache/cache.db" # Cache file storage path\ni18n:\n  bundle_dir: "/data/i18n" # Internationalized file storage directory\nswaggerui:\n  show: true # Whether to display the swaggerapi documentation, address /swagger/index.html\n  protocol: http # swagger protocol header\n  host: 127.0.0.1 # An accessible IP address or domain name\n  address: \':80\'  # accessible port number\nservice_config:\n  secret_key: "answer" # encryption key\n  upload_path: "/data/uploads" # upload directory\n'})})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},90887:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(85170);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);