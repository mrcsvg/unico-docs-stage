---
sidebar_label: 'Get started'
sidebar_position: 2
hide_title: true
---

# Get started

This page demonstrates how to configure your account to use our SDK, as well as how to install and configure it in your project. 

## Configure your credentials

To use our SDK, you have get valid credential keys. The following steps show you how to get these client keys and configure it in your project:

### Get your credentials

1. Log in to your Customer Area;
2. Go to *Configurações* (Configurations), then *Integração* (Integrations) and finally to *API Key*;
3. Generate or edit an existing `API Key`;
4. If you want to use the **Smartlive with interaction** functionality in your app, check if the field "**Utiliza liveness com interação**" is enabled (this field must be showing you the word "SIM"). Otherwise, contact our support team and request its activation.

:::info Smartlive with interaction

Learn more about **Smartlive with interaction** in our [key concepts section](/conceitos-importantes#smartlive-com-interação).

:::

5. Select **SIM** (Yes) in the field "Utiliza autenticação segura na SDK" (Asking if use secure authentication in SDK);
6. Expand the JS SDK section and add your application name and the hostname (including http or https);
7. Save your changes.

### Add the credentials to your app

1. Log in to your Customer Area;
2. Go to *Configurações* (Configurations), then *Integração* (Integrations) and finally to *API Key*;
3. Select the **Download** option in the desired option;
4. Select the option **JS**;
5. Click on "**Gerar**" (Generate) and automatically a new tab will open in your browser containing project information in JSON format. 

:::caution Problems with pop-up blockers

You may need to temporarily disable your pop-up blocker to see the download window.

:::

7. Save the content of this new tab in a **JSON** file;
8. Keep the file to add it in your project latter. We will tell you when and how to add it along our guides.

:::info File location

The JSON file must be in a public, web-accessible location within your project.

:::

### Embed additional **Unico Check** files in your project

:::note optional step

This step is optional and it will depend on the configuration you will use in your project.

:::

The table below lists additional resources that could be included in your project. You must download them and include it in your project, depending on the features you want to use.

| Description	| Download link |
| --------- | ------------------ |
| Additional resources to use Smartlive with interaction mode in JS SDK | [Download](https://cdn.unico.io/sdk/check/facetec/browser-v9.4.14/resources.zip)  |
| **Unico Check** AI files to JS SDK  | [Download](https://cdn.unico.io/sdk/check/bio/models.zip)  |

:::info File location

The above files also must be in a public, web-accessible location within your project.

:::

## Installation

Install our SDK from npm or our cdn:

Use the Unico Check npm package, or embed the Unico Check script (from our CDN) into your js files:

:::tip tip

We suggest you to always keep our SDK updated to its latest version. You can check the most recent version it in our [Release notes](release-notes).

:::

#### Installation through npn or yarn packages

Using npn:

```bash
npm install unico-webframe
```

Using yarn:

```bash
yarn add unico-webframe
```
#### Installation through our CDN
Download the file and import it in your project:

- [Download](https://cdn.unico.io/sdk/check/bio/unico-webframe-3.5.3.zip) da versão `3.5.3` 


:::note Nota sobre o *Câmera Inteligente* e modelos de IA
Para utilizar o *Câmera Inteligente*, é necessário adicionar ao projeto alguns modelos de IA para que tudo funcione bem. Para isto, faça download dos modelos [neste link](https://cdn.unico.io/sdk/check/bio/models.zip) e os adicione ao seu projeto. 

To use the **Smart camera** functionality, you must include the IA models in your projects, so that everything works fine. To achieve this, download the [file]((https://cdn.unico.io/sdk/check/bio/models.zip)) and add it to your project.

The models must be available in a public folder named `models`, through the application base path. Example: `https://www.yourdomain.com/models` or `https://localhost:8000/models`.

:::

## Import the files

Import Unico Check SDK in your application, depending on the installation mode:

#### Installed using npm or yarn packages

```javascript
import { UnicoCheckBuilder, SelfieCameraTypes, UnicoThemeBuilder, DocumentCameraTypes } from 'unico-webframe'
```

#### Installed using our cnd

```javascript
import { UnicoCheckBuilder, SelfieCameraTypes, UnicoThemeBuilder, DocumentCameraTypes } from '../js/unico-webframe-version.min.js'
```  

## Rendering

The rendering method will depend on if you have enabled **Smart live with interaction** or no.

### If you are not using **Smartlive with interaction Facetec**

O frame para captura será renderizado dentro de um `div` que deverá possuir seu `id` necessáriamente **igual** a `"box-camera"`.

Create a DOM container element on your page (`div`) where you want our capture frame to be rendered. Make sure to name the container element as `"box-camera"`.

*Exemplo:*
```html
<div id="box-camera"></div>
```

:::caution Caution

Make sure your div id is equal to `'box-camera'`, otherwise our frame won't load.

:::

### If you are using **Smartlive with interaction Facetec**

If you have configured **Smartlive with interaction Facetec** in your project, you don't need to create a placeholder in your code to render our frame. In this case, we will open a modal that will get 100% of users' screen.


## Getting help

:::info Help with some frameworks

If you are using Angular oor React-scripts 5, you could find some problems. Take a look in some quick solutions in our [troubleshooting article] (solucao-problemas).

:::

We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, get in touch with our support team at our [help center](https://ajuda.unico.io/hc/pt-br/categories/360002344171))

## Next steps

Great! You've come this far =). Next, we'll show you how to develop the image capture flows: 

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/captura-documentos)
