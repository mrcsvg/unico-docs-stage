"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[2413],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=c(o),p=n,g=m["".concat(i,".").concat(p)]||m[p]||s[p]||a;return o?r.createElement(g,l(l({ref:t},d),{},{components:o})):r.createElement(g,l({ref:t},d))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},85162:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(67294),n=o(86010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:o,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(a,l),hidden:o},t)}},65488:(e,t,o)=>{o.d(t,{Z:()=>p});var r=o(87462),n=o(67294),a=o(86010),l=o(72389),u=o(67392),i=o(7094),c=o(12466);const d="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,o;const{lazy:l,block:m,defaultValue:p,values:g,groupId:h,className:k}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:b.map((e=>{let{props:{value:t,label:o,attributes:r}}=e;return{value:t,label:o,attributes:r}})),f=(0,u.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===p?p:null!=(t=null!=p?p:null==(o=b.find((e=>e.props.default)))?void 0:o.props.value)?t:b[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:C}=(0,i.U)(),[x,T]=(0,n.useState)(N),_=[],{blockElementScrollPositionUntilNextRender:B}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==x&&v.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,o=_.indexOf(t),r=v[o].value;r!==x&&(B(t),T(r),null!=h&&C(h,String(r)))},M=e=>{var t;let o=null;switch(e.key){case"ArrowRight":{var r;const t=_.indexOf(e.currentTarget)+1;o=null!=(r=_[t])?r:_[0];break}case"ArrowLeft":{var n;const t=_.indexOf(e.currentTarget)-1;o=null!=(n=_[t])?n:_[_.length-1];break}}null==(t=o)||t.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},k)},v.map((e=>{let{value:t,label:o,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>_.push(e),onKeyDown:M,onFocus:w,onClick:w},l,{className:(0,a.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=o?o:t)}))),l?(0,n.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,l.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},3255:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var r=o(87462),n=(o(67294),o(3905)),a=o(65488),l=o(85162);const u={sidebar_label:"References",sidebar_position:8,hide_title:!1},i="References",c={unversionedId:"check/guias/android/referencias",id:"check/guias/android/referencias",title:"References",description:"About this guide",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/check/guias/android/referencias.md",sourceDirName:"check/guias/android",slug:"/check/guias/android/referencias",permalink:"/unico-docs-stage/en/docs/check/guias/android/referencias",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/guias/android/referencias.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"References",sidebar_position:8,hide_title:!1},sidebar:"checkSidebar",previous:{title:"Captura de documentos",permalink:"/unico-docs-stage/en/docs/check/guias/android/fluxos/captura-documentos"},next:{title:"Release Notes",permalink:"/unico-docs-stage/en/docs/check/guias/android/release-notes"}},d={},s=[{value:"About this guide",id:"about-this-guide",level:2},{value:"Capture Frame Customizations",id:"capture-frame-customizations",level:2},{value:"Available methods",id:"available-methods",level:3},{value:"Method <code>getColorSilhouetteSuccess()</code>",id:"method-getcolorsilhouettesuccess",level:4},{value:"Method <code>getColorSilhouetteError()</code>",id:"method-getcolorsilhouetteerror",level:4},{value:"Method <code>getColorSilhouetteNeutral()</code>",id:"method-getcolorsilhouetteneutral",level:4},{value:"Method <code>getColorBackground()</code>",id:"method-getcolorbackground",level:4},{value:"Method <code>getColorBoxMessage()</code>",id:"method-getcolorboxmessage",level:4},{value:"Method <code>getColorTextMessage()</code>",id:"method-getcolortextmessage",level:4},{value:"Method <code>getColorBackgroundPopupError()</code>",id:"method-getcolorbackgroundpopuperror",level:4},{value:"Method <code>getColorTextPopupError()</code>",id:"method-getcolortextpopuperror",level:4},{value:"Method <code>getColorBackgroundButtonPopupError()</code>",id:"method-getcolorbackgroundbuttonpopuperror",level:4},{value:"Method <code>getColorTextButtonPopupError()</code>",id:"method-getcolortextbuttonpopuperror",level:4},{value:"Method <code>getColorBackgroundTakePictureButton()</code>",id:"method-getcolorbackgroundtakepicturebutton",level:4},{value:"Method <code>getColorIconTakePictureButton()</code>",id:"method-getcoloricontakepicturebutton",level:4},{value:"Method <code>getColorBackgroundBottomDocument()</code>",id:"method-getcolorbackgroundbottomdocument",level:4},{value:"Method <code>getColorTextBottomDocument()</code>",id:"method-getcolortextbottomdocument",level:4},{value:"Customization examples",id:"customization-examples",level:3},{value:"Session timeouts",id:"session-timeouts",level:2},{value:"Timeout for face detection",id:"timeout-for-face-detection",level:3},{value:"Configuring general session timeout",id:"configuring-general-session-timeout",level:3},{value:"Method <code>setTimeoutSession</code>:",id:"method-settimeoutsession",level:4},{value:"Implementation example:",id:"implementation-example",level:4},{value:"ErrorBio Object",id:"errorbio-object",level:2},{value:"Available methods",id:"available-methods-1",level:3},{value:"Method <code>getCode()</code>:",id:"method-getcode",level:4},{value:"Method <code>getDescription()</code>",id:"method-getdescription",level:4},{value:"Error codes",id:"error-codes",level:2}],m={toc:s};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"references"},"References"),(0,n.kt)("h2",{id:"about-this-guide"},"About this guide"),(0,n.kt)("p",null,"This guide is a collection of methods and objects available in our Android SDK."),(0,n.kt)("admonition",{title:"We are in continuous improvement ;)",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We currently provide only some few objects and code snippets that may be helpful to your integration. In the future we might have an auto-generated API Reference.")),(0,n.kt)("h2",{id:"capture-frame-customizations"},"Capture Frame Customizations"),(0,n.kt)("p",null,"We offer you the possibility of customizing the capture frame in our SDK, in order to let customers to apply their own visual identities. You can find below an extensive list with all the available methods:"),(0,n.kt)("h3",{id:"available-methods"},"Available methods"),(0,n.kt)("h4",{id:"method-getcolorsilhouettesuccess"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorSilhouetteSuccess()")),(0,n.kt)("p",null,"Method used to customize the silhouette color in a successful capture."),(0,n.kt)("h4",{id:"method-getcolorsilhouetteerror"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorSilhouetteError()")),(0,n.kt)("p",null,"Method used to customize the silhouette color in case of an error in the capture process."),(0,n.kt)("h4",{id:"method-getcolorsilhouetteneutral"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorSilhouetteNeutral()")),(0,n.kt)("p",null,"Method used to customize the silhouette's neutral color."),(0,n.kt)("h4",{id:"method-getcolorbackground"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorBackground()")),(0,n.kt)("p",null,"Method used to customize the silhouette's background color."),(0,n.kt)("h4",{id:"method-getcolorboxmessage"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorBoxMessage()")),(0,n.kt)("p",null,"Method used to customize box background color."),(0,n.kt)("h4",{id:"method-getcolortextmessage"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorTextMessage()")),(0,n.kt)("p",null,"Method used to customize message's text color."),(0,n.kt)("h4",{id:"method-getcolorbackgroundpopuperror"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorBackgroundPopupError()")),(0,n.kt)("p",null,"Method used to customize popup's backgroud color."),(0,n.kt)("h4",{id:"method-getcolortextpopuperror"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorTextPopupError()")),(0,n.kt)("p",null,"Method used to customize popup's icons and text."),(0,n.kt)("h4",{id:"method-getcolorbackgroundbuttonpopuperror"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorBackgroundButtonPopupError()")),(0,n.kt)("p",null,"Method used to customize popup's button background color."),(0,n.kt)("h4",{id:"method-getcolortextbuttonpopuperror"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorTextButtonPopupError()")),(0,n.kt)("p",null,"Method used to customize popup's button text color."),(0,n.kt)("h4",{id:"method-getcolorbackgroundtakepicturebutton"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorBackgroundTakePictureButton()")),(0,n.kt)("p",null,'Method used to customize "Take Picture" background color.'),(0,n.kt)("h4",{id:"method-getcoloricontakepicturebutton"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorIconTakePictureButton()")),(0,n.kt)("p",null,'Method used to customize "Take Picture" button icon.'),(0,n.kt)("h4",{id:"method-getcolorbackgroundbottomdocument"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorBackgroundBottomDocument()")),(0,n.kt)("p",null,'Method used to customize "Capture Document" box background color. '),(0,n.kt)("h4",{id:"method-getcolortextbottomdocument"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getColorTextBottomDocument()")),(0,n.kt)("p",null,'Method used to customize  "Capture Document" box text color. '),(0,n.kt)("h3",{id:"customization-examples"},"Customization examples"),(0,n.kt)("p",null,"Below, you can find some customization examples using the methods above."),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IAcessoBioTheme unicoTheme = new IAcessoBioTheme() {\n    @Override\n    public Object getColorBackground() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorBoxMessage() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorTextMessage() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorBackgroundPopupError() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorTextPopupError() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorBackgroundButtonPopupError() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorTextButtonPopupError() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorBackgroundTakePictureButton() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorIconTakePictureButton() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorBackgroundBottomDocument() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorTextBottomDocument() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorSilhouetteSuccess() { \n        return R.color.your_color;\n    }\n\n    @Override\n    public Object getColorSilhouetteError() { \n        return R.color.your_color;\n    }\n};\n    \nacessoBioBuilder.setTheme(unicoTheme); \n"))),(0,n.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val unicoTheme = object: IAcessoBioTheme {\n\n    override fun getColorBackground() = R.color.your_color\n\n    override fun getColorBoxMessage() = R.color.your_color\n\n    override fun getColorTextMessage() = R.color.your_color\n\n    override fun getColorBackgroundPopupError() = R.color.your_color\n\n    override fun getColorTextPopupError() = R.color.your_color\n\n    override fun getColorBackgroundButtonPopupError() = R.color.your_color\n\n    override fun getColorTextButtonPopupError() = R.color.your_color\n\n    override fun getColorBackgroundTakePictureButton() = R.color.your_color\n\n    override fun getColorIconTakePictureButton() = R.color.your_color\n\n    override fun getColorBackgroundBottomDocument() = R.color.your_color\n\n    override fun getColorTextBottomDocument() = R.color.your_color\n\n    override fun getColorSilhouetteSuccess() = R.color.your_color\n\n    override fun getColorSilhouetteError() = R.color.your_color\n    \n    override fun getColorSilhouetteNeutral() = R.color.your_color\n}\n\nacessoBioBuilder.setTheme(unicoTheme)\n")))),(0,n.kt)("p",null,"You can also apply customizations using your file ",(0,n.kt)("strong",{parentName:"p"},"colors.xml"),", with the following codes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<color name="unico_color_background"> #YourColor </color> \x3c!-- Used to customize the background --\x3e\n<color name="unico_color_silhouette_success"> #YourColor </color>\x3c!-- Used to customize the silhouette color in a successful capture. --\x3e\n<color name="unico_color_silhouette_error"> #YourColor </color> \x3c!-- Used to customize the silhouette color in case of an error in the capture process. --\x3e\n<color name="unico_color_silhouette_neutral"> #YourColor </color> \x3c!-- Used to customize the silhouette\'s neutral color. --\x3e\n<color name="unico_color_box_message"> #YourColor </color> \x3c!-- Used to customize box background color. --\x3e\n<color name="unico_color_text_message"> #YourColor </color> \x3c!-- Used to customize message\'s text color. --\x3e\n<color name="unico_color_background_popup_error"> #YourColor </color> \x3c!-- Used to customize popup\'s background color. --\x3e\n<color name="unico_color_text_popup_error"> #YourColor </color>\x3c!-- Used to customize popup\'s icons and text. --\x3e\n<color name="unico_color_background_button_popup_error"> #YourColor </color> \x3c!-- Used to customize popup\'s button background color. --\x3e\n<color name="unico_color_text_button_popup_error"> #YourColor </color> \x3c!-- Used to customize popup\'s button text color. --\x3e\n<color name="unico_color_background_take_picture_button"> #YourColor </color> \x3c!-- Used to customize "Take Picture" background color. --\x3e\n<color name="unico_color_icon_take_picture_button"> #YourColor </color> \x3c!-- Used to customize "Take Picture" button icon. --\x3e\n<color name="unico_color_background_bottom_document"> #YourColor </color> \x3c!-- Used to customize "Capture Document" box background color.  --\x3e\n<color name="unico_color_text_bottom_document"> #YourColor </color> \x3c!-- Used to customize  "Capture Document" box text color.  --\x3e\n<color name="unico_color_button_cancel"> #YourColor </color>\x3c!-- Used to customize cancel color.  --\x3e\n')),(0,n.kt)("h2",{id:"session-timeouts"},"Session timeouts"),(0,n.kt)("h3",{id:"timeout-for-face-detection"},"Timeout for face detection"),(0,n.kt)("p",null,"The timeout for face detection is, by default, configure to 13 seconds. If the users are not able to capture their faces and the timeout for face detection is reached, the capture mode will be automatically changed to the manual mode (the one without the smart frame). This timeout configuration can not be changed."),(0,n.kt)("h3",{id:"configuring-general-session-timeout"},"Configuring general session timeout"),(0,n.kt)("h4",{id:"method-settimeoutsession"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"setTimeoutSession"),":"),(0,n.kt)("p",null,"With this method you can configure the general session timeout. The session timeout must be configured in seconds. "),(0,n.kt)("p",null,"This configuration is useful if you want to display a nice message to your users once the timeout is reached."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The standard timeout value is 40 seconds;"),(0,n.kt)("li",{parentName:"ul"},"The minimum timeout value is 40 seconds;")),(0,n.kt)("h4",{id:"implementation-example"},"Implementation example:"),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"acessoBioBuilder\n    .setTimeoutSession(40.5)\n"))),(0,n.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"acessoBioBuilder\n    .setTimeoutSession(40.5)\n")))),(0,n.kt)("h2",{id:"errorbio-object"},"ErrorBio Object"),(0,n.kt)("p",null,"This object is returned whenever an error happens inside our SDK. "),(0,n.kt)("h3",{id:"available-methods-1"},"Available methods"),(0,n.kt)("h4",{id:"method-getcode"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getCode()"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Method used to get the error code.")),(0,n.kt)("h4",{id:"method-getdescription"},"Method ",(0,n.kt)("inlineCode",{parentName:"h4"},"getDescription()")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Method used to get the error message.")),(0,n.kt)("h2",{id:"error-codes"},"Error codes"),(0,n.kt)("p",null,"The following list describes the possible error codes returned by our SDK."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Message"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73001"),(0,n.kt)("td",{parentName:"tr",align:null},"Context invalid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73002"),(0,n.kt)("td",{parentName:"tr",align:null},"Did not grant permission to open camera")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73003"),(0,n.kt)("td",{parentName:"tr",align:null},"The lest API is 21(LOLLIPOP)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73004"),(0,n.kt)("td",{parentName:"tr",align:null},"Could not find implementation interface callback iAcessoBioSelfie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73005"),(0,n.kt)("td",{parentName:"tr",align:null},"Could not find implementation interface callback iAcessoBioDocument")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73006"),(0,n.kt)("td",{parentName:"tr",align:null},"Unable to open camera on emulators")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73200"),(0,n.kt)("td",{parentName:"tr",align:null},"Please inform the json file name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73202"),(0,n.kt)("td",{parentName:"tr",align:null},"Unable to parse json file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73300"),(0,n.kt)("td",{parentName:"tr",align:null},"Unable to get unico authentication object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73301"),(0,n.kt)("td",{parentName:"tr",align:null},"Unable to parse object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73302"),(0,n.kt)("td",{parentName:"tr",align:null},"Could not find the unico token")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73303"),(0,n.kt)("td",{parentName:"tr",align:null},"Current host is not registered")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73400"),(0,n.kt)("td",{parentName:"tr",align:null},"Could not initialize camera")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73500"),(0,n.kt)("td",{parentName:"tr",align:null},"Unable to get session token, service response error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73501"),(0,n.kt)("td",{parentName:"tr",align:null},"Unable to parce object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73502"),(0,n.kt)("td",{parentName:"tr",align:null},"Could not get session token")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73701"),(0,n.kt)("td",{parentName:"tr",align:null},"Could not find active liveness import")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73702"),(0,n.kt)("td",{parentName:"tr",align:null},"Unable to initialize active liveness in production mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73703"),(0,n.kt)("td",{parentName:"tr",align:null},"Unable to get active liveness session")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73704"),(0,n.kt)("td",{parentName:"tr",align:null},"The user pressed the cancel button and did not complete the Session.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73705"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was not performed successfully and a FaceScan was not generated. In general, other statuses will be sent to the")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73706"),(0,n.kt)("td",{parentName:"tr",align:null},"The camera access is prevented because either the user has explicitly denied permission or the user's device is configured to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73707"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled due to the app being terminated, put to sleep, an OS notification, or the app was placed in the")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73708"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because device is in landscape mode. The user experience of devices in these orientations is poor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73709"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because device is in reverse portrait mode. The user experience of devices in these orientations is")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73710"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because the user was unable to complete a Session in the default allotted time or the timeout set")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73712"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled due to memory pressure.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73712"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because your App is not in production and requires a network connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73713"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because your key needs to be validated again.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73714"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because the developer-configured encryption key was not valid.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73715"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because not all guidance images were configured.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73716"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because SDK was unable to start the camera on this device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73717"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because the user was in a locked out state.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73718"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session was cancelled because of an unknown and unexpected error. SDK leverages a variety of iOS APIs including camera,")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73719"),(0,n.kt)("td",{parentName:"tr",align:null},"The Session cancelled because user pressed the Get Ready screen subtext message. Note: This functionality is not available by")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"73800"),(0,n.kt)("td",{parentName:"tr",align:null},"Could not build encrypted key")))))}p.isMDXComponent=!0}}]);