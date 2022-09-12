---
sidebar_label: 'Captura de documentos'
sidebar_position: 2
---

# Captura de documentos

## About this guide

This guide was designed to assist you in the integration with our **Android SDK** in a fast and easy way. On this page, you will find some key concepts, implementation examples, as well as how to interact with our Biometric Engine REST APIs.

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

- **CPF:** Brazilian national ID Document (CPF);
- **CNH:** Brazilian Driver's licence - Opened document, front and back;
- **CNH Front:** Brazilian Driver's licence - Front;
- **CNH Back:** Brazilian Driver's licence - Back;
- **RG Front:** Brazilian regional ID Document (RG) - Front;
- **RG Back:** Brazilian regional ID Document (RG) - Back;
- **Others:** Any kind of document;

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

First, you have to instantiate the class `AcessoBioListener` and use this objected as a parameter to generate our builder (Interface `IAcessoBioBuilder`).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="java" label="Java" default>

```java
public class MainActivity extends AppCompatActivity {

    private AcessoBioListener callback = new AcessoBioListener() {
        @Override
        public void onErrorAcessoBio(ErrorBio errorBio) { }

        @Override
        public void onUserClosedCameraManually() { }

        @Override
        public void onSystemClosedCameraTimeoutSession() { }

        @Override
        public void onSystemChangedTypeCameraTimeoutFaceInference() { }
    };

    private IAcessoBioBuilder acessoBioBuilder = new AcessoBio(this, callback);
}
```

  </TabItem>

  <TabItem value="kotlin" label="Kotlin">

```kotlin
internal class MainActivity : AppCompatActivity() {

    private val callback = object : AcessoBioListener {
        override fun onErrorAcessoBio(errorBio: ErrorBio?) { }
    
        override fun onUserClosedCameraManually() { }
    
        override fun onSystemClosedCameraTimeoutSession() { }
    
        override fun onSystemChangedTypeCameraTimeoutFaceInference() { }
    }

    private val acessoBioBuilder: IAcessoBioBuilder = AcessoBio(this, callback)
}
```

  </TabItem>
</Tabs>

This implementation can be done with just some lines of code. All you need to do is to override our callback functions with your business rules. Each one of the callback functions will be invoked as detailed below:

#### `onErrorAcessoBio(ErrorBio errorBio)`
This callback function will be invoked whenever an implementation error happens. For example, when informing an incorrect or inexistent capture mode while configuring the camera.

