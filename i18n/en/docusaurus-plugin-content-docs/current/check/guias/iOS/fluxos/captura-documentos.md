---
sidebar_label: 'Captura de documentos'
sidebar_position: 2
---

# Captura de documentos

## About this guide

This guide was designed to assist you in the integration with our **iOS SDK** in a fast and easy way. On this page, you will find some key concepts, implementation examples, as well as how to interact with our Biometric Engine REST APIs.

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

- **Sem silhueta:** Captura documento genérico;
- **RG:** Captura do RG (separado em frente e verso);
- **CNH:** Captura da CNH aberta;
- **CNH frente:** Captura da frente da CNH;
- **CNH verso:** Captura do verso da CNH;
- **CPF:** Captura do documento de CPF;

import imgDocumento from '/static/img/guias/img_documentos.png';

<img src={imgDocumento} alt="Captura Manual" className="imgCenter" />


## Implementação

Ao seguir este passo-a-passo, em poucos minutos você terá todo o potencial de nosso SDK embarcado em sua aplicação iOS.

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>
<li>

### Inicializar nosso SDK

First, import our SDK and implement the interface `AcessoBioManagerDelegate` inside your *ViewController*.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec
.m:
#import "ViewController.h"
#import <AcessoBio/AcessoBio.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
   
    unicoCheck = [[AcessoBioManager alloc]initWithViewController:self];
}
   
- (void)onErrorAcessoBioManager:(ErrorBio *)error {
    code
}

- (void)onSystemChangedTypeCameraTimeoutFaceInference {
    code
}

- (void)onSystemClosedCameraTimeoutSession {
    code
}

- (void)onUserClosedCameraManually {
    code
}
```

  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
import UIKit
import AcessoBio

class ViewController: UIViewController, AcessoBioManagerDelegate {

  var unicoCheck: AcessoBioManager!

  override func viewDidLoad() {
    super.viewDidLoad()
    
    unicoCheck = AcessoBioManager(viewController: self)
  }

  func onErrorAcessoBioManager(_ error: ErrorBio!) {
      // your code
  } 
  func onUserClosedCameraManually() {
      // your code
  }
  func onSystemClosedCameraTimeoutSession() {
      // your code
  }
  func onSystemChangedTypeCameraTimeoutFaceInference() {
      // your code 
  }
}     
```

  </TabItem>
</Tabs>

This implementation can be done with just some lines of code. All you need to do is to override our callback functions with your business rules. Each one of the callback functions will be invoked as detailed below:

##### Method `onErrorAcessoBioManager(_ error: ErrorBio!)`
This callback function will be invoked whenever an implementation error happens. For example, when informing an incorrect or inexistent capture mode while configuring the camera.

