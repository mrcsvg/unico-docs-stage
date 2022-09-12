---
sidebar_label: 'Fundamentals'
sidebar_position: 3
---

# Key Concepts

Find below some key concepts to take in account:

- O objetivo da SDK é realizar a captura de imagens (selfie e documento);
- A SDK não realiza requisições a Rest-API do Unico check (vide [diagrama](/guias/web/overview#como-funciona-este-sdk));
- Você pode encontrar mais detalhes sobre nossas APIs Rest [nesta página](https://www3.acesso.io/identity/services/v3/docs/#section/Fluxos).
- É importante manter o SDK Unico check atualizado com a última versão disponível;
- O SDK não funciona em emuladores, somente com aparelhos móveis físicos;
- Verifique a versão mínima dos sistemas operacionais suportados por cada versão da SDK (Android, iOS ou Web) em seus respectivos guias,
- A funcionalidade de liveness com interação depende de contato com o nosso backend;
- Não damos suporte para versões desatualizadas das nossas SDKs;
- Utilizamos o Versionamento Semântico para detalhar nossas versões;


- The purpose of the SDK is to capture images (selfie and document);
- The SDK does not make requests to our REST APIs (see [diagram](/guias/web/overview#how-this-sdk-works));
- You can find more details about our Rest APIs [on this page](https://www3.acesso.io/identity/services/v3/docs/#section/Fluxos).
- It is important to keep the **Unico Check** SDK updated with the latest available version;
- The SDK does not work on emulators, only on physical mobile devices;
- Check the minimum version of operating systems supported by each SDK version (Android, iOS or Web) in their respective guides,
- The liveness functionality with interaction depends on contacting our backend;
- We do not support outdated versions of our SDKs;
- We use Semantic Versioning to detail our versions;


:::info Semantic Versioning

Given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes
- MINOR version when you add functionality in a backwards compatible manner
- PATCH version when you make backwards compatible bug fixes

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

:::


## Smartlive com interação

Smartlive is our proof-of-life technology. It ensures that the user is physically present at the time of taking a selfie, blocking attempts such as photo from photo.
For an even more secure experience, we require user interaction during capture.

## Getting help

We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, please get in touch with our support team at our [help center](https://ajuda.unico.io/hc/pt-br/categories/360002344171))

## Next steps

- Conceitos importantes
- Learn how to [capture image of documents](#) with our SDK.
- Learn more about our SDK in the [Reference documentation](#).
- Check the documentation of our [REST APIs](#).
