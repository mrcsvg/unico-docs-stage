"use strict";(self.webpackChunkunico_docs=self.webpackChunkunico_docs||[]).push([[5470],{41837:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.1","info":{"title":"Sign Core API","version":"1.0"},"paths":{"/api/v1/service/envelopes":{"post":{"tags":["Sign API V1"],"summary":"Obt\xe9m envelopes","description":"Para utilizar esta rota \xe9 necess\xe1rio que o usu\xe1rio tenha permiss\xe3o de `Visualizar Documentos`\\n            <br>Ser\xe3o obtidos os dados dos envelopes atrelados ao usu\xe1rio do token utilizado.\\n            <br>Nenhum dos filtros \xe9 obrigat\xf3rio. Caso nenhum seja informado, o retorno padr\xe3o ser\xe1 \\n            a primeira p\xe1gina contendo 30 envelopes.","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/GetEnvelopesRequest"},"examples":{"Sem filtros":{"value":{}},"Filtro por CPF":{"value":{"CPF":"10000000019"}},"Filtro por CPF e p\xe1gina":{"value":{"CPF":"10000000019","Page":2}},"Todos os filtros":{"value":{"CPF":"10000000019","EnvelopeUUID":"00000000-0000-0000-0000-000000000000","Page":2,"StartDate":"03/09/2022","EndDate":"04/09/2022","Order":"ASC"}}}}},"required":true},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GetEnvelopesResponse"},"examples":{"Envelopes encontrados":{"value":{"Success":true,"Message":"","Data":{"Page":1,"MaxPage":5,"Count":50,"Envelopes":[{"CreatedDate":"09/04/2022 21:09","ID_EnvelopeStatus":2,"EnvelopeStatus":"Conclu\xeddo","UUID":"00000000-0000-0000-0000-000000000000","HasFrame":false,"Documents":[{"Url":"https://sign.unico.io/path","UrlVoucher":"https://sign.unico.io/path","DocumentType":"admissao","CreatedDate":"09/04/2022 21:09","EmitterUserName":"Carlos Eduardo","EmitterUserUUID":"00000000-0000-0000-0000-000000000000","EmitterUserEmail":"test@test.com","CompanySocialName":"unico","UUID":"00000000-0000-0000-0000-000000000000","HasFile":false,"Subscribers":[{"SubscriberName":"Flavia dos Santos","SubscriberCPF":"10000000019","SubscriberEmail":"test@test.com","SubscriberPhone":"551192345678","SubscriberOrder":1,"SubscriberRole":1,"URLFrameFull":"https://unico.io/path","IsUser":false}],"IsTemplate":false,"DocumentSubcategoryUUID":"00000000-0000-0000-0000-000000000000","DocumentSubcategoryName":"Abertura de conta banc\xe1ria","DocumentCategoryUUID":"00000000-0000-0000-0000-000000000000","DocumentCategoryName":"Admiss\xe3o"}]}],"Rows":0}}},"Envelopes n\xe3o encontrados":{"value":{"Success":true,"Message":""}}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{},"examples":{"CPF informado est\xe1 inv\xe1lido":{"value":{"errors":[{"key":"CPF","message":"CPF inv\xe1lido"}]}},"Identificador de envelope informado est\xe1 inv\xe1lido":{"value":{"errors":[{"key":"EnvelopeUUID","message":"EnvelopeUUID inv\xe1lido"}]}}}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"type":"string"},"example":"Page not found"}}}}}},"/api/v1/service/file/{uuidDocument}":{"get":{"tags":["Sign API V1"],"summary":"Obt\xe9m arquivo de documento","parameters":[{"name":"uuidDocument","in":"path","description":"Identificador \xfanico do documento","required":true,"schema":{"type":"string","format":"uuid"}}],"responses":{"200":{"description":"Success","content":{"application/pdf":{"schema":{"type":"string","format":"binary"}},"application/json":{"schema":{"type":"string","format":"binary"}}}},"500":{"description":"Arquivo n\xe3o encontrado","content":{"application/pdf":{"schema":{"$ref":"#/components/schemas/ResultJson"},"example":{"Success":false,"Message":"Falha ao consultar o arquivo do documento.","Data":"Sequence contains no elements"}},"application/json":{"schema":{"$ref":"#/components/schemas/ResultJson"},"example":{"Success":false,"Message":"Falha ao consultar o arquivo do documento.","Data":"Sequence contains no elements"}}}}}}},"/api/v1/service/evidence/{uuidDocument}":{"get":{"tags":["Sign API V1"],"summary":"Obt\xe9m arquivo de conjunto de evid\xeancias","parameters":[{"name":"uuidDocument","in":"path","description":"Identificador \xfanico do documento","required":true,"schema":{"type":"string","format":"uuid"}}],"responses":{"200":{"description":"Success","content":{"application/pdf":{"schema":{"type":"string","format":"binary"}},"application/json":{"schema":{"type":"string","format":"binary"}}}},"500":{"description":"Arquivo n\xe3o encontrado","content":{"application/pdf":{"schema":{"$ref":"#/components/schemas/ResultJson"},"example":{"Success":false,"Message":"Falha ao consultar o arquivo de evid\xeancia.","Data":"Documento n\xe3o existe."}},"application/json":{"schema":{"$ref":"#/components/schemas/ResultJson"},"example":{"Success":false,"Message":"Falha ao consultar o arquivo de evid\xeancia.","Data":"Documento n\xe3o existe."}}}}}}},"/api/v1/service/envelope":{"post":{"tags":["Sign API V1"],"summary":"Cria um envelope, documento e arquivos\\r\\nRecebe dados em JSON Body","requestBody":{"description":"Cont\xe9m a estrutura para cria\xe7\xe3o do envelope","content":{"application/json":{"schema":{"$ref":"#/components/schemas/DashDocumentsJson"}}}},"responses":{"200":{"description":"Success"}}}},"/api/v1/service/templatedata/{UUID_Document}":{"get":{"tags":["Sign API V1"],"summary":"Obt\xe9m os dados digitados pelo usu\xe1rio no modelo","parameters":[{"name":"UUID_Document","in":"path","required":true,"schema":{"type":"string"}},{"name":"errors","in":"path","required":true,"schema":{}},{"name":"Notifications","in":"path","required":true,"schema":{"type":"array","items":{"$ref":"#/components/schemas/Notification"}}},{"name":"IsValid","in":"path","required":true,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"Success"}}}},"/api/v1/service/cancel":{"post":{"tags":["Sign API V1"],"summary":"Cancela um envelope","description":"Para utilizar esta rota \xe9 necess\xe1rio que o usu\xe1rio tenha permiss\xe3o de `Enviar Documentos`","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CancelEnvelopeRequest"},"examples":{"Sem usu\xe1rio":{"value":{"EnvelopeUUID":"00000000-0000-0000-0000-000000000000","Reason":"Solicita\xe7\xe3o de corre\xe7\xe3o"}},"Com usu\xe1rio":{"value":{"EnvelopeUUID":"00000000-0000-0000-0000-000000000000","Reason":"Solicita\xe7\xe3o de corre\xe7\xe3o","UserName":"Augusto"}}}}},"required":true},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CancelEnvelopeResponse"},"example":{"Success":true,"Message":"Envelope cancelado com sucesso"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{},"examples":{"Envelope com estado diferente de `1 - Pendente`":{"value":{"errors":[{"key":"ID_EnvelopeStatus","message":"Para cancelar um envelope, o mesmo precisa estar no status Pendente."}]}},"Envelope n\xe3o encontrado":{"value":{"errors":[{"key":"Envelope","message":"N\xe3o foi encontrado envelope"}]}}}}}}}}},"/api/v1/service/contact":{"post":{"tags":["Sign API V1"],"summary":"Cria ou Atualiza um contato","description":"Para utilizar esta rota \xe9 necess\xe1rio que o usu\xe1rio tenha permiss\xe3o de `Administrar Contatos`","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PostContactRequest"},"example":{"ContactName":"Margaria Clara","ContactCPF":"10000000019","ContactEmail":"test@test.com","ContactPhone":"1192345678","ContactIdentifier":"test-123-test"}}},"required":true},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PostContactResponse"},"examples":{"Cria\xe7\xe3o":{"value":{"Success":true,"Message":"Contato inserido com sucesso"}},"Atualiza\xe7\xe3o":{"value":{"Success":true,"Message":"Contato atualizado com sucesso"}}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{},"examples":{"CPF n\xe3o fornecido":{"value":{"errors":[{"key":"ContactCPF","message":"CPF nulo ou vazio."}]}},"E-mail inv\xe1lido":{"value":{"errors":[{"key":"ContactEmail","message":"Email do contato n\xe3o \xe9 v\xe1lido."}]}}}}}}}}},"/api/v1/service/categories":{"get":{"tags":["Sign API V1"],"summary":"Obt\xe9m os dados de categoria e subcategoria de documento por cliente","parameters":[{"name":"page","in":"query","description":"N\xfamero da p\xe1gina","schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"Success"}}}},"/api/v1/service/documents/{uuidDocument}":{"get":{"tags":["Sign API V1"],"summary":"Detalhes do documento","parameters":[{"name":"uuidDocument","in":"path","description":"Identificador \xfanico do documento","required":true,"schema":{"type":"string","format":"uuid"}}],"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GetDocumentDetailResponse"},"examples":{"Documento de {uuid} encontrado":{"value":{"Url":"https://","UrlVoucher":"https://","DocumentType":"Nome","CreatedDate":"09/04/2022 21:09","EmitterUserName":"Name","EmitterUserEmail":"email@gmail.com","CompanySocialName":"Unico","UUID":"a6828902-70cb-491c-a603-78b39bbb8459","HasFile":false,"Subscribers":[{"SubscriberName":"Flavia dos Santos","SubscriberCPF":"10000000019","SubscriberEmail":"email@gmail.com","SubscriberPhone":"5513987654321","ID_SubscriberStatus":108,"SubscriberOrder":1,"SubscriberEvents":[{"EventName":"NotifiedEmail","EventDescription":"O envelope foi enviado via E-mail","EventDates":["2022-09-03T21:56:08.4386876+00:00"]},{"EventName":"EnvelopeOpened","EventDescription":"O link do envelope foi aberto","EventDates":["2022-09-04T16:56:08.4386883+00:00","2022-09-04T17:56:08.4386885+00:00"]},{"EventName":"DocumentViewed","EventDescription":"O documento foi visualizado","EventDates":["2022-09-04T18:56:08.4386889+00:00","2022-09-04T19:56:08.4386891+00:00","2022-09-04T20:56:08.4386893+00:00"]},{"EventName":"DocumentAccepted","EventDescription":"O documento foi aceito","EventDates":["2022-09-04T21:46:08.4386895+00:00"]},{"EventName":"DocumentFinalized","EventDescription":"O processo de assinatura do signat\xe1rio foi finalizado","EventDates":["2022-09-04T21:51:08.4386896+00:00"]}]}],"IsTemplate":false,"DocumentSubcategoryUUID":"3af29f56-0b47-4e4c-8019-59e92157b0df","DocumentSubcategoryName":"Abertura de conta banc\xe1ria","DocumentCategoryUUID":"4be5df28-2cca-4f37-837c-97e251e9e7e5","DocumentCategoryName":"Admiss\xe3o"}}}}}}}}}},"components":{"schemas":{"AuditJson":{"type":"object","properties":{"ID_AuditEvent":{"type":"integer","format":"int64"},"UserName":{"type":"string","nullable":true},"EventDateTime":{"type":"string","nullable":true},"EventData":{"type":"string","nullable":true},"EventDescription":{"type":"string","nullable":true}},"additionalProperties":false},"CancelEnvelopeRequest":{"type":"object","properties":{"EnvelopeUUID":{"type":"string","description":"Identificador \xfanico do envelope","format":"uuid","example":"00000000-0000-0000-0000-000000000000"},"Reason":{"type":"string","description":"Motivo de cancelamento do envelope"},"UserName":{"type":"string","description":"Nome do usu\xe1rio que est\xe1 cancelando\\r\\n\\r\\nSe n\xe3o fornecido ser\xe1 extra\xeddo o nome de usu\xe1rio do token utilizado, e se n\xe3o encontrado o nome\\r\\nser\xe1 `Integra\xe7\xe3o`","default":"Integra\xe7\xe3o","nullable":true}},"additionalProperties":false},"CancelEnvelopeResponse":{"type":"object","properties":{"Success":{"type":"boolean","description":"Sinaliza se cancelamento realizado","example":true},"Message":{"type":"string","description":"Mensagem","nullable":true}},"additionalProperties":false},"DashDocumentsJson":{"type":"object","properties":{"Documents":{"type":"array","items":{"$ref":"#/components/schemas/DocumentJson"},"nullable":true},"IsFrame":{"type":"boolean","nullable":true},"UrlCallback":{"type":"string","nullable":true},"EnvelopeFlow":{"type":"array","items":{"$ref":"#/components/schemas/EnvelopeFlowJson"},"nullable":true},"TenantID":{"type":"string","nullable":true},"isAllDocumentsCategorized":{"type":"boolean","readOnly":true},"notifications":{"type":"array","items":{"$ref":"#/components/schemas/Notification"},"nullable":true,"readOnly":true},"isValid":{"type":"boolean","readOnly":true}},"additionalProperties":false},"DocumentJson":{"type":"object","properties":{"Url":{"type":"string","nullable":true},"UrlVoucher":{"type":"string","nullable":true},"DocumentType":{"type":"string","nullable":true},"CreatedDate":{"type":"string","nullable":true},"ID_DocumentStatus":{"type":"integer","format":"int32","nullable":true},"DocumentStatusName":{"type":"string","nullable":true},"ID_EnvelopeStatus":{"type":"integer","format":"int32","nullable":true},"EnvelopeStatusName":{"type":"string","nullable":true},"EmitterUserName":{"type":"string","nullable":true},"EmitterUserUUID":{"type":"string","nullable":true},"EmitterUserEmail":{"type":"string","nullable":true},"CompanySocialName":{"type":"string","nullable":true},"UUID":{"type":"string","format":"uuid"},"FileBase64":{"type":"string","nullable":true},"File":{"type":"string","format":"binary","nullable":true},"HasFile":{"type":"boolean"},"UnitUUID":{"type":"string","nullable":true},"Subscribers":{"type":"array","items":{"$ref":"#/components/schemas/SubscriberJson"},"nullable":true},"EnvelopeFlow":{"type":"array","items":{"$ref":"#/components/schemas/EnvelopeFlowJson"},"nullable":true},"Audit":{"type":"array","items":{"$ref":"#/components/schemas/AuditJson"},"nullable":true},"IsTemplate":{"type":"boolean"},"ID_Template":{"type":"integer","format":"int64","nullable":true},"TemplateUUID":{"type":"string","format":"uuid","nullable":true},"DocumentSubcategoryUUID":{"type":"string","nullable":true},"DocumentSubcategoryName":{"type":"string","nullable":true},"DocumentCategoryUUID":{"type":"string","nullable":true},"DocumentCategoryName":{"type":"string","nullable":true},"TemplateFields":{"type":"array","items":{"$ref":"#/components/schemas/TemplateFieldEnvelopeJson"},"nullable":true},"HasTemplateFields":{"type":"boolean","nullable":true},"notifications":{"type":"array","items":{"$ref":"#/components/schemas/Notification"},"nullable":true,"readOnly":true},"isValid":{"type":"boolean","readOnly":true}},"additionalProperties":false},"EnvelopeFlowJson":{"type":"object","properties":{"ID_Flow":{"type":"integer","format":"int64"}},"additionalProperties":false},"EnvelopeStatusEnum":{"enum":[0,1,2,3,4,5],"type":"integer","description":"Estado do envelope, que pode ser:\\r\\n* `0` - Expirado\\r\\n* `1` - Pendente\\r\\n* `2` - Conclu\xeddo\\r\\n* `3` - Cancelado\\r\\n* `4` - Processando\\r\\n* `5` - Recusado","format":"int32"},"GetDocumentDetailResponse":{"type":"object","properties":{"Url":{"type":"string","description":"Link para download do arquivo","format":"uri"},"UrlVoucher":{"type":"string","description":"Link para download do voucher\\r\\n* Dispon\xedvel apenas quando envelope est\xe1 no estado `2 - Concl\xfaido` ou `3 - Cancelado`","format":"uri","nullable":true},"DocumentType":{"type":"string","description":"Nome do arquivo\\r\\n* sem extens\xe3o","example":"contrato-de-locacao"},"CreatedDate":{"type":"string","description":"Data de cria\xe7\xe3o do documento\\r\\n* Formato `dd/MM/yyyy HH:MM`","format":"date-time","example":"07/15/2022 21:07"},"EmitterUserName":{"type":"string","description":"Nome da pessoa que emitiu o documento","example":"Renata Alcantara"},"EmitterUserUUID":{"type":"string","description":"Identificador \xfanico da pessoa emissora\\r\\n* Formato UUID","nullable":true,"example":"dad4bfa9-a993-492d-953e-d412d2d185f3"},"EmitterUserEmail":{"type":"string","description":"E-mail da pessoa que emitiu o documento","format":"email","nullable":true,"example":"renata.alcantara@unico.io"},"CompanySocialName":{"type":"string","description":"Nome da empresa que emitiu o documento","nullable":true,"example":"unico"},"UUID":{"type":"string","description":"Identificador \xfanico do documento","format":"uuid","example":"dad4bfa9-a993-492d-953e-d412d2d185f3"},"HasFile":{"type":"boolean","description":"Indica se arquivo est\xe1 dispon\xedvel na resposta","example":false},"Subscribers":{"type":"array","items":{"$ref":"#/components/schemas/GetDocumentDetailResponse_Subscriber"},"description":"Lista de assinantes"},"IsTemplate":{"type":"boolean","description":"Indica se o documento \xe9 baseado em modelo","example":false},"DocumentSubcategoryUUID":{"type":"string","description":"Identificador \xfanico da subcategoria do documento (tipo de documento)","format":"uuid","nullable":true,"example":"dad4bfa9-a993-492d-953e-d412d2d185f3"},"DocumentSubcategoryName":{"type":"string","description":"Nome da da subcategoria do documento (tipo de documento)","nullable":true},"DocumentCategoryUUID":{"type":"string","description":"Identificador \xfanico da categoria do documento","format":"uuid","nullable":true,"example":"dad4bfa9-a993-492d-953e-d412d2d185f3"},"DocumentCategoryName":{"type":"string","description":"Nome da da categoria do documento","nullable":true}},"additionalProperties":false,"description":"Modelo de resposta para o endpoint [GET] /api/v1/service/documents/{uuidDocument}"},"GetDocumentDetailResponse_Subscriber":{"type":"object","properties":{"SubscriberName":{"type":"string","description":"Nome do assinante","example":"Flavia dos Santos"},"SubscriberCPF":{"type":"string","description":"CPF do assinante","nullable":true,"example":"10000000019"},"SubscriberEmail":{"type":"string","description":"E-mail do assinante","format":"email","nullable":true,"example":"email@gmail.com"},"SubscriberPhone":{"type":"string","description":"Telefone celular do assinante","format":"tel","nullable":true,"example":"5513987654321"},"SubscriberUUID":{"type":"string","description":"Identificador \xfanico do assinante","example":"dad4bfa9-a993-492d-953e-d412d2d185f3"},"ID_SubscriberStatus":{"type":"integer","description":"ID que representa o status do assinante em rela\xe7\xe3o ao documento.","format":"int32","example":1},"SubscriberOrder":{"type":"integer","description":"Ordem de assinatura do assinante em rela\xe7\xe3o aos outros assinantes do documento","format":"int32","example":1},"SubscriberEvents":{"type":"array","items":{"$ref":"#/components/schemas/Subscriber_SubscriberEvent"},"description":"Lista de eventos do assinante","nullable":true},"EmailNotification":{"type":"string","description":"Email do assinante no qual receber\xe1 notifica\xe7\xf5es referentes ao envelope","format":"email","nullable":true,"example":"email@gmail.com"}},"additionalProperties":false},"GetEnvelopesRequest":{"type":"object","properties":{"CPF":{"maxLength":11,"minLength":11,"pattern":"^[0-9]{11}$","type":"string","description":"N\xfamero de cadastro de pessoa f\xedsica do assinante\\r\\n            \\r\\nSe fornecido valor para `EnvelopeUUID` o valor de `CPF` ser\xe1 ignorado\\r\\n* sem formata\xe7\xe3o, apenas os 11 n\xfameros","default":null,"nullable":true,"example":"10000000019"},"EnvelopeUUID":{"type":"string","description":"Identificador \xfanico do envelope","format":"uuid","default":null,"nullable":true,"example":"00000000-0000-0000-0000-000000000000"},"Status":{"$ref":"#/components/schemas/EnvelopeStatusEnum"},"Page":{"type":"integer","description":"N\xfamero da p\xe1gina da busca","format":"int32","default":1,"nullable":true},"StartDate":{"type":"string","description":"Data inicial para busca sob a data de cria\xe7\xe3o do envelope\\r\\n* Se esta data for definida, tamb\xe9m deve ser definida a data em `EndDate`\\r\\n* A data deve ser ap\xf3s 01/01/2018\\r\\n* A data deve ser anterior a data definida em `EndDate`","format":"date","nullable":true,"example":"04/04/2020"},"EndDate":{"type":"string","description":"Data final para busca sob a data de cria\xe7\xe3o do envelope\\r\\n* Se esta data for definida, tamb\xe9m deve ser definida a data em `StartDate`\\r\\n* A data deve ser ap\xf3s 01/01/2018","format":"date","nullable":true,"example":"10/04/2020"},"Order":{"$ref":"#/components/schemas/Orders"}},"additionalProperties":false,"description":"Par\xe2metros de filtragem para realizar busca de envelopes\\r\\n* Nenhuma propriedade \xe9 obrigat\xf3ria"},"GetEnvelopesResponse":{"type":"object","properties":{"Success":{"type":"boolean","description":"Sinaliza se foram encontrados registros","example":true},"Message":{"type":"string","nullable":true,"deprecated":true},"Data":{"$ref":"#/components/schemas/GetEnvelopesResponse_EnvelopePage"}},"additionalProperties":false},"GetEnvelopesResponse_Document":{"type":"object","properties":{"Url":{"type":"string","description":"Link para download do arquivo","format":"uri"},"UrlVoucher":{"type":"string","description":"Link para download do voucher\\r\\n* Dispon\xedvel apenas quando envelope no estado `2 - Conclu\xeddo` ou `3 - Cancelado`","format":"uri"},"DocumentType":{"type":"string","description":"Nome do arquivo\\r\\n* sem extens\xe3o","example":"contrato-de-locacao"},"CreatedDate":{"type":"string","description":"Data de cria\xe7\xe3o do documento\\r\\n* Formato `dd/MM/yyyy HH:MM`","format":"date","example":"07/15/2022 21:07"},"EmitterUserName":{"type":"string","description":"Nome da pessoa que emitiu o documento","example":"Renata Alcantara"},"EmitterUserUUID":{"type":"string","description":"Identificador \xfanico da pessoa emissora","example":"00000000-0000-0000-0000-000000000000"},"EmitterUserEmail":{"type":"string","description":"E-mail da pessoa que emitiu o documento","format":"email","nullable":true,"example":"test@test.com"},"CompanySocialName":{"type":"string","description":"Nome da empresa que emitiu o documento","example":"unico"},"UUID":{"type":"string","description":"Identificador \xfanico do documento","format":"uuid","example":"00000000-0000-0000-0000-000000000000"},"HasFile":{"type":"boolean","description":"Indica se arquivo est\xe1 dispon\xedvel na resposta","example":false},"Subscribers":{"type":"array","items":{"$ref":"#/components/schemas/GetEnvelopesResponse_Subscriber"},"description":"Lista de assinantes"},"IsTemplate":{"type":"boolean","description":"Indica se o documento \xe9 baseado em modelo","example":false,"deprecated":true},"DocumentSubcategoryUUID":{"type":"string","description":"Identificador \xfanico do tipo do documento","format":"uuid","nullable":true,"example":"00000000-0000-0000-0000-000000000000"},"DocumentSubcategoryName":{"type":"string","description":"Nome do tipo do documento","nullable":true,"example":"Admiss\xe3o"},"DocumentCategoryUUID":{"type":"string","description":"Identificador \xfanico da categoria do documento","format":"uuid","nullable":true,"example":"00000000-0000-0000-0000-000000000000"},"DocumentCategoryName":{"type":"string","description":"Nome da categoria do documento","nullable":true,"example":"Abertura de conta banc\xe1ria"}},"additionalProperties":false},"GetEnvelopesResponse_Envelope":{"type":"object","properties":{"CreatedDate":{"type":"string","description":"Data de cria\xe7\xe3o do envelope\\r\\n* Formato `dd/MM/yyyy HH:MM`","format":"date","example":"07/15/2022 21:07"},"ID_EnvelopeStatus":{"$ref":"#/components/schemas/EnvelopeStatusEnum"},"EnvelopeStatus":{"type":"string","description":"Descri\xe7\xe3o do ID_EnvelopeStatus","example":"Conclu\xeddo"},"UUID":{"type":"string","description":"Identificador \xfanico do envelope","format":"uuid","example":"00000000-0000-0000-0000-000000000000"},"HasFrame":{"type":"boolean","description":"Indica se o envelope criado \xe9 um Frame\\r\\n* Frame possibilita o n\xe3o envio de notifica\xe7\xe3o ao assinate\\r\\n* Frame possibilita a inclus\xe3o do WebClient em plataforma/aplica\xe7\xe3o propriet\xe1ria do cliente","example":false},"Documents":{"type":"array","items":{"$ref":"#/components/schemas/GetEnvelopesResponse_Document"},"description":"Lista de documentos"}},"additionalProperties":false},"GetEnvelopesResponse_EnvelopePage":{"type":"object","properties":{"Page":{"type":"integer","description":"N\xfamero da p\xe1gina da busca","format":"int32","example":1},"MaxPage":{"type":"integer","description":"N\xfamero m\xe1ximo de p\xe1ginas dispon\xedveis","format":"int64","example":5},"Count":{"type":"integer","description":"Quantidade total de envelopes encontrados","format":"int64","example":50},"Envelopes":{"type":"array","items":{"$ref":"#/components/schemas/GetEnvelopesResponse_Envelope"},"description":"Lista de envelopes"},"Rows":{"type":"integer","format":"int32","deprecated":true}},"additionalProperties":false},"GetEnvelopesResponse_Subscriber":{"type":"object","properties":{"SubscriberName":{"type":"string","description":"Nome do assinante","example":"Renata Alcantara"},"SubscriberCPF":{"maximum":11,"minimum":11,"pattern":"^[0-9]{11}$","type":"string","description":"N\xfamero de cadastro de pessoa f\xedsica do assinante\\r\\n* sem formata\xe7\xe3o, apenas os 11 n\xfameros","example":"10000000019"},"SubscriberEmail":{"type":"string","description":"E-mail do assinante","format":"email","example":"test@test.com"},"SubscriberPhone":{"type":"string","description":"Telefone do assinante com c\xf3digo do pa\xeds e DDD\\r\\n* Sem formata\xe7\xe3o e contendo apenas 12 ou 13 n\xfameros","format":"tel","nullable":true,"example":"551192345678"},"ID_SubscriberStatus":{"$ref":"#/components/schemas/SubscriberStatus"},"SubscriberOrder":{"type":"integer","description":"Ordem de assinatura do assinante","format":"int32","nullable":true,"example":1},"SubscriberRole":{"$ref":"#/components/schemas/SubscriberRoles"},"URLFrameFull":{"type":"string","description":"Link para acessar p\xe1gina de assinatura\\r\\n* O link possui data de expira\xe7\xe3o de acordo com as defini\xe7\xf5es da empresa emissora","format":"uri"},"IsUser":{"type":"boolean","nullable":true,"deprecated":true}},"additionalProperties":false},"Notification":{"type":"object","properties":{"key":{"type":"string","nullable":true},"message":{"type":"string","nullable":true}},"additionalProperties":false},"Orders":{"enum":["ASC","DESC"],"type":"string","description":"Ordena\xe7\xe3o dos elementos da lista, que pode ser:\\r\\n* `ASC` - Crescente\\r\\n* `DESC` - Decrescente"},"PostContactRequest":{"type":"object","properties":{"ContactName":{"type":"string","description":"Nome do assinante","example":"Margaria Clara"},"ContactCPF":{"type":"string","description":"N\xfamero de cadastro de pessoa f\xedsica do assinante\\r\\n* sem formata\xe7\xe3o, apenas os 11 n\xfameros\\r\\n            \\r\\nN\xe3o \xe9 poss\xedvel atualizar CPF de algum assinante existente. Sendo assim, caso seja fornecido\\r\\num novo CPF haver\xe1 o registro de um novo assinante","example":"10000000019"},"ContactEmail":{"type":"string","description":"E-mail da assinante","format":"email","nullable":true,"example":"test@test.com"},"ContactPhone":{"type":"string","description":"Telefone do assinante com DDD\\r\\n* Sem formata\xe7\xe3o e contendo apenas 10 ou 11 n\xfameros","format":"tel","nullable":true,"example":"1192345678"},"ContactIdentifier":{"type":"string","description":"Campo livre, n\xe3o \xfanico, para identifica\xe7\xe3o do contato do lado do cliente","nullable":true}},"additionalProperties":false},"PostContactResponse":{"type":"object","properties":{"Success":{"type":"boolean","description":"Sinaliza se cria\xe7\xe3o ou atualiza\xe7\xe3o realizado","example":true},"Message":{"type":"string","description":"Mensagem","nullable":true}},"additionalProperties":false},"ResultJson":{"type":"object","properties":{"Success":{"type":"boolean"},"Message":{"type":"string","nullable":true},"Data":{"nullable":true}},"additionalProperties":false},"SubscriberAccessJson":{"type":"object","properties":{"ID_Event":{"type":"integer","format":"int32","nullable":true},"AccessDate":{"type":"string","format":"date-time","nullable":true},"AccessSource":{"type":"string","nullable":true},"EventDateTime":{"type":"string","nullable":true},"GeoLocation":{"type":"string","nullable":true},"GeoFormattedAddress":{"type":"string","nullable":true},"IP":{"type":"string","nullable":true},"LogicalPort":{"type":"string","nullable":true},"UserGMT":{"type":"string","nullable":true},"UserAgent":{"type":"string","nullable":true},"UserUUID":{"type":"string","nullable":true},"UserCPF":{"type":"string","nullable":true},"JTI":{"type":"string","nullable":true},"EventData":{"type":"string","nullable":true},"EventDescription":{"type":"string","nullable":true},"GeoLat":{"type":"string","nullable":true},"GeoLong":{"type":"string","nullable":true}},"additionalProperties":false},"SubscriberJson":{"type":"object","properties":{"ID_Subscriber":{"type":"integer","format":"int64","nullable":true},"SubscriberName":{"type":"string","nullable":true},"SubscriberCPF":{"type":"string","nullable":true},"SubscriberEmail":{"type":"string","nullable":true},"SubscriberPhone":{"type":"string","nullable":true},"SubscriberUUID":{"type":"string","nullable":true},"AuthCode":{"type":"string","nullable":true},"ID_SubscriberStatus":{"type":"integer","format":"int32","nullable":true},"SubscriberStatus":{"type":"string","nullable":true},"SubscriberOrder":{"type":"integer","format":"int32","nullable":true},"SubscriberRole":{"type":"integer","format":"int32"},"SubscriberOrganization":{"type":"string","nullable":true},"SubscriberAccess":{"type":"array","items":{"$ref":"#/components/schemas/SubscriberAccessJson"},"nullable":true},"URLFrame":{"type":"string","nullable":true},"URLFrameFull":{"type":"string","nullable":true},"SignatureImage":{"type":"string","nullable":true},"EmailNotification":{"type":"string","nullable":true},"IsUser":{"type":"boolean","nullable":true},"IsLast":{"type":"boolean","nullable":true},"notifications":{"type":"array","items":{"$ref":"#/components/schemas/Notification"},"nullable":true,"readOnly":true},"isValid":{"type":"boolean","readOnly":true}},"additionalProperties":false},"SubscriberRoles":{"enum":[1,2,3],"type":"integer","description":"Fun\xe7\xe3o do assinante, que pode ser:\\r\\n* `1` - Pr\xf3pria\\r\\n* `2` - Representante legal\\r\\n* `3` - Testemunha","format":"int32"},"SubscriberStatus":{"enum":[102,108,112,118,119,120,121],"type":"integer","description":"Estado do assinante, que pode ser:\\r\\n* `102` - Processando\\r\\n* `108` - Assinado\\r\\n* `112` - Recusado\\r\\n* `118` - Erro\\r\\n* `119` - Criado\\r\\n* `120` - Notifica\xe7\xe3o para Meu ID n\xe3o enviada\\r\\n* `121` - Conclu\xeddo","format":"int32"},"Subscriber_SubscriberEvent":{"type":"object","properties":{"EventName":{"type":"string","description":"Nome do evento de acesso do assinante em rela\xe7\xe3o ao documento\\r\\n* `NotifiedEmail` - Assinante foi notificado via email\\r\\n* `NotifiedSMS` - Assinante foi notificado via SMS\\r\\n* `NotifiedPush` - Assinante foi notificado via Push(You)\\r\\n* `EnvelopeOpened` - Assinante abriu o envelope\\r\\n* `DocumentViewed` - Assinante visualizou o documento\\r\\n* `DocumentAccepted` - Assinante aceitou o documento\\r\\n* `DocumentRefused` - Assinante recusou o documento\\r\\n* `DocumentFinalized` - Assinante concluiu a assinatura do documento e ele foi processado.","example":"DocumentViewed"},"EventDescription":{"type":"string","description":"Breve descri\xe7\xe3o do evento","example":"O envelope foi enviado via E-mail"},"EventDates":{"type":"array","items":{"type":"string","format":"date-time"},"description":"Lista de dadas de ocorr\xeancias do evento em UTC","format":"date-time","example":["2022-08-03T13:00:18.553","2022-08-03T13:04:00.037","2022-08-03T13:20:39.093"]}},"additionalProperties":false},"TemplateFieldEnvelopeJson":{"type":"object","properties":{"FieldCode":{"type":"string","nullable":true},"FieldValue":{"type":"string","nullable":true}},"additionalProperties":false}},"securitySchemes":{"Bearer":{"type":"http","description":"Coloque **apenas** seu token de servi\xe7o JWT abaixo!","scheme":"bearer","bearerFormat":"JWT"}}},"security":[{"Bearer":[]}]}}')}}]);