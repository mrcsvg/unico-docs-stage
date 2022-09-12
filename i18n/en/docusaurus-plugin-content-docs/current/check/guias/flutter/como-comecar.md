---
sidebar_label: 'Get started'
sidebar_position: 2
hide_title: true
---

# Get started

This page demonstrates how to configure your account to use our SDK, as well as how to install and configure it in your project. 

## Before you begin

Before you start, make sure that your development environment meets the following requirements:

- [Flutter Developer SDK](https://docs.flutter.dev/get-started/install) installed;

## Installation

### Using Flutter CLI

Use the following command in flutter cli to add our SDK to your project:

```bash
$ flutter pub add unico_check
```

The command above will add the following line in your `pubspec.yaml` file.

```yaml pubspec.yaml
dependencies:
  unico_check: ^2.0.2
```

:::note Manually get the packages
The command `flutter pub add unico_check` implicitly triggers command `flutter pub get`. If package is not correctly installed, make sure that you have `unico_check` in you `pubspec.yaml`file, and manually run `flutter pub get`.
:::

### Declare app permissions  

In order to use user's camera, include the following user permissions in your app:

```xml 
<key>NSCameraUsageDescription</key>
<string>Camera usage description</string>
```

### Including dependencies 

Now you just need to correctly import our SDK into your project. You just need to import it in your Dart file.

```dart title="main.dart"

import 'package:unico_check/unico_check.dart';

```

### Get your credentials

1. Log in to your Customer Area;
2. Go to *Configurações* (Configurations), then *Integração* (Integrations) and finally to *API Key*;
3. Generate or edit an existing `API Key`;
4. If you want to use the **Smartlive with interaction** functionality in your app, check if the field "**Utiliza liveness com interação**" is enabled (this field must be showing you the word "SIM"). Otherwise, contact our support team and request its activation.

:::info Smartlive with interaction

Learn more about **Smartlive with interaction** in our [key concepts section](/conceitos-importantes#smartlive-com-interação).

:::

5. Select **SIM** (Yes) in the field "Utiliza autenticação segura na SDK" (Asking if use secure authentication in SDK);
6. Expand the Android iOS section and add your Android application name and Bundle ID;
7. Save your changes.
8. Repeat the procedures 1 to 7 to create another key to your Android App.

### Add the credentials to your app

1. Log in to your Customer Area;
2. Go to *Configurações* (Configurations), then *Integração* (Integrations) and finally to *API Key*;
3. Select the **Download** option in the desired option;
4. Select the option **iOS**;
5. Click on "**Gerar**" (Generate) and automatically a new tab will open in your browser containing project information in JSON format.

6. Save the content of this new tab in a **JSON** file;
7. Repeat the procedures 1 to 6 to your Android App.

8. Keep the files to add it in your project latter. We will tell you when and how to add it along our guides.

:::caution Problems with pop-up blockers

You may need to temporarily disable your pop-up blocker to see the download window.

:::


#### Configure the credentials in your app

To configure your credentials, use the data from the **JSON** files downloaded in the step above to instantiate the interface `UnicoCheck`:

```json title="JSON file with your credentials"
{
	"project_info":{
		"project_number":"<YOUR_PROJECT_NUMBER>",
		"project_id":"<YOUR_PROJECT_ID>"
	},
	"client_info":{
		"mobilesdk_app_id":"<YOUR_MOBILE_SDK_APP_ID>",
		"ios_client_info":{
			"bundle_identifier":"<YOUR_MOBILE_BUNDLE_IDENTIFIER>"
		}
	},
	"host_info":{
		"host_info":"<YOUR_HOST_INFO>",
		"host_key":"<YOUR_HOST_KEY>"
	}
}
```

*Implementation example:*

```dart title="main.dart"  
// highlight-start
  final _configIos = UnicoConfig(
      getProjectNumber: "Your ProjectNumber Ios",
      getProjectId: "Your ProjectId Ios",
      getMobileSdkAppId: "Your MobileSdkAppId Ios",
      getBundleIdentifier: "Your BundleIdentifier Ios",
      getHostInfo: "Your HostInfo Ios",
      getHostKey: "Your HostKey Ios");
  // highlight-end    

  // highlight-start
  final _configAndroid = UnicoConfig(
      getProjectNumber: "Your ProjectNumber Android",
      getProjectId: "Your ProjectId Android",
      getMobileSdkAppId: "Your MobileSdkAppId Android",
      getBundleIdentifier: "Your BundleIdentifier Android",
      getHostInfo: "Your HostInfo Android",
      getHostKey: "Your HostKey Android");
// highlight-end

@override
  void initState() {
    super.initState();
    initUnicoCamera();
    configUnicoCamera();
  }

  void initUnicoCamera() {
    _unicoCheck = new UnicoCheck(
        listener: this,
		    // highlight-start        
        unicoConfigIos: _configIos,
        unicoConfigAndroid: _configAndroid);
        // highlight-end
  }
```

## Getting help

We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, get in touch with our support team at our [help center](https://ajuda.unico.io/hc/pt-br/categories/360002344171))

## Next steps

Great! You've come this far =). Next, we'll show you how to develop the image capture flows: 

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/captura-documentos)



