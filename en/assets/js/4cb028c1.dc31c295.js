"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[5006],{3905:(e,o,a)=>{a.d(o,{Zo:()=>c,kt:()=>l});var t=a(67294);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=t.createContext({}),d=function(e){var o=t.useContext(u),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},c=function(e){var o=d(e.components);return t.createElement(u.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),l=n,g=m["".concat(u,".").concat(l)]||m[l]||p[l]||r;return a?t.createElement(g,i(i({ref:o},c),{},{components:a})):t.createElement(g,i({ref:o},c))}));function l(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var u in o)hasOwnProperty.call(o,u)&&(s[u]=o[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},444:(e,o,a)=>{a.d(o,{Z:()=>i});var t=a(67294);const n="url_ipuT",r="method_rIqc";function i(e){let{children:o,method:a}=e;return t.createElement("span",{className:n},t.createElement("span",{className:r},a),o)}},17894:(e,o,a)=>{a.d(o,{Z:()=>n});var t=a(67294);const n=function(e){let{children:o,headingDepth:a}=e;const[n,r]=(0,t.useState)(null);return t.createElement("div",{className:"steps steps--h"+a},o)}},95471:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>u,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var t=a(87462),n=(a(67294),a(3905)),r=a(17894),i=a(444);const s={sidebar_position:2,sidebar_label:"Obter arquivo PDF",description:"Aprenda como gerar um arquivo PDF de um documento atrav\xe9s de nossa API.",title:"Obter arquivo PDF"},u=void 0,d={unversionedId:"sign/api-guides/managing-documents/get-pdf",id:"sign/api-guides/managing-documents/get-pdf",title:"Obter arquivo PDF",description:"Aprenda como gerar um arquivo PDF de um documento atrav\xe9s de nossa API.",source:"@site/docs/sign/api-guides/managing-documents/get-pdf.mdx",sourceDirName:"sign/api-guides/managing-documents",slug:"/sign/api-guides/managing-documents/get-pdf",permalink:"/unico-docs-stage/en/docs/sign/api-guides/managing-documents/get-pdf",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sign/api-guides/managing-documents/get-pdf.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Obter arquivo PDF",description:"Aprenda como gerar um arquivo PDF de um documento atrav\xe9s de nossa API.",title:"Obter arquivo PDF"},sidebar:"signSidebar",previous:{title:"Obter detalhes",permalink:"/unico-docs-stage/en/docs/sign/api-guides/managing-documents/get-details"},next:{title:"Obter dados de modelo",permalink:"/unico-docs-stage/en/docs/sign/api-guides/managing-documents/get-template-data"}},c={},p=[{value:"Sobre este guia",id:"sobre-este-guia",level:2},{value:"O que voc\xea vai precisar",id:"o-que-voc\xea-vai-precisar",level:2},{value:"Funcionamento b\xe1sico",id:"funcionamento-b\xe1sico",level:2},{value:"Obtenha um token OAuth v\xe1lido;",id:"obtenha-um-token-oauth-v\xe1lido",level:3},{value:"Fa\xe7a uma requisi\xe7\xe3o para o endpoint <code>/file/</code>",id:"fa\xe7a-uma-requisi\xe7\xe3o-para-o-endpoint-file",level:3},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",level:2}],m={toc:p};function l(e){let{components:o,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},m,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,n.kt)("p",null,"Atrav\xe9s deste guia, demonstraremos como gerar um arquivo PDF a partir de um documento atrav\xe9s de nossa API REST. Ao seguir os passos deste guia, em poucos minutos voc\xea ser\xe1 capaz de obter um arquivo PDF do documento desejado."),(0,n.kt)("admonition",{title:"Envelopes e documentos",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Voc\xea j\xe1 sabe, mas n\xe3o custa lembrar: Um envelope possui um ou mais documentos. O documento em quest\xe3o dever\xe1 estar dentro de um envelope.")),(0,n.kt)("h2",{id:"o-que-voc\xea-vai-precisar"},"O que voc\xea vai precisar"),(0,n.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Certifique-se que voc\xea possui credenciais v\xe1lidas para utilizaro ",(0,n.kt)("strong",{parentName:"li"},"Unico Sign"),". Se voc\xea ainda n\xe3o suas credenciais, siga nosso ",(0,n.kt)("a",{parentName:"li",href:"#"},"guia de Primeiros Passos")," para configurar sua conta de teste e obter sua chaves de API."),(0,n.kt)("li",{parentName:"ol"},"Entenda os conceitos b\xe1sicos sobre nosso produto. \xc9 extremamente importante que voc\xea entenda estes conceitos para fazer uma boa utiliza\xe7\xe3o das APIs do ",(0,n.kt)("strong",{parentName:"li"},"Unico Sign"),". Voc\xea pode encontrar nossos conceitos b\xe1sicos ",(0,n.kt)("a",{parentName:"li",href:"#"},"neste guia"),".")),(0,n.kt)("h2",{id:"funcionamento-b\xe1sico"},"Funcionamento b\xe1sico"),(0,n.kt)("p",null,"Como explicamos em nosso ",(0,n.kt)("a",{parentName:"p",href:"#"},"guia de conceitos b\xe1sicos"),", ",(0,n.kt)("strong",{parentName:"p"},"Documentos")," (",(0,n.kt)("inlineCode",{parentName:"p"},"document"),") s\xe3o a representa\xe7\xe3o virtual de um documento que deve ser assinado (por um ou mais assinanates) e pode ser gerado a patir de um arquivo PDF ou de um modelo (",(0,n.kt)("inlineCode",{parentName:"p"},"Template"),"). Os documentos est\xe3o contidos dentro de um envelope, que por sua vez pode conter um ou mais documentos."),(0,n.kt)("p",null,"Entenda a seguir, como obter um arquivo PDF de um documentos pertencente a um de seus envelopes:"),(0,n.kt)(r.Z,{headingDepth:3,mdxType:"Steps"},(0,n.kt)("ol",null,(0,n.kt)("li",null,(0,n.kt)("h3",{id:"obtenha-um-token-oauth-v\xe1lido"},"Obtenha um token OAuth v\xe1lido;"),(0,n.kt)("p",null,"Para efetuar requisi\xe7\xf5es \xe0 nossa API REST voc\xea necessitar\xe1 de um token de acesso OAuth v\xe1lido. Caso n\xe3o esteja familizarizado com o modelo de autentica\xe7\xe3o OAuth, entenda como gerar um token v\xe1lido ",(0,n.kt)("a",{parentName:"p",href:"#"},"neste artigo"),". Ap\xf3s sua gera\xe7\xe3o, o token de acesso dever\xe1 ser enviado no ",(0,n.kt)("inlineCode",{parentName:"p"},"header")," de sua requisi\xe7\xe3o, junto ao par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"p"},"Authorization"),"."),(0,n.kt)("admonition",{title:"Ambientes",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Ao iniciar sua integra\xe7\xe3o voc\xea receber\xe1 credenciais a nosso ambiente de homologa\xe7\xe3o. S\xf3mente ap\xf3s o processo de testes e certifica\xe7\xe3o voc\xea receber\xe1 credenciais de produ\xe7\xe3o."),(0,n.kt)("p",{parentName:"admonition"},"Voc\xea dever\xe1 apontar suas requisi\xe7\xf5es \xe0s URLs corretas em cada est\xe1gio de sua integra\xe7\xe3o. Abaixo listamos as URLs de homologa\xe7\xe3o e produ\xe7\xe3o:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Ambiente de homologa\xe7\xe3o: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://signhom.acesso.io"),";"),(0,n.kt)("li",{parentName:"ul"},"Ambiente de produ\xe7\xe3o: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://sign.acesso.io"),".")))),(0,n.kt)("li",null,(0,n.kt)("h3",{id:"fa\xe7a-uma-requisi\xe7\xe3o-para-o-endpoint-file"},"Fa\xe7a uma requisi\xe7\xe3o para o endpoint ",(0,n.kt)("inlineCode",{parentName:"h3"},"/file/")),(0,n.kt)("p",null,"Ap\xf3s gerar um token de acesso v\xe1lido, fa\xe7a uma requisi\xe7\xe3o para o endpoint de gera\xe7\xe3o de arquivos PDF de nossa API REST (",(0,n.kt)(i.Z,{method:"GET",mdxType:"HttpMethod"},"/service/file"),"), especificando qual documento deseja como um par\xe2metro no path da requisi\xe7\xe3o."),(0,n.kt)("p",null,"Abaixo um exemplo da requisi\xe7\xe3o:"),(0,n.kt)("admonition",{title:"Document UUID",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"N\xe3o se esque\xe7a de subsctituir o par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"p"},"DOCUMENT_UUID")," na requisi\xe7\xe3o abaixo. Este par\xe2metro deve conter o UUID do documento ao qual voc\xea deseje gerar as evid\xeancias."),(0,n.kt)("p",{parentName:"admonition"},"Exemplo de formato de um UUID: 00000000-0000-0000-0000-000000000000")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://sign-core-dev.acesso.io/api/v1/service/file/{{DOCUMENT_UUID}}' \\\n  -H 'accept: application/pdf' \\\n  -H 'Authorization: Bearer {{ACCESS_TOKEN}}'\n\n")),(0,n.kt)("p",null,"Se tudo der certo em sua requisi\xe7\xe3o, voc\xea receber\xe1 como respota um string codifica\xe7\xe3o em base64 que dever\xe1 ser convertido para um arquivo PDF em sua aplica\xe7\xe3o. Exemplo de resposta: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"}," assdad\nxxxxx\n\n"))))),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,n.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-documentos"},"Gerenciamento de documentos"),"."),(0,n.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,n.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-envelopes"},"Gerenciamento de envelopes"),"."),(0,n.kt)("li",{parentName:"ul"},"Tendo problemas em nossa integra\xe7\xe3o? Acesse nossa sess\xe3o de ",(0,n.kt)("a",{parentName:"li",href:"/FAQ"},"FAQ e problemas comuns"),"."),(0,n.kt)("li",{parentName:"ul"},"Explore a documentac\xe3o da API do Unico Sign em nosso ",(0,n.kt)("a",{parentName:"li",href:"#"},"API Reference"),".")),(0,n.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,n.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Caso tenha d\xfavidas que n\xe3o estejam relacionadas as nossas APIs, acesse nossa ",(0,n.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360003086372-Unico-Sign"},"central de ajuda"),"."),(0,n.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, entre em contato atrav\xe9s de nosso ",(0,n.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/requests/new"},"portal de solicita\xe7\xf5es"),".")))}l.isMDXComponent=!0}}]);