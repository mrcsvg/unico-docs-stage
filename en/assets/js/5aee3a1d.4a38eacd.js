"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[2546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"Fundamentals",sidebar_position:3},i="Key Concepts",s={unversionedId:"check/conceitos-importantes",id:"check/conceitos-importantes",title:"Key Concepts",description:"Find below some key concepts to take in account:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/check/conceitos-importantes.md",sourceDirName:"check",slug:"/check/conceitos-importantes",permalink:"/unico-docs-stage/en/docs/check/conceitos-importantes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/conceitos-importantes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Fundamentals",sidebar_position:3},sidebar:"checkSidebar",previous:{title:"Getting Started",permalink:"/unico-docs-stage/en/docs/check/primeiros-passos"},next:{title:"Overview",permalink:"/unico-docs-stage/en/docs/check/guias/android/overview"}},c={},l=[{value:"Smartlive com intera\xe7\xe3o",id:"smartlive-com-intera\xe7\xe3o",level:2},{value:"Getting help",id:"getting-help",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"key-concepts"},"Key Concepts"),(0,o.kt)("p",null,"Find below some key concepts to take in account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"O objetivo da SDK \xe9 realizar a captura de imagens (selfie e documento);"),(0,o.kt)("li",{parentName:"ul"},"A SDK n\xe3o realiza requisi\xe7\xf5es a Rest-API do Unico check (vide ",(0,o.kt)("a",{parentName:"li",href:"/guias/web/overview#como-funciona-este-sdk"},"diagrama"),");"),(0,o.kt)("li",{parentName:"ul"},"Voc\xea pode encontrar mais detalhes sobre nossas APIs Rest ",(0,o.kt)("a",{parentName:"li",href:"https://www3.acesso.io/identity/services/v3/docs/#section/Fluxos"},"nesta p\xe1gina"),"."),(0,o.kt)("li",{parentName:"ul"},"\xc9 importante manter o SDK Unico check atualizado com a \xfaltima vers\xe3o dispon\xedvel;"),(0,o.kt)("li",{parentName:"ul"},"O SDK n\xe3o funciona em emuladores, somente com aparelhos m\xf3veis f\xedsicos;"),(0,o.kt)("li",{parentName:"ul"},"Verifique a vers\xe3o m\xednima dos sistemas operacionais suportados por cada vers\xe3o da SDK (Android, iOS ou Web) em seus respectivos guias,"),(0,o.kt)("li",{parentName:"ul"},"A funcionalidade de liveness com intera\xe7\xe3o depende de contato com o nosso backend;"),(0,o.kt)("li",{parentName:"ul"},"N\xe3o damos suporte para vers\xf5es desatualizadas das nossas SDKs;"),(0,o.kt)("li",{parentName:"ul"},"Utilizamos o Versionamento Sem\xe2ntico para detalhar nossas vers\xf5es;")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The purpose of the SDK is to capture images (selfie and document);"),(0,o.kt)("li",{parentName:"ul"},"The SDK does not make requests to our REST APIs (see ",(0,o.kt)("a",{parentName:"li",href:"/guias/web/overview#how-this-sdk-works"},"diagram"),");"),(0,o.kt)("li",{parentName:"ul"},"You can find more details about our Rest APIs ",(0,o.kt)("a",{parentName:"li",href:"https://www3.acesso.io/identity/services/v3/docs/#section/Fluxos"},"on this page"),"."),(0,o.kt)("li",{parentName:"ul"},"It is important to keep the ",(0,o.kt)("strong",{parentName:"li"},"Unico Check")," SDK updated with the latest available version;"),(0,o.kt)("li",{parentName:"ul"},"The SDK does not work on emulators, only on physical mobile devices;"),(0,o.kt)("li",{parentName:"ul"},"Check the minimum version of operating systems supported by each SDK version (Android, iOS or Web) in their respective guides,"),(0,o.kt)("li",{parentName:"ul"},"The liveness functionality with interaction depends on contacting our backend;"),(0,o.kt)("li",{parentName:"ul"},"We do not support outdated versions of our SDKs;"),(0,o.kt)("li",{parentName:"ul"},"We use Semantic Versioning to detail our versions;")),(0,o.kt)("admonition",{title:"Semantic Versioning",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Given a version number MAJOR.MINOR.PATCH, increment the:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"MAJOR version when you make incompatible API changes"),(0,o.kt)("li",{parentName:"ul"},"MINOR version when you add functionality in a backwards compatible manner"),(0,o.kt)("li",{parentName:"ul"},"PATCH version when you make backwards compatible bug fixes")),(0,o.kt)("p",{parentName:"admonition"},"Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.")),(0,o.kt)("h2",{id:"smartlive-com-intera\xe7\xe3o"},"Smartlive com intera\xe7\xe3o"),(0,o.kt)("p",null,"Smartlive is our proof-of-life technology. It ensures that the user is physically present at the time of taking a selfie, blocking attempts such as photo from photo.\nFor an even more secure experience, we require user interaction during capture."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, please get in touch with our support team at our ",(0,o.kt)("a",{parentName:"p",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"help center"),")"),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Conceitos importantes"),(0,o.kt)("li",{parentName:"ul"},"Learn how to ",(0,o.kt)("a",{parentName:"li",href:"#"},"capture image of documents")," with our SDK."),(0,o.kt)("li",{parentName:"ul"},"Learn more about our SDK in the ",(0,o.kt)("a",{parentName:"li",href:"#"},"Reference documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"Check the documentation of our ",(0,o.kt)("a",{parentName:"li",href:"#"},"REST APIs"),".")))}p.isMDXComponent=!0}}]);