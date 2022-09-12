"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[5224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Get started",sidebar_position:2,hide_title:!0},i="Get started",l={unversionedId:"check/guias/flutter/como-comecar",id:"check/guias/flutter/como-comecar",title:"Get started",description:"This page demonstrates how to configure your account to use our SDK, as well as how to install and configure it in your project.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/check/guias/flutter/como-comecar.md",sourceDirName:"check/guias/flutter",slug:"/check/guias/flutter/como-comecar",permalink:"/unico-docs-stage/en/docs/check/guias/flutter/como-comecar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/guias/flutter/como-comecar.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Get started",sidebar_position:2,hide_title:!0},sidebar:"checkSidebar",previous:{title:"Overview",permalink:"/unico-docs-stage/en/docs/check/guias/flutter/overview"},next:{title:"Selfie Capture",permalink:"/unico-docs-stage/en/docs/check/guias/flutter/fluxos/captura-selfies"}},p={},u=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Installation",id:"installation",level:2},{value:"Using Flutter CLI",id:"using-flutter-cli",level:3},{value:"Declare app permissions",id:"declare-app-permissions",level:3},{value:"Including dependencies",id:"including-dependencies",level:3},{value:"Get your credentials",id:"get-your-credentials",level:3},{value:"Add the credentials to your app",id:"add-the-credentials-to-your-app",level:3},{value:"Configure the credentials in your app",id:"configure-the-credentials-in-your-app",level:4},{value:"Getting help",id:"getting-help",level:2},{value:"Next steps",id:"next-steps",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-started"},"Get started"),(0,a.kt)("p",null,"This page demonstrates how to configure your account to use our SDK, as well as how to install and configure it in your project. "),(0,a.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,a.kt)("p",null,"Before you start, make sure that your development environment meets the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/get-started/install"},"Flutter Developer SDK")," installed;")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"using-flutter-cli"},"Using Flutter CLI"),(0,a.kt)("p",null,"Use the following command in flutter cli to add our SDK to your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter pub add unico_check\n")),(0,a.kt)("p",null,"The command above will add the following line in your ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"pubspec.yaml","pubspec.yaml":!0},"dependencies:\n  unico_check: ^2.0.2\n")),(0,a.kt)("admonition",{title:"Manually get the packages",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The command ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter pub add unico_check")," implicitly triggers command ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter pub get"),". If package is not correctly installed, make sure that you have ",(0,a.kt)("inlineCode",{parentName:"p"},"unico_check")," in you ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),"file, and manually run ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter pub get"),".")),(0,a.kt)("h3",{id:"declare-app-permissions"},"Declare app permissions"),(0,a.kt)("p",null,"In order to use user's camera, include the following user permissions in your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSCameraUsageDescription</key>\n<string>Camera usage description</string>\n")),(0,a.kt)("h3",{id:"including-dependencies"},"Including dependencies"),(0,a.kt)("p",null,"Now you just need to correctly import our SDK into your project. You just need to import it in your Dart file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart"',title:'"main.dart"'},"\nimport 'package:unico_check/unico_check.dart';\n\n")),(0,a.kt)("h3",{id:"get-your-credentials"},"Get your credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to your Customer Area;"),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("em",{parentName:"li"},"Configura\xe7\xf5es")," (Configurations), then ",(0,a.kt)("em",{parentName:"li"},"Integra\xe7\xe3o")," (Integrations) and finally to ",(0,a.kt)("em",{parentName:"li"},"API Key"),";"),(0,a.kt)("li",{parentName:"ol"},"Generate or edit an existing ",(0,a.kt)("inlineCode",{parentName:"li"},"API Key"),";"),(0,a.kt)("li",{parentName:"ol"},"If you want to use the ",(0,a.kt)("strong",{parentName:"li"},"Smartlive with interaction"),' functionality in your app, check if the field "',(0,a.kt)("strong",{parentName:"li"},"Utiliza liveness com intera\xe7\xe3o"),'" is enabled (this field must be showing you the word "SIM"). Otherwise, contact our support team and request its activation.')),(0,a.kt)("admonition",{title:"Smartlive with interaction",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Learn more about ",(0,a.kt)("strong",{parentName:"p"},"Smartlive with interaction")," in our ",(0,a.kt)("a",{parentName:"p",href:"/conceitos-importantes#smartlive-com-intera%C3%A7%C3%A3o"},"key concepts section"),".")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"SIM"),' (Yes) in the field "Utiliza autentica\xe7\xe3o segura na SDK" (Asking if use secure authentication in SDK);'),(0,a.kt)("li",{parentName:"ol"},"Expand the Android iOS section and add your Android application name and Bundle ID;"),(0,a.kt)("li",{parentName:"ol"},"Save your changes."),(0,a.kt)("li",{parentName:"ol"},"Repeat the procedures 1 to 7 to create another key to your Android App.")),(0,a.kt)("h3",{id:"add-the-credentials-to-your-app"},"Add the credentials to your app"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to your Customer Area;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("em",{parentName:"p"},"Configura\xe7\xf5es")," (Configurations), then ",(0,a.kt)("em",{parentName:"p"},"Integra\xe7\xe3o")," (Integrations) and finally to ",(0,a.kt)("em",{parentName:"p"},"API Key"),";")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Download")," option in the desired option;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the option ",(0,a.kt)("strong",{parentName:"p"},"iOS"),";")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "',(0,a.kt)("strong",{parentName:"p"},"Gerar"),'" (Generate) and automatically a new tab will open in your browser containing project information in JSON format.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the content of this new tab in a ",(0,a.kt)("strong",{parentName:"p"},"JSON")," file;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Repeat the procedures 1 to 6 to your Android App.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Keep the files to add it in your project latter. We will tell you when and how to add it along our guides."))),(0,a.kt)("admonition",{title:"Problems with pop-up blockers",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You may need to temporarily disable your pop-up blocker to see the download window.")),(0,a.kt)("h4",{id:"configure-the-credentials-in-your-app"},"Configure the credentials in your app"),(0,a.kt)("p",null,"To configure your credentials, use the data from the ",(0,a.kt)("strong",{parentName:"p"},"JSON")," files downloaded in the step above to instantiate the interface ",(0,a.kt)("inlineCode",{parentName:"p"},"UnicoCheck"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON file with your credentials"',title:'"JSON',file:!0,with:!0,your:!0,'credentials"':!0},'{\n    "project_info":{\n        "project_number":"<YOUR_PROJECT_NUMBER>",\n        "project_id":"<YOUR_PROJECT_ID>"\n    },\n    "client_info":{\n        "mobilesdk_app_id":"<YOUR_MOBILE_SDK_APP_ID>",\n        "ios_client_info":{\n            "bundle_identifier":"<YOUR_MOBILE_BUNDLE_IDENTIFIER>"\n        }\n    },\n    "host_info":{\n        "host_info":"<YOUR_HOST_INFO>",\n        "host_key":"<YOUR_HOST_KEY>"\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Implementation example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart"',title:'"main.dart"'},'// highlight-start\n  final _configIos = UnicoConfig(\n      getProjectNumber: "Your ProjectNumber Ios",\n      getProjectId: "Your ProjectId Ios",\n      getMobileSdkAppId: "Your MobileSdkAppId Ios",\n      getBundleIdentifier: "Your BundleIdentifier Ios",\n      getHostInfo: "Your HostInfo Ios",\n      getHostKey: "Your HostKey Ios");\n  // highlight-end    \n\n  // highlight-start\n  final _configAndroid = UnicoConfig(\n      getProjectNumber: "Your ProjectNumber Android",\n      getProjectId: "Your ProjectId Android",\n      getMobileSdkAppId: "Your MobileSdkAppId Android",\n      getBundleIdentifier: "Your BundleIdentifier Android",\n      getHostInfo: "Your HostInfo Android",\n      getHostKey: "Your HostKey Android");\n// highlight-end\n\n@override\n  void initState() {\n    super.initState();\n    initUnicoCamera();\n    configUnicoCamera();\n  }\n\n  void initUnicoCamera() {\n    _unicoCheck = new UnicoCheck(\n        listener: this,\n            // highlight-start        \n        unicoConfigIos: _configIos,\n        unicoConfigAndroid: _configAndroid);\n        // highlight-end\n  }\n')),(0,a.kt)("h2",{id:"getting-help"},"Getting help"),(0,a.kt)("p",null,"We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, get in touch with our support team at our ",(0,a.kt)("a",{parentName:"p",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"help center"),")"),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Great! You've come this far =). Next, we'll show you how to develop the image capture flows: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"fluxos/captura-selfies"},"Guia para implanta\xe7\xe3o de captura de Selfies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"fluxos/captura-documentos"},"Guia para implanta\xe7\xe3o de captura de documentos"))))}c.isMDXComponent=!0}}]);