Once invoked, this callback function will receive an object of type `ErrorBio` containing the error details. Learn more about the type `ErrorBio` in our [iOS SDK references document](../referencias#objeto-errorbio).

##### Method `onUserClosedCameraManually()`
This callback function will be invoked whenever an user manually closes the camera. For example, when clicking on the "Back" button.

##### Method `onSystemClosedCameraTimeoutSession()`
This callback function will be invoked as soon as the session timout is reached (Without capturing any image).

:::info Session Timeout
The session timeout can be set with the **builder** using the `setTimeoutSession` method. The session timeout must be configured in **seconds**.
:::

</li>


<li> 

### Implement *delegates* to camera events

Through the implementation of *delegates*, you can configure what will happen in your App in both *error* or *success* cases when capturing an image, using the methods `onSuccessDocument` or `onErrorDocument`, respectively.

To configure the *delegates*, you have to implement the interfaces `DocumentCameraDelegate` and `AcessoBioDocumentDelegate`:

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 
.h:
#import <UIKit/UIKit.h>
#import <AcessoBio/AcessoBio.h>
#import "SelfieCameraDelegate.h"

@interface ViewController : UIViewController < AcessoBioManagerDelegate,
          // highlight-start
          DocumentCameraDelegate, 
          AcessoBioDocumentDelegate> {
          // highlight-end

    AcessoBioManager *unicoCheck;
    // Your code from previous and next steps here ;)     
}


```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
import UIKit
import AcessoBio

class ViewController: UIViewController, 
                      AcessoBioManagerDelegate, 
                      // highlight-start
                      DocumentCameraDelegate, 
                      AcessoBioDocumentDelegate {
                        // highlight-end
    
  //Your code from previous and next steps here ;) 
}
```

  </TabItem>
</Tabs>

#### Method `onSuccessDocument`

This method will be invoked whenever an image is successfully capture. Once invoked, this function will receive an object of type `ResultCamera` that will be used latter to call our REST APIs.

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 

- (void)onSuccessDocument:(DocumentResult *)result {
    NSLog(@"%@", result.base64);
}  

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

func onSuccessDocument(_ result: DocumentResult!) {
    // your code
 }

```

  </TabItem>
</Tabs>

A successful response would include the object `ResultCamera` with the following attributes:

- `base64`: This attribute can be used in the case you want to display a preview of the captured image in your app;
- `encrypted`: This attribute must be sent to the **unico check** REST APIs as detailed [here](#chamar-nossas-apis));  

:::caution Converting a Base64 to Bitmap

If you want to convert a Base64 string into a Bitmap image, the standard way won´t work in iOS. Learn more at this [Stack Overflow article](https://stackoverflow.com/questions/4837110/how-to-convert-a-base64-string-into-a-bitmap-image-to-show-it-in-a-imageview).

:::

#### Method `onErrorDocument`

This method will be invoked whenever an error happens while capturing an image. Once invoked, this callback function will receive an object of type `ErrorBio` containing the error details. Learn more about the type `ErrorBio` in our [iOS SDK references document](../referencias#errorbio).

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 

- (void)onErrorDocument:(ErrorBio *)errorBio {
    // Your code
}

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

func onErrorDocument(_ errorBio: ErrorBio!) {
    // Your code
 }

```

  </TabItem>
</Tabs>

:::info Object ErrorBio

Learn more about the type `ErrorBio` in our [iOS SDK references document](../referencias#objeto-errorbio).

:::

</li>

<li>

### Customize the capture frame

:::note Optional step
This step is optional but recommended.
:::

We offer you the possibility of customizing the capture frame in our SDK. To customize it, you just need to use the method corresponding to the property to be customized and apply the change with the `setTheme()` method.

Learn more about the method `setTheme()` and the customization possibilities at our [iOS SDK reference documentation](../referencias#customizações).

</li>

<li>

### Prepare and open the camera

First, we must prepare the camera using the method `prepareDocumentCamera` that receives as parameter the implementation of the class `DocumentCameraDelegate` together with the SDK credentials, configured in [this step]((../como-comecar)).

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

<!-- TODO Obter exemplo em objective c  -->

```objectivec 
.h:
#import <UIKit/UIKit.h>
#import <AcessoBio/AcessoBio.h>
#import "SelfieCameraDelegate.h"

@interface ViewController : UIViewController < AcessoBioManagerDelegate,
DocumentCameraDelegate, AcessoBioDocumentDelegate> {

    AcessoBioManager *unicoCheck;
}

.m:
- (IBAction)openCamera:(UIButton *)sender {

    // with AcessoBioConfigDataSource implementation
    [[unicoCheck build] prepareDocumentCamera:self config: [YourUnicoConfigClass new]];

    // or

    // with JSON config
    [[unicoCheck build] prepareDocumentCamera:self jsonConfigName: @""];
}

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
import UIKit
import AcessoBio

class ViewController: UIViewController, AcessoBioManagerDelegate, 
DocumentCameraDelegate, AcessoBioDocumentDelegate {

    @IBAction func openCamera(_ sender: Any) {

        // with AcessoBioConfigDataSource implementation
        unicoCheck.build().prepareDocumentCamera(self, config: YourUnicoConfigClass())

        // or

        // with JSON config
        unicoCheck.build().prepareDocumentCamera(self, jsonConfigName:
        "json-credenciais.json")
    }
}
```

  </TabItem>
</Tabs>

Once the camera is ready, the method `onCameraReadyDocument` will be triggered receiving as parameter an object of type `AcessoBioCameraOpenerDelegate`. 

You must override this method and open the camera using the method `openDocument()` that receives as parameter: 

- Type of document to be capture:
  - `DocumentEnums.none`:  Any kind of document, without any silhouette ;
  - `DocumentEnums.RG`: Brazilian regional ID Document (RG) - First front, then back;
  - `DocumentEnums.rgFrente`: Brazilian regional ID Document (RG) - Front;
  - `DocumentEnums.rgVerso`: Brazilian regional ID Document (RG) - Back;
  - `DocumentEnums.CNH`: Brazilian Driver's licence - Opened document, front and back;
  - `DocumentEnums.cnhFrente`: Brazilian Driver's licence - Front;
  - `DocumentEnums.cnhVerso`: Brazilian Driver's licence - Back;
  - `DocumentEnums.CPF`: Brazilian national ID Document (CPF);

- The **delegates** implemented [above](#implementar-delegates-para-eventos-da-câmera) (Described as Self);

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

<!-- TODO Obter exemplo em objective c  -->

```objectivec 
- (void)onCameraReadyDocument:(id)cameraOpener {
    [cameraOpener openDocument:DocumentCNH delegate:self];
}

- (void)onCameraFailedDocument:(NSString *)message {
    code
}
```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
func onCameraReadyDocument(_ cameraOpener: AcessoBioCameraOpenerDelegate!) {
    cameraOpener.openDocument(
        DocumentEnums.CNH, 
        delegate: self
    )
}
 
func onCameraFailedDocument(_ message: String!) {
    code
}
```

  </TabItem>
</Tabs>

In the case of an error, the event `onCameraFailedDocument` will be triggered. You must override this method, handling the exception, with your business rules.

A successful response would trigger the event `onSuccessDocument`, as explained at [this step](#método-onsuccessdocument).

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



















