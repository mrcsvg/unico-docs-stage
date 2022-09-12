"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[2421],{3905:(e,a,o)=>{o.d(a,{Zo:()=>l,kt:()=>m});var n=o(67294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function r(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=n.createContext({}),c=function(e){var a=n.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},l=function(e){var a=c(e.components);return n.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,d=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=c(o),m=t,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return o?n.createElement(f,s(s({ref:a},l),{},{components:o})):n.createElement(f,s({ref:a},l))}));function m(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,s=new Array(i);s[0]=p;var r={};for(var d in a)hasOwnProperty.call(a,d)&&(r[d]=a[d]);r.originalType=e,r.mdxType="string"==typeof e?e:t,s[1]=r;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},29679:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=o(87462),t=(o(67294),o(3905));const i={sidebar_position:1,sidebar_label:"Vis\xe3o geral",title:"Vis\xe3o geral",description:"Entenda o que pode fazer com as APIs do Unico Sign"},s=void 0,r={unversionedId:"sign/api-guides/overview",id:"sign/api-guides/overview",title:"Vis\xe3o geral",description:"Entenda o que pode fazer com as APIs do Unico Sign",source:"@site/docs/sign/api-guides/overview.mdx",sourceDirName:"sign/api-guides",slug:"/sign/api-guides/overview",permalink:"/en/docs/sign/api-guides/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sign/api-guides/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Vis\xe3o geral",title:"Vis\xe3o geral",description:"Entenda o que pode fazer com as APIs do Unico Sign"},sidebar:"signSidebar",previous:{title:"Conceitos b\xe1sicos",permalink:"/en/docs/sign/fundamentals"},next:{title:"Autentica\xe7\xe3o",permalink:"/en/docs/sign/api-guides/authentication"}},d={},c=[{value:"Principais funcionalidades",id:"principais-funcionalidades",level:2},{value:"Casos de uso",id:"casos-de-uso",level:3},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",level:2}],l={toc:c};function u(e){let{components:a,...o}=e;return(0,t.kt)("wrapper",(0,n.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"A API Rest do ",(0,t.kt)("strong",{parentName:"p"},"Unico Sign")," oferece uma integra\xe7\xe3o simples e r\xe1pida ao sistema de assinaturas da Unico. Nossa API utiliza requisi\xe7\xf5es e respostas no formato JSON e possui um sistema de autentica\xe7\xe3o baseado em JWT Barear. "),(0,t.kt)("p",null,"Descubra abaixo as funcionalidades dispon\xedveis assim como alguns casos de usos."),(0,t.kt)("h2",{id:"principais-funcionalidades"},"Principais funcionalidades"),(0,t.kt)("p",null,"atrav\xe9s de nossas APIs, voc\xea poder\xe1 gerenciar todo o fluxo de vida de um envelope, seus documentos e assinantes. Abaixo uma lista com as principais funcionalidades de nossa API."),(0,t.kt)("admonition",{title:"Conceitos b\xe1sicos",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Se voc\xea ainda nao o fez, recomendamos explorar nosso guia de conceitos b\xe1sicos. "),(0,t.kt)("p",{parentName:"admonition"},"Por l\xe1, voc\xea entender\xe1 no detalhe o que representa cada uma das entidades que comentaremos a seguir:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Cria\xe7\xe3o de envelopes;"),(0,t.kt)("li",{parentName:"ul"},"Cria\xe7\xe3o de contatos;"),(0,t.kt)("li",{parentName:"ul"},"Gera\xe7\xe3o de evid\xeancias;"),(0,t.kt)("li",{parentName:"ul"},"Listar documentos de um envelope; "),(0,t.kt)("li",{parentName:"ul"},"Gerar PDFs de documentos em envelopes;"),(0,t.kt)("li",{parentName:"ul"},"Gerar PDFs de documentos em envelopes;")),(0,t.kt)("admonition",{title:"Ambiente de testes",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Voc\xea poder\xe1 utilizar nossa API em um ambiente de homologa\xe7\xe3o para testar nosas funcionalidades, evitando afetar seu entorno produtivo.")),(0,t.kt)("h3",{id:"casos-de-uso"},"Casos de uso"),(0,t.kt)("p",null,"A API Rest do ",(0,t.kt)("strong",{parentName:"p"},"Unico Sign")," possibilita a cria\xe7\xe3o de uma ampla variedade de aplica\xe7\xf5es. Entenda alguns casos de uso:"),(0,t.kt)("admonition",{title:"Em constru\xe7\xe3o",type:"warning"},(0,t.kt)("p",{parentName:"admonition"},"Em breve compartilharemos os use cases")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"...")),(0,t.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,t.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-documentos"},"Gerenciamento de documentos"),"."),(0,t.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,t.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-envelopes"},"Gerenciamento de envelopes"),"."),(0,t.kt)("li",{parentName:"ul"},"Tendo problemas em nossa integra\xe7\xe3o? Acesse nossa sess\xe3o de ",(0,t.kt)("a",{parentName:"li",href:"/FAQ"},"FAQ e problemas comuns"),"."),(0,t.kt)("li",{parentName:"ul"},"Explore a documentac\xe3o da API do Unico Sign em nosso ",(0,t.kt)("a",{parentName:"li",href:"#"},"API Reference"),".")),(0,t.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,t.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Caso tenha d\xfavidas que n\xe3o estejam relacionadas as nossas APIs, acesse nossa ",(0,t.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360003086372-Unico-Sign"},"central de ajuda"),"."),(0,t.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, entre em contato atrav\xe9s de nosso ",(0,t.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/requests/new"},"portal de solicita\xe7\xf5es"),".")))}u.isMDXComponent=!0}}]);