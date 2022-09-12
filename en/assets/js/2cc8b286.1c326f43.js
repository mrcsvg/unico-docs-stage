"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[1389],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var o=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=n,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return t?o.createElement(k,i(i({ref:a},p),{},{components:t})):o.createElement(k,i({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},444:(e,a,t)=>{t.d(a,{Z:()=>i});var o=t(67294);const n="url_ipuT",r="method_rIqc";function i(e){let{children:a,method:t}=e;return o.createElement("span",{className:n},o.createElement("span",{className:r},t),a)}},17894:(e,a,t)=>{t.d(a,{Z:()=>n});var o=t(67294);const n=function(e){let{children:a,headingDepth:t}=e;const[n,r]=(0,o.useState)(null);return o.createElement("div",{className:"steps steps--h"+t},a)}},56366:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var o=t(87462),n=t(67294),r=t(3905),i=t(17894);function s(e){let{children:a,color:t}=e;return n.createElement("span",null,n.createElement("code",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},a))}var l=t(444);const d={sidebar_position:2,sidebar_label:"Autentica\xe7\xe3o",title:"Autentica\xe7\xe3o"},p=void 0,u={unversionedId:"sign/api-guides/authentication",id:"sign/api-guides/authentication",title:"Autentica\xe7\xe3o",description:"Sobre este guia",source:"@site/docs/sign/api-guides/authentication.mdx",sourceDirName:"sign/api-guides",slug:"/sign/api-guides/authentication",permalink:"/unico-docs-stage/en/docs/sign/api-guides/authentication",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sign/api-guides/authentication.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Autentica\xe7\xe3o",title:"Autentica\xe7\xe3o"},sidebar:"signSidebar",previous:{title:"Vis\xe3o geral",permalink:"/unico-docs-stage/en/docs/sign/api-guides/overview"},next:{title:"Solicitando assinaturas",permalink:"/unico-docs-stage/en/docs/sign/api-guides/envelope"}},c={},m=[{value:"Sobre este guia",id:"sobre-este-guia",level:2},{value:"O que voc\xea vai precisar",id:"o-que-voc\xea-vai-precisar",level:2},{value:"Funcionamento b\xe1sico",id:"funcionamento-b\xe1sico",level:2},{value:"Solicite uma conta de servi\xe7o",id:"solicite-uma-conta-de-servi\xe7o",level:3},{value:"Gere um JWT (JSON Web Token)",id:"gere-um-jwt-json-web-token",level:3},{value:"Header",id:"header",level:4},{value:"Payload",id:"payload",level:4},{value:"Assinatura",id:"assinatura",level:4},{value:"Montando o JWT",id:"montando-o-jwt",level:4},{value:"Fa\xe7a uma requisi\xe7\xe3o para obter o token de acesso",id:"fa\xe7a-uma-requisi\xe7\xe3o-para-obter-o-token-de-acesso",level:3},{value:"Use seu token de acesso para chamar nossas APIs",id:"use-seu-token-de-acesso-para-chamar-nossas-apis",level:3},{value:"C\xf3digos de erro",id:"c\xf3digos-de-erro",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",level:2}],k={toc:m};function g(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,r.kt)("p",null,"Atrav\xe9s deste guia, explicaremo como gerar um Token de Acesso (AccessToken) em nossa plataforma de autentica\xe7\xe3o OAuth2, atrav\xe9s de um JSON Web Token (JWT) assinado com SHA256withRSA.  Ao seguir os passos deste guia, em poucos minutos voc\xea ser\xe1 capaz de ter tudo pronto para efetuar requisi\xe7\xf5es para nossas APIs REST."),(0,r.kt)("h2",{id:"o-que-voc\xea-vai-precisar"},"O que voc\xea vai precisar"),(0,r.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Certifique-se que voc\xea possui credenciais v\xe1lidas para utilizar o ",(0,r.kt)("strong",{parentName:"li"},"Unico Sign"),". Se voc\xea ainda n\xe3o possui suas credenciais, siga nosso ",(0,r.kt)("a",{parentName:"li",href:"#"},"guia de Primeiros Passos")," para configurar sua conta de teste e obter suas chaves de API."),(0,r.kt)("li",{parentName:"ol"},"Entenda os conceitos b\xe1sicos sobre nosso produto. \xc9 extremamente importante que voc\xea entenda estes conceitos para fazer uma boa utiliza\xe7\xe3o das APIs do ",(0,r.kt)("strong",{parentName:"li"},"Unico Sign"),". Voc\xea pode encontrar nossos conceitos b\xe1sicos ",(0,r.kt)("a",{parentName:"li",href:"#"},"neste guia"),".")),(0,r.kt)("h2",{id:"funcionamento-b\xe1sico"},"Funcionamento b\xe1sico"),(0,r.kt)("p",null,"Para utilizar a API REST do ",(0,r.kt)("strong",{parentName:"p"},"Unico Sign"),", voc\xea dever\xe1 efetuar uma requisi\xe7\xe3o ao nosso servidor de autentica\xe7\xe3o para obter um Token de Acesso v\xe1lido."),(0,r.kt)("p",null,"Entenda, a seguir, como gerar manualmente seu JWT assinado e com ele obter um token de acesso v\xe1lido:"),(0,r.kt)(i.Z,{headingDepth:3,mdxType:"Steps"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("h3",{id:"solicite-uma-conta-de-servi\xe7o"},"Solicite uma conta de servi\xe7o"),(0,r.kt)("p",null,"Para utilizar nossas APIs, voc\xea precisar\xe1 solicitar a cria\xe7\xe3o de uma conta de servi\xe7o ao gerente de projetos respons\xe1vel por sua conta. Ao criar sua conta, enviaremos um e-mail contendo os dados necess\xe1rios sua autentica\xe7\xe3o:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nome de conta;"),(0,r.kt)("li",{parentName:"ul"},"Identificador de sua empresa (Tenant ID);"),(0,r.kt)("li",{parentName:"ul"},"ID da chave;")),(0,r.kt)("p",null,"Todas as informa\xe7\xf5es listadas acima ser\xe3o utilizadas na gera\xe7\xe3o de seu JWT nos passos abaixo.")),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"gere-um-jwt-json-web-token"},"Gere um JWT (JSON Web Token)"),(0,r.kt)("p",null,"Para obter um Token de Acesso v\xe1lido, voc\xea dever\xe1 enviar um JWT na requisi\xe7\xe3o ao nosso servidor de autentica\xe7\xe3o. Este JWT \xe9 composto por tr\xeas blocos (header, payload e assinatura) codificados, e separados pelo caractere ",(0,r.kt)("inlineCode",{parentName:"p"},".")," (ponto final). "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ao longo deste guia vamos destacar a cor de fundo do header, payload e assinatura para simplificar o entendimento.")),(0,r.kt)("p",null,"Abaixo o detalhe de cada um dos blocos:"),(0,r.kt)("h4",{id:"header"},"Header"),(0,r.kt)("p",null,"O header para gera\xe7\xe3o do JWT dever\xe1 conter os par\xe2metros ",(0,r.kt)("inlineCode",{parentName:"p"},"alg")," (algor\xedtimo de assinatura) e ",(0,r.kt)("inlineCode",{parentName:"p"},"typ")," (tipo do token). Em nosso caso, sempre utilizaremos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "alg": "RS256",\n  "typ": "JWT"\n}\n')),(0,r.kt)("p",null,"Ap\xf3s codifica\xe7\xe3o em ",(0,r.kt)("strong",{parentName:"p"},"Base64URL"),": ",(0,r.kt)(s,{color:"#25c2a0",mdxType:"CodeHighlight"}," eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9 ")," "),(0,r.kt)("h4",{id:"payload"},"Payload"),(0,r.kt)("p",null,"O payload para gera\xe7\xe3o do JWT dever\xe1 conter os seguintes atributos:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Par\xe2metro"),(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iss")),(0,r.kt)("td",{parentName:"tr",align:null},"Client Id de sua aplica\xe7\xe3o. Ser\xe1 composto atrav\xe9s de alguns de seus dados de acesso, no seguinte formato: ",(0,r.kt)("a",{parentName:"td",href:"mailto:service_account_name@tenant_id.iam.acesso.io"},"service_account_name@tenant_id.iam.acesso.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scope")),(0,r.kt)("td",{parentName:"tr",align:null},"Os escopos necess\xe1rios para sua aplica\xe7\xe3o, separados pelo caractere ",(0,r.kt)("inlineCode",{parentName:"td"},"+"),". Caso necessite todos os escopos utilize o caractere ",(0,r.kt)("inlineCode",{parentName:"td"},"*"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aud")),(0,r.kt)("td",{parentName:"tr",align:null},"URI do servi\xe7o de autentica\xe7\xe3o. Utilize ",(0,r.kt)("inlineCode",{parentName:"td"},"https://identityhomolog.acesso.io")," para o ambiente de homologa\xe7\xe3o e ",(0,r.kt)("inlineCode",{parentName:"td"},"https://identity.acesso.io")," para o ambiente de produ\xe7\xe3o.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iat")),(0,r.kt)("td",{parentName:"tr",align:null},"Data e hora da cria\xe7\xe3o do token no formato ",(0,r.kt)("a",{parentName:"td",href:"https://www.epochconverter.com/"},"Unix Epoch"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"exp")),(0,r.kt)("td",{parentName:"tr",align:null},"Data e hora de expira\xe7\xe3o do token no formato ",(0,r.kt)("a",{parentName:"td",href:"https://www.epochconverter.com/"},"Unix Epoch"),". Deve possuir uma hora a mais que o par\xe2metro ",(0,r.kt)("inlineCode",{parentName:"td"},"iat"),", sendo gerado da seguinte forma: Valor do ",(0,r.kt)("inlineCode",{parentName:"td"},"iat")," + 3600")))),(0,r.kt)("p",null,"Exemplo de JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "iss": "service_account_name@tenant_id.iam.acesso.io",\n  "aud": "https://identityhomolog.acesso.io",\n  "scope": "*",\n  "exp": 1626296976,\n  "iat": 1626293376\n}\n')),(0,r.kt)("p",null,"Ap\xf3s codifica\xe7\xe3o em ",(0,r.kt)("strong",{parentName:"p"},"Base64URL"),": ",(0,r.kt)(s,{color:"#1877f24d",mdxType:"CodeHighlight"}," eyJpc3MiOiJzZXJ2aWNlX2FjY291bnRfbmFtZUB0ZW5hbnRfaWQuaWFtLmFjZXNzby5pbyIsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHlob21vbG9nLmFjZXNzby5pbyIsInNjb3BlIjoiKiIsImV4cCI6MTYyNjI5Njk3NiwiaWF0IjoxNjI2MjkzMzc2fQ "),"   "),(0,r.kt)("h4",{id:"assinatura"},"Assinatura"),(0,r.kt)("p",null,"Por \xfaltimo, vamos gerar a assinatura do JWT utilizando da chave privada enviada para o seu e-mail. A assinatura \xe9 o que permitir\xe1 que a Unico saiba que o JWT foi criado por sua aplica\xe7\xe3o."),(0,r.kt)("p",null,"As primeiras duas partes do JWT (gerada acima) dever\xe3o ser assinadas com a chave privada associada a sua conta de servi\xe7o, utilizando SHA256withRSA. Esse algoritmo primeiro calcula um hash exclusivo com os dados de entrada usando SHA256. O hash \xe9 ent\xe3o criptografado com uma chave privada usando o algoritmo RSA."),(0,r.kt)("admonition",{title:"Bibliotecas para gera\xe7\xe3o do JWT assinado",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Existem in\xfameras bibl\xedotecas que podem te auxiliar a gerar esta assinatura. Voc\xea pode consultar algumas delas no site da ferranenta ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io%5D"},"jwt.io"))),(0,r.kt)("p",null,"O conte\xfado de entrada para o c\xe1lculo da assinatura ser\xe1: ",(0,r.kt)("inlineCode",{parentName:"p"},"{Header em Base64url}.{Payload em Base64url}"),", exemplo utilizando o header e payload acima:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Exemplo de conte\xfado enviado para assinatura:")," ",(0,r.kt)(s,{color:"#25c2a0",mdxType:"CodeHighlight"},"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9"),". ",(0,r.kt)(s,{color:"#1877f24d",mdxType:"CodeHighlight"}," eyJpc3MiOiJzZXJ2aWNlX2FjY291bnRfbmFtZUB0ZW5hbnRfaWQuaWFtLmFjZXNzby5pbyIsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHlob21vbG9nLmFjZXNzby5pbyIsInNjb3BlIjoiKiIsImV4cCI6MTYyNjI5Njk3NiwiaWF0IjoxNjI2MjkzMzc2fQ")),(0,r.kt)("p",null,"Ap\xf3s sua gera\xe7\xe3o, a assinatura dever\xe1 ser tamb\xe9m codificada em Base64URL:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Exemplo de assinatura j\xe1 codificada")," : ",(0,r.kt)(s,{color:"#b818f2d9",mdxType:"CodeHighlight"}," JsymP3NZdgCSqeNlgsOM2-AQ7M450NxFnZnnaKSu4Q8g12QGEIvvM4EhCokUHfwk5s7pOpm2UD",(0,r.kt)("em",{parentName:"p"},"Ng3Hb5g_wgrjfiVSLWH5Q2wYg1AvfLqoYSoJWaMHm9KL0kpv32XdDD8TZVR-MVd2VBHmCMVbV6gvk8buUoK1HZDN7g84PaY3bfgcB3RKU-H55lR8yyJjZxToIv17-wfla2G99uaMEFNGX0ZSE7ETn5Z8-WypmFrNAK0TM58upzvfVI6"),"-gY4cj4iQvmRbuvxsAaGiHA2xd0RVm2Mrx-gQtdPqtbZPuQcH7k64Z_EOQBgiGTgVjucyHD6zBijr_P-2mhIxuecNSw ")),(0,r.kt)("h4",{id:"montando-o-jwt"},"Montando o JWT"),(0,r.kt)("p",null,"Agora basta concatenar a assinatura codificada em Base64URL ao header e payload que foram utilizados para a assinatura: ",(0,r.kt)("inlineCode",{parentName:"p"},"{Header em Base64url}.{Payload em Base64url}.{Assinatura em Base64url}"),". Abaixo um exemplo com o Header, Payload e assinatura utilizados acima:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Exemplo do JWT Assinado:")," ",(0,r.kt)(s,{color:"#25c2a0",mdxType:"CodeHighlight"},"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9"),".",(0,r.kt)(s,{color:"#1877f24d",mdxType:"CodeHighlight"},"eyJpc3MiOiJzZXJ2aWNlX2FjY291bnRfbmFtZUB0ZW5hbnRfaWQuaWFtLmFjZXNzby5pbyIsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHlob21vbG9nLmFjZXNzby5pbyIsInNjb3BlIjoiKiIsImV4cCI6MTYyNjI5Njk3NiwiaWF0IjoxNjI2MjkzMzc2fQ"),".",(0,r.kt)(s,{color:"#b818f2d9",mdxType:"CodeHighlight"}," JsymP3NZdgCSqeNlgsOM2-AQ7M450NxFnZnnaKSu4Q8g12QGEIvvM4EhCokUHfwk5s7pOpm2UD",(0,r.kt)("em",{parentName:"p"},"Ng3Hb5g_wgrjfiVSLWH5Q2wYg1AvfLqoYSoJWaMHm9KL0kpv32XdDD8TZVR-MVd2VBHmCMVbV6gvk8buUoK1HZDN7g84PaY3bfgcB3RKU-H55lR8yyJjZxToIv17-wfla2G99uaMEFNGX0ZSE7ETn5Z8-WypmFrNAK0TM58upzvfVI6"),"-gY4cj4iQvmRbuvxsAaGiHA2xd0RVm2Mrx-gQtdPqtbZPuQcH7k64Z_EOQBgiGTgVjucyHD6zBijr_P-2mhIxuecNSw "),".")),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"fa\xe7a-uma-requisi\xe7\xe3o-para-obter-o-token-de-acesso"},"Fa\xe7a uma requisi\xe7\xe3o para obter o token de acesso"),(0,r.kt)("p",null,"Ap\xf3s gerar um JWT assinado, fa\xe7a uma requisi\xe7\xe3o para nossa plataforma de autentica\xe7\xe3o (",(0,r.kt)(l.Z,{method:"POST",mdxType:"HttpMethod"}," /oauth2/token"),") enviando os par\xe2metros conforme a tabela abaixo:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Par\xe2metro"),(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"grant_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Enviar sempre o valor ",(0,r.kt)("inlineCode",{parentName:"td"},"urn:ietf:params:oauth:grant-type:jwt-bearer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"assertion")),(0,r.kt)("td",{parentName:"tr",align:null},"JWT assinado, como gerado acima")))),(0,r.kt)("p",null,"Abaixo um exemplo com o JWT gerado nos passos acima:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://identityhomolog.acesso.io' \\\n--header 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer' \\\n--data-urlencode 'assertion=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzZXJ2aWNlX2FjY291bnRfbmFtZUB0ZW5hbnRfaWQuaWFtLmFjZXNzby5pbyIsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHlob21vbG9nLmFjZXNzby5pbyIsInNjb3BlIjoiKiIsImV4cCI6MTYyNjI5Njk3NiwiaWF0IjoxNjI2MjkzMzc2fQ.JsymP3NZdgCSqeNlgsOM2-AQ7M450NxFnZnnaKSu4Q8g12QGEIvvM4EhCokUHfwk5s7pOpm2UD_Ng3Hb5g_wgrjfiVSLWH5Q2wYg1AvfLqoYSoJWaMHm9KL0kpv32XdDD8TZVR-MVd2VBHmCMVbV6gvk8buUoK1HZDN7g84PaY3bfgcB3RKU-H55lR8yyJjZxToIv17-wfla2G99uaMEFNGX0ZSE7ETn5Z8-WypmFrNAK0TM58upzvfVI6_-gY4cj4iQvmRbuvxsAaGiHA2xd0RVm2Mrx-gQtdPqtbZPuQcH7k64Z_EOQBgiGTgVjucyHD6zBijr_P-2mhIxuecNSw'\n\n")),(0,r.kt)("p",null,"Se tudo der certo em sua requisi\xe7\xe3o, voc\xea receber\xe1 como resposta um JSON contendo um token de acesso v\xe1lido:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "<access_token>",\n  "token_type": "Bearer",\n  "expires_in": "3600",\n}\n')),(0,r.kt)("admonition",{title:"Validade do Token",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"A dura\xe7\xe3o do token de acesso estar\xe1 informada no campo \u201cexpires_in\u201d. N\xe3o solicite um novo token de acesso at\xe9 que a validade do token atual esteja chegando ao fim. "),(0,r.kt)("p",{parentName:"admonition"},"Sugerimos que solicite um novo token 10 minutos antes da expira\xe7\xe3o.")),(0,r.kt)("p",null,"Em casos de erro, retornaremos como resposta um JSON como o abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "server_error",\n  "error_description": "Falha na autentica\xe7\xe3o x.x.x",\n}\n')),(0,r.kt)("admonition",{title:"Erros ao chamar o endpoint de autoriza\xe7\xe3o",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Voc\xea pode consultar os c\xf3digos de erros neste mesmo artigo, na sess\xe3o ",(0,r.kt)("a",{parentName:"p",href:"#tabela-de-erros"},"C\xf3digos de erro"),"."))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"use-seu-token-de-acesso-para-chamar-nossas-apis"},"Use seu token de acesso para chamar nossas APIs"),(0,r.kt)("p",null,"Agora que voc\xea obteve um token de acesso v\xe1lido, basta chamar a API REST do ",(0,r.kt)("strong",{parentName:"p"},"Unico Sign")," utilizando este token no header de suas requisi\xe7\xf5es. Abaixo um exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'POST\' \\\n  \'https://sign-core-uat.acesso.io/api/v1/service/envelopes\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {{ACCESS_TOKEN}}\'\n  -d \'{\n  "CPF": "10000000019",  \n  "StartDate": "01/08/2022",\n  "EndDate": "31/08/2022",\n  "Status": 1,\n  "Order": "ASC"\n}\'\n'))))),(0,r.kt)("h2",{id:"c\xf3digos-de-erro"},"C\xf3digos de erro"),(0,r.kt)("p",null,"Caso sua requisi\xe7\xe3o apresente algum erro, voc\xea pode consultar o motivo do erro na tabela abaixo:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"C\xf3digo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0.14"),(0,r.kt)("td",{parentName:"tr",align:null},"Verifique com o respons\xe1vel pelo projeto se a aplica\xe7\xe3o utilizada est\xe1 ativa.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.1"),(0,r.kt)("td",{parentName:"tr",align:null},'Par\xe2metro "scope" n\xe3o foi informado no payload do token jwt utilizado na requisi\xe7\xe3o.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.4"),(0,r.kt)("td",{parentName:"tr",align:null},'O token jwt utilizado na requisi\xe7\xe3o est\xe1 expirado. Verifique o valor informado no campo "exp" do payload.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.5"),(0,r.kt)("td",{parentName:"tr",align:null},"O token jwt utilizado na requisi\xe7\xe3o n\xe3o pode ser validado. Verifique os par\xe2metros informados e tenha certeza de t\xea-lo assinado da forma correta.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.6"),(0,r.kt)("td",{parentName:"tr",align:null},"A chave privada utilizada na assinatura do token jwt utilizado na requisi\xe7\xe3o n\xe3o \xe9 mais aceit\xe1vel. Solicite novas credenciais para a conta utilizada.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.7"),(0,r.kt)("td",{parentName:"tr",align:null},"O token jwt utilizado na requisi\xe7\xe3o n\xe3o \xe9 mais aceit\xe1vel, pois j\xe1 foi utilizado anteriormente. Gere um novo token para fazer uma nova requisi\xe7\xe3o.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.11"),(0,r.kt)("td",{parentName:"tr",align:null},"A conta utilizada n\xe3o est\xe1 ativa.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.14"),(0,r.kt)("td",{parentName:"tr",align:null},"A conta utilizada n\xe3o possui as permiss\xf5es necess\xe1rias.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.18"),(0,r.kt)("td",{parentName:"tr",align:null},"A conta utilizada foi temporariamente bloqueada por ter excedido a quantidade de tentativas inv\xe1lidas de autentica\xe7\xe3o.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.19"),(0,r.kt)("td",{parentName:"tr",align:null},'A conta utilizada n\xe3o est\xe1 autorizada a impersonar outra conta de usu\xe1rio (remova o par\xe2metro "sub" do payload).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.20 / 1.2.21"),(0,r.kt)("td",{parentName:"tr",align:null},'Falha na decodifica\xe7\xe3o do token jwt utilizado na requisi\xe7\xe3o. Utilize um novo token inserindo somente os campos especificados nas se\xe7\xf5es "Campos obrigat\xf3rios" e "Campos adicionais", obedecendo \xe0 nomenclatura, sem\xe2ntica e tipo de cada campo.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.22"),(0,r.kt)("td",{parentName:"tr",align:null},'O token jwt utilizado na requisi\xe7\xe3o possui campos adicionais no payload que n\xe3o s\xe3o permitidos. Utilize um novo token inserindo somente os campos especificados nas se\xe7\xf5es "Campos obrigat\xf3rios" e "Campos adicionais", obedecendo \xe0 nomenclatura, sem\xe2ntica e tipo de cada campo.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.3.1"),(0,r.kt)("td",{parentName:"tr",align:null},"A conta utilizada possui restri\xe7\xf5es de IP de origem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"A conta utilizada possui restri\xe7\xf5es de data/hora de acesso.")))),(0,r.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,r.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-documentos"},"Gerenciamento de documentos"),"."),(0,r.kt)("li",{parentName:"ul"},"Conhe\xe7a outras funcionalidades dispon\xedveis para o ",(0,r.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-envelopes"},"Gerenciamento de envelopes"),"."),(0,r.kt)("li",{parentName:"ul"},"Tendo problemas em nossa integra\xe7\xe3o? Acesse nossa sess\xe3o de ",(0,r.kt)("a",{parentName:"li",href:"/FAQ"},"FAQ e problemas comuns"),"."),(0,r.kt)("li",{parentName:"ul"},"Explore a documentac\xe3o da API do Unico Sign em nosso ",(0,r.kt)("a",{parentName:"li",href:"#"},"API Reference"),".")),(0,r.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,r.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caso tenha d\xfavidas que n\xe3o estejam relacionadas as nossas APIs, acesse nossa ",(0,r.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360003086372-Unico-Sign"},"central de ajuda"),"."),(0,r.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, entre em contato atrav\xe9s de nosso ",(0,r.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/requests/new"},"portal de solicita\xe7\xf5es"),".")))}g.isMDXComponent=!0}}]);