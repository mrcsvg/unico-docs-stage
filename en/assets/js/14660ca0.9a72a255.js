"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[2790],{3905:(e,o,a)=>{a.d(o,{Zo:()=>d,kt:()=>m});var t=a(67294);function s(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){s(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,t,s=function(e,o){if(null==e)return{};var a,t,s={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(s[a]=e[a]);return s}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var u=t.createContext({}),c=function(e){var o=t.useContext(u),a=o;return e&&(a="function"==typeof e?e(o):r(r({},o),e)),a},d=function(e){var o=c(e.components);return t.createElement(u.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var a=e.components,s=e.mdxType,n=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=s,v=p["".concat(u,".").concat(m)]||p[m]||l[m]||n;return a?t.createElement(v,r(r({ref:o},d),{},{components:a})):t.createElement(v,r({ref:o},d))}));function m(e,o){var a=arguments,s=o&&o.mdxType;if("string"==typeof e||s){var n=a.length,r=new Array(n);r[0]=p;var i={};for(var u in o)hasOwnProperty.call(o,u)&&(i[u]=o[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<n;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3640:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var t=a(87462),s=(a(67294),a(3905));const n={sidebar_position:3,sidebar_label:"Conceitos b\xe1sicos",title:"Conceitos b\xe1sicos"},r=void 0,i={unversionedId:"sign/fundamentals",id:"sign/fundamentals",title:"Conceitos b\xe1sicos",description:"Sobre este guia",source:"@site/docs/sign/fundamentals.mdx",sourceDirName:"sign",slug:"/sign/fundamentals",permalink:"/unico-docs-stage/en/docs/sign/fundamentals",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sign/fundamentals.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Conceitos b\xe1sicos",title:"Conceitos b\xe1sicos"},sidebar:"signSidebar",previous:{title:"Primeiros passos",permalink:"/unico-docs-stage/en/docs/sign/getting-started"},next:{title:"Vis\xe3o geral",permalink:"/unico-docs-stage/en/docs/sign/api-guides/overview"}},u={},c=[{value:"Sobre este guia",id:"sobre-este-guia",level:2},{value:"Conceitos b\xe1sicos",id:"conceitos-b\xe1sicos",level:2},{value:"Envelope",id:"envelope",level:3},{value:"Document",id:"document",level:3},{value:"Subscriber",id:"subscriber",level:3},{value:"Template",id:"template",level:3},{value:"Emitter",id:"emitter",level:3},{value:"Evid\xeancias ou conjunto probat\xf3rio",id:"evid\xeancias-ou-conjunto-probat\xf3rio",level:3},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",level:2}],d={toc:c};function l(e){let{components:o,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},d,a,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,s.kt)("p",null,"Nossas API utiliza uma s\xe9rie de conceitos e objetos como base para nossas funcionalidades. Este guia tem o objetivo de te familiarizar com cada um desses conceitos para que voc\xea tenha um proceso de integra\xe7\xe3o totalmente fl\xfaido."),(0,s.kt)("p",null,"Ao explorar com os conceitos deste guia, voc\xea ser\xe1 capaz de entender todo o fluxo de vida de um documento dentro do ",(0,s.kt)("strong",{parentName:"p"},"Unico Sign"),"."),(0,s.kt)("h2",{id:"conceitos-b\xe1sicos"},"Conceitos b\xe1sicos"),(0,s.kt)("p",null,"Entenda abaixo alguns conceitos b\xe1sicos e termos importantes para sua integra\xe7\xe3o."),(0,s.kt)("h3",{id:"envelope"},"Envelope"),(0,s.kt)("p",null,"O envelope \xe9 uma representa\xe7\xe3o de um envelope com documentos na vida real. Ele \xe9 o objeto que agrupa todos os documentos(Documents) e seus assinantes(Subscribers). Um envelope deve conter pelo menos um documento, sendo aceito no m\xe1ximo 10 documentos por envelope."),(0,s.kt)("h3",{id:"document"},"Document"),(0,s.kt)("p",null,"O document \xe9 a representa\xe7\xe3o de um documento e pode ter duas formas. O documento pode ser um arquivo pdf na forma de Base64 ou pode ser um modelo(Template) pr\xe9 pronto. Um documento pode conter um ou mais assinantes(Subscribers)."),(0,s.kt)("h3",{id:"subscriber"},"Subscriber"),(0,s.kt)("p",null,"Subscriber \xe9 o assinante de um documento(Document). Todo assinante tem um tipo(SubscriberRole), sendo que existem tr\xeas poss\xedveis, s\xe3o eles: Assinatura pr\xf3pria, Representante Legal ou Testemunha. Em cada envelope, o assinante pode ter apenas um dos tr\xeas tipos. Segue abaixo a descri\xe7\xe3o de cada tipo."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Assinatura pr\xf3pria: \xe9 a assinatura do contratado."),(0,s.kt)("li",{parentName:"ul"},"Representante Legal: \xe9 a assinatura de uma pessoa que representa terceiros, sejam empresas ou outras pessoas."),(0,s.kt)("li",{parentName:"ul"},"Testemunha: \xe9 a assinatura da testemunha do documento.")),(0,s.kt)("h3",{id:"template"},"Template"),(0,s.kt)("p",null,"Template \xe9 um modelo de documento, normalmente utilizado em casos de envio de arquivo recorrente, uma vez que pode ser reutilizado em v\xe1rios envelopes. Um exemplo de uso \xe9 o envio de holerites ou folha de ponto. Al\xe9m disso, modelos podem conter formul\xe1rios, para que o assinante possa preencher ou ser preenchido pelo emissor com uma informa\xe7\xe3o como, por exemplo, data da emiss\xe3o ou assinatura, idade, nome dos pais, nome completo, op\xe7\xf5es sexuais, e qualquer coisa que precise ser preenchido em tempo de emiss\xe3o ou assinatura."),(0,s.kt)("p",null,"Para criar um modelo \xe9 necess\xe1rio acessar o Dashboard do Unico Sign, criar o modelo a partir de um arquivo pdf v\xe1lido e configurar o seu formul\xe1rio visualmente, caso seja necess\xe1rio. A partir desse ponto, os modelos poder\xe3o serem utilizados na emiss\xe3o via API."),(0,s.kt)("h3",{id:"emitter"},"Emitter"),(0,s.kt)("p",null,"Emitter se trata do emissor do documento, ou seja o usu\xe1rio que est\xe1 realizando a cria\xe7\xe3o do envelope. Caso o emissor precise tamb\xe9m ser assinante do envelope, ele pode ser adicionado como assinante e ter\xe1 o tipo de representante legal."),(0,s.kt)("h3",{id:"evid\xeancias-ou-conjunto-probat\xf3rio"},"Evid\xeancias ou conjunto probat\xf3rio"),(0,s.kt)("p",null,"Conjunto formado pelas principais informa\xe7\xf5es do envelope. Serve para comprovar juridicamente a conformidade e validade de um envelope, documento ou assinatura."),(0,s.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Conhe\xe7a as funcionalidades dispon\xedveis para o ",(0,s.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-documentos"},"Gerenciamento de documentos"),"."),(0,s.kt)("li",{parentName:"ul"},"Conhe\xe7a as funcionalidades dispon\xedveis para o ",(0,s.kt)("a",{parentName:"li",href:"/docs/category/gerenciando-envelopes"},"Gerenciamento de envelopes"),"."),(0,s.kt)("li",{parentName:"ul"},"Tendo problemas em nossa integra\xe7\xe3o? Acesse nossa sess\xe3o de ",(0,s.kt)("a",{parentName:"li",href:"/FAQ"},"FAQ e problemas comuns"),"."),(0,s.kt)("li",{parentName:"ul"},"Explore a documentac\xe3o da API do Unico Sign em nosso ",(0,s.kt)("a",{parentName:"li",href:"#"},"API Reference"),".")),(0,s.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,s.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Caso tenha d\xfavidas que n\xe3o estejam relacionadas as nossas APIs, acesse nossa ",(0,s.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360003086372-Unico-Sign"},"central de ajuda"),"."),(0,s.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, entre em contato atrav\xe9s de nosso ",(0,s.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/requests/new"},"portal de solicita\xe7\xf5es"),".")))}l.isMDXComponent=!0}}]);