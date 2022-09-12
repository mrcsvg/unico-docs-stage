"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[9516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a;const{lazy:i,block:m,defaultValue:d,values:h,groupId:f,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,l.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[C,T]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==C&&b.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,a=S.indexOf(t),n=b[a].value;n!==C&&(x(t),T(n),null!=f&&N(f,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=S.indexOf(e.currentTarget)+1;a=null!=(n=S[t])?n:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;a=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>S.push(e),onKeyDown:O,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},17894:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{children:t,headingDepth:a}=e;const[r,o]=(0,n.useState)(null);return n.createElement("div",{className:"steps steps--h"+a},t)}},85087:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var n=a(87462),r=(a(67294),a(3905)),o=a(94288),i=a(26196),l=a(17894),s=a(65488),u=a(85162);const c={sidebar_label:"Selfie Capture",sidebar_position:1},p="Selfie Capture",m={unversionedId:"check/guias/web/fluxos/captura-selfies",id:"check/guias/web/fluxos/captura-selfies",title:"Selfie Capture",description:"About this guide",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/check/guias/web/fluxos/captura-selfies.md",sourceDirName:"check/guias/web/fluxos",slug:"/check/guias/web/fluxos/captura-selfies",permalink:"/unico-docs-stage/en/docs/check/guias/web/fluxos/captura-selfies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/guias/web/fluxos/captura-selfies.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Selfie Capture",sidebar_position:1},sidebar:"checkSidebar",previous:{title:"Get started",permalink:"/unico-docs-stage/en/docs/check/guias/web/como-comecar"},next:{title:"Captura de documentos",permalink:"/unico-docs-stage/en/docs/check/guias/web/fluxos/verificacao-documentos"}},d={},h=[{value:"About this guide",id:"about-this-guide",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Available resources",id:"available-resources",level:2},{value:"Manual Capture",id:"manual-capture",level:3},{value:"Automatic Capture",id:"automatic-capture",level:3},{value:"Smartlive with interaction Facetec",id:"smartlive-with-interaction-facetec",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Initialize our SDK",id:"initialize-our-sdk",level:3},{value:"Customize the frame size",id:"customize-the-frame-size",level:3},{value:"Configure the callback functions",id:"configure-the-callback-functions",level:3},{value:"Customize the capture frame",id:"customize-the-capture-frame",level:3},{value:"Configure the capture mode and start the camera",id:"configure-the-capture-mode-and-start-the-camera",level:3},{value:"Manual Capture",id:"manual-capture-1",level:4},{value:"Automatic Capture",id:"automatic-capture-1",level:4},{value:"Call our REST APIs",id:"call-our-rest-apis",level:3},{value:"Getting help",id:"getting-help",level:2},{value:"Next steps",id:"next-steps",level:2}],f={toc:h};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"selfie-capture"},"Selfie Capture"),(0,r.kt)("h2",{id:"about-this-guide"},"About this guide"),(0,r.kt)("p",null,"This guide was designed to assist you in the integration with our ",(0,r.kt)("strong",{parentName:"p"},"Web SDK")," in a fast and easy way. On this page, you will find some key concepts, implementation examples, as well as how to interact with our Biometric Engine REST APIs."),(0,r.kt)("admonition",{title:"Please note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this guide focuses on the image capture process. For more information about our REST APIs, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs/"},"REST API Reference"),".")),(0,r.kt)("p",null,"By following this guide, in few minutes, you will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to open user's camera and capture an image;"),(0,r.kt)("li",{parentName:"ul"},"Learn how to link the parameters returned by our SDK with our REST APIs;"),(0,r.kt)("li",{parentName:"ul"},"Learn how to deal with the data returned by our REST API;")),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"If you haven't done so already, follow our ",(0,r.kt)("a",{parentName:"p",href:"../como-comecar"},"Getting started")," guide to set up your account, get your API key and install our SDK. We strongly recommend you to check this SDK's available features in our ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"Overview page"),"."),(0,r.kt)("h2",{id:"available-resources"},"Available resources"),(0,r.kt)("p",null,"This SDK offers a component that will allow you to capture optimized images in your app, displaying your users a silhouette that help them to get correctly positioned for the image capture."),(0,r.kt)("p",null,"You can offer one of the following ",(0,r.kt)("strong",{parentName:"p"},"Selfie Capture")," modes in your app:"),(0,r.kt)("h3",{id:"manual-capture"},"Manual Capture"),(0,r.kt)("p",null,"In this kind of experience, our SDK displays a frame to help users to correctly position their faces. The users are then responsible for capturing the image by clicking on a button (also provided by our SDK)."),(0,r.kt)("p",null,"In this mode, our SDK does not perform any kind of validation of what is being captured. If the captured image does not contain, what is considered a biometrically valid face, the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," generated by our SDK will be rejected by our Biometric Engine REST API."),(0,r.kt)("img",{src:o.Z,alt:"Captura Manual",className:"imgCenter"}),(0,r.kt)("h3",{id:"automatic-capture"},"Automatic Capture"),(0,r.kt)("p",null,"In this kind of experience, we automatically identify the user's face through some computer vision algorithms and help them to correctly position themselves within the capture area. Once correctly positioned, we automatically capture the image."),(0,r.kt)("p",null,"By helping the users to correctly frame their faces, this option can dramatically reduce problems when sending the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," to our Biometric Engine REST API."),(0,r.kt)("img",{src:i.Z,alt:"Captura Manual",className:"imgCenter"}),(0,r.kt)("h3",{id:"smartlive-with-interaction-facetec"},"Smartlive with interaction Facetec"),(0,r.kt)("p",null,"In this kind of experience, users are instructed to perform some simple movements during the image capture. Those movements are then verified by some computer vision algorithms, in order to ensure that users are really in front of the phone. By requesting users to move in front of the camera, this kind of experience adds an extra security layer against frauds."),(0,r.kt)("p",null,"As in the Automatic Capture mode, the image here is captured without users pressing any button. This option can also dramatically reduce problems when sending the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," to our Biometric Engine REST API."),(0,r.kt)("admonition",{title:"Smartlive with interaction Facetec activation",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This functionality must be activated inside our Customer Portal, as explained ",(0,r.kt)("a",{parentName:"p",href:"../how-to-start#creating-or-editing-an-api-key"},"in this article"),".")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"Follow the steps below to have the full potential of our SDK embedded in your app in just some few minutes:"),(0,r.kt)(l.Z,{headingDepth:3,mdxType:"Steps"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("h3",{id:"initialize-our-sdk"},"Initialize our SDK"),(0,r.kt)("p",null,"First, complete the following steps:"),(0,r.kt)("p",null,"Instantiate a new ",(0,r.kt)("strong",{parentName:"p"},"Builder"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const unicoCameraBuilder = new UnicoCheckBuilder();\n")),(0,r.kt)("p",null,"Specify the path of the additional files (if added to your project):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'unicoCameraBuilder.setResourceDirectory("/resources");\n')),(0,r.kt)("p",null,"Specify the AI models file path if you are using Smart Camera (Automatic Capture) functionality in your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'unicoCameraBuilder.setModelsPath("https://mywebsite.com.br/models");\n\n'))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"customize-the-frame-size"},"Customize the frame size"),(0,r.kt)("admonition",{title:"Smartlive with interaction",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This step is only required if you ",(0,r.kt)("strong",{parentName:"p"},"are not")," using the capture mode ",(0,r.kt)("strong",{parentName:"p"},"Smartlive with interaction Facetec"))),(0,r.kt)("p",null,"If you are ",(0,r.kt)("strong",{parentName:"p"},"not")," using ",(0,r.kt)("strong",{parentName:"p"},"Smartlive with interaction Facetec"),", we suggest you to customize the size of our frame, so that you can optimize it. Check below how to customize it for Web Desktop or Mobile."),(0,r.kt)("admonition",{title:"Dica",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Many times, the functioning of our frame can be affected by design-systems with grid layouts, like bootstrap or material-ui, for example. To minimize this risk, make sure to place our frame (",(0,r.kt)("inlineCode",{parentName:"p"},'id="box-camera"'),") somewhere in your project that doesn't inherit unwanted css rules.")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"In Web Desktop, you can restrict the size of our frame, so that it does not use all the space available in your user\xb4s screen. To restrict it, just wrap our frame (",(0,r.kt)("inlineCode",{parentName:"p"},'id="box-camera"'),") in another html tag, as in the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <div id="box-camera"></div>\n</div>\n')),(0,r.kt)("p",null,"Ideally, you should try to keep an adequate height-to-width ratio. By doing this, it's going to be easier to our frame to capture user's face. Check an example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  width: 800px;\n  height: 600px;\n  position: relative;\n}\n")),(0,r.kt)("p",null,"By following the above example, our frame will respect the parent element size, in this case represented by the container, allowing you to implement our frame in the most convenient way to your application (like in a modal, for example)."),(0,r.kt)("admonition",{title:"Testing many screen sizes",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Performing tests changing the screen size using your browser's developer mode won't work. To do this kind of tests, change the size of your browser's window and refresh the page"))),(0,r.kt)(u.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,r.kt)("p",null,"For Web Mobile views, unlike what we suggest to Web Desktop, we recommend you to use 100% of users' screen in order to avoid problems with our computer vision algorithms. If the capture frame is somehow distorted, our automatic capture functionality (Smart Camera) may have problems to calculate users' face tracking."),(0,r.kt)("p",null,"Therefore, in mobile views, we recommend that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The capture frame must take 100% of the users' device (",(0,r.kt)("inlineCode",{parentName:"li"},"100vw/vh"),");"),(0,r.kt)("li",{parentName:"ul"},"Avoid both horizontal or vertical scrolling (You can avoid it with a modal);")),(0,r.kt)("p",null,"You can check an Angular example at ",(0,r.kt)("a",{parentName:"p",href:"recursos-adicionais/exemplos"},"this page"),":"),(0,r.kt)("admonition",{title:"Devices from browser's developer mode",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You won\xb4t be able to correctly emulate a device using your browser's developer mode, as the camera used by your browser (the one from your computer) has a totally different resolution than a mobile device camera. This kind of test must be done in a real device."))))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"configure-the-callback-functions"},"Configure the callback functions"),(0,r.kt)("p",null,"One of the objects that we have to pass as an argument to the Capture Frame ",(0,r.kt)("em",{parentName:"p"},"rendering method")," is the ",(0,r.kt)("strong",{parentName:"p"},"callback function"),". This object must have the callback functions for both ",(0,r.kt)("em",{parentName:"p"},"success")," and ",(0,r.kt)("em",{parentName:"p"},"error")," cases, as the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  var callback = {\n    on: {\n      success: (obj) => {\n        console.log(obj.base64);\n        console.log(obj.encrypted);        \n      },\n      error: (error) => {\n        console.error(error)\n        //confira na aba "Configura\xe7\xf5es" sobre os tipos de erros\n      },\n      support: (supportMessage) => {\n        console.log(supportMessage);\n      }\n    }\n  };\n')),(0,r.kt)("p",null,"This object, with the callback functions, is required to the correct functioning of our SDK. If not correctly implemented (covering both ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," events) an exception will be raised. Learn more about error codes to exception handling ",(0,r.kt)("a",{parentName:"p",href:"../referencias#c%C3%B3digos-de-erro"},"at this guide"),".")),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"customize-the-capture-frame"},"Customize the capture frame"),(0,r.kt)("admonition",{title:"Optional step",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This step is optional but recommended.")),(0,r.kt)("p",null,"We offer you the possibility of customizing the capture frame using our SDK'S ",(0,r.kt)("strong",{parentName:"p"},"Theme Builder"),". To customize it, you just need to instantiate the class ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoThemeBuilder")," and use the method that corresponds to the property to be customized."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const unicoTheme = new UnicoThemeBuilder()\n.setColorSilhouetteSuccess("#0384fc")\n.setColorSilhouetteError("#D50000")\n.setColorSilhouetteNeutral("#fcfcfc")\n.setBackgroundColor("#dff1f5")\n.setColorText("#0384fc")\n.setBackgroundColorComponents("#0384fc")\n.setColorTextComponents("#dff1f5")\n.setBackgroundColorButtons("#0384fc")\n.setColorTextButtons("#dff1f5")\n.setBackgroundColorBoxMessage("#fff")\n.setColorTextBoxMessage("#000")\n.setHtmlPopupLoading(`<div style="position: absolute; top: 45%; right: 50%; transform:\ntranslate(50%, -50%); z-index: 10; text-align: center;">Carregando...</div>`)\n.build();\n')),(0,r.kt)("p",null,"Once the theme object is created, we have to pass it as an argument to the method ",(0,r.kt)("inlineCode",{parentName:"p"},"setTheme")," (That belongs to the ",(0,r.kt)("strong",{parentName:"p"},"Builder"),", instantiated ",(0,r.kt)("a",{parentName:"p",href:"#initialize-our-sdk"},"here"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"unicoCameraBuilder.setTheme(unicoTheme);\n"))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"configure-the-capture-mode-and-start-the-camera"},"Configure the capture mode and start the camera"),(0,r.kt)("p",null,"Finally, we must prepare the camera with the settings done until this step. To achieve this, we must instantiate our ",(0,r.kt)("strong",{parentName:"p"},"Builder")," using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"build()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const unicoCamera = unicoCameraBuilder.build();\n")),(0,r.kt)("p",null,"Next, we will help you to configure the capture mode. As explained in the ",(0,r.kt)("a",{parentName:"p",href:"#available-resources"},"section above"),", we offer you three capture modes. If you are ",(0,r.kt)("strong",{parentName:"p"},"not")," using the ",(0,r.kt)("strong",{parentName:"p"},"Smartlive with interaction - Facetec")," mode, in this step you will be able to choose between  ",(0,r.kt)("strong",{parentName:"p"},"Manual")," or ",(0,r.kt)("strong",{parentName:"p"},"Automatic")," capture modes."),(0,r.kt)("admonition",{title:"Tip Smartlive with interaction - Facetec",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are using the capture mode ",(0,r.kt)("strong",{parentName:"p"},"Smartlive with interaction - Facetec"),", this configuration might be irrelevant to you, as in this camera mode, we provide a standard experience that can't be customized."),(0,r.kt)("p",{parentName:"admonition"},"However, we still suggest you to configure it in your builder, because if you disable ",(0,r.kt)("strong",{parentName:"p"},"Smartlive with interaction - Facetec")," mode inside your ",(0,r.kt)("a",{parentName:"p",href:"#"},"Customer Area"),", you won\xb4t need to change your code.")),(0,r.kt)("p",null,"We must prepare the camera using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareSelfieCamera()")," that belongs to the ",(0,r.kt)("strong",{parentName:"p"},"Builder"),". This method must receive as arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON file with your credentials, generated at ",(0,r.kt)("a",{parentName:"li",href:"../como-comecar"},"this step"),"."),(0,r.kt)("li",{parentName:"ul"},"Capture mode:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SelfieCameraTypes.NORMAL")," to use the manual capture mode;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SelfieCameraTypes.SMART")," to use the automatic capture mode;")))),(0,r.kt)("p",null,"This method returns a ",(0,r.kt)("em",{parentName:"p"},"promise")," that once resolved, returns an object that will be used to finally open the camera through the method ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," receiving an argument the ",(0,r.kt)("strong",{parentName:"p"},"callback functions"),", configure at ",(0,r.kt)("a",{parentName:"p",href:"#configurar-fun%C3%A7%C3%B5es-de-callback"},"this step"),"."),(0,r.kt)("admonition",{title:"Optimizing your code",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To open the camera with a better performance you can call the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareSelfieCamera()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"open()")," in different moments.\nTake a look in this ",(0,r.kt)("a",{parentName:"p",href:"/recursos-adicionais/exemplos#projetos-web"},"POC using React and TypeScript"),". ")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"manual",label:"Captura Manual",default:!0,mdxType:"TabItem"},(0,r.kt)("h4",{id:"manual-capture-1"},"Manual Capture"),(0,r.kt)("p",null,"To use the manual capture mode, call the method ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareSelfieCamera")," passing as arguments the value ",(0,r.kt)("inlineCode",{parentName:"p"},"Unico.SelfieCameraTypes.NORMAL")," as well as your credentials, as the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\n  const cameraPromised = unicoCamera.prepareSelfieCamera("/services.json", SelfieCameraTypes.NORMAL);\n  \n  cameraPromised.then(cameraOpener => cameraOpener.open(callback));\n'))),(0,r.kt)(u.Z,{value:"automatico",label:"Captura Autom\xe1tica",mdxType:"TabItem"},(0,r.kt)("h4",{id:"automatic-capture-1"},"Automatic Capture"),(0,r.kt)("p",null,"To use the automatic capture mode, call the method ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareSelfieCamera")," passing as arguments the value ",(0,r.kt)("inlineCode",{parentName:"p"},"Unico.SelfieCameraTypes.SMART")," as well as your credentials, as the example below:"),(0,r.kt)("p",null,"You also have to load the computer vision models using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"setModelsPath"),", as explained ",(0,r.kt)("a",{parentName:"p",href:"#initialize-our-sdk"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  const cameraPromised = unicoCamera.prepareSelfieCamera("/services.json", SelfieCameraTypes.SMART);\n\n  cameraPromised.then(cameraOpener => cameraOpener.open(callback));\n'))))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"call-our-rest-apis"},"Call our REST APIs"),(0,r.kt)("p",null,"The image capture is just the first step of our journey. Now, you have to send the obtained ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," to our Rest APIs using one of our available flows, detailed in ",(0,r.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs"},"this page"),".")))),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, please get in touch with our support team at our ",(0,r.kt)("a",{parentName:"p",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"help center"),")"),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to ",(0,r.kt)("a",{parentName:"li",href:"#"},"capture image of documents")," with our SDK."),(0,r.kt)("li",{parentName:"ul"},"Learn more about our SDK in the ",(0,r.kt)("a",{parentName:"li",href:"#"},"Reference documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"Check the documentation of our ",(0,r.kt)("a",{parentName:"li",href:"#"},"REST APIs"),".")))}k.isMDXComponent=!0},26196:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_camerainteligente-a50c291a3e4d3b7d32a1f576a4ef76c7.png"},94288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_cameranormal-47c9ebec4e0e323b8954e8ab59839c74.png"}}]);