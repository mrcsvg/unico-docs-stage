---
sidebar_label: 'Release Notes'
sidebar_position: 9
---

# O que há de novo

:::tip Dica
Você já sabe, mas não custa lembrar: Mantenha sempre seu SDK atualizado com a ultima versão disponível.

Utilizamos Versionamento Semântico para numerar nossas versões. Saiba mais [aqui](/conceitos-importantes).
:::

## Versão `2.3.7`
``12/08/2022``
```bash
pod ‘unicocheck-ios’, '2.3.7'
```

Essa nova versão conta com o seguinte ajuste:

- Atualização da versão do Smartlive com interação.
- Melhoria na tratativa de erro ao identificar fontes maliciosas.
- hotfix: Abertura de câmera em celulares com versão do iOS abaixo da 13.

## Versão `2.3.6`
``22/07/2022``
```bash
pod ‘unicocheck-ios’, '2.3.6'
```

Essa nova versão conta com o seguinte ajuste:

- Ajuste na resolução das imagens
- Habilitada a opção Build Libraries for Distribution. Isso ajuda o Xcode a evitar o travamento de versão, para que os módulos da unico possam ser usados ​​quando versões mais recentes do Xcode ou do compilador Swift forem usadas e lançadas a loja.

## Versão `2.3.5`
``29/06/2022``
```bash
pod ‘unicocheck-ios’, '2.3.5'
```

Essa nova versão conta com o seguinte ajuste:

- Hot fix: Fechamento automático da câmera quando o usuário coloca a aplicação em background
- Hot fix: Limpezas de warnings na base de código



## Versão `2.3.4`
``22/06/2022``
```bash
pod ‘unicocheck-ios’, '2.3.4'
```

Essa nova versão conta com o seguinte ajuste:

- Hot fix: Ajustes para manter compatibilidade com Xcode 13

## Versão `2.3.3`
``08/06/2022``
```bash
pod ‘unicocheck-ios’, '2.3.3'
```

Essa nova versão conta com o seguinte ajuste:

- Hot fix: JWT encode nos modos de liveness ativo


## Versão `2.3.2`
``23/05/2022``
```bash
pod ‘unicocheck-ios’, '2.3.2'
```

Essa nova versão conta com o seguinte ajuste:

- Hot fix: ajuste no callback do fechamento manual do frame de captura com interação.

## Versão `2.3.1`
``17/05/2022``
```bash
pod ‘unicocheck-ios’, '2.3.1'
```

Essa nova versão conta com o seguinte ajuste:

- Melhoria da resolução da imagem gerada pelo Smartlive com interação para celulares de qualidade média/alta.

## Versão `2.3.0`
``25/04/2022``
```bash
pod ‘unicocheck-ios’, '2.3.0'
```

Essa nova versão conta com o seguinte ajuste:

- Atualização da versão da SDK do Smartlive.
- Possibilidade de executar os métodos ```prepareSelfieCamera``` e ```prepareDocumentCamera``` sem o arquivo ```json```, utilizando uma classe do tipo `AcessoBioConfigDataSource`.

## Versão `2.2.1`
``06/04/2022``
```bash
pod ‘unicocheck-ios’, '2.2.1'
```

Essa nova versão conta com o seguinte ajuste:

- Ajuste no tema padrão para o modo de baixa luminosidade do frame com interação.
- Ajuste na customização para o botão de fechar do frame com interação.

## Versão `2.1.3`
``24/03/2022``
```bash
pod ‘unicocheck-ios’, '2.1.3'
```

Essa nova versão conta com o seguinte ajuste:

- Feature flag para poder selecionar a exibição ou não do logo da unico.
 
## Versão `2.1.2`
``18/03/2022``
```bash
pod ‘unicocheck-ios’, '2.1.2'
```

Essa nova versão conta com o seguinte ajuste:

- Correções nas configurações, que estavam impedindo o upload do archive/.ipa para a loja Apple.
 
