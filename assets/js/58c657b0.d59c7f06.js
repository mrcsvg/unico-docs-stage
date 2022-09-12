"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[3825],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>p});var t=o(67294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var m=t.createContext({}),l=function(e){var a=t.useContext(m),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},d=function(e){var a=l(e.components);return t.createElement(m.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(o),p=r,f=c["".concat(m,".").concat(p)]||c[p]||u[p]||n;return o?t.createElement(f,s(s({ref:a},d),{},{components:o})):t.createElement(f,s({ref:a},d))}));function p(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=c;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<n;l++)s[l]=o[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},85162:(e,a,o)=>{o.d(a,{Z:()=>s});var t=o(67294),r=o(86010);const n="tabItem_Ymn6";function s(e){let{children:a,hidden:o,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,s),hidden:o},a)}},65488:(e,a,o)=>{o.d(a,{Z:()=>p});var t=o(87462),r=o(67294),n=o(86010),s=o(72389),i=o(67392),m=o(7094),l=o(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var a,o;const{lazy:s,block:c,defaultValue:p,values:f,groupId:k,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((e=>{let{props:{value:a,label:o,attributes:t}}=e;return{value:a,label:o,attributes:t}})),h=(0,i.l)(b,((e,a)=>e.value===a.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const x=null===p?p:null!=(a=null!=p?p:null==(o=g.find((e=>e.props.default)))?void 0:o.props.value)?a:g[0].props.value;if(null!==x&&!b.some((e=>e.value===x)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:N}=(0,m.U)(),[A,S]=(0,r.useState)(x),y=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=k){const e=C[k];null!=e&&e!==A&&b.some((a=>a.value===e))&&S(e)}const T=e=>{const a=e.currentTarget,o=y.indexOf(a),t=b[o].value;t!==A&&(E(a),S(t),null!=k&&N(k,String(t)))},D=e=>{var a;let o=null;switch(e.key){case"ArrowRight":{var t;const a=y.indexOf(e.currentTarget)+1;o=null!=(t=y[a])?t:y[0];break}case"ArrowLeft":{var r;const a=y.indexOf(e.currentTarget)-1;o=null!=(r=y[a])?r:y[y.length-1];break}}null==(a=o)||a.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":c},v)},b.map((e=>{let{value:a,label:o,attributes:s}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:A===a?0:-1,"aria-selected":A===a,key:a,ref:e=>y.push(e),onKeyDown:D,onFocus:T,onClick:T},s,{className:(0,n.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":A===a})}),null!=o?o:a)}))),s?(0,r.cloneElement)(g.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==A})))))}function p(e){const a=(0,s.Z)();return r.createElement(c,(0,t.Z)({key:String(a)},e))}},17894:(e,a,o)=>{o.d(a,{Z:()=>r});var t=o(67294);const r=function(e){let{children:a,headingDepth:o}=e;const[r,n]=(0,t.useState)(null);return t.createElement("div",{className:"steps steps--h"+o},a)}},72641:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>c,toc:()=>f});var t=o(87462),r=(o(67294),o(3905)),n=o(94288),s=o(26196),i=o(17894),m=o(65488),l=o(85162);const d={sidebar_label:"Captura de Selfies",sidebar_position:1},u="Captura de Selfies",c={unversionedId:"check/guias/flutter/fluxos/captura-selfies",id:"check/guias/flutter/fluxos/captura-selfies",title:"Captura de Selfies",description:"Sobre este guia",source:"@site/docs/check/guias/flutter/fluxos/captura-selfies.md",sourceDirName:"check/guias/flutter/fluxos",slug:"/check/guias/flutter/fluxos/captura-selfies",permalink:"/unico-docs-stage/docs/check/guias/flutter/fluxos/captura-selfies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/guias/flutter/fluxos/captura-selfies.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Captura de Selfies",sidebar_position:1},sidebar:"checkSidebar",previous:{title:"Como come\xe7ar",permalink:"/unico-docs-stage/docs/check/guias/flutter/como-comecar"},next:{title:"Captura de documentos",permalink:"/unico-docs-stage/docs/check/guias/flutter/fluxos/captura-documentos"}},p={},f=[{value:"Sobre este guia",id:"sobre-este-guia",level:2},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",level:2},{value:"Recursos dispon\xedveis",id:"recursos-dispon\xedveis",level:2},{value:"Captura Manual",id:"captura-manual",level:3},{value:"Captura Autom\xe1tica",id:"captura-autom\xe1tica",level:3},{value:"Smartlive com intera\xe7\xe3o Facetec",id:"smartlive-com-intera\xe7\xe3o-facetec",level:3},{value:"Implementa\xe7\xe3o",id:"implementa\xe7\xe3o",level:2},{value:"Inicializar nosso SDK",id:"inicializar-nosso-sdk",level:3},{value:"<code>onErrorUnico(UnicoError error)</code>",id:"onerrorunicounicoerror-error",level:4},{value:"<code>onUserClosedCameraManually()</code>",id:"onuserclosedcameramanually",level:4},{value:"<code>onSystemClosedCameraTimeoutSession()</code>",id:"onsystemclosedcameratimeoutsession",level:4},{value:"<code>onSystemChangedTypeCameraTimeoutFaceInference()</code>",id:"onsystemchangedtypecameratimeoutfaceinference",level:4},{value:"Configurar modo da c\xe2mera",id:"configurar-modo-da-c\xe2mera",level:3},{value:"Modo inteligente (Captura autom\xe1tica - Smart Camera)",id:"modo-inteligente-captura-autom\xe1tica---smart-camera",level:4},{value:"Modo manual",id:"modo-manual",level:4},{value:"Customizar o frame de captura",id:"customizar-o-frame-de-captura",level:3},{value:"Efetuar abertura da c\xe2mera",id:"efetuar-abertura-da-c\xe2mera",level:3},{value:"Implementar listeners para eventos da c\xe2mera",id:"implementar-listeners-para-eventos-da-c\xe2mera",level:4},{value:"M\xe9todo <code>onSuccessSelfie</code>",id:"m\xe9todo-onsuccessselfie",level:5},{value:"M\xe9todo <code>onErrorSelfie</code>",id:"m\xe9todo-onerrorselfie",level:5},{value:"Abrir c\xe2mera",id:"abrir-c\xe2mera",level:4},{value:"Chamar nossas APIs",id:"chamar-nossas-apis",level:3},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],k={toc:f};function v(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},k,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"captura-de-selfies"},"Captura de Selfies"),(0,r.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,r.kt)("p",null,"Este guia foi elaborado para ajud\xe1-lo a integrar nosso SDK Flutter de forma r\xe1pida e f\xe1cil.\nBuscamos trazer conceitos b\xe1sicos, exemplos de implementa\xe7\xe3o dos SDKs e tamb\xe9m de como interagir com as APIs REST de nosso motor biom\xe9trico."),(0,r.kt)("admonition",{title:"Vale lembrar",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Vale lembrar que este guia foca no processo de captura de imagens. Caso esteja buscando informa\xe7\xf5es sobre as APIs REST do ",(0,r.kt)("strong",{parentName:"p"},"Unico Check"),", sugerimos que visite nosso ",(0,r.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs/"},"API Reference"),", nosso guia de APIs ou nossa p\xe1gina de p\xe1gina ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"Vis\xe3o Geral"),".")),(0,r.kt)("p",null,"Atrav\xe9s deste guia, em poucos minutos voc\xea ser\xe1 capaz de:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implementar a abertura da c\xe2mera e captura de imagens;"),(0,r.kt)("li",{parentName:"ul"},"Entender como manipular os dados de retorno;"),(0,r.kt)("li",{parentName:"ul"},"Entender como utilizar o retorno de nosso SDK com nossas APIs;")),(0,r.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,r.kt)("p",null,"Certifique-se que voc\xea seguiu nosso passo-a-passo para instala\xe7\xe3o e importa\xe7\xe3o de nosso SDK atrav\xe9s ",(0,r.kt)("a",{parentName:"p",href:"../como-comecar"},"deste guia"),". \xc9 importante tamb\xe9m ter em conta as funcionalidades dispon\xedveis neste SDK, como explicado na p\xe1gina de ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"Vis\xe3o Geral")," deste SDK."),(0,r.kt)("h2",{id:"recursos-dispon\xedveis"},"Recursos dispon\xedveis"),(0,r.kt)("p",null,"Nosso SDK oferece um componente para captura de imagem contendo uma silhueta que ajuda o usu\xe1rio a se posicionar de forma correta para a foto. A captura da imagem para o captura de Selfies pode ser feita de duas formas, descritas ao longo desse guia. Sendo elas:"),(0,r.kt)("h3",{id:"captura-manual"},"Captura Manual"),(0,r.kt)("p",null,"Neste tipo de experi\xeancia existe um frame de captura para auxiliar o usu\xe1rio a posicionar sua face corretamente. Ap\xf3s se posicionar corretamente, o usu\xe1rio deve clicar em um bot\xe3o para capturar a imagem. "),(0,r.kt)("p",null,"A SDK n\xe3o efetua nenhum tipo de valida\xe7\xe3o do que est\xe1 sendo capturado. Caso a imagem capturada n\xe3o possua uma face biom\xe9tricamente v\xe1lida, o ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," ser\xe1 recusado pelas APIs de nosso motor de biometria."),(0,r.kt)("img",{src:n.Z,alt:"Captura Manual",className:"imgCenter"}),(0,r.kt)("h3",{id:"captura-autom\xe1tica"},"Captura Autom\xe1tica"),(0,r.kt)("p",null,"Neste tipo de experi\xeancia, identificamos a face do usu\xe1rio automaticamente atrav\xe9s de algoritmos de vis\xe3o computacional e o auxiliamos para que se posicione de forma correta dentro da \xe1rea de captura. Ap\xf3s se posicionar corretamente, capturamos a imagem de forma autom\xe1tica."),(0,r.kt)("p",null,"Por ajudar o usu\xe1rio a enquadrar sua face na \xe1rea de captura, esta op\xe7\xe3o pode diminuir problemas ao enviar o ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," \xe0s APIs de nosso motor biom\xe9trico."),(0,r.kt)("img",{src:s.Z,alt:"Captura Manual",className:"imgCenter"}),(0,r.kt)("h3",{id:"smartlive-com-intera\xe7\xe3o-facetec"},"Smartlive com intera\xe7\xe3o Facetec"),(0,r.kt)("p",null,"Neste tipo de experi\xeancia o usu\xe1rio \xe9 instru\xeddo a realizar alguns movimentos simples durante a captura, que s\xe3o acompanhados por algoritmos de vis\xe3o computacional com o intuito de garantir que ele est\xe1 tirando foto naquele momento."),(0,r.kt)("p",null,"Por exigir a movimenta\xe7\xe3o do usu\xe1rio este tipo de captura possui uma camada extra de seguran\xe7a contra fraudes.\nTal como na Captura Autom\xe1tica a imagem \xe9 capturada sem a necessidade do usu\xe1rio pressionar um bot\xe3o. Desta forma tende a diminuir problemas ao enviar o ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," \xe0s APIs de nosso motor biom\xe9trico."),(0,r.kt)("admonition",{title:"Ativa\xe7\xe3o do Smartlive com intera\xe7\xe3o Facetec",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Esta funcionalidade deve ser ativada atrav\xe9s do portal do cliente, como explicado ",(0,r.kt)("a",{parentName:"p",href:"../como-comecar#criando-ou-editando-uma-api-key"},"neste artigo"),".")),(0,r.kt)("h2",{id:"implementa\xe7\xe3o"},"Implementa\xe7\xe3o"),(0,r.kt)("p",null,"Ao seguir este passo-a-passo, em poucos minutos voc\xea ter\xe1 todo o potencial de nosso SDK embarcado em sua aplica\xe7\xe3o Flutter."),(0,r.kt)(i.Z,{headingDepth:3,mdxType:"Steps"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("h3",{id:"inicializar-nosso-sdk"},"Inicializar nosso SDK"),(0,r.kt)("p",null,"Para iniciar, crie uma inst\xe2ncia do builder (gerado atrav\xe9s da interface ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoCheckBuilder"),", fornecendo como par\xe2metro o ",(0,r.kt)("em",{parentName:"p"},"contexto")," em quest\xe3o e a implementa\xe7\xe3o da classe ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoListener"),". "),(0,r.kt)("p",null,"A implementa\xe7\xe3o dessa classe \xe9 bem simples e pode ser feita com poucas linhas de c\xf3digo. Tudo que precisa fazer \xe9 sobrescrever nossos m\xe9todos de callback com as l\xf3gicas de neg\xf3cio de sua aplica\xe7\xe3o."),(0,r.kt)(m.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"dart",label:"Dart",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class _MyHomePageState extends State<MyHomePage> implements UnicoListener {\n\n    late UnicoCheckBuilder _unicoCheck;\n\n    \n      @override\n      void onErrorUnico(UnicoError error) {}\n\n      @override\n      void onUserClosedCameraManually() {}\n\n      @override\n      void onSystemChangedTypeCameraTimeoutFaceInference() {}\n\n      @override\n      void onSystemClosedCameraTimeoutSession() {}\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implementa\xe7\xe3o das fun\xe7\xf5es de callback")),(0,r.kt)("p",null,"Note que, conforme o exemplo anterior, o trabalho de implementa\xe7\xe3o da classe UnicoListener \xe9, em grande parte, a configura\xe7\xe3o dos m\xe9todos de callback. Cada m\xe9todo ser\xe1 chamado em uma situa\xe7\xe3o espec\xedfica de retorno de nosso SDK, como detalhado abaixo. "),(0,r.kt)("p",null,"Basta sobrescrever os m\xe9todos exemplificados no passo anterior com as l\xf3gicas de neg\xf3cio de sua aplica\xe7\xe3o:"),(0,r.kt)("h4",{id:"onerrorunicounicoerror-error"},(0,r.kt)("inlineCode",{parentName:"h4"},"onErrorUnico(UnicoError error)")),(0,r.kt)("p",null,"Este m\xe9todo ser\xe1 invocado sempre quando qualquer erro de implementa\xe7\xe3o ocorrer ao utilizar algum de nossos m\xe9todos, como por exemplo, ao informar um tipo de documento incorreto para a funcionalidade de captura de documentos."),(0,r.kt)("p",null,"Ao ser invocado, o m\xe9todo receber\xe1 um par\xe2metro do tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoError")," que contem detalhes do erro. Saiba mais sobre o tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoError")," em nosso documento de ",(0,r.kt)("a",{parentName:"p",href:"../referencias#unicoerror"},"refer\xeancias")," de nosso SDK."),(0,r.kt)("h4",{id:"onuserclosedcameramanually"},(0,r.kt)("inlineCode",{parentName:"h4"},"onUserClosedCameraManually()")),(0,r.kt)("p",null,'Este m\xe9todo ser\xe1 invocado sempre quando o usu\xe1rio fechar a c\xe2mera de forma manual, como por exemplo, ao clicar no bot\xe3o "Voltar".'),(0,r.kt)("h4",{id:"onsystemclosedcameratimeoutsession"},(0,r.kt)("inlineCode",{parentName:"h4"},"onSystemClosedCameraTimeoutSession()")),(0,r.kt)("p",null,"Este m\xe9todo ser\xe1 invocado assim que o tempo m\xe1ximo de sess\xe3o for atingido (Sem capturar nenhuma imagem)."),(0,r.kt)("admonition",{title:"Tempo m\xe1ximo da sess\xe3o",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"O tempo m\xe1ximo da sess\xe3o pode ser configurado em nosso ",(0,r.kt)("strong",{parentName:"p"},"builder")," atrav\xe9s do m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeoutSession"),". Este m\xe9todo deve receber o tempo m\xe1ximo da sess\xe3o em ",(0,r.kt)("strong",{parentName:"p"},"segundos"),".")),(0,r.kt)("h4",{id:"onsystemchangedtypecameratimeoutfaceinference"},(0,r.kt)("inlineCode",{parentName:"h4"},"onSystemChangedTypeCameraTimeoutFaceInference()")),(0,r.kt)("p",null,"Este m\xe9todo ser\xe1 invocado assim que o tempo m\xe1ximo para detec\xe7\xe3o da face de um usu\xe1rio for atingido (sem ter nada detectado). Neste caso, o modo de c\xe2mera \xe9 alterado automaticamente para o modo manual (sem o smart frame)."),(0,r.kt)("admonition",{title:"Aten\xe7\xe3o",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Todos os m\xe9todos acima devem ser criados da forma indicada em seu projeto (mesmo que sem nenhuma l\xf3gica). Caso contr\xe1rio, o projeto n\xe3o compilar\xe1 com sucesso."))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"configurar-modo-da-c\xe2mera"},"Configurar modo da c\xe2mera"),(0,r.kt)("p",null,"Em seguida, iremos configurar o modo de captura da camera. Como explicamos ",(0,r.kt)("a",{parentName:"p",href:"captura-selfies#recursos-dispon%C3%ADveis"},"acima")," existem tr\xeas modos de captura dispon\xedveis. Caso ",(0,r.kt)("strong",{parentName:"p"},"n\xe3o")," esteja utilizando o modo ",(0,r.kt)("strong",{parentName:"p"},"Smartlive com intera\xe7\xe3o Facetec"),", neste passo voc\xea poder\xe1 escolher entre o modo de captura ",(0,r.kt)("strong",{parentName:"p"},"Manual")," ou ",(0,r.kt)("strong",{parentName:"p"},"Autom\xe1tico"),"."),(0,r.kt)("admonition",{title:"Dica",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Caso voc\xea esteja utilizando o modo ",(0,r.kt)("strong",{parentName:"p"},"Smartlive com intera\xe7\xe3o Facetec"),", a configura\xe7\xe3o do tipo de c\xe2mera passa a ser irrelevante, pois este modo oferece uma experi\xeancia pr\xe9-definida que n\xe3o pode ser alterada."),(0,r.kt)("p",{parentName:"admonition"},"No entanto, sugerimos que voc\xea configure um tipo de c\xe2mera em seu builder (como descrito neste passo), pois caso voc\xea desabilite o modo ",(0,r.kt)("strong",{parentName:"p"},"Liveness com intera\xe7\xe3o Facetec")," em seu portal do cliente (e gere um novo JSON), voc\xea n\xe3o precisar\xe1 alterar seu c\xf3digo.")),(0,r.kt)("p",null,"Nosso SDK tem configurado e habilitado por padr\xe3o o ",(0,r.kt)("em",{parentName:"p"},"enquadramento inteligente")," e a ",(0,r.kt)("em",{parentName:"p"},"captura autom\xe1tica"),". Para utilizar a c\xe2mera em modo normal, desabilite ambas funcionalidades atrav\xe9s dos m\xe9todos ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoCapture")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"setSmartFrame"),". Os exemplos a seguir demonstram como voc\xea pode configurar cada um dos modos de c\xe2mera."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"modo-inteligente-captura-autom\xe1tica---smart-camera"},"Modo inteligente (Captura autom\xe1tica - Smart Camera)"),(0,r.kt)("p",null,"Por padr\xe3o, nosso SDK possui o enquadramento inteligente e a captura autom\xe1tica habilitados. Caso decida utilizar este modo de c\xe2mera, n\xe3o ser\xe1 necess\xe1rio alterar nenhuma configura\xe7\xe3o. "),(0,r.kt)("p",null,"Caso as configura\xe7\xf5es da c\xe2mera tenham sido alteradas previamente em seu App, \xe9 poss\xedvel restaur\xe1-las atrav\xe9s dos m\xe9todos ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoCapture")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"setSmartFrame"),":"),(0,r.kt)(m.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"dart",label:"Dart",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"\nUnicoCheckCameraOpener _opener = new UnicoCheck (this)\n    .setAutoCapture(autoCapture: true)\n    .setSmartFrame(smartFrame: true)\n    .build();\n\n")))),(0,r.kt)("admonition",{title:"Aten\xe7\xe3o",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"N\xe3o \xe9 poss\xedvel implementar o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoCapture(autoCapture: true)")," com o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"setSmartFrame(smartFrame: false)"),". Ou seja, n\xe3o \xe9 poss\xedvel manter a captura autom\xe1tica sem o Smart Frame, pois ele \xe9 quem realiza o enquadramento intelig\xeante.")),(0,r.kt)("h4",{id:"modo-manual"},"Modo manual"),(0,r.kt)("p",null,"Por padr\xe3o, nosso SDK possui o enquadramento inteligente e a captura autom\xe1tica habilitados. Neste caso, para utilizar o modo manual ambas configura\xe7\xf5es relacionadas a ",(0,r.kt)("em",{parentName:"p"},"Smart Camera")," devem ser desligadas atrav\xe9s dos m\xe9todos ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoCapture")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"setSmartFrame"),":"),(0,r.kt)(m.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"dart",label:"Dart",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"{2-3}","{2-3}":!0},"UnicoCheckCameraOpener _opener = new UnicoCheck (this)\n    .setAutoCapture(autoCapture: false)\n    .setSmartFrame(smartFrame: false)\n    .build();\n")))),(0,r.kt)("admonition",{title:"Dica - SmartFrame",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Mesmo em modo manual \xe9 poss\xedvel utilizar o Smart Frame. Neste caso, exibiremos a silhueta para identificar o enquadramento para ent\xe3o habilitar o bot\xe3o. Para isto, basta configurar ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoCapture(autoCapture: false)")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"setSmartFrame(smartFrame: true)")))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"customizar-o-frame-de-captura"},"Customizar o frame de captura"),(0,r.kt)("admonition",{title:"Passo opcional",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Este \xe9 um passo opcional, por\xe9m recomendado. ")),(0,r.kt)("p",null,"Oferecemos a possibilidade de customiza\xe7\xe3o do frame de captura por meio do nosso SDK. Para customizar o frame, basta utilizar o m\xe9todo correspondente a propriedade a ser customizada, e posteriormente, aplicar o novo estilo atrav\xe9s do m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"setTheme()"),"."),(0,r.kt)("p",null,"Entenda um pouco mais sobre o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"setTheme()"),", exemplos de utiliza\xe7\xe3o e o que pode ser customizado em nossa p\xe1gina de ",(0,r.kt)("a",{parentName:"p",href:"../referencias#customiza%C3%A7%C3%B5es"},"Refer\xeancias")," deste SDK.")),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"efetuar-abertura-da-c\xe2mera"},"Efetuar abertura da c\xe2mera"),(0,r.kt)("p",null,"O \xfaltimo passo \xe9 disparar a abertura da c\xe2mera. Vamos dividir este processo em algumas etapas:"),(0,r.kt)("h4",{id:"implementar-listeners-para-eventos-da-c\xe2mera"},"Implementar listeners para eventos da c\xe2mera"),(0,r.kt)("p",null,'O m\xe9todo de abertura da c\xe2mera precisa saber o que fazer ao conseguir capturar uma imagem ou ao ter algum erro no processo. Informaremos "o que fazer" ao m\xe9todo de abertura da c\xe2mera atrav\xe9s da implanta\xe7\xe3o de ',(0,r.kt)("em",{parentName:"p"},"listeners")," que ser\xe3o chamados em situa\xe7\xf5es de sucesso ou erro."),(0,r.kt)("p",null,"Atrav\xe9s da implementa\xe7\xe3o dos ",(0,r.kt)("em",{parentName:"p"},"listeners"),", voc\xea poder\xe1 especificar o que acontecer\xe1 em seu App em situa\xe7\xf5es de erro (m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"onErrorSelfie"),") ou sucesso (m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccessSelfie"),") na captura de imagens."),(0,r.kt)("h5",{id:"m\xe9todo-onsuccessselfie"},"M\xe9todo ",(0,r.kt)("inlineCode",{parentName:"h5"},"onSuccessSelfie")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid onSuccessSelfie(ResultCamera result) { }\n")),(0,r.kt)("p",null,"Ao efetuar uma captura de imagem com sucesso, este m\xe9todo ser\xe1 invocado e retornar\xe1 um objeto do tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultCamera")," que ser\xe1 utilizado posteriormente na chamada de nossas APIs REST. "),(0,r.kt)("h5",{id:"m\xe9todo-onerrorselfie"},"M\xe9todo ",(0,r.kt)("inlineCode",{parentName:"h5"},"onErrorSelfie")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid onErrorSelfie(UnicoError error) { }\n")),(0,r.kt)("p",null,"Ao ocorrer algum erro na captura de imagem, este m\xe9todo ser\xe1 invocado e retornar\xe1 um objeto do tipo ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"UnicoError")),". "),(0,r.kt)("admonition",{title:"Implementa\xe7\xe3o dos listeners",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A implementa\xe7\xe3o destes m\xe9todos (",(0,r.kt)("em",{parentName:"p"},"listeners"),") dever\xe1 ser feita atrav\xe9s de uma inst\xe2ncia da classe ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoSelfie"),".")),(0,r.kt)("h4",{id:"abrir-c\xe2mera"},"Abrir c\xe2mera"),(0,r.kt)("p",null,"Devemos abrir a c\xe2mera utilizando o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"openCameraSelfie"),". Este m\xe9todo recebe como par\xe2metro a implementa\xe7\xe3o da classe ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoSelfie")," e o JSON com as credenciais, gerado ",(0,r.kt)("a",{parentName:"p",href:"../como-comecar"},"nesse passo"),"."),(0,r.kt)("p",null,"O exemplo abaixo ilustra os passos acima (configura\xe7\xe3o dos listeners e abertura da c\xe2mera):"),(0,r.kt)(m.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"dart",label:"Dart",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"_opener.openCameraSelfie(jsonFileName: androidJsonFileName, listener: this)\n")))),(0,r.kt)("p",null,"Em caso de sucesso, o objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultCamera")," retornar\xe1 2 atributos: ",(0,r.kt)("inlineCode",{parentName:"p"},"base64")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted"),". O"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O atributo ",(0,r.kt)("inlineCode",{parentName:"li"},"base64")," pode ser utilizado caso voc\xea queira exibir um preview da imagem em seu app;"),(0,r.kt)("li",{parentName:"ul"},"O atributo ",(0,r.kt)("inlineCode",{parentName:"li"},"encrypted")," dever\xe1 ser enviado na chamada de nossas APIs REST do ",(0,r.kt)("strong",{parentName:"li"},"unico check")," (detalhado ",(0,r.kt)("a",{parentName:"li",href:"#chamar-nossas-apis"},"neste passo"),");  "))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"chamar-nossas-apis"},"Chamar nossas APIs"),(0,r.kt)("p",null,"A captura das imagens \xe9 apenas a primeira parte da nossa jornada. Ap\xf3s a capturar, voc\xea dever\xe1 enviar o ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted")," gerado para nossas APIs, selecionando um dos fluxos dispon\xedveis (detalhados ",(0,r.kt)("a",{parentName:"p",href:"#"},"neste artigo"),"). Exemplo abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://example.com/services/v3/AcessoService.svc/processes\' \\\n--header \'APIKEY: 11111111-1111-1111-1111-111111111111\' \\\n--header \'Authorization: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "subject": {\n    "Code": "12345678910",\n    "Name": "Bob",\n    "Gender": "M",\n    "BirthDate": "01/01/0001",\n    "Email": "email@example.com",\n    "Phone": "5543999999999"\n  },\n  "onlySelfie": true,\n  "imagebase64": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAgSURBVDhPY/wPBAwUACYoTTYYNWDUABAYNWDgDWBgAABrygQclUTopgAAAABJRU5ErkJggg=="\n}\'\n\n'))))),(0,r.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,r.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes op\xe7\xf5es para que voc\xea possa obter ajuda:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, voc\xea tamb\xe9m pode entrar em contato atrav\xe9s de nossa ",(0,r.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"Central de Ajuda"),";")),(0,r.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,r.kt)("p",null,"\xd3timo! Voc\xea chegou at\xe9 aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"captura-selfies"},"Guia para implanta\xe7\xe3o de captura de documentos"),";")))}v.isMDXComponent=!0},26196:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/img_camerainteligente-a50c291a3e4d3b7d32a1f576a4ef76c7.png"},94288:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/img_cameranormal-47c9ebec4e0e323b8954e8ab59839c74.png"}}]);