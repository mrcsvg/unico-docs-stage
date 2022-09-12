"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[4406],{3905:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>p});var r=o(67294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=r.createContext({}),m=function(e){var a=r.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},c=function(e){var a=m(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var o=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(o),p=t,v=u["".concat(l,".").concat(p)]||u[p]||d[p]||n;return o?r.createElement(v,i(i({ref:a},c),{},{components:o})):r.createElement(v,i({ref:a},c))}));function p(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var m=2;m<n;m++)i[m]=o[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},85162:(e,a,o)=>{o.d(a,{Z:()=>i});var r=o(67294),t=o(86010);const n="tabItem_Ymn6";function i(e){let{children:a,hidden:o,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,t.Z)(n,i),hidden:o},a)}},65488:(e,a,o)=>{o.d(a,{Z:()=>p});var r=o(87462),t=o(67294),n=o(86010),i=o(72389),s=o(67392),l=o(7094),m=o(12466);const c="tabList__CuJ",d="tabItem_LNqP";function u(e){var a,o;const{lazy:i,block:u,defaultValue:p,values:v,groupId:k,className:f}=e,g=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:g.map((e=>{let{props:{value:a,label:o,attributes:r}}=e;return{value:a,label:o,attributes:r}})),C=(0,s.l)(b,((e,a)=>e.value===a.value));if(C.length>0)throw new Error('Docusaurus error: Duplicate values "'+C.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===p?p:null!=(a=null!=p?p:null==(o=g.find((e=>e.props.default)))?void 0:o.props.value)?a:g[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:S}=(0,l.U)(),[y,A]=(0,t.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,m.o5)();if(null!=k){const e=N[k];null!=e&&e!==y&&b.some((a=>a.value===e))&&A(e)}const x=e=>{const a=e.currentTarget,o=T.indexOf(a),r=b[o].value;r!==y&&(E(a),A(r),null!=k&&S(k,String(r)))},I=e=>{var a;let o=null;switch(e.key){case"ArrowRight":{var r;const a=T.indexOf(e.currentTarget)+1;o=null!=(r=T[a])?r:T[0];break}case"ArrowLeft":{var t;const a=T.indexOf(e.currentTarget)-1;o=null!=(t=T[a])?t:T[T.length-1];break}}null==(a=o)||a.focus()};return t.createElement("div",{className:(0,n.Z)("tabs-container",c)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":u},f)},b.map((e=>{let{value:a,label:o,attributes:i}=e;return t.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>T.push(e),onKeyDown:I,onFocus:x,onClick:x},i,{className:(0,n.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":y===a})}),null!=o?o:a)}))),i?(0,t.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function p(e){const a=(0,i.Z)();return t.createElement(u,(0,r.Z)({key:String(a)},e))}},17894:(e,a,o)=>{o.d(a,{Z:()=>t});var r=o(67294);const t=function(e){let{children:a,headingDepth:o}=e;const[t,n]=(0,r.useState)(null);return r.createElement("div",{className:"steps steps--h"+o},a)}},29269:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>v});var r=o(87462),t=(o(67294),o(3905)),n=o(94288),i=o(26196),s=o(17894),l=o(65488),m=o(85162);const c={sidebar_label:"Captura de Selfies",sidebar_position:1},d="Captura de Selfies",u={unversionedId:"check/guias/android/fluxos/captura-selfies",id:"check/guias/android/fluxos/captura-selfies",title:"Captura de Selfies",description:"Sobre este guia",source:"@site/docs/check/guias/android/fluxos/captura-selfies.md",sourceDirName:"check/guias/android/fluxos",slug:"/check/guias/android/fluxos/captura-selfies",permalink:"/unico-docs-stage/docs/check/guias/android/fluxos/captura-selfies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/guias/android/fluxos/captura-selfies.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Captura de Selfies",sidebar_position:1},sidebar:"checkSidebar",previous:{title:"Como come\xe7ar",permalink:"/unico-docs-stage/docs/check/guias/android/como-comecar"},next:{title:"Captura de documentos",permalink:"/unico-docs-stage/docs/check/guias/android/fluxos/captura-documentos"}},p={},v=[{value:"Sobre este guia",id:"sobre-este-guia",level:2},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",level:2},{value:"Recursos dispon\xedveis",id:"recursos-dispon\xedveis",level:2},{value:"Captura Manual",id:"captura-manual",level:3},{value:"Captura Autom\xe1tica",id:"captura-autom\xe1tica",level:3},{value:"Smartlive com intera\xe7\xe3o Facetec",id:"smartlive-com-intera\xe7\xe3o-facetec",level:3},{value:"Implementa\xe7\xe3o",id:"implementa\xe7\xe3o",level:2},{value:"Inicializar nosso SDK",id:"inicializar-nosso-sdk",level:3},{value:"<code>onErrorAcessoBio(ErrorBio errorBio)</code>",id:"onerroracessobioerrorbio-errorbio",level:4},{value:"<code>onUserClosedCameraManually()</code>",id:"onuserclosedcameramanually",level:4},{value:"<code>onSystemClosedCameraTimeoutSession()</code>",id:"onsystemclosedcameratimeoutsession",level:4},{value:"<code>onSystemChangedTypeCameraTimeoutFaceInference()</code>",id:"onsystemchangedtypecameratimeoutfaceinference",level:4},{value:"Configurar modo da c\xe2mera",id:"configurar-modo-da-c\xe2mera",level:3},{value:"Modo inteligente (Captura autom\xe1tica - Smart Camera)",id:"modo-inteligente-captura-autom\xe1tica---smart-camera",level:4},{value:"Modo manual",id:"modo-manual",level:4},{value:"Customizar o frame de captura",id:"customizar-o-frame-de-captura",level:3},{value:"Configurar credenciais",id:"configurar-credenciais",level:3},{value:"Implementa\xe7\xe3o por classe",id:"implementa\xe7\xe3o-por-classe",level:4},{value:"Efetuar abertura da c\xe2mera",id:"efetuar-abertura-da-c\xe2mera",level:3},{value:"Implementar listeners para eventos da c\xe2mera",id:"implementar-listeners-para-eventos-da-c\xe2mera",level:4},{value:"M\xe9todo <code>onSuccessSelfie</code>",id:"m\xe9todo-onsuccessselfie",level:5},{value:"M\xe9todo <code>onErrorSelfie</code>",id:"m\xe9todo-onerrorselfie",level:5},{value:"Preparar e abrir c\xe2mera",id:"preparar-e-abrir-c\xe2mera",level:4},{value:"Chamar nossas APIs",id:"chamar-nossas-apis",level:3},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],k={toc:v};function f(e){let{components:a,...o}=e;return(0,t.kt)("wrapper",(0,r.Z)({},k,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"captura-de-selfies"},"Captura de Selfies"),(0,t.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,t.kt)("p",null,"Este guia foi elaborado para ajud\xe1-lo a integrar nosso SDK Android de forma r\xe1pida e f\xe1cil.\nBuscamos trazer conceitos b\xe1sicos, exemplos de implementa\xe7\xe3o dos SDKs e tamb\xe9m de como interagir com as APIs REST de nosso motor biom\xe9trico."),(0,t.kt)("admonition",{title:"Vale lembrar",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Vale lembrar que este guia foca no processo de captura de imagens. Caso esteja buscando informa\xe7\xf5es sobre as APIs REST do ",(0,t.kt)("strong",{parentName:"p"},"Unico Check"),", sugerimos que visite nosso ",(0,t.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs/"},"API Reference"),", nosso guia de APIs ou nossa p\xe1gina de p\xe1gina ",(0,t.kt)("a",{parentName:"p",href:"../overview"},"Vis\xe3o Geral"),".")),(0,t.kt)("p",null,"Atrav\xe9s deste guia, em poucos minutos voc\xea ser\xe1 capaz de:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Implementar a abertura da c\xe2mera e captura de imagens;"),(0,t.kt)("li",{parentName:"ul"},"Entender como manipular os dados de retorno;"),(0,t.kt)("li",{parentName:"ul"},"Entender como utilizar o retorno de nosso SDK com nossas APIs;")),(0,t.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,t.kt)("p",null,"Certifique-se que voc\xea seguiu nosso passo-a-passo para instala\xe7\xe3o e importa\xe7\xe3o de nosso SDK atrav\xe9s ",(0,t.kt)("a",{parentName:"p",href:"../como-comecar"},"deste guia"),". \xc9 importante tamb\xe9m ter em conta as funcionalidades dispon\xedveis neste SDK, como explicado na p\xe1gina de ",(0,t.kt)("a",{parentName:"p",href:"../overview"},"Vis\xe3o Geral")," deste SDK."),(0,t.kt)("h2",{id:"recursos-dispon\xedveis"},"Recursos dispon\xedveis"),(0,t.kt)("p",null,"Nosso SDK oferece um componente para captura de imagem contendo uma silhueta que ajuda o usu\xe1rio a se posicionar de forma correta para a foto. A captura da imagem para o captura de Selfies pode ser feita de duas formas, descritas ao longo desse guia. Sendo elas:"),(0,t.kt)("h3",{id:"captura-manual"},"Captura Manual"),(0,t.kt)("p",null,"Neste tipo de experi\xeancia existe um frame de captura para auxiliar o usu\xe1rio a posicionar sua face corretamente. Ap\xf3s se posicionar corretamente, o usu\xe1rio deve clicar em um bot\xe3o para capturar a imagem. "),(0,t.kt)("p",null,"A SDK n\xe3o efetua nenhum tipo de valida\xe7\xe3o do que est\xe1 sendo capturado. Caso a imagem capturada n\xe3o possua uma face biom\xe9tricamente v\xe1lida, o ",(0,t.kt)("inlineCode",{parentName:"p"},"JWT")," ser\xe1 recusado pelas APIs de nosso motor de biometria."),(0,t.kt)("img",{src:n.Z,alt:"Captura Manual",className:"imgCenter"}),(0,t.kt)("h3",{id:"captura-autom\xe1tica"},"Captura Autom\xe1tica"),(0,t.kt)("p",null,"Neste tipo de experi\xeancia, identificamos a face do usu\xe1rio automaticamente atrav\xe9s de algoritmos de vis\xe3o computacional e o auxiliamos para que se posicione de forma correta dentro da \xe1rea de captura. Ap\xf3s se posicionar corretamente, capturamos a imagem de forma autom\xe1tica."),(0,t.kt)("p",null,"Por ajudar o usu\xe1rio a enquadrar sua face na \xe1rea de captura, esta op\xe7\xe3o pode diminuir problemas ao enviar o ",(0,t.kt)("inlineCode",{parentName:"p"},"JWT")," \xe0s APIs de nosso motor biom\xe9trico."),(0,t.kt)("img",{src:i.Z,alt:"Captura Manual",className:"imgCenter"}),(0,t.kt)("h3",{id:"smartlive-com-intera\xe7\xe3o-facetec"},"Smartlive com intera\xe7\xe3o Facetec"),(0,t.kt)("p",null,"Neste tipo de experi\xeancia o usu\xe1rio \xe9 instru\xeddo a realizar alguns movimentos simples durante a captura, que s\xe3o acompanhados por algoritmos de vis\xe3o computacional com o intuito de garantir que ele est\xe1 tirando foto naquele momento."),(0,t.kt)("p",null,"Por exigir a movimenta\xe7\xe3o do usu\xe1rio este tipo de captura possui uma camada extra de seguran\xe7a contra fraudes.\nTal como na Captura Autom\xe1tica a imagem \xe9 capturada sem a necessidade do usu\xe1rio pressionar um bot\xe3o. Desta forma tende a diminuir problemas ao enviar o ",(0,t.kt)("inlineCode",{parentName:"p"},"JWT")," \xe0s APIs de nosso motor biom\xe9trico."),(0,t.kt)("admonition",{title:"Ativa\xe7\xe3o do Smartlive com intera\xe7\xe3o Facetec",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Esta funcionalidade deve ser ativada atrav\xe9s do portal do cliente, como explicado ",(0,t.kt)("a",{parentName:"p",href:"../como-comecar#criando-ou-editando-uma-api-key"},"neste artigo"),".")),(0,t.kt)("h2",{id:"implementa\xe7\xe3o"},"Implementa\xe7\xe3o"),(0,t.kt)("p",null,"Ao seguir este passo-a-passo, em poucos minutos voc\xea ter\xe1 todo o potencial de nosso SDK embarcado em sua aplica\xe7\xe3o Android."),(0,t.kt)(s.Z,{headingDepth:3,mdxType:"Steps"},(0,t.kt)("ol",null,(0,t.kt)("li",null,(0,t.kt)("h3",{id:"inicializar-nosso-sdk"},"Inicializar nosso SDK"),(0,t.kt)("p",null,"Para iniciar, crie uma inst\xe2ncia do builder (gerado atrav\xe9s da interface ",(0,t.kt)("inlineCode",{parentName:"p"},"IAcessoBioBuilder"),", fornecendo como par\xe2metro o ",(0,t.kt)("em",{parentName:"p"},"contexto")," em quest\xe3o e a implementa\xe7\xe3o da classe ",(0,t.kt)("inlineCode",{parentName:"p"},"AcessoBioListener"),". "),(0,t.kt)("p",null,"A implementa\xe7\xe3o dessa classe \xe9 bem simples e pode ser feita com poucas linhas de c\xf3digo. Tudo que precisa fazer \xe9 sobrescrever nossos m\xe9todos de callback com as l\xf3gicas de neg\xf3cio de sua aplica\xe7\xe3o."),(0,t.kt)(l.Z,{mdxType:"Tabs"},(0,t.kt)(m.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"public class MainActivity extends AppCompatActivity {\n\n    private AcessoBioListener callback = new AcessoBioListener() {\n        @Override\n        public void onErrorAcessoBio(ErrorBio errorBio) { }\n\n        @Override\n        public void onUserClosedCameraManually() { }\n\n        @Override\n        public void onSystemClosedCameraTimeoutSession() { }\n\n        @Override\n        public void onSystemChangedTypeCameraTimeoutFaceInference() { }\n    };\n\n    private IAcessoBioBuilder acessoBioBuilder = new AcessoBio(this, callback);\n}\n"))),(0,t.kt)(m.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"internal class MainActivity : AppCompatActivity() {\n\n    private val callback = object : AcessoBioListener {\n        override fun onErrorAcessoBio(errorBio: ErrorBio?) { }\n    \n        override fun onUserClosedCameraManually() { }\n    \n        override fun onSystemClosedCameraTimeoutSession() { }\n    \n        override fun onSystemChangedTypeCameraTimeoutFaceInference() { }\n    }\n\n    private val acessoBioBuilder: IAcessoBioBuilder = AcessoBio(this, callback)\n}\n")))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Implementa\xe7\xe3o das fun\xe7\xf5es de callback")),(0,t.kt)("p",null,"Note que, conforme o exemplo anterior, o trabalho de implementa\xe7\xe3o da classe AcessoBioListener \xe9, em grande parte, a configura\xe7\xe3o dos m\xe9todos de callback. Cada m\xe9todo ser\xe1 chamado em uma situa\xe7\xe3o espec\xedfica de retorno de nosso SDK, como detalhado abaixo. "),(0,t.kt)("p",null,"Basta sobrescrever os m\xe9todos exemplificados no passo anterior com as l\xf3gicas de neg\xf3cio de sua aplica\xe7\xe3o:"),(0,t.kt)("h4",{id:"onerroracessobioerrorbio-errorbio"},(0,t.kt)("inlineCode",{parentName:"h4"},"onErrorAcessoBio(ErrorBio errorBio)")),(0,t.kt)("p",null,"Este m\xe9todo ser\xe1 invocado sempre quando qualquer erro de implementa\xe7\xe3o ocorrer ao utilizar algum de nossos m\xe9todos, como por exemplo, ao informar um tipo de documento incorreto para a funcionalidade de captura de documentos."),(0,t.kt)("p",null,"Ao ser invocado, o m\xe9todo receber\xe1 um par\xe2metro do tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"ErrorBio")," que contem detalhes do erro. Saiba mais sobre o tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"ErrorBio")," em nosso documento de ",(0,t.kt)("a",{parentName:"p",href:"../referencias#errorbio"},"refer\xeancias")," de nosso SDK."),(0,t.kt)("h4",{id:"onuserclosedcameramanually"},(0,t.kt)("inlineCode",{parentName:"h4"},"onUserClosedCameraManually()")),(0,t.kt)("p",null,'Este m\xe9todo ser\xe1 invocado sempre quando o usu\xe1rio fechar a c\xe2mera de forma manual, como por exemplo, ao clicar no bot\xe3o "Voltar".'),(0,t.kt)("h4",{id:"onsystemclosedcameratimeoutsession"},(0,t.kt)("inlineCode",{parentName:"h4"},"onSystemClosedCameraTimeoutSession()")),(0,t.kt)("p",null,"Este m\xe9todo ser\xe1 invocado assim que o tempo m\xe1ximo de sess\xe3o for atingido (Sem capturar nenhuma imagem)."),(0,t.kt)("admonition",{title:"Tempo m\xe1ximo da sess\xe3o",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"O tempo m\xe1ximo da sess\xe3o pode ser configurado em nosso ",(0,t.kt)("strong",{parentName:"p"},"builder")," atrav\xe9s do m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"setTimeoutSession"),". Este m\xe9todo deve receber uma o tempo m\xe1ximo da sess\xe3o em ",(0,t.kt)("strong",{parentName:"p"},"segundos"),".")),(0,t.kt)("h4",{id:"onsystemchangedtypecameratimeoutfaceinference"},(0,t.kt)("inlineCode",{parentName:"h4"},"onSystemChangedTypeCameraTimeoutFaceInference()")),(0,t.kt)("p",null,"Este m\xe9todo ser\xe1 invocado assim que o tempo m\xe1ximo para detec\xe7\xe3o da face de um usu\xe1rio for atingido (sem ter nada detectado). Neste caso, o modo de c\xe2mera \xe9 alterado automaticamente para o modo manual (sem o smart frame)."),(0,t.kt)("admonition",{title:"Aten\xe7\xe3o",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Todos os m\xe9todos acima devem ser criados da forma indicada em seu projeto (mesmo que sem nenhuma l\xf3gica). Caso contr\xe1rio, o projeto n\xe3o compilar\xe1 com sucesso."))),(0,t.kt)("li",null,(0,t.kt)("h3",{id:"configurar-modo-da-c\xe2mera"},"Configurar modo da c\xe2mera"),(0,t.kt)("p",null,"Em seguida, iremos configurar o modo de captura da camera. Como explicamos ",(0,t.kt)("a",{parentName:"p",href:"captura-selfies#recursos-dispon%C3%ADveis"},"acima")," existem tr\xeas modos de captura dispon\xedveis. Caso ",(0,t.kt)("strong",{parentName:"p"},"n\xe3o")," esteja utilizando o modo ",(0,t.kt)("strong",{parentName:"p"},"Smartlive com intera\xe7\xe3o Facetec"),", neste passo voc\xea poder\xe1 escolher entre o modo de captura ",(0,t.kt)("strong",{parentName:"p"},"Manual")," ou ",(0,t.kt)("strong",{parentName:"p"},"Autom\xe1tico"),"."),(0,t.kt)("admonition",{title:"Dica",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Caso voc\xea esteja utilizando o modo ",(0,t.kt)("strong",{parentName:"p"},"Smartlive com intera\xe7\xe3o Facetec"),", a configura\xe7\xe3o do tipo de c\xe2mera passa a ser irrelevante, pois este modo oferece uma experi\xeancia pr\xe9-definida que n\xe3o pode ser alterada."),(0,t.kt)("p",{parentName:"admonition"},"No entanto, sugerimos que voc\xea configure um tipo de c\xe2mera em seu builder (como descrito neste passo), pois caso voc\xea desabilite o modo ",(0,t.kt)("strong",{parentName:"p"},"Liveness com intera\xe7\xe3o Facetec")," em seu portal do cliente (e gere um novo JSON), voc\xea n\xe3o precisar\xe1 alterar seu c\xf3digo.")),(0,t.kt)("p",null,"Nosso SDK tem configurado e habilitado por padr\xe3o o ",(0,t.kt)("em",{parentName:"p"},"enquadramento inteligente")," e a ",(0,t.kt)("em",{parentName:"p"},"captura autom\xe1tica"),". Para utilizar a c\xe2mera em modo normal, desabilite ambas funcionalidades atrav\xe9s dos m\xe9todos ",(0,t.kt)("inlineCode",{parentName:"p"},"setAutoCapture")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"setSmartFrame"),". Os exemplos a seguir demonstram como voc\xea pode configurar cada um dos modos de c\xe2mera."),(0,t.kt)("hr",null),(0,t.kt)("h4",{id:"modo-inteligente-captura-autom\xe1tica---smart-camera"},"Modo inteligente (Captura autom\xe1tica - Smart Camera)"),(0,t.kt)("p",null,"Por padr\xe3o, nosso SDK possui o enquadramento inteligente e a captura autom\xe1tica habilitados. Caso decida utilizar este modo de c\xe2mera, n\xe3o ser\xe1 necess\xe1rio alterar nenhuma configura\xe7\xe3o. "),(0,t.kt)("p",null,"Caso as configura\xe7\xf5es da c\xe2mera tenham sido alteradas previamente em seu App, \xe9 poss\xedvel restaur\xe1-las atrav\xe9s dos m\xe9todos ",(0,t.kt)("inlineCode",{parentName:"p"},"setAutoCapture")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"setSmartFrame"),":"),(0,t.kt)(l.Z,{mdxType:"Tabs"},(0,t.kt)(m.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nUnicoCheckCamera unicoCheckCamera = acessoBioBuilder\n    .setAutoCapture(true)\n    .setSmartFrame(true)\n    .build();\n\n"))),(0,t.kt)(m.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nval unicoCheckCamera: UnicoCheckCamera = acessoBioBuilder\n    .setAutoCapture(true)\n    .setSmartFrame(true)\n    .build()\n\n")))),(0,t.kt)("admonition",{title:"Aten\xe7\xe3o",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"N\xe3o \xe9 poss\xedvel implementar o m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"setAutoCapture(true)")," com o m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"setSmartFrame(false)"),". Ou seja, n\xe3o \xe9 poss\xedvel manter a captura autom\xe1tica sem o Smart Frame, pois ele \xe9 quem realiza o enquadramento intelig\xeante.")),(0,t.kt)("h4",{id:"modo-manual"},"Modo manual"),(0,t.kt)("p",null,"Por padr\xe3o, nosso SDK possui o enquadramento inteligente e a captura autom\xe1tica habilitados. Neste caso, para utilizar o modo manual ambas configura\xe7\xf5es relacionadas a ",(0,t.kt)("em",{parentName:"p"},"Smart Camera")," devem ser desligadas atrav\xe9s dos m\xe9todos ",(0,t.kt)("inlineCode",{parentName:"p"},"setAutoCapture")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"setSmartFrame"),":"),(0,t.kt)(l.Z,{mdxType:"Tabs"},(0,t.kt)(m.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java",metastring:"{2-3}","{2-3}":!0},"UnicoCheckCamera unicoCheckCamera = acessoBioBuilder\n    .setAutoCapture(false)\n    .setSmartFrame(false)\n    .build();\n"))),(0,t.kt)(m.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"{2-3}","{2-3}":!0},"val unicoCheckCamera: UnicoCheckCamera = acessoBioBuilder\n    .setAutoCapture(false)\n    .setSmartFrame(false)\n    .build()\n")))),(0,t.kt)("admonition",{title:"Dica - SmartFrame",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Mesmo em modo manual \xe9 poss\xedvel utilizar o Smart Frame. Neste caso, exibiremos a silhueta para identificar o enquadramento para ent\xe3o habilitar o bot\xe3o. Para isto, basta configurar ",(0,t.kt)("inlineCode",{parentName:"p"},"setAutoCapture=false")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"setSmartFrame=true")))),(0,t.kt)("li",null,(0,t.kt)("h3",{id:"customizar-o-frame-de-captura"},"Customizar o frame de captura"),(0,t.kt)("admonition",{title:"Passo opcional",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Este \xe9 um passo opcional, por\xe9m recomendado. ")),(0,t.kt)("p",null,"Oferecemos a possibilidade de customiza\xe7\xe3o do frame de captura por meio do nosso SDK. Para customizar o frame, basta utilizar o m\xe9todo correspondente a propriedade a ser customizada, e posteriormente, aplicar o novo estilo atrav\xe9s do m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"setTheme()"),"."),(0,t.kt)("p",null,"Entenda um pouco mais sobre o m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"setTheme()"),", exemplos de utiliza\xe7\xe3o e o que pode ser customizado em nossa p\xe1gina de ",(0,t.kt)("a",{parentName:"p",href:"../referencias#customiza%C3%A7%C3%B5es"},"Refer\xeancias")," deste SDK.")),(0,t.kt)("li",null,(0,t.kt)("h3",{id:"configurar-credenciais"},"Configurar credenciais"),(0,t.kt)("p",null,"\xc9 necess\xe1rio informar as credenciais geradas na API Key para que a SDK funcione, para isso utilizaremos uma classe de configura\xe7\xe3o (AcessoBioConfigDataSource). A codifica\xe7\xe3o da classe pode seguir como o exemplo abaixo:"),(0,t.kt)("h4",{id:"implementa\xe7\xe3o-por-classe"},"Implementa\xe7\xe3o por classe"),(0,t.kt)(l.Z,{mdxType:"Tabs"},(0,t.kt)(m.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"AcessoBioConfigDataSource unicoConfig = new AcessoBioConfigDataSource() {\n\n    @Override\n    public String getHostKey() {\n        return HOST_KEY;\n    }\n\n    @Override\n    public String getHostInfo() {\n        return HOST_INFO;\n    }\n\n    @Override\n    public String getBundleIdentifier() {\n        return BUNDLE_IDENTIFIER;\n    }\n\n    @Override\n    public String getMobileSdkAppId() {\n        return MOBILE_SDK_APP_ID;\n    }\n\n    @Override\n    public String getProjectId() {\n        return PROJECT_ID;\n    }\n\n    @Override\n    public String getProjectNumber() {\n        return PROJECT_NUMBER;\n    }\n};\n"))),(0,t.kt)(m.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"val unicoConfig = object : AcessoBioConfigDataSource {\n    override fun getProjectNumber(): String {\n        return PROJECT_NUMBER\n    }\n\n    override fun getProjectId(): String {\n        return PROJECT_ID\n    }\n\n    override fun getMobileSdkAppId(): String {\n        return MOBILE_SDK_APP_ID\n    }\n\n    override fun getBundleIdentifier(): String {\n        return BUNDLE_IDENTIFIER\n    }\n\n    override fun getHostInfo(): String {\n        return HOST_INFO\n    }\n\n    override fun getHostKey(): String {\n        return HOST_KEY\n    }\n}\n"))))),(0,t.kt)("li",null,(0,t.kt)("h3",{id:"efetuar-abertura-da-c\xe2mera"},"Efetuar abertura da c\xe2mera"),(0,t.kt)("p",null,"O \xfaltimo passo \xe9 disparar a abertura da c\xe2mera. Vamos dividir este processo em algumas etapas:"),(0,t.kt)("h4",{id:"implementar-listeners-para-eventos-da-c\xe2mera"},"Implementar listeners para eventos da c\xe2mera"),(0,t.kt)("p",null,'O m\xe9todo de abertura da c\xe2mera precisa saber o que fazer ao conseguir capturar uma imagem ou ao ter algum erro no processo. Informaremos "o que fazer" ao m\xe9todo de abertura da c\xe2mera atrav\xe9s da implanta\xe7\xe3o de ',(0,t.kt)("em",{parentName:"p"},"listeners")," que ser\xe3o chamados em situa\xe7\xf5es de sucesso ou erro."),(0,t.kt)("p",null,"Atrav\xe9s da implementa\xe7\xe3o dos ",(0,t.kt)("em",{parentName:"p"},"listeners"),", voc\xea poder\xe1 especificar o que acontecer\xe1 em seu App em situa\xe7\xf5es de erro (m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"onErrorSelfie"),") ou sucesso (m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"onSuccessSelfie"),") na captura de imagens."),(0,t.kt)("h5",{id:"m\xe9todo-onsuccessselfie"},"M\xe9todo ",(0,t.kt)("inlineCode",{parentName:"h5"},"onSuccessSelfie")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"public void onSuccessSelfie(ResultCamera result) { }\n")),(0,t.kt)("p",null,"Ao efetuar uma captura de imagem com sucesso, este m\xe9todo ser\xe1 invocado e retornar\xe1 um objeto do tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"ResultCamera")," que ser\xe1 utilizado posteriormente na chamada de nossas APIs REST. "),(0,t.kt)("h5",{id:"m\xe9todo-onerrorselfie"},"M\xe9todo ",(0,t.kt)("inlineCode",{parentName:"h5"},"onErrorSelfie")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"public void onErrorSelfie(ErrorBio errorBio) { }\n")),(0,t.kt)("p",null,"Ao ocorrer algum erro na captura de imagem, este m\xe9todo ser\xe1 invocado e retornar\xe1 um objeto do tipo ",(0,t.kt)("a",{parentName:"p",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"ErrorBio")),". "),(0,t.kt)("admonition",{title:"Implementa\xe7\xe3o dos listeners",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"A implementa\xe7\xe3o destes m\xe9todos (",(0,t.kt)("em",{parentName:"p"},"listeners"),") dever\xe1 ser feita atrav\xe9s de uma inst\xe2ncia da classe ",(0,t.kt)("inlineCode",{parentName:"p"},"iAcessoBioSelfie"),".")),(0,t.kt)("h4",{id:"preparar-e-abrir-c\xe2mera"},"Preparar e abrir c\xe2mera"),(0,t.kt)("p",null,"Devemos preparar a c\xe2mera para abertura utilizando o m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"prepareSelfieCamera"),". Este m\xe9todo recebe como par\xe2metro a implementa\xe7\xe3o da classe ",(0,t.kt)("inlineCode",{parentName:"p"},"SelfieCameraListener")," e a classe ou JSON com as credenciais, gerado ",(0,t.kt)("a",{parentName:"p",href:"../como-comecar"},"nesse passo"),"."),(0,t.kt)("p",null,"Quando estiver tudo certo, dispararemos um evento que dever\xe1 ser tratado atrav\xe9s do m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"onCameraReady"),", que recebe como par\xe2metro um objeto do tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"UnicoCheckCameraOpener.Selfie"),". Voc\xea dever\xe1 sobrescrever este m\xe9todo, efetuando a abertura da c\xe2mera com o objeto recebido, atrav\xe9s do m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"open()"),". O m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"open()")," dever\xe1 receber como par\xe2metro os ",(0,t.kt)("em",{parentName:"p"},"listeners")," configurados nos passos acima."),(0,t.kt)("p",null,"O exemplo abaixo ilustra os passos acima (configura\xe7\xe3o dos listeners e abertura da c\xe2mera):"),(0,t.kt)(l.Z,{mdxType:"Tabs"},(0,t.kt)(m.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"iAcessoBioSelfie cameraListener = new iAcessoBioSelfie() {\n    @Override\n    public void onSuccessSelfie(ResultCamera result) { }\n\n    @Override\n    public void onErrorSelfie(ErrorBio errorBio) { }\n};\n\nunicoCheckCamera.prepareSelfieCamera(unicoConfig, new SelfieCameraListener() {\n    @Override\n    public void onCameraReady(UnicoCheckCameraOpener.Selfie cameraOpener) {\n        cameraOpener.open(cameraListener);\n    }\n\n    @Override\n    public void onCameraFailed(String message) {\n        Log.e(TAG, message);\n    }\n});\n"))),(0,t.kt)(m.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"val cameraListener: iAcessoBioSelfie = object : iAcessoBioSelfie {\n    override fun onSuccessSelfie(result: ResultCamera?) {}\n\n    override fun onErrorSelfie(errorBio: ErrorBio?) {}\n}\n\nunicoCheckCamera.prepareSelfieCamera(unicoConfig, object : SelfieCameraListener {\n    override fun onCameraReady(cameraOpener: UnicoCheckCameraOpener.Selfie?) {\n        cameraOpener?.open(cameraListener)\n    }\n\n    override fun onCameraFailed(message: String?) {\n        Log.e(TAG, message)\n    }\n})\n")))),(0,t.kt)("p",null,"Em caso de sucesso, o objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"ResultCamera")," retornar\xe1 2 atributos: ",(0,t.kt)("inlineCode",{parentName:"p"},"base64")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"encrypted"),". O"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"O atributo ",(0,t.kt)("inlineCode",{parentName:"li"},"base64")," pode ser utilizado caso voc\xea queira exibir um preview da imagem em seu app;"),(0,t.kt)("li",{parentName:"ul"},"O atributo ",(0,t.kt)("inlineCode",{parentName:"li"},"encrypted")," dever\xe1 ser enviado na chamada de nossas APIs REST do ",(0,t.kt)("strong",{parentName:"li"},"unico check")," (detalhado ",(0,t.kt)("a",{parentName:"li",href:"#chamar-nossas-apis"},"neste passo"),");  ")),(0,t.kt)("admonition",{title:"Convers\xe3o do base64 para Bitmap",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Caso queira converter o base64 para bitmap, a maneira padr\xe3o n\xe3o funcionar\xe1 para o Android. Ser\xe1  necess\xe1rio realizar o split a partir da v\xedrgula(",(0,t.kt)("inlineCode",{parentName:"p"},","),") para que funcione. Caso queira saber mais, sugerimos a leitura do seguinte artigo ",(0,t.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/4837110/how-to-convert-a-base64-string-into-a-bitmap-image-to-show-it-in-a-imageview"},"How to convert a Base64 string into a Bitmap image to show it in a ImageView?")))),(0,t.kt)("li",null,(0,t.kt)("h3",{id:"chamar-nossas-apis"},"Chamar nossas APIs"),(0,t.kt)("p",null,"A captura das imagens \xe9 apenas a primeira parte da nossa jornada. Ap\xf3s a capturar, voc\xea dever\xe1 enviar o ",(0,t.kt)("inlineCode",{parentName:"p"},"JWT")," gerado para nossas APIs, selecionando um dos fluxos dispon\xedveis detalhados ",(0,t.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs"},"nesta documenta\xe7\xe3o"),".")))),(0,t.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,t.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes op\xe7\xf5es para que voc\xea possa obter ajuda:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, voc\xea tamb\xe9m pode entrar em contato atrav\xe9s de nossa ",(0,t.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"Central de Ajuda"),";")),(0,t.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,t.kt)("p",null,"\xd3timo! Voc\xea chegou at\xe9 aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"captura-selfies"},"Guia para implanta\xe7\xe3o de captura de documentos"),";")))}f.isMDXComponent=!0},26196:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/img_camerainteligente-a50c291a3e4d3b7d32a1f576a4ef76c7.png"},94288:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/img_cameranormal-47c9ebec4e0e323b8954e8ab59839c74.png"}}]);