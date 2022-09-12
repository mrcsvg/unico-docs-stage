---
sidebar_label: 'References'
sidebar_position: 8
hide_title: false
---

# References

## About this guide

This guide is a collection of methods and objects available in our Android SDK.

:::note We are in continuous improvement ;)

We currently provide only some few objects and code snippets that may be helpful to your integration. In the future we will have an auto-generated API Reference.

:::

## Capture Frame Customizations

We offer you the possibility of customizing the capture frame in our SDK, in order to let customers to apply their own visual identities. You can find below an extensive list with all the available methods:

### Methods disponíveis

#### Method `getColorSilhouetteSuccess()`
Method used to customize the silhouette color in a successful capture.
#### Method `getColorSilhouetteError()`
Method used to customize the silhouette color in case of an error in the capture process.
#### Method `getColorBackground()`
Method used to customize the silhouette's background color.
#### Method `getColorBoxMessage()`
Method used to customize box background color.
#### Method `getColorTextMessage()`
Method used to customize message's text color.
#### Method `getColorTextPopupError()`
Method used to customize popup's icons and text.
#### Method `getColorBackgroundPopupError()`
Method used to customize popup's backgroud color.
#### Method `getColorBackgroundButtonPopupError()`
Method used to customize popup's button background color.
#### Method `getColorTextButtonPopupError()`
Method used to customize popup's button text color.
#### Method `getColorBackgroundTakePictureButton()`
Method used to customize "Take Picture" background color.
#### Method `getColorIconTakePictureButton()`
Method used to customize "Take Picture" button icon.
#### Method `getColorBackgroundBottomDocument()`
Method used to customize "Capture Document" box background color. 
#### Method `getColorTextBottomDocument()`
Method used to customize  "Capture Document" box text color. 
#### Method `getImageIconPopupError()`
Method used to customize the error popup icon that is displayed whenever user´s face is incorrectly positioned in the capture area.

### Exemplos de utilização

Below, you can find some customization examples using the methods above.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 

.h:
#import "AcessoBioThemeDelegate.h"

@interface ViewController : UIViewController  {

@end

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

- (id)getColorBackground {
    code
}

- (id)getColorBackgroundBottomDocument {
    code
}

- (id)getColorBackgroundButtonPopupError {
    code
}

- (id)getColorBackgroundPopupError {
    code
}

- (id)getColorBackgroundTakePictureButton {
    code
}

- (id)getColorBoxMessage {
    code
}

- (id)getColorIconTakePictureButton {
    code
}

- (id)getColorSilhouetteError {
    code
}

- (id)getColorSilhouetteSuccess {
    code
}

- (id)getColorTextBottomDocument {
    code
}

- (id)getColorTextButtonPopupError {
    code
}

- (id)getColorTextMessage {
    code
}

- (id)getColorTextPopupError {
    code
}

@end

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

import UIKit
import AcessoBio

class ViewController: UIViewController, AcessoBioManagerDelegate, AcessoBioThemeDelegate {

    var unicoCheck: AcessoBioManager!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        unicoCheck = AcessoBioManager(viewController: self)
        unicoCheck.setTheme(self)
    }
 

    func getColorBackground() -> Any! {
        code
    }

    func getColorBoxMessage() -> Any! {
        code
    }

    func getColorTextMessage() -> Any! {
        code
    }

    func getColorBackgroundPopupError() -> Any! {
        code
    }

    func getColorTextPopupError() -> Any! {
        code
    }

    func getColorBackgroundButtonPopupError() -> Any! {
        code
    }

    func getColorTextButtonPopupError() -> Any! {
        code
    }

    func getColorBackgroundTakePictureButton() -> Any! {
        code
    }

    func getColorIconTakePictureButton() -> Any! {
        code
    }

    func getColorBackgroundBottomDocument() -> Any! {
        code
    }

    func getColorTextBottomDocument() -> Any! {
        code
    }

    func getColorSilhouetteSuccess() -> Any! {
        code
    }

    func getColorSilhouetteError() -> Any! {
        code
    } 
} 

