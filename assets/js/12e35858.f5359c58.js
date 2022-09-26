"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[3286],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>d});var t=o(67294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),m=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},u=function(e){var a=m(e.components);return t.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(o),d=r,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||n;return o?t.createElement(f,i(i({ref:a},u),{},{components:o})):t.createElement(f,i({ref:a},u))}));function d(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<n;m++)i[m]=o[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},85162:(e,a,o)=>{o.d(a,{Z:()=>i});var t=o(67294),r=o(86010);const n="tabItem_Ymn6";function i(e){let{children:a,hidden:o,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,i),hidden:o},a)}},65488:(e,a,o)=>{o.d(a,{Z:()=>d});var t=o(87462),r=o(67294),n=o(86010),i=o(72389),s=o(67392),l=o(7094),m=o(12466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var a,o;const{lazy:i,block:p,defaultValue:d,values:f,groupId:v,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((e=>{let{props:{value:a,label:o,attributes:t}}=e;return{value:a,label:o,attributes:t}})),h=(0,s.l)(b,((e,a)=>e.value===a.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(a=null!=d?d:null==(o=g.find((e=>e.props.default)))?void 0:o.props.value)?a:g[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:x}=(0,l.U)(),[y,S]=(0,r.useState)(N),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,m.o5)();if(null!=v){const e=C[v];null!=e&&e!==y&&b.some((a=>a.value===e))&&S(e)}const w=e=>{const a=e.currentTarget,o=j.indexOf(a),t=b[o].value;t!==y&&(T(a),S(t),null!=v&&x(v,String(t)))},A=e=>{var a;let o=null;switch(e.key){case"ArrowRight":{var t;const a=j.indexOf(e.currentTarget)+1;o=null!=(t=j[a])?t:j[0];break}case"ArrowLeft":{var r;const a=j.indexOf(e.currentTarget)-1;o=null!=(r=j[a])?r:j[j.length-1];break}}null==(a=o)||a.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":p},k)},b.map((e=>{let{value:a,label:o,attributes:i}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>j.push(e),onKeyDown:A,onFocus:w,onClick:w},i,{className:(0,n.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":y===a})}),null!=o?o:a)}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function d(e){const a=(0,i.Z)();return r.createElement(p,(0,t.Z)({key:String(a)},e))}},17894:(e,a,o)=>{o.d(a,{Z:()=>r});var t=o(67294);const r=function(e){let{children:a,headingDepth:o}=e;const[r,n]=(0,t.useState)(null);return t.createElement("div",{className:"steps steps--h"+o},a)}},47323:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var t=o(87462),r=(o(67294),o(3905)),n=o(94288),i=o(26196),s=o(17894),l=o(65488),m=o(85162);const u={sidebar_label:"Captura de Selfies",sidebar_position:4,hide_title:!0},c=void 0,p={unversionedId:"check/guias/web/fluxos/captura-selfies",id:"check/guias/web/fluxos/captura-selfies",title:"captura-selfies",description:"Sobre este guia",source:"@site/docs/check/guias/web/fluxos/captura-selfies.md",sourceDirName:"check/guias/web/fluxos",slug:"/check/guias/web/fluxos/captura-selfies",permalink:"/unico-docs-stage/docs/check/guias/web/fluxos/captura-selfies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/check/guias/web/fluxos/captura-selfies.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Captura de Selfies",sidebar_position:4,hide_title:!0},sidebar:"checkSidebar",previous:{title:"Como come\xe7ar",permalink:"/unico-docs-stage/docs/check/guias/web/como-comecar"},next:{title:"Captura de documentos",permalink:"/unico-docs-stage/docs/check/guias/web/fluxos/verificacao-documentos"}},d={},f=[{value:"Sobre este guia",id:"sobre-este-guia",level:2},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",level:2},{value:"Recursos dispon\xedveis",id:"recursos-dispon\xedveis",level:2},{value:"Captura Manual",id:"captura-manual",level:3},{value:"Captura Autom\xe1tica",id:"captura-autom\xe1tica",level:3},{value:"Smartlive com intera\xe7\xe3o Facetec",id:"smartlive-com-intera\xe7\xe3o-facetec",level:3},{value:"Implementa\xe7\xe3o",id:"implementa\xe7\xe3o",level:2},{value:"Smartlive com intera\xe7\xe3o Facetec",id:"smartlive-com-intera\xe7\xe3o-facetec-1",level:3},{value:"Inicializar nosso SDK",id:"inicializar-nosso-sdk",level:3},{value:"Configurar o tamanho do frame",id:"configurar-o-tamanho-do-frame",level:3},{value:"Configurar fun\xe7\xf5es de callback",id:"configurar-fun\xe7\xf5es-de-callback",level:3},{value:"Configurar layout do frame",id:"configurar-layout-do-frame",level:3},{value:"Configurar modo de captura e iniciar a camera",id:"configurar-modo-de-captura-e-iniciar-a-camera",level:3},{value:"Captura manual",id:"captura-manual-1",level:4},{value:"Captura inteligente (autom\xe1tica)",id:"captura-inteligente-autom\xe1tica",level:4},{value:"Chamar nossas APIs",id:"chamar-nossas-apis",level:3},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],v={toc:f};function k(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},v,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"captura-de-selfies"},"Captura de Selfies"),(0,r.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,r.kt)("p",null,"Este guia foi elaborado para ajud\xe1-lo a integrar nosso SDK Web de forma r\xe1pida e f\xe1cil.\nBuscamos trazer conceitos b\xe1sicos, exemplos de implementa\xe7\xe3o dos SDKs e tamb\xe9m de como interagir com as APIs REST de nosso motor biom\xe9trico."),(0,r.kt)("admonition",{title:"Vale lembrar",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Vale lembrar que este guia foca no processo de captura de imagens. Caso esteja buscando informa\xe7\xf5es sobre as APIs REST do ",(0,r.kt)("strong",{parentName:"p"},"Unico Check"),", sugerimos que visite nosso ",(0,r.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs/"},"API Reference"),", nosso guia de APIs ou nossa p\xe1gina de p\xe1gina ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"Vis\xe3o Geral"),".")),(0,r.kt)("p",null,"Atrav\xe9s deste guia, em poucos minutos voc\xea ser\xe1 capaz de:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implementar a abertura da c\xe2mera e captura de imagens;"),(0,r.kt)("li",{parentName:"ul"},"Entender como manipular os dados de retorno;"),(0,r.kt)("li",{parentName:"ul"},"Entender como utilizar o retorno de nosso SDK com nossas APIs;")),(0,r.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,r.kt)("p",null,"Certifique-se que voc\xea seguiu nosso passo-a-passo para instala\xe7\xe3o e importa\xe7\xe3o de nosso SDK atrav\xe9s ",(0,r.kt)("a",{parentName:"p",href:"../como-comecar"},"deste guia"),". \xc9 importante tamb\xe9m ter em conta as funcionalidades dispon\xedveis neste SDK, como explicado na p\xe1gina de ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"Vis\xe3o Geral"),"."),(0,r.kt)("h2",{id:"recursos-dispon\xedveis"},"Recursos dispon\xedveis"),(0,r.kt)("p",null,"Nosso SDK \xe9 respons\xe1vel por renderizar um frame contendo uma silhueta que se ajusta automaticamente com base na propor\xe7\xe3o da tela do usu\xe1rio final. A captura da imagem para o captura de Selfies pode ser feita de tr\xeas formas descritas ao longo desse guia. S\xe3o elas:"),(0,r.kt)("h3",{id:"captura-manual"},"Captura Manual"),(0,r.kt)("p",null,"Neste tipo de experi\xeancia existe um frame de captura para auxiliar o usu\xe1rio a posicionar sua face corretamente. Ap\xf3s se posicionar corretamente, o usu\xe1rio deve clicar em um bot\xe3o para capturar a imagem. "),(0,r.kt)("p",null,"A SDK n\xe3o efetua nenhum tipo de valida\xe7\xe3o do que est\xe1 sendo capturado. Caso a imagem capturada n\xe3o possua uma face biom\xe9tricamente v\xe1lida, o ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," ser\xe1 recusado pelas APIs de nosso motor de biometria."),(0,r.kt)("img",{src:n.Z,alt:"Captura Manual",className:"imgCenter"}),(0,r.kt)("h3",{id:"captura-autom\xe1tica"},"Captura Autom\xe1tica"),(0,r.kt)("p",null,"Neste tipo de experi\xeancia, identificamos a face do usu\xe1rio automaticamente atrav\xe9s de algoritmos de vis\xe3o computacional e o auxiliamos para que se posicione de forma correta dentro da \xe1rea de captura. Ap\xf3s se posicionar corretamente, capturamos a imagem de forma autom\xe1tica."),(0,r.kt)("p",null,"Por ajudar o usu\xe1rio a enquadrar sua face na \xe1rea de captura, esta op\xe7\xe3o pode diminuir problemas ao enviar o ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," \xe0s APIs de nosso motor biom\xe9trico."),(0,r.kt)("img",{src:i.Z,alt:"Captura Manual",className:"imgCenter"}),(0,r.kt)("h3",{id:"smartlive-com-intera\xe7\xe3o-facetec"},"Smartlive com intera\xe7\xe3o Facetec"),(0,r.kt)("p",null,"Neste tipo de experi\xeancia o usu\xe1rio \xe9 instru\xeddo a realizar alguns movimentos simples durante a captura, que s\xe3o acompanhados por algoritmos de vis\xe3o computacional com o intuito de garantir que ele est\xe1 tirando foto naquele momento."),(0,r.kt)("p",null,"Por exigir a movimenta\xe7\xe3o do usu\xe1rio este tipo de captura possui uma camada extra de seguran\xe7a contra fraudes.\nTal como na Captura Autom\xe1tica a imagem \xe9 capturada sem a necessidade do usu\xe1rio pressionar um bot\xe3o. Desta forma tende a diminuir problemas ao enviar o ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," \xe0s APIs de nosso motor biom\xe9trico."),(0,r.kt)("admonition",{title:"Ativa\xe7\xe3o do Smartlive com intera\xe7\xe3o Facetec",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Esta funcionalidade deve ser ativada atrav\xe9s do portal do cliente, como explicado ",(0,r.kt)("a",{parentName:"p",href:"../como-comecar#criando-ou-editando-uma-api-key"},"neste artigo"),".")),(0,r.kt)("h2",{id:"implementa\xe7\xe3o"},"Implementa\xe7\xe3o"),(0,r.kt)("h3",{id:"smartlive-com-intera\xe7\xe3o-facetec-1"},"Smartlive com intera\xe7\xe3o Facetec"),(0,r.kt)("p",null,"Tamb\xe9m conhecido como prova de vida, neste tipo de experi\xeancia o usu\xe1rio \xe9 instru\xeddo a realizar alguns movimentos simples durante a captura, que s\xe3o acompanhados por algoritmos de vis\xe3o computacional com o intuito de garantir que ele est\xe1 tirando foto naquele momento. "),(0,r.kt)("p",null,"Por exigir a movimenta\xe7\xe3o do usu\xe1rio este tipo de captura possui uma camada extra de seguran\xe7a contra fraudes."),(0,r.kt)("admonition",{title:"Ativa\xe7\xe3o do Smartlive com intera\xe7\xe3o Facetec",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Esta funcionalidade deve ser ativada atrav\xe9s do portal do cliente, como explicado ",(0,r.kt)("a",{parentName:"p",href:"../como-comecar#criando-ou-editando-uma-api-key"},"neste artigo"),".")),(0,r.kt)("p",null,"Abaixo um passo-a-passo para ter nosso SDK funcionando em poucos minutos em seu WebApp. "),(0,r.kt)(s.Z,{headingDepth:3,mdxType:"Steps"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("h3",{id:"inicializar-nosso-sdk"},"Inicializar nosso SDK"),(0,r.kt)("p",null,"Como primeiro passo, voc\xea dever\xe1 efetuar 3 passos simples em seu projeto: "),(0,r.kt)("p",null,"Instancie um novo Builder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const unicoCameraBuilder = new UnicoCheckBuilder();\n")),(0,r.kt)("p",null,"Especifique o caminho dos arquivos adicionais (caso adicionados em seu projeto):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'unicoCameraBuilder.setResourceDirectory("/resources");\n')),(0,r.kt)("p",null,"Especifique o caminho dos arquivos dos modelos de IA, caso utilize a funcionalidade de C\xe2mera Inteligente"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'unicoCameraBuilder.setModelsPath("https://meusite.com.br/models");\n\n'))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"configurar-o-tamanho-do-frame"},"Configurar o tamanho do frame"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Passo n\xe3o requerido para modo ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Smartlive com intera\xe7\xe3o Facetec")),(0,r.kt)("p",{parentName:"admonition"},"Este passo s\xf3 \xe9 necess\xe1rio caso voc\xea ",(0,r.kt)("strong",{parentName:"p"},"n\xe3o")," esteja utilizando o ",(0,r.kt)("strong",{parentName:"p"},"Smartlive com intera\xe7\xe3o Facetec"),", pois neste modo o SDK renderiza um frame que ocupa todo o espa\xe7o da tela e se ajusta automaticamente.")),(0,r.kt)("p",null,"Caso n\xe3o esteja utilizando ",(0,r.kt)("strong",{parentName:"p"},"Smartlive com intera\xe7\xe3o Facetec"),", sugerimos que voc\xea configure o tamanho de nosso frame dentro de sua aplica\xe7\xe3o, a fim de otimizar a \xe1rea de captura dentro de seu WebApp. Confira abaixo como fazer esta configura\xe7\xe3o para Web Desktop ou Mobile."),(0,r.kt)("admonition",{title:"Dica",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Muitas vezes o funcionamento de nosso frame pode ser afetado por alguns design-systems que possuam algum tipo de grid-system como, por exemplo, bootstrap ou material-ui. Para minimizar este risco, certifique-se de posicionar nosso frame (",(0,r.kt)("inlineCode",{parentName:"p"},'id="box-camera"'),") em algum lugar do c\xf3digo que n\xe3o herde regras indesejadas de css.")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Nas vers\xf5es Web Desktop, \xe9 poss\xedvel restringir o tamanho de nosso frame para que o mesmo n\xe3o utilize toda a dimens\xe3o de seu WebApp. Para isto, basta envolver nosso frame (",(0,r.kt)("inlineCode",{parentName:"p"},'id="box-camera"'),") em outra tag html, como no exemplo abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <div id="box-camera"></div>\n</div>\n')),(0,r.kt)("p",null,"Idealmente, voc\xea deve tentar manter uma propor\xe7\xe3o adequada entre altura e largura, o que ir\xe1 facilitar o enquadramento da face do usu\xe1rio. Abaixo um exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  width: 800px;\n  height: 600px;\n  position: relative;\n}\n")),(0,r.kt)("p",null,'Seguindo o exemplo acima, o nosso frame respeitara o tamanho do elemento "pai", neste caso representado pelo container. Desta forma, voc\xea tem a flexibilidade para implementar nosso frame da forma mais conveniente para sua aplica\xe7\xe3o (Como em um modal, por exemplo).'),(0,r.kt)("admonition",{title:"Testando diversos tamanhos de tela",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Testes alterando o tamanho da tela atrav\xe9s do modo desenvolvedor de seu browser n\xe3o ir\xe3o funcionar. Recomendamos que este tipo de teste seja feito alterando o tamanho da janela de seu browser."))),(0,r.kt)(m.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,r.kt)("p",null,"Diferente do que sugerimos na vers\xe3o Web Desktop, para uma view Web Mobile recomendamos que o frame de captura ocupe 100% da tela para evitar problemas com nossos algor\xedtimos de vis\xe3o computacional. Caso a \xe1rea de captura esteja distorcida, nossa funcionalidade de captura autom\xe1tica (C\xe2mera Inteligente) poder\xe1 apresentar problemas de calculo no tracking da face dos usu\xe1rios."),(0,r.kt)("p",null,"Sendo assim, recomendamos que na view Web Mobile: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O frame de captura ocupe 100% da tela do dispositivo (",(0,r.kt)("inlineCode",{parentName:"li"},"100vw/vh"),");"),(0,r.kt)("li",{parentName:"ul"},"Evitar o scroll horizontal ou vertical (isso pode ser minimizado com um modal);")),(0,r.kt)("p",null,"Voc\xea pode conferir um exemplo de implementa\xe7\xe3o atrav\xe9s de um projeto que deixamos ",(0,r.kt)("a",{parentName:"p",href:"recursos-adicionais/exemplos"},"nesta p\xe1gina")," (Angular)."),(0,r.kt)("admonition",{title:"Testes com  simulador de devices",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Testes de devices utilizando o modo desenvolvedor de seu browser n\xe3o ir\xe3o funcionar, dado que, a camera utilizada pelo seu browser \xe9 a mesma de seu desktop, que possui uma resolu\xe7\xe3o totalmente diferente da camera de um dispositivo m\xf3vel. Recomendamos que este tipo de teste seja feito diretamente no device."))))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"configurar-fun\xe7\xf5es-de-callback"},"Configurar fun\xe7\xf5es de callback"),(0,r.kt)("p",null,"Um dos objetos que devemos passar como par\xe2metro ao m\xe9todo respons\xe1vel por renderizar o frame de captura \xe9 o de ",(0,r.kt)("strong",{parentName:"p"},"callback"),". Este objeto dever\xe1 conter fun\xe7\xf5es de callback para casos de sucesso e erro, como exemplificados abaixo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  var callback = {\n    on: {\n      success: (obj) => {\n        console.log(obj.base64);\n        console.log(obj.encrypted);        \n      },\n      error: (error) => {\n        console.error(error)\n        //confira na aba "Configura\xe7\xf5es" sobre os tipos de erros\n      },\n      support: (supportMessage) => {\n        console.log(supportMessage);\n      }\n    }\n  };\n\n')),(0,r.kt)("p",null,"Este objeto \xe9 obrigat\xf3rio e caso n\xe3o seja corretamente implementado (contemplando todos os eventos de ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),") ir\xe1 gerar uma exce\xe7\xe3o, que caso n\xe3o tratada, ser\xe1 exibida no console do usu\xe1rio."),(0,r.kt)("p",null,"Para mais detalhes sobre os c\xf3digos de erro retornados por nosso SDK, consulte ",(0,r.kt)("a",{parentName:"p",href:"../referencias#c%C3%B3digos-de-erro"},"este guia"),".")),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"configurar-layout-do-frame"},"Configurar layout do frame"),(0,r.kt)("admonition",{title:"Passo opcional",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Este \xe9 um passo opcional, por\xe9m recomendado. ")),(0,r.kt)("p",null,"Oferecemos a possibilidade de customiza\xe7\xe3o do frame de captura por meio do nosso ",(0,r.kt)("strong",{parentName:"p"},"Theme Builder"),". Para efetuar a customiza\xe7\xe3o do frame basta gerar uma inst\xe2ncia da classe ",(0,r.kt)("inlineCode",{parentName:"p"},"UnicoThemeBuilder")," e invocar os m\xe9todos que customizam cada uma das propriedades do frame de captura, como exemplificados abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const unicoTheme = new UnicoThemeBuilder()\n.setColorSilhouetteSuccess("#0384fc")\n.setColorSilhouetteError("#D50000")\n.setColorSilhouetteNeutral("#fcfcfc")\n.setBackgroundColor("#dff1f5")\n.setColorText("#0384fc")\n.setBackgroundColorComponents("#0384fc")\n.setColorTextComponents("#dff1f5")\n.setBackgroundColorButtons("#0384fc")\n.setColorTextButtons("#dff1f5")\n.setBackgroundColorBoxMessage("#fff")\n.setColorTextBoxMessage("#000")\n.setHtmlPopupLoading(`<div style="position: absolute; top: 45%; right: 50%; transform:\ntranslate(50%, -50%); z-index: 10; text-align: center;">Carregando...</div>`)\n.build();\n')),(0,r.kt)("p",null,"Ap\xf3s a gera\xe7\xe3o do objeto de tema, conforme exemplificado acima, devemos passa-lo como par\xe2metro para o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"setTheme")," do builder ",(0,r.kt)("inlineCode",{parentName:"p"},"unicoCameraBuilder")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"unicoCameraBuilder.setTheme(unicoTheme);\n"))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"configurar-modo-de-captura-e-iniciar-a-camera"},"Configurar modo de captura e iniciar a camera"),(0,r.kt)("p",null,"Finalmente, devemos iniciar a c\xe2mera com as configura\xe7\xf5es feitas at\xe9 aqui. Para isto, criaremos uma inst\xe2ncia de nosso ",(0,r.kt)("strong",{parentName:"p"},"builder")," atrav\xe9s do m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"build()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const unicoCamera = unicoCameraBuilder.build();\n")),(0,r.kt)("p",null,'Em seguida, com a c\xe2mera "montada", iremos configurar o modo de captura da camera. Como explicamos ',(0,r.kt)("a",{parentName:"p",href:"captura-selfies#recursos-dispon%C3%ADveis"},"acima")," existem tr\xeas modos de captura dispon\xedveis."),(0,r.kt)("p",null,"Caso ",(0,r.kt)("strong",{parentName:"p"},"n\xe3o")," esteja utilizando o modo ",(0,r.kt)("strong",{parentName:"p"},"Smartlive com intera\xe7\xe3o Facetec"),", neste passo voc\xea poder\xe1 escolher entre o modo de captura ",(0,r.kt)("strong",{parentName:"p"},"Manual")," ou ",(0,r.kt)("strong",{parentName:"p"},"Autom\xe1tico"),"."),(0,r.kt)("admonition",{title:"Dica",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Caso voc\xea esteja utilizando o modo ",(0,r.kt)("strong",{parentName:"p"},"Smartlive com intera\xe7\xe3o Facetec"),", a configura\xe7\xe3o do tipo de c\xe2mera passa a ser irrelevante, pois este modo oferece uma experi\xeancia pr\xe9-definida que n\xe3o pode ser alterada."),(0,r.kt)("p",{parentName:"admonition"},"No entanto, sugerimos que voc\xea configure um tipo de c\xe2mera em seu builder (como descrito neste passo), pois caso voc\xea desabilite o modo ",(0,r.kt)("strong",{parentName:"p"},"Liveness com intera\xe7\xe3o Facetec")," em seu portal do cliente (e gere um novo JSON), voc\xea n\xe3o precisar\xe1 alterar seu c\xf3digo.")),(0,r.kt)("p",null,"A prepara\xe7\xe3o da c\xe2mera ser\xe1 efetuada a partir do m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareSelfieCamera()"),", disponibilizado a partir do ",(0,r.kt)("strong",{parentName:"p"},"builder"),". Este m\xe9todo recebe 2 par\xe2metros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O arquivo JSON com suas credenciais (Gerado atrav\xe9s deste ",(0,r.kt)("a",{parentName:"li",href:"../como-comecar#criando-ou-editando-uma-api-key"},"guia"),";"),(0,r.kt)("li",{parentName:"ul"},"Modo de c\xe2mera desejado, sendo eles:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SelfieCameraTypes.NORMAL")," para o modo de c\xe2mera normal;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SelfieCameraTypes.SMART")," para o modo de c\xe2mera intelig\xeante;")))),(0,r.kt)("p",null,"Este m\xe9todo gera uma ",(0,r.kt)("em",{parentName:"p"},"promise")," que ao ser resolvida, devolve um objeto que ser\xe1 utilizado para efetivamente abrir a c\xe2mera atrav\xe9s do m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"open"),", que recebe como par\xe2metro as fun\xe7\xf5es de ",(0,r.kt)("inlineCode",{parentName:"p"},"callback")," configuradas ",(0,r.kt)("a",{parentName:"p",href:"#configurar-fun%C3%A7%C3%B5es-de-callback"},"neste passo"),"."),(0,r.kt)("admonition",{title:"Vale lembrar",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Para otimizar a abertura da c\xe2mera \xe9 poss\xedvel separar as chamadas dos m\xe9todos ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareSelfieCamera()")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"open()"),".\nVeja um exemplo nesta ",(0,r.kt)("a",{parentName:"p",href:"/recursos-adicionais/exemplos#projetos-web"},"POC feita em React com TypeScript"),". ")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"manual",label:"Captura Manual",default:!0,mdxType:"TabItem"},(0,r.kt)("h4",{id:"captura-manual-1"},"Captura manual"),(0,r.kt)("p",null,"Caso deseje utilizar a captura manual, passe o par\xe2metro ",(0,r.kt)("inlineCode",{parentName:"p"},"Unico.SelfieCameraTypes.NORMAL")," para o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareSelfieCamera"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\n  const cameraPromised = unicoCamera.prepareSelfieCamera("/services.json", SelfieCameraTypes.NORMAL);\n  \n  cameraPromised.then(cameraOpener => cameraOpener.open(callback));\n'))),(0,r.kt)(m.Z,{value:"automatico",label:"Captura Autom\xe1tica",mdxType:"TabItem"},(0,r.kt)("h4",{id:"captura-inteligente-autom\xe1tica"},"Captura inteligente (autom\xe1tica)"),(0,r.kt)("p",null,"Caso deseje utilizar a captura autom\xe1tica, passe o par\xe2metro ",(0,r.kt)("inlineCode",{parentName:"p"},"Unico.SelfieCameraTypes.SMART")," para o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareSelfieCamera"),"."),(0,r.kt)("p",null,"Para a captura inteligente, os modelos de vis\xe3o computacional tamb\xe9m devem ser carregados atrav\xe9s do m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"setModelsPath"),", conforme explicado no primeiro passo deste guia."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  const cameraPromised = unicoCamera.prepareSelfieCamera("/services.json", SelfieCameraTypes.SMART);\n\n  cameraPromised.then(cameraOpener => cameraOpener.open(callback));\n'))))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"chamar-nossas-apis"},"Chamar nossas APIs"),(0,r.kt)("p",null,"A captura das imagens \xe9 apenas a primeira parte da nossa jornada. Ap\xf3s a capturar, voc\xea dever\xe1 enviar o ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," gerado para nossas APIs, selecionando um dos fluxos dispon\xedveis detalhados ",(0,r.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs"},"nesta documenta\xe7\xe3o"),".")))),(0,r.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,r.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes op\xe7\xf5es para que voc\xea possa obter ajuda:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, voc\xea tamb\xe9m pode entrar em contato atrav\xe9s de nossa ",(0,r.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"Central de Ajuda"),";")),(0,r.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,r.kt)("p",null,"\xd3timo! Voc\xea chegou at\xe9 aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"captura-selfies"},"Guia para implanta\xe7\xe3o de captura de documentos"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../referencias"},"Artigo de referencias do SDK Web"),";")))}k.isMDXComponent=!0},26196:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/img_camerainteligente-a50c291a3e4d3b7d32a1f576a4ef76c7.png"},94288:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/img_cameranormal-47c9ebec4e0e323b8954e8ab59839c74.png"}}]);