"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[6011],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a;const{lazy:i,block:m,defaultValue:d,values:h,groupId:f,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,l.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(t=null!=d?d:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:C}=(0,s.U)(),[N,S]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==N&&b.some((t=>t.value===e))&&S(e)}const A=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==N&&(E(t),S(n),null!=f&&C(f,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:A,onClick:A},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},17894:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{children:t,headingDepth:a}=e;const[r,o]=(0,n.useState)(null);return n.createElement("div",{className:"steps steps--h"+a},t)}},89845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var n=a(87462),r=(a(67294),a(3905)),o=a(94288),i=a(26196),l=a(17894),s=a(65488),u=a(85162);const c={sidebar_label:"Selfie Capture",sidebar_position:1},p="Selfie Capture",m={unversionedId:"check/guias/flutter/fluxos/captura-selfies",id:"check/guias/flutter/fluxos/captura-selfies",title:"Selfie Capture",description:"About this guide",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/check/guias/flutter/fluxos/captura-selfies.md",sourceDirName:"check/guias/flutter/fluxos",slug:"/check/guias/flutter/fluxos/captura-selfies",permalink:"/unico-docs-stage/en/docs/check/guias/flutter/fluxos/captura-selfies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/guias/flutter/fluxos/captura-selfies.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Selfie Capture",sidebar_position:1},sidebar:"checkSidebar",previous:{title:"Get started",permalink:"/unico-docs-stage/en/docs/check/guias/flutter/como-comecar"},next:{title:"Captura de documentos",permalink:"/unico-docs-stage/en/docs/check/guias/flutter/fluxos/captura-documentos"}},d={},h=[{value:"About this guide",id:"about-this-guide",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Available resources",id:"available-resources",level:2},{value:"Manual Capture",id:"manual-capture",level:3},{value:"Automatic Capture",id:"automatic-capture",level:3},{value:"Smartlive with interaction Facetec",id:"smartlive-with-interaction-facetec",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Initialize our SDK",id:"initialize-our-sdk",level:3},{value:"<code>onErrorUnico(UnicoError error)</code>",id:"onerrorunicounicoerror-error",level:4},{value:"<code>onUserClosedCameraManually()</code>",id:"onuserclosedcameramanually",level:4},{value:"<code>onSystemClosedCameraTimeoutSession()</code>",id:"onsystemclosedcameratimeoutsession",level:4},{value:"<code>onSystemChangedTypeCameraTimeoutFaceInference()</code>",id:"onsystemchangedtypecameratimeoutfaceinference",level:4},{value:"Configure capture mode",id:"configure-capture-mode",level:3},{value:"Smart Camera (Automatic Capture)",id:"smart-camera-automatic-capture",level:4},{value:"Modo manual",id:"modo-manual",level:4},{value:"Customize the capture frame",id:"customize-the-capture-frame",level:3},{value:"Open the camera",id:"open-the-camera",level:3},{value:"Implementing the listeners",id:"implementing-the-listeners",level:4},{value:"Method <code>onSuccessSelfie</code>",id:"method-onsuccessselfie",level:5},{value:"Method <code>onErrorSelfie</code>",id:"method-onerrorselfie",level:5},{value:"Abrir c\xe2mera",id:"abrir-c\xe2mera",level:4},{value:"Call our REST APIs",id:"call-our-rest-apis",level:3},{value:"Getting help",id:"getting-help",level:2},{value:"Next steps",id:"next-steps",level:2}],f={toc:h};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"selfie-capture"},"Selfie Capture"),(0,r.kt)("h2",{id:"about-this-guide"},"About this guide"),(0,r.kt)("p",null,"This guide was designed to assist you in the integration with our ",(0,r.kt)("strong",{parentName:"p"},"Flutter SDK")," in a fast and easy way. On this page, you will find some key concepts, implementation examples, as well as how to interact with our Biometric Engine REST APIs."),(0,r.kt)("admonition",{title:"Please note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this guide focuses on the image capture process. For more information about our REST APIs, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs/"},"REST API Reference"),".")),(0,r.kt)("p",null,"By following this guide, in few minutes, you will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to open user's camera and capture an image;"),(0,r.kt)("li",{parentName:"ul"},"Learn how to link the parameters returned by our SDK with our REST APIs;"),(0,r.kt)("li",{parentName:"ul"},"Learn how to deal with the data returned by our REST API;")),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"If you haven't done so already, follow our ",(0,r.kt)("a",{parentName:"p",href:"../como-comecar"},"Getting started")," guide to set up your account, get your API key and install our SDK. We strongly recommend you to check this SDK's available features in our ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"Overview page"),"."),(0,r.kt)("h2",{id:"available-resources"},"Available resources"),(0,r.kt)("p",null,"This SDK offers a component that will allow you to capture optimized images in your app, displaying your users a silhouette that help them to get correctly positioned for the image capture."),(0,r.kt)("p",null,"You can offer one of the following ",(0,r.kt)("strong",{parentName:"p"},"Selfie Capture")," modes in your app:"),(0,r.kt)("h3",{id:"manual-capture"},"Manual Capture"),(0,r.kt)("p",null,"In this kind of experience, our SDK displays a frame to help users to correctly position their faces. The users are then responsible for capturing the image by clicking on a button (also provided by our SDK)."),(0,r.kt)("p",null,"In this mode, our SDK does not perform any kind of validation of what is being captured. If the captured image does not contain, what is considered a biometrically valid face, the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," generated by our SDK will be rejected by our Biometric Engine REST API."),(0,r.kt)("img",{src:o.Z,alt:"Captura Manual",className:"imgCenter"}),(0,r.kt)("h3",{id:"automatic-capture"},"Automatic Capture"),(0,r.kt)("p",null,"In this kind of experience, we automatically identify the user's face through some computer vision algorithms and help them to correctly position themselves within the capture area. Once correctly positioned, we automatically capture the image."),(0,r.kt)("p",null,"By helping the users to correctly frame their faces, this option can dramatically reduce problems when sending the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," to our Biometric Engine REST API."),(0,r.kt)("img",{src:i.Z,alt:"Captura Manual",className:"imgCenter"}),(0,r.kt)("h3",{id:"smartlive-with-interaction-facetec"},"Smartlive with interaction Facetec"),(0,r.kt)("p",null,"In this kind of experience, users are instructed to perform some simple movements during the image capture. Those movements are then verified by some computer vision algorithms, in order to ensure that users are really in front of the phone. By requesting users to move in front of the camera, this kind of experience adds an extra security layer against frauds."),(0,r.kt)("p",null,"As in the Automatic Capture mode, the image here is captured without users pressing any button. This option can also dramatically reduce problems when sending the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," to our Biometric Engine REST API."),(0,r.kt)("admonition",{title:"Smartlive with interaction Facetec activation",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This functionality must be activated inside our Customer Portal, as explained ",(0,r.kt)("a",{parentName:"p",href:"../how-to-start#creating-or-editing-an-api-key"},"in this article"),".")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"Follow the steps below to have the full potential of our SDK embedded in your app in just some few minutes:"),(0,r.kt)(l.Z,{headingDepth:3,mdxType:"Steps"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("h3",{id:"initialize-our-sdk"},"Initialize our SDK"),(0,r.kt)("p",null,"First, you have to instantiate our builder, through the interface ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoCheckBuilder"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"dart",label:"Dart",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class _MyHomePageState extends State<MyHomePage> implements UnicoListener {\n\n    late UnicoCheckBuilder _unicoCheck;\n\n    \n      @override\n      void onErrorUnico(UnicoError error) {}\n\n      @override\n      void onUserClosedCameraManually() {}\n\n      @override\n      void onSystemChangedTypeCameraTimeoutFaceInference() {}\n\n      @override\n      void onSystemClosedCameraTimeoutSession() {}\n}\n")))),(0,r.kt)("p",null,"This implementation can be done with just some lines of code. All you need to do is to override our callback functions with your business rules. Each one of the callback functions will be invoked as detailed below:"),(0,r.kt)("h4",{id:"onerrorunicounicoerror-error"},(0,r.kt)("inlineCode",{parentName:"h4"},"onErrorUnico(UnicoError error)")),(0,r.kt)("p",null,"This callback function will be invoked whenever an implementation error happens. For example, when informing an incorrect or inexistent capture mode while configuring the camera."),(0,r.kt)("p",null,"Once invoked, this callback function will receive an object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorBio")," containing the error details. Learn more about the type ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorBio")," in our ",(0,r.kt)("a",{parentName:"p",href:"../referencias#unicoerror"},"Flutter SDK references document"),"."),(0,r.kt)("h4",{id:"onuserclosedcameramanually"},(0,r.kt)("inlineCode",{parentName:"h4"},"onUserClosedCameraManually()")),(0,r.kt)("p",null,'This callback function will be invoked whenever an user manually closes the camera. For example, when clicking on the "Back" button.'),(0,r.kt)("h4",{id:"onsystemclosedcameratimeoutsession"},(0,r.kt)("inlineCode",{parentName:"h4"},"onSystemClosedCameraTimeoutSession()")),(0,r.kt)("p",null,"This callback function will be invoked as soon as the session timout is reached (Without capturing any image)."),(0,r.kt)("admonition",{title:"Session Timeout",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The session timeout can be set with the ",(0,r.kt)("strong",{parentName:"p"},"builder")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeoutSession")," method. The session timeout must be configured in ",(0,r.kt)("strong",{parentName:"p"},"seconds"),".")),(0,r.kt)("h4",{id:"onsystemchangedtypecameratimeoutfaceinference"},(0,r.kt)("inlineCode",{parentName:"h4"},"onSystemChangedTypeCameraTimeoutFaceInference()")),(0,r.kt)("p",null,"This callback function will be invoked as soon as the timeout for face detection is reached (without detecting any face). In this case, the capture mode will be automatically changed to the manual mode (the one without the smart frame)."),(0,r.kt)("admonition",{title:"Be careful",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"All the above callback functions must be declared in your project (Even without any business rules). Otherwise, you won't be able to compile your project."))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"configure-capture-mode"},"Configure capture mode"),(0,r.kt)("p",null,"Next, we will help you to configure the capture mode. As explained in the ",(0,r.kt)("a",{parentName:"p",href:"captura-selfies#recursos-dispon%C3%ADveis"},"section above"),", we offer you three capture modes. If you are ",(0,r.kt)("strong",{parentName:"p"},"not")," using the ",(0,r.kt)("strong",{parentName:"p"},"Smartlive with interaction - Facetec")," mode, in this step you will be able to choose between",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Manual")," or ",(0,r.kt)("strong",{parentName:"p"},"Automatic")," capture modes."),(0,r.kt)("admonition",{title:"Tip Smartlive with interaction - Facetec",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are using the capture mode ",(0,r.kt)("strong",{parentName:"p"},"Smartlive with interaction - Facetec"),", this configuration might be irrelevant to you, as in this camera mode, we provide a standard experience that can't be customized."),(0,r.kt)("p",{parentName:"admonition"},"However, we still suggest you to configure it in your builder, because if you disable ",(0,r.kt)("strong",{parentName:"p"},"Smartlive with interaction - Facetec")," mode inside your ",(0,r.kt)("a",{parentName:"p",href:"#"},"Customer Area"),", you won\xb4t need to change your code.")),(0,r.kt)("p",null,"Our SDK is configured, by default, with both ",(0,r.kt)("strong",{parentName:"p"},"Smart Frame")," and ",(0,r.kt)("strong",{parentName:"p"},"Auto Capture")," enabled. To use the camera in manual mode, you have to disable both features using the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoCapture")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setSmartFrame"),". Below you can find out how to configure the camera mode:"),(0,r.kt)("h4",{id:"smart-camera-automatic-capture"},"Smart Camera (Automatic Capture)"),(0,r.kt)("p",null,"As stated above, our SDK is configured, by default, with both ",(0,r.kt)("strong",{parentName:"p"},"Smart Frame")," and ",(0,r.kt)("strong",{parentName:"p"},"Auto Capture")," enabled. If you decide to use both functionalities, you don't have to configure anything in this step."),(0,r.kt)("p",null,"If the camera configurations were previously modified in your app, you can restore it by using the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoCapture")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setSmartFrame"),":"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"dart",label:"Dart",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"\nUnicoCheckCameraOpener _opener = new UnicoCheck (this)\n    .setAutoCapture(autoCapture: true)\n    .setSmartFrame(smartFrame: true)\n    .build();\n\n")))),(0,r.kt)("admonition",{title:"Automatic Capture without Smart Frame.",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You are not able to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoCapture(autoCapture: true)")," together with ",(0,r.kt)("inlineCode",{parentName:"p"},"setSmartFrame(smartFrame: false)"),". In other words, it's not possible to use the Automatic Capture without the Smart Frame, as our component won't know the best time to capture the image.")),(0,r.kt)("h4",{id:"modo-manual"},"Modo manual"),(0,r.kt)("p",null,"As stated above, our SDK is configured, by default, with both ",(0,r.kt)("strong",{parentName:"p"},"Smart Frame")," and ",(0,r.kt)("strong",{parentName:"p"},"Auto Capture")," enabled. In this case, to use the manual mode, both configurations must be set to false using the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoCapture")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setSmartFrame"),":"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"dart",label:"Dart",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"{2-3}","{2-3}":!0},"UnicoCheckCameraOpener _opener = new UnicoCheck (this)\n    .setAutoCapture(autoCapture: false)\n    .setSmartFrame(smartFrame: false)\n    .build();\n")))),(0,r.kt)("admonition",{title:"Tip: Manual mode with Smart Frame",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the Smart Frame with the manual mode. In this case, we display a silhouette to the users, helping them to correctly frame themselves in order to enable the capture button. To enable this configuration, set AutoCapture to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and Smart Camera to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"customize-the-capture-frame"},"Customize the capture frame"),(0,r.kt)("admonition",{title:"Optional step",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This step is optional but recommended.")),(0,r.kt)("p",null,"We offer you the possibility of customizing the capture frame in our SDK. To customize it, you just need to use the method corresponding to the property to be customized and apply the change with the ",(0,r.kt)("inlineCode",{parentName:"p"},"setTheme()")," method."),(0,r.kt)("p",null,"Learn more about the method ",(0,r.kt)("inlineCode",{parentName:"p"},"setTheme()")," and the customization possibilities at our ",(0,r.kt)("a",{parentName:"p",href:"../referencias#customiza%C3%A7%C3%B5es"},"Flutter SDK reference documentation"),".")),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"open-the-camera"},"Open the camera"),(0,r.kt)("p",null,"Finally, let\xb4s open the camera! To make it easier, this last piece is splitted in some steps."),(0,r.kt)("h4",{id:"implementing-the-listeners"},"Implementing the listeners"),(0,r.kt)("p",null,"Through the implementation of ",(0,r.kt)("em",{parentName:"p"},"listeners"),", you can configure what will happen in your App in both ",(0,r.kt)("em",{parentName:"p"},"error")," or ",(0,r.kt)("em",{parentName:"p"},"success")," cases when capturing an image, using the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccessSelfie")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"onErrorSelfie"),", respectively."),(0,r.kt)("h5",{id:"method-onsuccessselfie"},"Method ",(0,r.kt)("inlineCode",{parentName:"h5"},"onSuccessSelfie")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid onSuccessSelfie(ResultCamera result) { }\n")),(0,r.kt)("p",null,"This method will be invoked whenever an image is successfully capture. Once invoked, this function will receive an object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultCamera")," that will be used latter to call our Rest APIs."),(0,r.kt)("h5",{id:"method-onerrorselfie"},"Method ",(0,r.kt)("inlineCode",{parentName:"h5"},"onErrorSelfie")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid onErrorSelfie(UnicoError error) { }\n")),(0,r.kt)("p",null,"This method will be invoked whenever an error happens while capturing an image. Once invoked, this callback function will receive an object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorBio")," containing the error details. Learn more about the type ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoError")," in our ",(0,r.kt)("a",{parentName:"p",href:"../referencias#errorbio"},"Flutter SDK references document"),"."),(0,r.kt)("admonition",{title:"Listeners implementation",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The implementation of these ",(0,r.kt)("em",{parentName:"p"},"listeners")," must be done inside an instance of the class ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoSelfie"),".")),(0,r.kt)("h4",{id:"abrir-c\xe2mera"},"Abrir c\xe2mera"),(0,r.kt)("p",null,"Then, we must open the camera using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"openCameraSelfie")," that receives as parameter the implementation of the class ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoSelfie")," together with the SDK credentials, configured in ",(0,r.kt)("a",{parentName:"p",href:"(../como-comecar)."},"this step"),"."),(0,r.kt)("p",null,"The following example show you how to configure the listeners and open the camera:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"dart",label:"Dart",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"_opener.openCameraSelfie(jsonFileName: androidJsonFileName, listener: this)\n")))),(0,r.kt)("p",null,"A successful response would include the object ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultCamera")," with the following attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base64"),": This attribute can be used in the case you want to display a preview of the captured image in your app;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"encrypted"),": This attribute must be sent to the ",(0,r.kt)("strong",{parentName:"li"},"unico check")," REST APIs as detailed ",(0,r.kt)("a",{parentName:"li",href:"#chamar-nossas-apis"},"here"),");  "))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"call-our-rest-apis"},"Call our REST APIs"),(0,r.kt)("p",null,"The image capture is just the first step of our journey. Now, you have to send the obtained ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," to our Rest APIs using one of our available flows, detailed in ",(0,r.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs"},"this page"),".")))),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, please get in touch with our support team at our ",(0,r.kt)("a",{parentName:"p",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"help center"),")"),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to ",(0,r.kt)("a",{parentName:"li",href:"#"},"capture image of documents")," with our SDK."),(0,r.kt)("li",{parentName:"ul"},"Learn more about our SDK in the ",(0,r.kt)("a",{parentName:"li",href:"#"},"Reference documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"Check the documentation of our ",(0,r.kt)("a",{parentName:"li",href:"#"},"REST APIs"),".")))}k.isMDXComponent=!0},26196:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_camerainteligente-a50c291a3e4d3b7d32a1f576a4ef76c7.png"},94288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_cameranormal-47c9ebec4e0e323b8954e8ab59839c74.png"}}]);