(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[8226],{3905:(e,a,o)=>{"use strict";o.d(a,{Zo:()=>p,kt:()=>m});var n=o(67294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=n.createContext({}),l=function(e){var a=n.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},p=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=t,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return o?n.createElement(v,r(r({ref:a},p),{},{components:o})):n.createElement(v,r({ref:a},p))}));function m(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=o.length,r=new Array(s);r[0]=d;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,r[1]=i;for(var l=2;l<s;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},46300:(e,a,o)=>{"use strict";o.d(a,{Z:()=>d});var n=o(87462),t=o(67294),s=o(86010),r=o(19521),i=(o(61793),o(72933)),c=o(49009),l=o(28084);function p(e){var a;const o=(0,l.OD)("docusaurus-plugin-redoc");return e?null==o?void 0:o[e]:null==(a=Object.values(null!=o?o:{}))?void 0:a[0]}const u=e=>{let{id:a,example:o,pointer:l,...u}=e;const d=p(a),{store:m}=(0,c.U)(d);return(0,t.useEffect)((()=>{m.menu.dispose()}),[m]),t.createElement(r.ThemeProvider,{theme:m.options.theme},t.createElement("div",{className:(0,s.Z)(["redocusaurus","redocusaurus-schema",o?null:"hide-example"])},t.createElement(i.SchemaDefinition,(0,n.Z)({parser:m.spec.parser,options:m.options,schemaRef:l},u))))};u.defaultProps={example:!1};const d=u},444:(e,a,o)=>{"use strict";o.d(a,{Z:()=>r});var n=o(67294);const t="url_ipuT",s="method_rIqc";function r(e){let{children:a,method:o}=e;return n.createElement("span",{className:t},n.createElement("span",{className:s},o),a)}},17894:(e,a,o)=>{"use strict";o.d(a,{Z:()=>t});var n=o(67294);const t=function(e){let{children:a,headingDepth:o}=e;const[t,s]=(0,n.useState)(null);return n.createElement("div",{className:"steps steps--h"+o},a)}},26935:(e,a,o)=>{"use strict";o.r(a),o.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var n=o(87462),t=(o(67294),o(3905)),s=o(17894),r=o(444),i=o(46300);const c={sidebar_position:1,sidebar_label:"Cancelar envelopes",description:"Aprenda como cancelar um envelope",title:"Cancelar envelopes"},l=void 0,p={unversionedId:"sign/api-guides/managing-evelopes/cancel-evelope",id:"sign/api-guides/managing-evelopes/cancel-evelope",title:"Cancelar envelopes",description:"Aprenda como cancelar um envelope",source:"@site/docs/sign/api-guides/managing-evelopes/cancel-evelope.mdx",sourceDirName:"sign/api-guides/managing-evelopes",slug:"/sign/api-guides/managing-evelopes/cancel-evelope",permalink:"/unico-docs-stage/en/docs/sign/api-guides/managing-evelopes/cancel-evelope",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sign/api-guides/managing-evelopes/cancel-evelope.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cancelar envelopes",description:"Aprenda como cancelar um envelope",title:"Cancelar envelopes"},sidebar:"signSidebar",previous:{title:"Gerenciando envelopes",permalink:"/unico-docs-stage/en/docs/category/gerenciando-envelopes"},next:{title:"Listar documentos",permalink:"/unico-docs-stage/en/docs/sign/api-guides/managing-evelopes/list-documents"}},u={},d=[{value:"Sobre este guia",id:"sobre-este-guia",level:2},{value:"O que voc\xea vai precisar",id:"o-que-voc\xea-vai-precisar",level:2},{value:"Funcionamento b\xe1sico",id:"funcionamento-b\xe1sico",level:2},{value:"Obtenha um token OAuth v\xe1lido;",id:"obtenha-um-token-oauth-v\xe1lido",level:3},{value:"Fa\xe7a uma requisi\xe7\xe3o POST para o endpoint <code>/cancel/</code>",id:"fa\xe7a-uma-requisi\xe7\xe3o-post-para-o-endpoint-cancel",level:3},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",level:2}],m={toc:d};function v(e){let{components:a,...o}=e;return(0,t.kt)("wrapper",(0,n.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,t.kt)("p",null,"Atrav\xe9s deste guia, demonstraremos como cancelar um envelope atrav\xe9s de nossa API REST. Ao seguir os passos deste guia, em poucos minutos voc\xea ser\xe1 capaz de cancelar um envelope a partir de seu UUID e receber uma confirma\xe7\xe3o em uma resposta JSON."),(0,t.kt)("h2",{id:"o-que-voc\xea-vai-precisar"},"O que voc\xea vai precisar"),(0,t.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Certifique-se que voc\xea possui credenciais v\xe1lidas para utilizar o ",(0,t.kt)("strong",{parentName:"li"},"Unico Sign"),". Se voc\xea ainda n\xe3o possui suas credenciais, siga nosso ",(0,t.kt)("a",{parentName:"li",href:"#"},"guia de Primeiros Passos")," para configurar sua conta de teste e obter suas chaves de API."),(0,t.kt)("li",{parentName:"ol"},"Entenda os conceitos b\xe1sicos sobre nosso produto. \xc9 extremamente importante que voc\xea entenda estes conceitos para fazer uma boa utiliza\xe7\xe3o das APIs do ",(0,t.kt)("strong",{parentName:"li"},"Unico Sign"),". Voc\xea pode encontrar nossos conceitos b\xe1sicos ",(0,t.kt)("a",{parentName:"li",href:"#"},"neste guia"),".")),(0,t.kt)("h2",{id:"funcionamento-b\xe1sico"},"Funcionamento b\xe1sico"),(0,t.kt)("p",null,"Como explicamos em nosso ",(0,t.kt)("a",{parentName:"p",href:"#"},"guia de conceitos b\xe1sicos"),", nossa entidade ",(0,t.kt)("strong",{parentName:"p"},"Envelope")," (",(0,t.kt)("inlineCode",{parentName:"p"},"envelope"),") \xe9 a representa\xe7\xe3o virtual de um envelope com documentos na vida real. Ele \xe9 o objeto que agrupa todos os documentos (",(0,t.kt)("inlineCode",{parentName:"p"},"document"),") e seus assinantes (",(0,t.kt)("inlineCode",{parentName:"p"},"subscriber"),"), sendo que um envelope pode conter mais de documento, que por sua vez pode conter um ou mais assinantes."),(0,t.kt)("p",null,"Ao cancelar um envelope, um e-mail e um SMS ser\xe3o enviados para os assinantes dos documentos contidos no envelope. Uma vez cancelado, o envelope n\xe3o poder\xe1 mais ser acessado, assinado ou recusado pelos assinantes."),(0,t.kt)("p",null,"Entenda, a seguir, como chamar nossa API REST para cancelar um envelope."),(0,t.kt)(s.Z,{headingDepth:3,mdxType:"Steps"},(0,t.kt)("ol",null,(0,t.kt)("li",null,(0,t.kt)("h3",{id:"obtenha-um-token-oauth-v\xe1lido"},"Obtenha um token OAuth v\xe1lido;"),(0,t.kt)("p",null,"Para efetuar requisi\xe7\xf5es \xe0 nossa API REST voc\xea necessitar\xe1 de um token de acesso OAuth v\xe1lido. Caso n\xe3o esteja familizarizado com o modelo de autentica\xe7\xe3o OAuth, entenda como gerar um token v\xe1lido ",(0,t.kt)("a",{parentName:"p",href:"#"},"neste artigo"),". Ap\xf3s sua gera\xe7\xe3o, o token de acesso dever\xe1 ser enviado no ",(0,t.kt)("inlineCode",{parentName:"p"},"header")," de sua requisi\xe7\xe3o, junto ao par\xe2metro ",(0,t.kt)("inlineCode",{parentName:"p"},"Authorization"),"."),(0,t.kt)("admonition",{title:"Ambientes",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Ao iniciar sua integra\xe7\xe3o voc\xea receber\xe1 credenciais a nosso ambiente de homologa\xe7\xe3o. S\xf3mente ap\xf3s o processo de testes e certifica\xe7\xe3o voc\xea receber\xe1 credenciais de produ\xe7\xe3o."),(0,t.kt)("p",{parentName:"admonition"},"Voc\xea dever\xe1 apontar suas requisi\xe7\xf5es \xe0s URLs corretas em cada est\xe1gio de sua integra\xe7\xe3o. Abaixo listamos as URLs de homologa\xe7\xe3o e produ\xe7\xe3o:"),(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},"Ambiente de homologa\xe7\xe3o: ",(0,t.kt)("inlineCode",{parentName:"li"},"https://signhom.acesso.io"),";"),(0,t.kt)("li",{parentName:"ul"},"Ambiente de produ\xe7\xe3o: ",(0,t.kt)("inlineCode",{parentName:"li"},"https://sign.acesso.io"),".")))),(0,t.kt)("li",null,(0,t.kt)("h3",{id:"fa\xe7a-uma-requisi\xe7\xe3o-post-para-o-endpoint-cancel"},"Fa\xe7a uma requisi\xe7\xe3o POST para o endpoint ",(0,t.kt)("inlineCode",{parentName:"h3"},"/cancel/")),(0,t.kt)("p",null,"Ap\xf3s gerar um token de acesso v\xe1lido, fa\xe7a uma requisi\xe7\xe3o para o endpoint de cancelamento de envelopes da nossa API REST (",(0,t.kt)(r.Z,{method:"POST",mdxType:"HttpMethod"},"/service/cancel"),") enviando os par\xe2metros conforme o schema abaixo:"),(0,t.kt)(i.Z,{pointer:"#/components/schemas/CancelEnvelopeRequest",mdxType:"ApiSchema"}),(0,t.kt)("admonition",{title:"Permiss\xe3o para Visualizar Documentos",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Para utilizar esta rota \xe9 necess\xe1rio que o usu\xe1rio tenha permiss\xe3o de ",(0,t.kt)("strong",{parentName:"p"},"Enviar Documentos"))),(0,t.kt)("p",null,"Abaixo um exemplo de como cancelar um envelope com o UUID igual a ",(0,t.kt)("strong",{parentName:"p"},"00000000-0000-0000-0000-000000000000"),' informando como motivo "',(0,t.kt)("strong",{parentName:"p"},"Solicita\xe7\xe3o de corre\xe7\xe3o"),'":'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"\ncurl -X 'POST' \\\n  'https://sign-core-uat.acesso.io/api/v1/service/cancel' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer {{ACCESS_TOKEN}}'\n  -d '{\n  \"EnvelopeUUID\": \"00000000-0000-0000-0000-000000000000\",\n  \"Reason\": \"Solicita\xe7\xe3o de corre\xe7\xe3o\"\n}'\n")),(0,t.kt)("p",null,"Se tudo der certo em sua requisi\xe7\xe3o, voc\xea receber\xe1 como resposta um JSON contendo a confirma\xe7\xe3o da exclus\xe3o do envelope."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Success": true,\n  "Message": "Envelope cancelado com sucesso"\n}\n')),(0,t.kt)("admonition",{title:"API Reference",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Aprenda mais sobre este endpoint em nosso ",(0,t.kt)("a",{parentName:"p",href:"#"},"API Reference"),"."))))),(0,t.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,t.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-documentos"},"Gerenciamento de documentos"),"."),(0,t.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,t.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-envelopes"},"Gerenciamento de envelopes"),"."),(0,t.kt)("li",{parentName:"ul"},"Tendo problemas em nossa integra\xe7\xe3o? Acesse nossa sess\xe3o de ",(0,t.kt)("a",{parentName:"li",href:"/FAQ"},"FAQ e problemas comuns"),"."),(0,t.kt)("li",{parentName:"ul"},"Explore a documentac\xe3o da API do Unico Sign em nosso ",(0,t.kt)("a",{parentName:"li",href:"#"},"API Reference"),".")),(0,t.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,t.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Caso tenha d\xfavidas que n\xe3o estejam relacionadas as nossas APIs, acesse nossa ",(0,t.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360003086372-Unico-Sign"},"central de ajuda"),"."),(0,t.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, entre em contato atrav\xe9s de nosso ",(0,t.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/requests/new"},"portal de solicita\xe7\xf5es"),".")))}v.isMDXComponent=!0},83105:()=>{},26242:()=>{},22045:()=>{},11314:()=>{},67251:()=>{},99018:()=>{},43044:()=>{},3408:()=>{},35126:()=>{}}]);