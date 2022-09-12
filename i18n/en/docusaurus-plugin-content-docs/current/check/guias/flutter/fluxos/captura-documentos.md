---
sidebar_label: 'Captura de documentos'
sidebar_position: 2
---

# Captura de documentos

## About this guide

This guide was designed to assist you in the integration with our **Flutter SDK** in a fast and easy way. On this page, you will find some key concepts, implementation examples, as well as how to interact with our Biometric Engine REST APIs.

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

This SDK offers a component that will allow you to capture optimized images in your app, displaying to your users a silhouette that gets automatically adjusted to the size of their screens. You can capture the following documents with our SDK:

- **CNH:** Brazilian Driver's licence - Opened document, front and back;
- **CNH Front:** Brazilian Driver's licence - Front;
- **CNH Back:** Brazilian Driver's licence - Back;
- **CPF:** Brazilian national ID Document (CPF);
- **RG Front:** Brazilian regional ID Document (RG) - Front;
- **RG Back:** Brazilian regional ID Document (RG) - Back;
- **New RG Front:** New Brazilian regional ID Document (RG) - Front;
- **New RG Back:** New Brazilian regional ID Document (RG) - Back;
- **Other:** Any kind of document. To this kind of capture you must inform the document title that will be displayed in the capture frame to your users using the parameter `optional.LABEL_DOCUMENT_TYPE_OTHERS`.

import imgDocumento from '/static/img/guias/img_documentos.png';

<img src={imgDocumento} alt="Captura Manual" className="imgCenter" />

:::info Capture frame customization

We offer you the possibility of customizing the capture frame in our SDK. To customize it, you just need to use the method corresponding to the property to be customized and apply the change with the `setTheme()` method.

Learn more about the method `setTheme()` and the customization possibilities at our [Android´s SDK reference documentation](../referencias#customizações).

:::

## Implementation

Follow the steps below to have the full potential of our SDK embedded in your app in just some few minutes:

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>
<li>

### Initialize our SDK

First, you have to instantiate our builder, through the interface `UnicoCheckBuilder`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="dart" label="Dart" default>

```dart
class _MyHomePageState extends State<MyHomePage> implements UnicoListener {

    late UnicoCheckBuilder _unicoCheck;

    /// Unico callbacks
      @override
      void onErrorUnico(UnicoError error) {}

      @override
      void onUserClosedCameraManually() {}

      @override
      void onSystemChangedTypeCameraTimeoutFaceInference() {}

      @override
      void onSystemClosedCameraTimeoutSession() {}

      /// Document callbacks
      @override
      void onSuccessDocument(ResultCamera resultCamera) { }

      @override
      void onErrorDocument(UnicoError error) { }

}
```

  </TabItem>

</Tabs>

This implementation can be done with just some lines of code. All you need to do is to override our callback functions with your business rules. Each one of the callback functions will be invoked as detailed below:

#### `onErrorUnico(UnicoError error)`
This callback function will be invoked whenever an implementation error happens. For example, when informing an incorrect or inexistent capture mode while configuring the camera.

Once invoked, this callback function will receive an object of type `ErrorBio` containing the error details. Learn more about the type `ErrorBio` in our [Flutter SDK references document](../referencias#unicoerror).

#### `onUserClosedCameraManually()`
This callback function will be invoked whenever an user manually closes the camera. For example, when clicking on the "Back" button.

#### `onSystemClosedCameraTimeoutSession()`
This callback function will be invoked as soon as the session timout is reached (Without capturing any image).

:::info Session Timeout
The session timeout can be set with the **builder** using the `setTimeoutSession` method. The session timeout must be configured in **seconds**.
:::

:::caution Be careful

All the above callback functions must be declared in your project (Even without any business rules). Otherwise, you won't be able to compile your project.

:::

</li>

<li>

### Open the camera

Finally, let´s open the camera! To make it easier, this last piece is splitted in some steps.

#### Implementing the listeners

Through the implementation of *listeners*, you can configure what will happen in your App in both *error* or *success* cases when capturing an image, using the methods `onSuccessDocument` or `onErrorDocument`, respectively.

##### Method `onSuccessDocument`

```dart
public void onSuccessDocument(ResultCamera resultCamera) { }
```

This method will be invoked whenever an image is successfully capture. Once invoked, this function will receive an object of type `ResultCamera` that will be used latter to call our Rest APIs.

##### Method `onErrorDocument`

```dart
public void onErrorDocument(UnicoError error) { }
```

This method will be invoked whenever an error happens while capturing an image. Once invoked, this callback function will receive an object of type `ErrorBio` containing the error details. Learn more about the type `UnicoError` in our [Flutter SDK references document](../referencias#errorbio).

:::note Listeners implementation

The implementation of these *listeners* must be done inside an instance of the class `UnicoDocument`.

:::

### Customize the capture frame

:::note Optional step
This step is optional but recommended.
:::

We offer you the possibility of customizing the capture frame in our SDK. To customize it, you just need to use the method corresponding to the property to be customized and apply the change with the `setTheme()` method.

Learn more about the method `setTheme()` and the customization possibilities at our [Flutter SDK reference documentation](../referencias#customizações).

</li>

<li>

#### Abrir a câmera

Finally, we must open the camera with the settings done until this step. To that, we must call the method `openCameraDocument()`

Then, we must open the camera using the method `openCameraDocument()`, that was generated by the object from the class `UnicoCheck`. This method must receive as parameter:

- JSON file with your credentials, generated at [this step](../como-comecar).
- Type of document to be capture:
  - `DocumentCameraType.CNH`: Brazilian Driver's licence - Opened document, front and back;
  - `DocumentCameraType.CPF`: Brazilian national ID Document (CPF);
  - `DocumentCameraTypes.OUTROS("description")`:  Any kind of document, without silhouette. In this case you must include the name of the document as a description to be displayed in the frame;
  - `DocumentCameraType.RG_FRENTE`: Brazilian regional ID Document (RG) - Front;
  - `DocumentCameraType.RG_VERSO`: Brazilian regional ID Document (RG) - Back;
  - `DocumentCameraTypes.RG_FRENTE_NOVO`: New Brazilian regional ID Document (RG) - Front;
  - `DocumentCameraTypes.RG_VERSO_NOVO`: NewBrazilian regional ID Document (RG) - Back;

- The listeners configured [above](#implementar-listeners-para-eventos-da-câmera);

Example capturing a CNH:

 <Tabs>
  <TabItem value="dart" label="Dart" default>

```dart
 _unicoCheck.build().openCameraDocument(
        jsonFileName: androidJsonFileName,
        documentType: DocumentType.CNH,
        listener: this);
```
  </TabItem>

</Tabs>

A successful response would include the object `ResultCamera` with the following attributes:

- `base64`: This attribute can be used in the case you want to display a preview of the captured image in your app;
- `encrypted`: This attribute must be sent to the **unico check** REST APIs as detailed [here](#chamar-nossas-apis);  


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

- Learn how to [capture Selfies](captura-selfies) with our SDK.
- Learn more about our SDK in the [Reference documentation](#).
- Check the documentation of our [REST APIs](#).