## Versão `2.1.0`
``10/03/2022``
```bash
pod ‘unicocheck-ios’, '2.1.0'
```

Essa nova versão conta com as seguintes melhorias:

- Oferecemos o suporte do gerenciador de pacotes Swift Package Manager (SPM).

- Adicionamos dois novos frames de documentos: CNH frente e CNH verso.


## Versão `2.0.5`
``23/02/2022``
```bash
pod ‘unicocheck-ios’, '2.0.5'
```

Essa nova versão conta com os seguintes ajustes:

- Correção na customização da funcionalidade de Prova de Vida. As cores não estavam sendo aplicadas ao modo de captura como deveriam.

- Correção nos callbacks de erro que não estavam sendo invocados em casos de falhas em requisições REST.

## Versão `2.0.4`
``15/02/2022``
```bash
pod ‘unicocheck-ios’, '2.0.4'
````

Essa nova versão conta com os seguintes ajustes:

- Correção no valor da propriedade encrypted no retorno do objeto (SelfieResult / DocumentResult).

- Correção na abertura da câmera quando o objeto de tema possuía qualquer propriedade de cor como nula.

- Correção no botão de fechar das câmeras: normal, inteligente e documentos.

- Suporte para versões anteriores do Swift (versão mínima: swift 4.2), desde que sigam os pré-requisitos quanto a versão mínima do Xcode (13 ou superior).


## Versão `2.0.2`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘2.0.2’
```

Essa nova versão traz melhorias significativas em relação a versão anterior quanto a documentação.

- Adicionado o frame de CPF.

- Correção na implementação do frame de RG.

## Versão `2.0.1`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘2.0.1’
```

- Correção na implementacão das customizacões.

## Versão `2.0.0`
``01/02/2022``
```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘2.0.0’
```

Essa nova versão traz mudanças significativas. Recomendamos a atualização.

Abaixo, listamos as melhorias e mudanças mais significativas:

- Mudança na estrutura de classes.

- Refatoração de funções públicas, permitindo o retorno assync dentro da própria função.

- Correção de bug de enquadramento de face.

- Refatoração nos métodos disableAutoCapture e disableSmartFrame.

- Correção de bug de travamento de tela após a captura.

## Versão `1.2.7`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.2.7’
```

Esta versão possui correções e melhorias importantes em relação a versões anteriores.

- A SDK está 16% mais leve com a remoção de várias intra-dependências e remoções de garbage-code.

- A SDK está mais segura com novos métodos de criptografia em real-time

- A SDK está mais rápida e precisa na detecção de faces com melhorias dos modelos de IA para o câmera inteligente.

- Agora é possível configurar o tempo máximo de sessão do seu usuário através do método: [acessoBioManager setTimeoutSession:], obtendo o retorno/callback quando ocorrer através do método: - (void)systemClosedCameraTimeoutSession.

- Agora é possível configurar o tempo máximo de inferência e detecção da face do seu usuário através do método: [acessoBioManager setTimeoutToFaceInference:], obtendo o retorno/callback quando ocorrer através do método: - (void)systemClosedCameraTimeoutFaceInference.

Entre outras limpezas que sempre estamos realizando ;)

## Versão `1.2.4`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.2.4’
```

Esta versão possui correções e melhorias importantes em relação a versão anterior (1.2.3).

- A SDK está 16% mais leve com a remoção de várias intra-dependências e remoções de garbage-code.

- A SDK está mais segura com novos métodos de criptografia em real-time

- A SDK está mais rápida com os novos modelos de IA para o câmera inteligente.

- Removemos todos os métodos que permitiam acesso ao Liveness com interação (até segunda ordem).

Entre outras limpezas que sempre estamos realizando ;)

## Versão `1.2.3`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.2.3’
```

- Esta versão possui correções e melhorias importantes em relação a versão anterior (1.2.2).

- Fizemos correções nas validações que envolvem iPhone 6 e iPhone 5.

