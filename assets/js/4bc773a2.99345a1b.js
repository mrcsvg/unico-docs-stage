"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[7072],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var o=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),u=function(e){var a=o.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=u(e.components);return o.createElement(d.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=u(t),p=n,v=m["".concat(d,".").concat(p)]||m[p]||l[p]||i;return t?o.createElement(v,s(s({ref:a},c),{},{components:t})):o.createElement(v,s({ref:a},c))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=m;var r={};for(var d in a)hasOwnProperty.call(a,d)&&(r[d]=a[d]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var u=2;u<i;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},444:(e,a,t)=>{t.d(a,{Z:()=>s});var o=t(67294);const n="url_ipuT",i="method_rIqc";function s(e){let{children:a,method:t}=e;return o.createElement("span",{className:n},o.createElement("span",{className:i},t),a)}},17894:(e,a,t)=>{t.d(a,{Z:()=>n});var o=t(67294);const n=function(e){let{children:a,headingDepth:t}=e;const[n,i]=(0,o.useState)(null);return o.createElement("div",{className:"steps steps--h"+t},a)}},88427:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var o=t(87462),n=(t(67294),t(3905)),i=t(17894),s=t(444);const r={sidebar_position:1,sidebar_label:"Obter detalhes",title:"Obter detalhes"},d=void 0,u={unversionedId:"sign/api-guides/managing-documents/get-details",id:"sign/api-guides/managing-documents/get-details",title:"Obter detalhes",description:"Sobre este guia",source:"@site/docs/sign/api-guides/managing-documents/get-details.mdx",sourceDirName:"sign/api-guides/managing-documents",slug:"/sign/api-guides/managing-documents/get-details",permalink:"/docs/sign/api-guides/managing-documents/get-details",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sign/api-guides/managing-documents/get-details.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Obter detalhes",title:"Obter detalhes"},sidebar:"signSidebar",previous:{title:"Gerenciando documentos",permalink:"/docs/category/gerenciando-documentos"},next:{title:"Obter arquivo PDF",permalink:"/docs/sign/api-guides/managing-documents/get-pdf"}},c={},l=[{value:"Sobre este guia",id:"sobre-este-guia",level:2},{value:"O que voc\xea vai precisar",id:"o-que-voc\xea-vai-precisar",level:2},{value:"Funcionamento b\xe1sico",id:"funcionamento-b\xe1sico",level:2},{value:"Obtenha um token OAuth v\xe1lido;",id:"obtenha-um-token-oauth-v\xe1lido",level:3},{value:"Fa\xe7a uma requisi\xe7\xe3o GET para o endpoint <code>/documents/</code>",id:"fa\xe7a-uma-requisi\xe7\xe3o-get-para-o-endpoint-documents",level:3},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",level:2}],m={toc:l};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,n.kt)("p",null,"Atrav\xe9s deste guia, demonstraremos como obter todos os detalhes de um documento atrav\xe9s de nossa API REST. Ao seguir os passos deste guia, em poucos minutos voc\xea ser\xe1 capaz de obter todos os detalhes de um documento de forma estruturada em uma resposta JSON."),(0,n.kt)("h2",{id:"o-que-voc\xea-vai-precisar"},"O que voc\xea vai precisar"),(0,n.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Certifique-se que voc\xea possui credenciais v\xe1lidas para utilizar o ",(0,n.kt)("strong",{parentName:"li"},"Unico Sign"),". Se voc\xea ainda n\xe3o possui suas credenciais, siga nosso ",(0,n.kt)("a",{parentName:"li",href:"#"},"guia de Primeiros Passos")," para configurar sua conta de teste e obter suas chaves de API."),(0,n.kt)("li",{parentName:"ol"},"Entenda os conceitos b\xe1sicos sobre nosso produto. \xc9 extremamente importante que voc\xea entenda estes conceitos para fazer uma boa utiliza\xe7\xe3o das APIs do ",(0,n.kt)("strong",{parentName:"li"},"Unico Sign"),". Voc\xea pode encontrar nossos conceitos b\xe1sicos ",(0,n.kt)("a",{parentName:"li",href:"#"},"neste guia"),".")),(0,n.kt)("h2",{id:"funcionamento-b\xe1sico"},"Funcionamento b\xe1sico"),(0,n.kt)("p",null,"Como explicamos em nosso ",(0,n.kt)("a",{parentName:"p",href:"#"},"guia de conceitos b\xe1sicos"),", ",(0,n.kt)("strong",{parentName:"p"},"Documentos")," (",(0,n.kt)("inlineCode",{parentName:"p"},"document"),") s\xe3o a representa\xe7\xe3o virtual de um documento que deve ser assinado (por um ou mais assinanates) e pode ser gerado a patir de um arquivo PDF ou de um modelo (",(0,n.kt)("inlineCode",{parentName:"p"},"Template"),"). "),(0,n.kt)("p",null,"Todos os eventos que ocorrem no ciclo vida de um documento ficam registrados e podem ser recuperados atrav\xe9s desta funcionalidade. Este endpoint disponibilza os detalhes de cada documento, assim como todos seus eventos."),(0,n.kt)("p",null,"Atualmente, os seguintes eventos s\xe3o armazenados e retornados:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Envio do documento para assinatura;"),(0,n.kt)("li",{parentName:"ul"},"Abertura do link do envelope por um assinante;"),(0,n.kt)("li",{parentName:"ul"},"Visualiza\xe7\xe3o do documento por um assinante;"),(0,n.kt)("li",{parentName:"ul"},"Assinatura ou recusa do documento por um assinante;")),(0,n.kt)("p",null,"Entenda, a seguir, como chamar nossa API Rest para obter detalhes de seus documentos:"),(0,n.kt)(i.Z,{headingDepth:3,mdxType:"Steps"},(0,n.kt)("ol",null,(0,n.kt)("li",null,(0,n.kt)("h3",{id:"obtenha-um-token-oauth-v\xe1lido"},"Obtenha um token OAuth v\xe1lido;"),(0,n.kt)("p",null,"Para efetuar requisi\xe7\xf5es \xe0 nossa API REST voc\xea necessitar\xe1 de um token de acesso OAuth v\xe1lido. Caso n\xe3o esteja familizarizado com o modelo de autentica\xe7\xe3o OAuth, entenda como gerar um token v\xe1lido ",(0,n.kt)("a",{parentName:"p",href:"#"},"neste artigo"),". Ap\xf3s sua gera\xe7\xe3o, o token de acesso dever\xe1 ser enviado no ",(0,n.kt)("inlineCode",{parentName:"p"},"header")," de sua requisi\xe7\xe3o, junto ao par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"p"},"Authorization"),"."),(0,n.kt)("admonition",{title:"Ambientes",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Ao iniciar sua integra\xe7\xe3o voc\xea receber\xe1 credenciais a nosso ambiente de homologa\xe7\xe3o. S\xf3mente ap\xf3s o processo de testes e certifica\xe7\xe3o voc\xea receber\xe1 credenciais de produ\xe7\xe3o."),(0,n.kt)("p",{parentName:"admonition"},"Voc\xea dever\xe1 apontar suas requisi\xe7\xf5es \xe0s URLs corretas em cada est\xe1gio de sua integra\xe7\xe3o. Abaixo listamos as URLs de homologa\xe7\xe3o e produ\xe7\xe3o:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Ambiente de homologa\xe7\xe3o: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://signhom.acesso.io"),";"),(0,n.kt)("li",{parentName:"ul"},"Ambiente de produ\xe7\xe3o: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://sign.acesso.io"),".")))),(0,n.kt)("li",null,(0,n.kt)("h3",{id:"fa\xe7a-uma-requisi\xe7\xe3o-get-para-o-endpoint-documents"},"Fa\xe7a uma requisi\xe7\xe3o GET para o endpoint ",(0,n.kt)("inlineCode",{parentName:"h3"},"/documents/")),(0,n.kt)("p",null,"Ap\xf3s gerar um token de acesso v\xe1lido, fa\xe7a uma requisi\xe7\xe3o para o endpoint de obten\xe7\xe3o de detalhes de documentos da nossa API REST (",(0,n.kt)(s.Z,{method:"GET",mdxType:"HttpMethod"},"/service/documents"),"), especificando qual documento deseja como um par\xe2metro no path da requisi\xe7\xe3o."),(0,n.kt)("p",null,"Abaixo um exemplo da requisi\xe7\xe3o:"),(0,n.kt)("admonition",{title:"Document UUID",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"N\xe3o se esque\xe7a de subsctituir o par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"p"},"DOCUMENT_UUID")," na requisi\xe7\xe3o abaixo. Este par\xe2metro deve conter o UUID do documento ao qual voc\xea deseje gerar as evid\xeancias."),(0,n.kt)("p",{parentName:"admonition"},"Exemplo de formato de um UUID: 00000000-0000-0000-0000-000000000000")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://sign-core-dev.acesso.io/api/v1/service/documents/{{DOCUMENT_UUID}}' \\\n  -H 'accept: application/pdf' \\\n  -H 'Authorization: Bearer {{ACCESS_TOKEN}}'\n\n")),(0,n.kt)("p",null,"Se tudo der certo em sua requisi\xe7\xe3o, voc\xea receber\xe1 como respota um JSON contendo uma lista com os campos do template:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Url": "https://",\n  "UrlVoucher": "https://",\n  "DocumentType": "Nome",\n  "CreatedDate": "09/04/2022 20:09",\n  "EmitterUserName": "Name",\n  "EmitterUserEmail": "email@gmail.com",\n  "CompanySocialName": "Unico",\n  "UUID": "4a95e405-2534-4cf6-aa56-01ddc535bbf4",\n  "HasFile": false,\n  "Subscribers": [\n    {\n      "SubscriberName": "Flavia dos Santos",\n      "SubscriberCPF": "10000000019",\n      "SubscriberEmail": "email@gmail.com",\n      "SubscriberPhone": "5513987654321",\n      "ID_SubscriberStatus": 108,\n      "SubscriberOrder": 1,\n      "SubscriberEvents": [\n        {\n          "EventName": "NotifiedEmail",\n          "EventDescription": "O envelope foi enviado via E-mail",\n          "EventDates": [\n            "2022-09-03T20:20:01.6046578+00:00"\n          ]\n        },\n        {\n          "EventName": "EnvelopeOpened",\n          "EventDescription": "O link do envelope foi aberto",\n          "EventDates": [\n            "2022-09-04T15:20:01.6046598+00:00",\n            "2022-09-04T16:20:01.6046602+00:00"\n          ]\n        },\n        {\n          "EventName": "DocumentViewed",\n          "EventDescription": "O documento foi visualizado",\n          "EventDates": [\n            "2022-09-04T17:20:01.6046608+00:00",\n            "2022-09-04T18:20:01.6046614+00:00",\n            "2022-09-04T19:20:01.6046616+00:00"\n          ]\n        },\n        {\n          "EventName": "DocumentAccepted",\n          "EventDescription": "O documento foi aceito",\n          "EventDates": [\n            "2022-09-04T20:10:01.6046619+00:00"\n          ]\n        },\n        {\n          "EventName": "DocumentFinalized",\n          "EventDescription": "O processo de assinatura do signat\xe1rio foi finalizado",\n          "EventDates": [\n            "2022-09-04T20:15:01.6046622+00:00"\n          ]\n        }\n      ]\n    }\n  ],\n  "IsTemplate": false,\n  "DocumentSubcategoryUUID": "af70e1a4-1f8e-432c-b4c1-40b29dfd1aea",\n  "DocumentSubcategoryName": "Abertura de conta banc\xe1ria",\n  "DocumentCategoryUUID": "e3529e7f-63cd-4574-a03e-d248f078d8fd",\n  "DocumentCategoryName": "Admiss\xe3o"\n}\n')),(0,n.kt)("p",null,"Cada elemento do objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"SubscriberEvents")," representa um evento ocorrido no documento, sendo que:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"li"},"EventName")," representa o nome do evento;"),(0,n.kt)("li",{parentName:"ul"},"O par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"li"},"EventDescription")," representa a descri\xe7\xe3o do evento;"),(0,n.kt)("li",{parentName:"ul"},"O par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"li"},"EventDates")," contem uma lista de datas nas quais o evento ocorreu;"))))),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,n.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-documentos"},"Gerenciamento de documentos"),"."),(0,n.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,n.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-envelopes"},"Gerenciamento de envelopes"),"."),(0,n.kt)("li",{parentName:"ul"},"Tendo problemas em nossa integra\xe7\xe3o? Acesse nossa sess\xe3o de ",(0,n.kt)("a",{parentName:"li",href:"/FAQ"},"FAQ e problemas comuns"),"."),(0,n.kt)("li",{parentName:"ul"},"Explore a documentac\xe3o da API do Unico Sign em nosso ",(0,n.kt)("a",{parentName:"li",href:"#"},"API Reference"),".")),(0,n.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,n.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Caso tenha d\xfavidas que n\xe3o estejam relacionadas as nossas APIs, acesse nossa ",(0,n.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360003086372-Unico-Sign"},"central de ajuda"),"."),(0,n.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, entre em contato atrav\xe9s de nosso ",(0,n.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/requests/new"},"portal de solicita\xe7\xf5es"),".")))}p.isMDXComponent=!0}}]);