Once invoked, this callback function will receive an object of type `ErrorBio` containing the error details. Learn more about the type `ErrorBio` in our [Andoid SDK references document](../referencias#errorbio).

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

### Configure your credentials

To correctly configure your credentials in our SDK, you have to use the class `AcessoBioConfigDataSource`, as the following example:

 <Tabs>
  <TabItem value="java" label="Java" default>

```java
AcessoBioConfigDataSource unicoConfig = new AcessoBioConfigDataSource() {

    @Override
    public String getHostKey() {
        return HOST_KEY;
    }

    @Override
    public String getHostInfo() {
        return HOST_INFO;
    }

    @Override
    public String getBundleIdentifier() {
        return BUNDLE_IDENTIFIER;
    }

    @Override
    public String getMobileSdkAppId() {
        return MOBILE_SDK_APP_ID;
    }

    @Override
    public String getProjectId() {
        return PROJECT_ID;
    }

    @Override
    public String getProjectNumber() {
        return PROJECT_NUMBER;
    }
};
```
</TabItem>
  <TabItem value="kotlin" label="Kotlin">

```kotlin
val unicoConfig = object : AcessoBioConfigDataSource {
    override fun getProjectNumber(): String {
        return PROJECT_NUMBER
    }

    override fun getProjectId(): String {
        return PROJECT_ID
    }

    override fun getMobileSdkAppId(): String {
        return MOBILE_SDK_APP_ID
    }

    override fun getBundleIdentifier(): String {
        return BUNDLE_IDENTIFIER
    }

    override fun getHostInfo(): String {
        return HOST_INFO
    }

    override fun getHostKey(): String {
        return HOST_KEY
    }
}
```
  </TabItem>
</Tabs>
</li>

<li>

### Open the camera

Finally, let´s open the camera! To make it easier, this last piece is splitted in some steps.

#### Implementing the listeners

Through the implementation of *listeners*, you can configure what will happen in your App in both *error* or *success* cases when capturing an image, using the methods `onSuccessDocument` or `onErrorDocument`, respectively.

#### Implementar listeners para eventos da câmera

##### Method `onSuccessDocument`

```javascript
public void onSuccessDocument(ResultCamera result) { }
```

This method will be invoked whenever an image is successfully capture. Once invoked, this function will receive an object of type `ResultCamera` that will be used latter to call our Rest APIs.

##### Method `onErrorDocument`

```javascript
public void onErrorSelfie(ErrorBio errorBio) { }
```

This method will be invoked whenever an error happens while capturing an image. Once invoked, this callback function will receive an object of type `ErrorBio` containing the error details. Learn more about the type `ErrorBio` in our [Andoid SDK references document](../referencias#errorbio).

<!-- Saiba mais sobre o tipo `ErrorBio` no [API Reference](API#errorbio) de nosso SDK. -->

:::note Listeners implementation

The implementation of these *listeners* must be done inside an instance of the class `iAcessoBioSelfie`.

:::

### Customize the capture frame

:::note Optional step
This step is optional but recommended.
:::

We offer you the possibility of customizing the capture frame in our SDK. To customize it, you just need to use the method corresponding to the property to be customized and apply the change with the `setTheme()` method.

Learn more about the method `setTheme()` and the customization possibilities at our [Android´s SDK reference documentation](../referencias#customizações).

</li>

<li>

#### Preparar e abrir a câmera

Finalmente, devemos iniciar a câmera com as configurações feitas até aqui. Para isto, criaremos uma instância de nosso **builder** através do método `build()`. Lembrando que este método é disponibilizado através do objeto gerado com a interface `IAcessoBioBuilder` (classe `AcessoBio`).

<Tabs>
  <TabItem value="java" label="Java" default>

```java
UnicoCheckCamera unicoCheckCamera = acessoBioBuilder.build();  
```
  </TabItem>

  <TabItem value="kotlin" label="Kotlin">

```kotlin
val unicoCheckCamera = acessoBioBuilder.build()
```

  </TabItem>
</Tabs>

Next, we must prepare the camera using the method `prepareDocumentCamera()` with the object returned by our **builder** (labeled `UnicoCheckCamera` in the above example)

Once the configuration is ready, the method `onCameraReady` will generate an object of type `UnicoCheckCameraOpener.Document`. This object will finally be used to open the camera, with its method `open()`, which must receive:

- Type of document to be capture:
  - `DocumentCameraType.CNH`: Brazilian Driver's licence - Opened document, front and back;
  - `DocumentCameraType.CNH_FRENTE`: Brazilian Driver's licence - Front;
  - `DocumentCameraType.CNH_VERSO`: Brazilian Driver's licence - Back;
  - `DocumentCameraType.CPF`: Brazilian national ID Document (CPF);
  - `DocumentCameraType.RG_FRENTE`: Brazilian regional ID Document (RG) - Front;
  - `DocumentCameraType.RG_VERSO`: Brazilian regional ID Document (RG) - Back;
  - `DocumentCameraType.None`: Any kind of document;

- The listeners configured [above](#implementar-listeners-para-eventos-da-câmera);

The following example show you the configuration done until this step (Listener's configuration, build and open camera)

 <Tabs>
  <TabItem value="java" label="Java" default>

```java
iAcessoBioDocument cameraListener = new iAcessoBioDocument() {
    @Override
    public void onSuccessDocument(ResultCamera result) { }

    @Override
    public void onErrorDocument(ErrorBio errorBio) { }
};

unicoCheckCamera.prepareDocumentCamera(unicoConfig, new DocumentCameraListener() {
    @Override
    public void onCameraReady(UnicoCheckCameraOpener.Document cameraOpener) {
        cameraOpener.open(DocumentType.CNH, cameraListener);
    }

    @Override
    public void onCameraFailed(String message) {
        Log.e(TAG, message);
    }
});
```
  </TabItem>

  <TabItem value="kotlin" label="Kotlin">

```kotlin
val cameraListener: iAcessoBioDocument = object : iAcessoBioDocument {
    override fun onSuccessDocument(result: ResultCamera?) {}

    override fun onErrorDocument(errorBio: ErrorBio?) {}
}

unicoCheckCamera.prepareDocumentCamera(unicoConfig, object : DocumentCameraListener {
    override fun onCameraReady(cameraOpener: UnicoCheckCameraOpener.Document?) {
        cameraOpener?.open(DocumentType.CNH, cameraListener)
    }

    override fun onCameraFailed(message: String?) {
        Log.e(TAG, message)
    }
})
```

  </TabItem>
</Tabs>

A successful response would include the object `ResultCamera` with the following attributes:

- `base64`: This attribute can be used in the case you want to display a preview of the captured image in your app;
- `encrypted`: This attribute must be sent to the **unico check** REST APIs as detailed [here](#chamar-nossas-apis));  


:::caution Converting a Base64 to Bitmap

If you want to convert a Base64 string into a Bitmap image, the standard way won´t work in Android. Learn more at this [Stack Overflow article](https://stackoverflow.com/questions/4837110/how-to-convert-a-base64-string-into-a-bitmap-image-to-show-it-in-a-imageview).

:::

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











