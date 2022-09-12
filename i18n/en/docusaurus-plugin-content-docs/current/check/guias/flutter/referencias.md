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

### Available methods

#### Method `getColorSilhouetteError()`
Method used to customize the silhouette color in case of an error in the capture process.
#### Method `getColorSilhouetteNeutral()`
Method used to customize the silhouette's neutral color.
#### Method `getColorBackground()`
Method used to customize the silhouette's background color.
#### Method `getColorBoxMessage()`
Method used to customize box background color.
#### Method `getColorTextMessage()`
Method used to customize message's text color.
#### Method `getColorBackgroundPopupError()`
Method used to customize popup's backgroud color.
#### Method `getColorTextPopupError()`
Method used to customize popup's icons and text.
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

## Session timeouts

#### Method `setTimeoutSession`: 
With this method you can configure the general session timeout. The session timeout must be configured in seconds. 

This configuration is useful if you want to display a nice message to your users once the timeout is reached.

- The standard timeout value is 40 seconds;
- The minimum timeout value is 40 seconds;

#### Method `setTimeoutToFaceInference`: 
The timeout for face detection is, by default, configure to 13 seconds. If the users are not able to capture their faces and the timeout for face detection is reached, the capture mode will be automatically changed to the manual mode (the one without the smart frame). 

You can use this method to change this configuration.

- The standard timeout value is 15 seconds;
- The minimum timeout value is 5 seconds;

#### Implementation example:

<Tabs>
  <TabItem value="dart" label="Dart" default>

```dart
   _unicoCheck
        .setTimeoutSession(timeoutSession: 55);
```

  </TabItem>

</Tabs>


## UnicoError Object

This object is returned whenever an error happens inside our SDK. 

### Available methods

#### Method `getCode()`:
- Method used to get the error code.

#### Method `getDescription()`
- Method used to get the error message.

## Error codes

The following list describes the possible error codes returned by our SDK.

| Code | Message |
|------|------------|
|73001| Context invalid|
|73002| Did not grant permission to open camera|
|73003| The lest API is 21(LOLLIPOP)|
|73004| Could not find implementation interface callback iAcessoBioSelfie|
|73005| Could not find implementation interface callback iAcessoBioDocument|
|73006| Unable to open camera on emulators|
|73200| Please inform the json file name|
|73202| Unable to parse json file|
|73300| Unable to get unico authentication object|
|73301| Unable to parse object|
|73302| Could not find the unico token|
|73303| Current host is not registered|
|73400| Could not initialize camera|
|73500| Unable to get session token, service response error|
|73501| Unable to parce object|
|73502| Could not get session token|
|73701| Could not find active liveness import|
|73702| Unable to initialize active liveness in production mode|
|73703| Unable to get active liveness session|
|73704| The user pressed the cancel button and did not complete the Session.|
|73705| The Session was not performed successfully and a FaceScan was not generated. In general, other statuses will be sent to the |developer for specific unsuccess reasons|
|73706| The camera access is prevented because either the user has explicitly denied permission or the user's device is configured to |not allow access by a device policy. For more information on restricted by policy case, please see the the Apple Developer |documentation on AVAuthorizationStatus.restricted.|
|73707| The Session was cancelled due to the app being terminated, put to sleep, an OS notification, or the app was placed in the |background.|
|73708| The Session was cancelled because device is in landscape mode. The user experience of devices in these orientations is poor |and thus portrait is required.|
|73709| The Session was cancelled because device is in reverse portrait mode. The user experience of devices in these orientations is |poor and thus portrait is required.|
|73710| The Session was cancelled because the user was unable to complete a Session in the default allotted time or the timeout set |by the developer.|
|73712| The Session was cancelled due to memory pressure.|
|73712| The Session was cancelled because your App is not in production and requires a network connection.|
|73713| The Session was cancelled because your key needs to be validated again.|
|73714| The Session was cancelled because the developer-configured encryption key was not valid.|
|73715| The Session was cancelled because not all guidance images were configured.|
|73716| The Session was cancelled because SDK was unable to start the camera on this device.|
|73717| The Session was cancelled because the user was in a locked out state.|
|73718| The Session was cancelled because of an unknown and unexpected error. SDK leverages a variety of iOS APIs including camera, |storage, security, networking, and more. This return value is a catch-all for errors experienced during normal usage of these APIs.|
|73719| The Session cancelled because user pressed the Get Ready screen subtext message. Note: This functionality is not available by |default, and must be requested from FaceTec in order to enable.|
|73800| Could not build encrypted key|

