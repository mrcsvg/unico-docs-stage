---
sidebar_label: 'Selfie Capture'
sidebar_position: 1
---

# Selfie Capture

## About this guide

This guide was designed to assist you in the integration with our **Web SDK** in a fast and easy way. On this page, you will find some key concepts, implementation examples, as well as how to interact with our Biometric Engine REST APIs.

:::info Please note

Please note that this guide focuses on the image capture process. For more information about our REST APIs, please refer to our [REST API Reference](https://www3.acesso.io/identity/services/v3/docs/).

:::

By following this guide, in few minutes, you will be able to:

- Learn how to open user's camera and capture an image;
- Learn how to link the parameters returned by our SDK with our REST APIs;
- Learn how to deal with the data returned by our REST API;

## Before you begin

If you haven't done so already, follow our [Getting started](../como-comecar) guide to set up your account, get your API key and install our SDK. We strongly recommend you to check this SDK's available features in our [Overview page](../overview).

## Available resources

This SDK offers a component that will allow you to capture optimized images in your app, displaying your users a silhouette that help them to get correctly positioned for the image capture.

You can offer one of the following **Selfie Capture** modes in your app:

### Manual Capture

In this kind of experience, our SDK displays a frame to help users to correctly position their faces. The users are then responsible for capturing the image by clicking on a button (also provided by our SDK).

In this mode, our SDK does not perform any kind of validation of what is being captured. If the captured image does not contain, what is considered a biometrically valid face, the `JWT` generated by our SDK will be rejected by our Biometric Engine REST API.

import imgCapturaManual from '/static/img/guias/img_cameranormal.png';

<img src={imgCapturaManual} alt="Captura Manual" className="imgCenter" />


### Automatic Capture

In this kind of experience, we automatically identify the user's face through some computer vision algorithms and help them to correctly position themselves within the capture area. Once correctly positioned, we automatically capture the image.

By helping the users to correctly frame their faces, this option can dramatically reduce problems when sending the `JWT` to our Biometric Engine REST API.

import imgCapturaAutomatica from '/static/img/guias/img_camerainteligente.png';

<img src={imgCapturaAutomatica} alt="Captura Manual" className="imgCenter" />

### Smartlive with interaction Facetec

In this kind of experience, users are instructed to perform some simple movements during the image capture. Those movements are then verified by some computer vision algorithms, in order to ensure that users are really in front of the phone. By requesting users to move in front of the camera, this kind of experience adds an extra security layer against frauds.

As in the Automatic Capture mode, the image here is captured without users pressing any button. This option can also dramatically reduce problems when sending the `JWT` to our Biometric Engine REST API.

:::info Smartlive with interaction Facetec activation

This functionality must be activated inside our Customer Portal, as explained [in this article](../how-to-start#creating-or-editing-an-api-key).

:::

## Implementation

Follow the steps below to have the full potential of our SDK embedded in your app in just some few minutes:

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>

<li>

### Initialize our SDK

First, complete the following steps:

Instantiate a new **Builder**:

```javascript
const unicoCameraBuilder = new UnicoCheckBuilder();
```

Specify the path of the additional files (if added to your project):

```javascript
unicoCameraBuilder.setResourceDirectory("/resources");
```

Specify the AI models file path if you are using Smart Camera (Automatic Capture) functionality in your project.

```javascript
unicoCameraBuilder.setModelsPath("https://mywebsite.com.br/models");

```

</li>

<li>

### Customize the frame size

:::note Smartlive with interaction

This step is only required if you **are not** using the capture mode **Smartlive with interaction Facetec**

:::

If you are **not** using **Smartlive with interaction Facetec**, we suggest you to customize the size of our frame, so that you can optimize it. Check below how to customize it for Web Desktop or Mobile.

:::tip Dica

Many times, the functioning of our frame can be affected by design-systems with grid layouts, like bootstrap or material-ui, for example. To minimize this risk, make sure to place our frame (`id="box-camera"`) somewhere in your project that doesn't inherit unwanted css rules.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="desktop" label="Desktop" default>

In Web Desktop, you can restrict the size of our frame, so that it does not use all the space available in your user´s screen. To restrict it, just wrap our frame (`id="box-camera"`) in another html tag, as in the example below:

```html
<div class="container">
  <div id="box-camera"></div>
</div>
```

Ideally, you should try to keep an adequate height-to-width ratio. By doing this, it's going to be easier to our frame to capture user's face. Check an example below:

```css
.container {
  width: 800px;
  height: 600px;
  position: relative;
}
```

By following the above example, our frame will respect the parent element size, in this case represented by the container, allowing you to implement our frame in the most convenient way to your application (like in a modal, for example).

:::caution Testing many screen sizes

Performing tests changing the screen size using your browser's developer mode won't work. To do this kind of tests, change the size of your browser's window and refresh the page

:::

  </TabItem>

  <TabItem value="mobile" label="Mobile">

For Web Mobile views, unlike what we suggest to Web Desktop, we recommend you to use 100% of users' screen in order to avoid problems with our computer vision algorithms. If the capture frame is somehow distorted, our automatic capture functionality (Smart Camera) may have problems to calculate users' face tracking.

Therefore, in mobile views, we recommend that:
- The capture frame must take 100% of the users' device (`100vw/vh`);
- Avoid both horizontal or vertical scrolling (You can avoid it with a modal);

You can check an Angular example at [this page](recursos-adicionais/exemplos):

:::caution Devices from browser's developer mode

You won´t be able to correctly emulate a device using your browser's developer mode, as the camera used by your browser (the one from your computer) has a totally different resolution than a mobile device camera. This kind of test must be done in a real device.

:::

  </TabItem>
</Tabs>

</li>

<li>

### Configure the callback functions

One of the objects that we have to pass as an argument to the Capture Frame *rendering method* is the **callback function**. This object must have the callback functions for both *success* and *error* cases, as the example below:

```javascript
  var callback = {
    on: {
      success: (obj) => {
        console.log(obj.base64);
        console.log(obj.encrypted);        
      },
      error: (error) => {
        console.error(error)
        //confira na aba "Configurações" sobre os tipos de erros
      },
      support: (supportMessage) => {
        console.log(supportMessage);
      }
    }
  };
```

This object, with the callback functions, is required to the correct functioning of our SDK. If not correctly implemented (covering both `success` and `error` events) an exception will be raised. Learn more about error codes to exception handling [at this guide](../referencias#códigos-de-erro).


</li>

<li>

### Customize the capture frame

:::note Optional step
This step is optional but recommended.
:::

We offer you the possibility of customizing the capture frame using our SDK'S **Theme Builder**. To customize it, you just need to instantiate the class `UnicoThemeBuilder` and use the method that corresponds to the property to be customized.

```javascript
const unicoTheme = new UnicoThemeBuilder()
.setColorSilhouetteSuccess("#0384fc")
.setColorSilhouetteError("#D50000")
.setColorSilhouetteNeutral("#fcfcfc")
.setBackgroundColor("#dff1f5")
.setColorText("#0384fc")
.setBackgroundColorComponents("#0384fc")
.setColorTextComponents("#dff1f5")
.setBackgroundColorButtons("#0384fc")
.setColorTextButtons("#dff1f5")
.setBackgroundColorBoxMessage("#fff")
.setColorTextBoxMessage("#000")
.setHtmlPopupLoading(`<div style="position: absolute; top: 45%; right: 50%; transform:
translate(50%, -50%); z-index: 10; text-align: center;">Carregando...</div>`)
.build();
```

Once the theme object is created, we have to pass it as an argument to the method `setTheme` (That belongs to the **Builder**, instantiated [here](#initialize-our-sdk):

```javascript
unicoCameraBuilder.setTheme(unicoTheme);
```

</li>

<li>

### Configure the capture mode and start the camera

Finally, we must prepare the camera with the settings done until this step. To achieve this, we must instantiate our **Builder** using the method `build()`.

```javascript
const unicoCamera = unicoCameraBuilder.build();
```

Next, we will help you to configure the capture mode. As explained in the [section above](#available-resources), we offer you three capture modes. If you are **not** using the **Smartlive with interaction - Facetec** mode, in this step you will be able to choose between  **Manual** or **Automatic** capture modes.

:::tip Tip Smartlive with interaction - Facetec

If you are using the capture mode **Smartlive with interaction - Facetec**, this configuration might be irrelevant to you, as in this camera mode, we provide a standard experience that can't be customized.

However, we still suggest you to configure it in your builder, because if you disable **Smartlive with interaction - Facetec** mode inside your [Customer Area](#), you won´t need to change your code.

:::

We must prepare the camera using the method `prepareSelfieCamera()` that belongs to the **Builder**. This method must receive as arguments:

- JSON file with your credentials, generated at [this step](../como-comecar).
- Capture mode:
  - `SelfieCameraTypes.NORMAL` to use the manual capture mode;
  - `SelfieCameraTypes.SMART` to use the automatic capture mode;

This method returns a *promise* that once resolved, returns an object that will be used to finally open the camera through the method `open` receiving an argument the **callback functions**, configure at [this step](#configurar-funções-de-callback).


:::info Optimizing your code

To open the camera with a better performance you can call the methods `prepareSelfieCamera()` and `open()` in different moments.
Take a look in this [POC using React and TypeScript](/recursos-adicionais/exemplos#projetos-web). 

:::


<Tabs>
  <TabItem value="manual" label="Captura Manual" default>

#### Manual Capture

To use the manual capture mode, call the method `prepareSelfieCamera` passing as arguments the value `Unico.SelfieCameraTypes.NORMAL` as well as your credentials, as the example below:

```javascript

  const cameraPromised = unicoCamera.prepareSelfieCamera("/services.json", SelfieCameraTypes.NORMAL);
  
  cameraPromised.then(cameraOpener => cameraOpener.open(callback));
```

  </TabItem>

  <TabItem value="automatico" label="Captura Automática">

#### Automatic Capture

To use the automatic capture mode, call the method `prepareSelfieCamera` passing as arguments the value `Unico.SelfieCameraTypes.SMART` as well as your credentials, as the example below:

You also have to load the computer vision models using the method `setModelsPath`, as explained [here](#initialize-our-sdk).

```javascript
  const cameraPromised = unicoCamera.prepareSelfieCamera("/services.json", SelfieCameraTypes.SMART);

  cameraPromised.then(cameraOpener => cameraOpener.open(callback));
```

  </TabItem>
</Tabs>

</li>

<li>

### Call our REST APIs

The image capture is just the first step of our journey. Now, you have to send the obtained `JWT` to our Rest APIs using one of our available flows, detailed in [this page](https://www3.acesso.io/identity/services/v3/docs).

</li>

</ol>
</Steps>

## Getting help

We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, please get in touch with our support team at our [help center](https://ajuda.unico.io/hc/pt-br/categories/360002344171))

## Next steps

- Learn how to [capture image of documents](#) with our SDK.
- Learn more about our SDK in the [Reference documentation](#).
- Check the documentation of our [REST APIs](#).




