"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[3692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const n={sidebar_label:"Overview",sidebar_position:1,hide_title:!0},o="Overview",l={unversionedId:"check/guias/iOS/overview",id:"check/guias/iOS/overview",title:"Overview",description:"About this SDK",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/check/guias/iOS/overview.md",sourceDirName:"check/guias/iOS",slug:"/check/guias/iOS/overview",permalink:"/en/docs/check/guias/iOS/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/guias/iOS/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1,hide_title:!0},sidebar:"checkSidebar",previous:{title:"Release Notes",permalink:"/en/docs/check/guias/android/release-notes"},next:{title:"Get started",permalink:"/en/docs/check/guias/iOS/como-comecar"}},p={},s=[{value:"About this SDK",id:"about-this-sdk",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Supported iOS versions and devices",id:"supported-ios-versions-and-devices",level:3},{value:"Available features",id:"available-features",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Getting help",id:"getting-help",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"about-this-sdk"},"About this SDK"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Unico Check")," iOS SDK enables you to quickly build a great experience in your native iOS applications. We provide a component that allow you to frictionlessly capture images in your application through the use of modern camera opening mechanisms as well as computer vision algorithms."),(0,i.kt)("p",null,"Apart from abstracting all the complexity related to any device-specific nuances, our SDK also helps to correctly frame the images, optimizing its capture, aiming to increase the accuracy in the response of our biometric engine."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("h3",{id:"supported-ios-versions-and-devices"},"Supported iOS versions and devices"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Unico Check")," iOS SDK is compatible with all devices with iOS 11 or higher. You can check an extensive device list at this ",(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/pt-br/HT209574"},"official page")," from Apple."),(0,i.kt)("h2",{id:"available-features"},"Available features"),(0,i.kt)("p",null,"The following features are available in our SDK:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Face Capture; ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Manual image capture;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Smart Camera")," image capture; "),(0,i.kt)("li",{parentName:"ul"},"Image capture with liveness-proven (Smartlive with interaction Facetec);"))),(0,i.kt)("li",{parentName:"ul"},"Document Capture;")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Fallback to ",(0,i.kt)("em",{parentName:"mdxAdmonitionTitle"},"Smart Camera mode")," "),(0,i.kt)("p",{parentName:"admonition"},"Older phones may not support some feature required by the computer vision technologies used in our ",(0,i.kt)("em",{parentName:"p"},"Smart Camera")," feature. In these cases, the ",(0,i.kt)("em",{parentName:"p"},"Manual Camera")," mode will be triggered as a fallback, allowing the user to manually capture his face image.")),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Our client-side SDK is responsible for simplifying your integration with ",(0,i.kt)("strong",{parentName:"p"},"Unico Check"),", abstracting all the complexity related to camera manipulation and image capture."),(0,i.kt)("p",null,"After a successful capture, our SDK will return an object that must be sent to our REST APIs in order to complete the biometric validation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plantuml",metastring:"Your title",Your:!0,title:!0},'\n@startuml\n\nactor       User        as User\nparticipant YourApp     as "Your iOS \\nApp"\nparticipant UnicoSDK    as "Unico Check \\n SDK"\nparticipant YourServer  as "Your App \\nBackend Server"\ncollections UnicoServer as "Unico Check \\nBiometric Engine API"\n\nautonumber\nUser -> YourApp : Access Your Application\nYourApp -> UnicoSDK : Render Capture Component\nUnicoSDK -> YourApp: [Capture Component]\nYourApp -> YourApp: Capture Image (Base64)\nYourApp -> YourServer: Drop Base64 image to your server  \nYourServer -> UnicoServer: Iterate with Unico Check APIs \\nwith base64 image\n\nautonumber stop\nUnicoServer -> YourServer: Biometry response \nYourServer -> YourApp : Biometry response\nUser <- YourApp : Feedback\n\n@enduml\n\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Users accesses your application;"),(0,i.kt)("li",{parentName:"ol"},"Through our SDK, your application requests the image capture frame (as configured in your application);"),(0,i.kt)("li",{parentName:"ol"},"Your application renders our image capture frame in a pre-configured placeholder;"),(0,i.kt)("li",{parentName:"ol"},"Your application captures the image (automatically, manually or in ",(0,i.kt)("em",{parentName:"li"},"Liveness-proven")," mode), generating a ",(0,i.kt)("inlineCode",{parentName:"li"},"JWT")," token;"),(0,i.kt)("li",{parentName:"ol"},"Your application sends the ",(0,i.kt)("inlineCode",{parentName:"li"},"JWT")," to your server;"),(0,i.kt)("li",{parentName:"ol"},"Your server call our REST APIs to validate the images (Documentation of our APIs can be found ",(0,i.kt)("a",{parentName:"li",href:"https://www3.acesso.io/identity/services/v3/docs/"},"at this link"),")"),(0,i.kt)("li",{parentName:"ol"},"Our server returns the biometric validation response, which is then forwarded to your application;")),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, get in touch with our support team at our ",(0,i.kt)("a",{parentName:"p",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"help center"),"."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"como-comecar"},"Como Come\xe7ar - Importando nosso SDK"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"fluxos/captura-selfies"},"Guia para implanta\xe7\xe3o de captura de Selfies"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"fluxos/captura-documentos"},"Guia para implanta\xe7\xe3o de captura de documentos"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"referencias"},"Referencias do SDK"),";")))}u.isMDXComponent=!0}}]);