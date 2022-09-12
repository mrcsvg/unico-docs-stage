"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[2501],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>m});var t=o(67294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},u=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return o?t.createElement(k,i(i({ref:a},u),{},{components:o})):t.createElement(k,i({ref:a},u))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},85162:(e,a,o)=>{o.d(a,{Z:()=>i});var t=o(67294),n=o(86010);const r="tabItem_Ymn6";function i(e){let{children:a,hidden:o,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,i),hidden:o},a)}},65488:(e,a,o)=>{o.d(a,{Z:()=>m});var t=o(87462),n=o(67294),r=o(86010),i=o(72389),s=o(67392),l=o(7094),c=o(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var a,o;const{lazy:i,block:d,defaultValue:m,values:k,groupId:g,className:f}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:v.map((e=>{let{props:{value:a,label:o,attributes:t}}=e;return{value:a,label:o,attributes:t}})),N=(0,s.l)(b,((e,a)=>e.value===a.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===m?m:null!=(a=null!=m?m:null==(o=v.find((e=>e.props.default)))?void 0:o.props.value)?a:v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:S,setTabGroupChoices:O}=(0,l.U)(),[_,P]=(0,n.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:y}=(0,c.o5)();if(null!=g){const e=S[g];null!=e&&e!==_&&b.some((a=>a.value===e))&&P(e)}const j=e=>{const a=e.currentTarget,o=C.indexOf(a),t=b[o].value;t!==_&&(y(a),P(t),null!=g&&O(g,String(t)))},I=e=>{var a;let o=null;switch(e.key){case"ArrowRight":{var t;const a=C.indexOf(e.currentTarget)+1;o=null!=(t=C[a])?t:C[0];break}case"ArrowLeft":{var n;const a=C.indexOf(e.currentTarget)-1;o=null!=(n=C[a])?n:C[C.length-1];break}}null==(a=o)||a.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},f)},b.map((e=>{let{value:a,label:o,attributes:i}=e;return n.createElement("li",(0,t.Z)({role:"tab",tabIndex:_===a?0:-1,"aria-selected":_===a,key:a,ref:e=>C.push(e),onKeyDown:I,onFocus:j,onClick:j},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":_===a})}),null!=o?o:a)}))),i?(0,n.cloneElement)(v.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==_})))))}function m(e){const a=(0,i.Z)();return n.createElement(d,(0,t.Z)({key:String(a)},e))}},47018:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=o(87462),n=(o(67294),o(3905)),r=o(65488),i=o(85162);const s={sidebar_label:"Como come\xe7ar",sidebar_position:2,hide_title:!0},l="Como come\xe7ar",c={unversionedId:"check/guias/iOS/como-comecar",id:"check/guias/iOS/como-comecar",title:"Como come\xe7ar",description:"Pr\xe9 requisitos",source:"@site/docs/check/guias/iOS/como-comecar.md",sourceDirName:"check/guias/iOS",slug:"/check/guias/iOS/como-comecar",permalink:"/unico-docs-stage/docs/check/guias/iOS/como-comecar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/guias/iOS/como-comecar.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Como come\xe7ar",sidebar_position:2,hide_title:!0},sidebar:"checkSidebar",previous:{title:"Vis\xe3o geral",permalink:"/unico-docs-stage/docs/check/guias/iOS/overview"},next:{title:"Captura de Selfies",permalink:"/unico-docs-stage/docs/check/guias/iOS/fluxos/captura-selfies"}},u={},p=[{value:"Pr\xe9 requisitos",id:"pr\xe9-requisitos",level:2},{value:"Ambiente de desenvolvimento",id:"ambiente-de-desenvolvimento",level:3},{value:"Credeciais unico",id:"credeciais-unico",level:3},{value:"Configura\xe7\xe3o e instala\xe7\xe3o",id:"configura\xe7\xe3o-e-instala\xe7\xe3o",level:2},{value:"Utilizando o CocoaPods",id:"utilizando-o-cocoapods",level:3},{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",level:4},{value:"Utilizando o Swift Package Manager (SPM)",id:"utilizando-o-swift-package-manager-spm",level:3},{value:"Permiss\xf5es para utiliza\xe7\xe3o da c\xe2mera",id:"permiss\xf5es-para-utiliza\xe7\xe3o-da-c\xe2mera",level:3},{value:"Obtendo suas credenciais",id:"obtendo-suas-credenciais",level:2},{value:"Gerando as credenciais;",id:"gerando-as-credenciais",level:4},{value:"Embarcando as credenciais em seu projeto",id:"embarcando-as-credenciais-em-seu-projeto",level:4},{value:"Opc\xe3o 1: Implementa\xe7\xe3o do protocolo <code>AcessoBioConfigDataSource</code>",id:"opc\xe3o-1-implementa\xe7\xe3o-do-protocolo-acessobioconfigdatasource",level:4},{value:"Opc\xe3o 2: Embarcando o arquivo JSON",id:"opc\xe3o-2-embarcando-o-arquivo-json",level:4},{value:"Precisando de ajuda?",id:"precisando-de-ajuda",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],d={toc:p};function m(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"como-come\xe7ar"},"Como come\xe7ar"),(0,n.kt)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9 requisitos"),(0,n.kt)("h3",{id:"ambiente-de-desenvolvimento"},"Ambiente de desenvolvimento"),(0,n.kt)("p",null,"Antes de come\xe7ar voc\xea deve ter certeza de que seu ambiente de desenvolvimento esteja de acordo com os seguintes pr\xe9-requisitos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Possuir a vers\xe3o 13 ou superior do ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"XCode")," (IDE oficial de desenvolvimento Apple) instalado;"),(0,n.kt)("li",{parentName:"ul"},"Possuir a vers\xe3o do SDK iOS na vers\xe3o 11 ou superior;")),(0,n.kt)("p",null,"Caso use Swift em seu projeto:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Swift CI Compiler > 5.4.2"),(0,n.kt)("li",{parentName:"ul"},"Swift Syntax > 4.2")),(0,n.kt)("h3",{id:"credeciais-unico"},"Credeciais unico"),(0,n.kt)("p",null,"Para utilizar nossos SDKs voc\xea precisar\xe1 importar as credenciais unico (Client API Key) em seu projeto. Utilize ",(0,n.kt)("a",{parentName:"p",href:"/guias/iOS/como-comecar#obtendo-suas-credenciais"},"este")," passo-a-passo para gerar e importar as credenciais."),(0,n.kt)("h2",{id:"configura\xe7\xe3o-e-instala\xe7\xe3o"},"Configura\xe7\xe3o e instala\xe7\xe3o"),(0,n.kt)("h3",{id:"utilizando-o-cocoapods"},"Utilizando o CocoaPods"),(0,n.kt)("h4",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,n.kt)("p",null,"CocoaPods \xe9 um gerenciador de depend\xeancias para projetos Cocoa. Para instru\xe7\xf5es de uso e instala\xe7\xe3o, visite a documenta\xe7\xe3o do oficial do ",(0,n.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"cocoapods"),". Para integrar o SDK do ",(0,n.kt)("strong",{parentName:"p"},"unico check"),"  em seu projeto Xcode usando CocoaPods, siga os passos abaixo:"),(0,n.kt)("p",null,"Inclua o \xb4unicocheck-ios\xb4 em seu ",(0,n.kt)("em",{parentName:"p"},"Podfile"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pod \u2018unicocheck-ios\u2019\n")),(0,n.kt)("p",null,"Em seguida, basta utilizar o comando abaixo em seu terminal para instalar as depend\xeancias."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pod install --repo-update\n")),(0,n.kt)("h3",{id:"utilizando-o-swift-package-manager-spm"},"Utilizando o Swift Package Manager (SPM)"),(0,n.kt)("p",null,"O Swift Package Manager \xe9 uma ferramenta para gerenciar a distribui\xe7\xe3o do c\xf3digo Swift. Ele \xe9 integrado ao sistema de compila\xe7\xe3o Swift para automatizar o processo de download, compila\xe7\xe3o e vincula\xe7\xe3o de depend\xeancias. Para adicionar o SDK do ",(0,n.kt)("strong",{parentName:"p"},"unico check")," ao seu projeto, basta incluir a depend\xeancia em seu arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"Package.swift"),", conforme abaixo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Package.swift"',title:'"Package.swift"'},'dependencies: [\n    .package(url: "https://github.com/acesso-io/unico-check-ios.git", .upToNextMajor(from: "2.3.7"))\n]\n')),(0,n.kt)("h3",{id:"permiss\xf5es-para-utiliza\xe7\xe3o-da-c\xe2mera"},"Permiss\xf5es para utiliza\xe7\xe3o da c\xe2mera"),(0,n.kt)("p",null,"Para utilizar o m\xe9todo de abertura de c\xe2mera em seu projeto \xe9 necess\xe1rio adicionar as permiss\xf5es antes de compilar a sua aplica\xe7\xe3o. Segue o exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSCameraUsageDescription</key>\n<string>Camera usage description</string>\n")),(0,n.kt)("admonition",{title:"Aten\xe7\xe3o",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Se estiver executando o projeto em .xcodeproj \xe9 necess\xe1rio abrir o projeto em .xcworkspace!")),(0,n.kt)("h2",{id:"obtendo-suas-credenciais"},"Obtendo suas credenciais"),(0,n.kt)("p",null,"Para utilizar nossos SDKs voc\xea precisar\xe1 importar as credenciais unico (Client API Key) em seu projeto. Utilize o passo-a-passo a seguir para gerar e importar as credenciais."),(0,n.kt)("h4",{id:"gerando-as-credenciais"},"Gerando as credenciais;"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Acesse o portal do cliente da ",(0,n.kt)("strong",{parentName:"li"},"Unico")," com suas credenciais;"),(0,n.kt)("li",{parentName:"ol"},"No menu ",(0,n.kt)("em",{parentName:"li"},"Configura\xe7\xf5es")," navegue at\xe9 ",(0,n.kt)("em",{parentName:"li"},"Integra\xe7\xe3o")," e em seguida at\xe9 ",(0,n.kt)("em",{parentName:"li"},"API Key"),";"),(0,n.kt)("li",{parentName:"ol"},"Crie ou edite uma nova ",(0,n.kt)("inlineCode",{parentName:"li"},"API Key"),";"),(0,n.kt)("li",{parentName:"ol"},'Marque o campo "Utiliza liveness com intera\xe7\xe3o" como ',(0,n.kt)("strong",{parentName:"li"},"SIM")," caso queira habilitar a c\xe2mera interativa;")),(0,n.kt)("admonition",{title:"Smartlive com intera\xe7\xe3o",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Saiba mais sobre o Smartlive com intera\xe7\xe3o ",(0,n.kt)("a",{parentName:"p",href:"/conceitos-importantes#smartlive-com-intera%C3%A7%C3%A3o"},"aqui"))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},'Marque o campo "Utiliza autentica\xe7\xe3o segura na SDK" como ',(0,n.kt)("strong",{parentName:"li"},"SIM"),";"),(0,n.kt)("li",{parentName:"ol"},"Expanda a se\xe7\xe3o SDK iOS, adicione o nome de sua aplica\xe7\xe3o iOS e o Bundle ID;"),(0,n.kt)("li",{parentName:"ol"},"Salve as altera\xe7\xf5es.")),(0,n.kt)("h4",{id:"embarcando-as-credenciais-em-seu-projeto"},"Embarcando as credenciais em seu projeto"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Acesse o portal do cliente da ",(0,n.kt)("strong",{parentName:"li"},"Unico")," com suas credenciais;"),(0,n.kt)("li",{parentName:"ol"},"No menu ",(0,n.kt)("em",{parentName:"li"},"Configura\xe7\xf5es")," navegue at\xe9 ",(0,n.kt)("em",{parentName:"li"},"Integra\xe7\xe3o")," e em seguida at\xe9 ",(0,n.kt)("em",{parentName:"li"},"API Key"),";"),(0,n.kt)("li",{parentName:"ol"},"Ao lado da ",(0,n.kt)("inlineCode",{parentName:"li"},"API Key")," desejada, pressione o bot\xe3o de ",(0,n.kt)("strong",{parentName:"li"},"Download"),";"),(0,n.kt)("li",{parentName:"ol"},"Selecione a op\xe7\xe3o ",(0,n.kt)("strong",{parentName:"li"},"iOS"),";"),(0,n.kt)("li",{parentName:"ol"},'Clique em "',(0,n.kt)("strong",{parentName:"li"},"Gerar"),'" e automaticamente, uma nova aba ser\xe1 aberta contendo informa\xe7\xf5es de credenciais do projeto em formato JSON.')),(0,n.kt)("admonition",{title:"Bloqueador de Pop-ups",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Se nada acontecer, verifique o bloqueador de popups de seu navegador")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Atualmente temos duas op\xe7\xf5es para associar as informa\xe7\xf5es contidas no JSON ao projeto: ",(0,n.kt)("strong",{parentName:"li"},"Implementando o protocolo")," ",(0,n.kt)("inlineCode",{parentName:"li"},"AcessoBioConfigDataSource")," ou ",(0,n.kt)("strong",{parentName:"li"},"Embarcando o arquivo JSON"),".\nVeja abaixo: ")),(0,n.kt)("h4",{id:"opc\xe3o-1-implementa\xe7\xe3o-do-protocolo-acessobioconfigdatasource"},"Opc\xe3o 1: Implementa\xe7\xe3o do protocolo ",(0,n.kt)("inlineCode",{parentName:"h4"},"AcessoBioConfigDataSource")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Implemente o protocolo ",(0,n.kt)("inlineCode",{parentName:"li"},"AcessoBioConfigDataSource")," em sua classe.  "),(0,n.kt)("li",{parentName:"ol"},"Copie e cole as informa\xe7\xf5es contidas no JSON em seus respectivos m\xe9todos, como exemplificado abaixo: ")),(0,n.kt)("p",null,"Arquivo JSON: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "project_info":{\n        "project_number":"<YOUR_PROJECT_NUMBER>",\n        "project_id":"<YOUR_PROJECT_ID>"\n    },\n    "client_info":{\n        "mobilesdk_app_id":"<YOUR_MOBILE_SDK_APP_ID>",\n        "ios_client_info":{\n            "bundle_identifier":"<YOUR_MOBILE_BUNDLE_IDENTIFIER>"\n        }\n    },\n    "host_info":{\n        "host_info":"<YOUR_HOST_INFO>",\n        "host_key":"<YOUR_HOST_KEY>"\n    }\n}\n')),(0,n.kt)("p",null,"Implementa\xe7\xe3o de exemplo:"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"objectivec",label:"Objective-c",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'\n.h:\n#import <AcessoBio/AcessoBioManager.h>\n#import <AcessoBio/AcessoBio-Swift.h>\n\n@interface YourUnicoConfigClass : AcessoBioConfigDataSource {}\n\n@end\n\n.m:\n@implementation YourUnicoConfigClass\n\n- (NSString * _Nonnull)getBundleIdentifier {\n    return @"<YOUR_MOBILE_BUNDLE_IDENTIFIER>"\n}\n\n- (NSString * _Nonnull)getHostInfo {\n    return @"<YOUR_HOST_INFO>"\n}\n\n- (NSString * _Nonnull)getHostKey {\n    return @"<YOUR_HOST_KEY>"\n}\n\n- (NSString * _Nonnull)getMobileSdkAppId {\n    return @"<YOUR_MOBILE_SDK_APP_ID>"\n}\n\n- (NSString * _Nonnull)getProjectId {\n    return @"<YOUR_PROJECT_ID>"\n}\n\n- (NSString * _Nonnull)getProjectNumber {\n    return @"<YOUR_PROJECT_NUMBER>"\n}\n\n@end\n\n'))),(0,n.kt)(i.Z,{value:"swift",label:"Swift",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'\nimport AcessoBio\n\nclass YourUnicoConfigClass : AcessoBioConfigDataSource {\n    \n    func getProjectNumber() -> String {\n        return "<YOUR_PROJECT_NUMBER>"\n    }\n    \n    func getProjectId() -> String {\n        return "<YOUR_PROJECT_ID>"\n    }\n    \n    func getMobileSdkAppId() -> String {\n        return "<YOUR_MOBILE_SDK_APP_ID>"\n    }\n    \n    func getBundleIdentifier() -> String {\n        eturn "<YOUR_MOBILE_BUNDLE_IDENTIFIER>"\n    }\n    \n    func getHostInfo() -> String {\n        return "<YOUR_HOST_INFO>"\n    }\n    \n    func getHostKey() -> String {\n        return "<YOUR_HOST_KEYO>"\n    }\n}\n\n')))),(0,n.kt)("h4",{id:"opc\xe3o-2-embarcando-o-arquivo-json"},"Opc\xe3o 2: Embarcando o arquivo JSON"),(0,n.kt)("p",null,"Adicione o arquivo salvo na raiz do seu projeto."),(0,n.kt)("h2",{id:"precisando-de-ajuda"},"Precisando de ajuda?"),(0,n.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes op\xe7\xf5es para que voc\xea possa obter ajuda:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, voc\xea tamb\xe9m pode entrar em contato atrav\xe9s de nossa ",(0,n.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"Central de Ajuda"),";")),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("p",null,"\xd3timo! Voc\xea chegou at\xe9 aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementa\xe7\xe3o."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"fluxos/captura-selfies"},"Guia para implanta\xe7\xe3o de captura de Selfies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"fluxos/captura-selfies"},"Guia para implanta\xe7\xe3o de captura de documentos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"referencias"},"Referencias do SDK"),";")))}m.isMDXComponent=!0}}]);