Entre outras limpezas que sempre estamos realizando ;)

## Versão `1.2.2`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.2.2’
```

Esta versão possui correções e melhorias importantes em relação a versão anterior (1.2.1.1).

- Agora é possível customizar todos os elementos visuais utilizando também cores no formato hexadecimal. Lembrando que os formatos padrões dos SO's continuam ativos, como UIColor para iOS e Colors para Android.

- Adicionamos um novo método de retorno para notificar a sua classe implementadora no momento em que o usuário fechar a câmera manualmente.

- Corrigimos bugs em toda classe de documentos que impedia as requisições para o servidor de forma adequada.

Entre outras limpezas que sempre estamos realizando ;)

## Versão `1.2.1.1`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.2.1.1’
```

Esta versão possui correções importantes em relação a versão anterior (1.2.1).

- Adicionamos um novo método de callback (retorno) para notificar a sua classe implementadora no momento em que o usuário fechar a câmera manualmente.

- Corrigimos bugs em toda classe de documentos que impedia as requisições para o servidor de forma adequada.

Entre outras limpezas que sempre estamos realizando ;)

## Versão `1.2.1`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.2.1’
```

Esta versão possui correções importantes em relação a versão anterior (1.2.0).

- Normalizamos os cálculos de pontos biométricos em dispositivos com tela em retina, o qual utilizam escala em @3x.

- Agora não se faz mais necessário adicionar manualmente ao target o arquivo CenterModelCrop.mlmodel, tal operação foi automatizada do nosso lado. Deixamos a centralização mais simples e rápida, diminuindo a fricção do usuário no momento de enquadrar o rosto.

Entre outras limpezas que sempre estamos realizando ;)

## Versão `Beta 1.2.0`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.2.0’
```

- A partir dessa versão (1.2.0), a SDK unico check não possuíra mais intra-dependências dentro do projeto. Tais quais incluíam FirebaseMLVision, AFNetworking, MBProgressHUD entre outras. Nosso time trouxe todas as funcionalidades e vantagens que tais dependências traziam para o iOS core nativo, simplificando e reduzindo em mais de 75% o tamanho de biblioteca em relação a versão anterior.

## Versão `1.1.5`

pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.1.5’

- Bug fixado a respeito da versão da biblioteca AFNetworking, a qual estava impedindo o upload para a Apple Store pelo uso de WebViews depreciadas na Guideline de 2020.

## Versão `1.1.4`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.1.4’
```

- Fixamos um bug que impedia a implementação da captura de documentos no modo DocumentNone.

- No fluxo de captura de documentos, fixamos um bug que impedia a alteração da label de instrução de acordo com o documento selecionado.

- Adicionamos o botão de fechar no fluxo de captura de documentos. Permitindo que o usuário volte a tela anterior, caso queira.

## Versão `1.1.3`

```bash
pod ‘AcessoBio’, :git => 'https://github.com/acesso-io/acessobio-ios', :tag => ‘1.1.3’
```

- Agora é possível customizar a imagem do ícone de popup de reset de sessão dentro do fluxo do Liveness com interação.


## Versão `1.0.1`

```bash
pod ‘unicocheck-ios’
```

Essa nova versão traz melhoria significativa em relação a versão anterior.

- Correção de bug que ocasionava conflitos entre códigos em swift desenvolvidos em nossa biblioteca e códigos em swift desenvolvidos no projeto do cliente. Estes conflitos, não permitiam o upload da aplicação para a Apple Store.

## Versão `1.0.0`

```bash
pod ‘unicocheck-ios’
```

Novo repositório:

- O projeto acessobio-ios era um repositório público distribuído pelo Cocoapods. Devido as melhorias significativas e mudanças que foram realizadas foi criado um novo repositório que tem o intuito de proteger o código em relação aos dados sensíveis. Portanto, o repositório acessobio-ios não está mais disponível.

- O novo repositório não afeta na implementação.