```

  </TabItem>
</Tabs>

## Session timeouts
  
The timeout for face detection is, by default, configure to 13 seconds. If the users are not able to capture their faces and the timeout for face detection is reached, the capture mode will be automatically changed to the manual mode (the one without the smart frame). This timeout configuration can not be changed.

### Configuring general session timeout

#### Method `setTimeoutSession`: 
With this method you can configure the general session timeout. The session timeout must be configured in seconds. 

This configuration is useful if you want to display a nice message to your users once the timeout is reached.

- The standard timeout value is 40 seconds;
- The minimum timeout value is 40 seconds;

#### Implementation example:

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec
#import "ViewController.h"
#import <AcessoBio/AcessoBio.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    unicoCheck = [[AcessoBioManager alloc]initWithViewController:self];
    [unicoCheck setTimeoutSession:50];

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
        unicoCheck.setTimeoutSession(50)
    }
}            
```

  </TabItem>
</Tabs>

## ErrorBio Object

This object is returned whenever an error happens inside our SDK. 

### Available methods

#### Method `getCode()`:
- Method used to get the error code.

#### Method `getDescription()`
- Method used to get the error message.

## Error codes

The following list describes the possible error codes returned by our SDK.

| Código | Descrição |
| ------ | --------- |
| `73000` | The Session was cancelled because of an unknown and unexpected error. The Unico Check SDK leverages a variety of iOS APIs including camera, storage, security, networking, and more. This return value is a catch-all for errors experienced during normal usage of these APIs. |
| `73003` | The API version needs to be 11 or newer. |
| `73004` | Could not find implementation interface callback AcessoBioSelfieDelegate |
| `73005` | Could not find implementation interface callback AcessoBioDocumentDelegate |
| `73006` | Unable to open camera on emulators |
| `73100` | Unico Check SDK is unable to connect to the internet. |
| `73200` | Could not find the unico_sdk json file |
| `73202` | Unable to load unico_sdk json file |
| `73300` | Unable to get unico authentication object |
| `73301` | Unable to parse unico authentication object |
| `73302` | Could not find the unico token |
| `73701` | Could not find active liveness import |
| `73702` | Unable to initialize active liveness in production mode |
| `73703` | Unable to get active liveness session |
| `73704` | The user pressed the cancel button and did not complete the Session. |
| `73705` | The Session was not performed successfully and a FaceScan was not generated. In general, other statuses will be sent to the developer for specific unsuccess reasons. |
| `73706` | The camera access is prevented because either the user has explicitly denied permission or the user's device is configured to not allow access by a device policy. |
| `73707` | The Session was cancelled due to the app being terminated, put to sleep, an OS notification, or the app was placed in the background. |
| `73708` | The Session was cancelled because the device is in landscape mode. The user experience of devices in these orientations is poor and thus portrait is required. |
| `73709` | The Session was cancelled because the device is in reverse portrait mode. The user experience of devices in these orientations is poor and thus portrait is required. |
| `73710` | The Session was cancelled because the user was unable to complete a Session in the default allotted time or the timeout set by the developer. |
| `73711` | The Session was cancelled due to memory pressure. |
| `73712` | The Session was cancelled because your App is not in production and requires a network connection. |
| `73713` | The Session was cancelled because your key needs to be validated again. |
| `73714` | The Session was cancelled because the developer-configured encryption key was not valid. |
| `73715` | The Session was cancelled because not all guidance images were configured. |
| `73716` | The Session was cancelled because the SDK was unable to start the camera on this device. |
| `73717` | The Session was cancelled because the user was in a locked out state. |
| `73718` | The Session was cancelled because of an unknown and unexpected error. SDK leverages a variety of iOS APIs including camera, storage, security, networking, and more. This return value is a catch-all for errors experienced during normal usage of these APIs. |
| `73719` | The Session was cancelled because the user pressed the Get Ready screen subtext message. Note: This functionality is not available by default, and must be requested from FaceTec in order to enable it. |
| `73800` | Could not encrypt response |


