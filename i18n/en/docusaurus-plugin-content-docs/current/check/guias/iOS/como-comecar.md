---
sidebar_label: 'Get started'
sidebar_position: 2
hide_title: true
---

# Get started

This page demonstrates how to configure your account to use our SDK, as well as how to install and configure it in your project. 

## Before you begin

Before you start, make sure that your development environment meets the following requirements:

- [XCode](https://developer.apple.com/xcode/) 13 or higher;
- iOS SDK version 11 higher;

If you are using swift in your project:
- Swift CI Compiler > 5.4.2
- Swift Syntax > 4.2

## Configure and install our SDK

Install our SDK using CocoaPods or Swift Package Manager (SPM)

### Using o CocoaPods

#### Installation 

CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects. To detailed usage instructions, check the official documentation from [cocoapods](https://cocoapods.org/). To integrate our SDK in your XCode project using CocoaPods, follow the steps below:

Include the following line ´unicocheck-ios´ in your *Podfile*:

```bash 
pod ‘unicocheck-ios’
```

Then, use the following command in your terminal to install the dependencies:

```
pod install --repo-update
```

### Using o Swift Package Manager (SPM)

The Swift Package Manager is a tool for managing the distribution of Swift code. It's integrated with the Swift build system to automate the process of downloading, compiling, and linking dependencies. To integrate our SDK in your project using SPM, you just need to include the dependency in your file `Package.swift`:

```bash title="Package.swift"
dependencies: [
    .package(url: "https://github.com/acesso-io/unico-check-ios.git", .upToNextMajor(from: "2.3.7"))
]
```

### Declare app permissions  

In order to use user's camera, include the following user permissions in your app:

```xml 
<key>NSCameraUsageDescription</key>
<string>Camera usage description</string>
```

:::caution Be careful

If you are executing the project in .xcodeproj, it's necessary to open the project in .xcworkspace!

::: 

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
6. Expand the Android SDK section and add your SDK application name and Bundle ID;
7. Save your changes.

### Add the credentials to your app

1. Log in to your Customer Area;
2. Go to *Configurações* (Configurations), then *Integração* (Integrations) and finally to *API Key*;
3. Select the **Download** option in the desired option;
4. Select the option **Android**;
5. Click on "**Gerar**" (Generate) and automatically a new tab will open in your browser containing project information in JSON format.

:::caution Problems with pop-up blockers

You may need to temporarily disable your pop-up blocker to see the download window.

:::

6. You can configure the JSON credentials in your app using one of the following options:

6. Atualmente temos duas opções para associar as informações contidas no JSON ao projeto: **Implementando o protocolo** `AcessoBioConfigDataSource` ou **Embarcando o arquivo JSON**.
Veja abaixo: 

#### Option 1: Implementing the interface `AcessoBioConfigDataSource`

1. Implement the interface `AcessoBioConfigDataSource` in your class;
2. Copy the information from the JSON file, downloaded in in the step above, and paste it in the corresponding methods. Example:

*JSON file with credentials:*

```json
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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="objectivec" label="Objective-c" default>

```objectivec 

.h:
#import <AcessoBio/AcessoBioManager.h>
#import <AcessoBio/AcessoBio-Swift.h>

@interface YourUnicoConfigClass : AcessoBioConfigDataSource {}

@end

.m:
@implementation YourUnicoConfigClass

- (NSString * _Nonnull)getBundleIdentifier {
    return @"<YOUR_MOBILE_BUNDLE_IDENTIFIER>"
}

- (NSString * _Nonnull)getHostInfo {
    return @"<YOUR_HOST_INFO>"
}

- (NSString * _Nonnull)getHostKey {
    return @"<YOUR_HOST_KEY>"
}

- (NSString * _Nonnull)getMobileSdkAppId {
    return @"<YOUR_MOBILE_SDK_APP_ID>"
}

- (NSString * _Nonnull)getProjectId {
    return @"<YOUR_PROJECT_ID>"
}

- (NSString * _Nonnull)getProjectNumber {
    return @"<YOUR_PROJECT_NUMBER>"
}

@end

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

import AcessoBio

class YourUnicoConfigClass : AcessoBioConfigDataSource {
    
    func getProjectNumber() -> String {
        return "<YOUR_PROJECT_NUMBER>"
    }
    
    func getProjectId() -> String {
        return "<YOUR_PROJECT_ID>"
    }
    
    func getMobileSdkAppId() -> String {
        return "<YOUR_MOBILE_SDK_APP_ID>"
    }
    
    func getBundleIdentifier() -> String {
        eturn "<YOUR_MOBILE_BUNDLE_IDENTIFIER>"
    }
    
    func getHostInfo() -> String {
        return "<YOUR_HOST_INFO>"
    }
    
    func getHostKey() -> String {
        return "<YOUR_HOST_KEYO>"
    }
}

```

  </TabItem>
</Tabs>

#### Option 2: Embed the JSON file 

Add the JSON file, downloaded in the step above, inside your project's root directory.

## Getting help

We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, get in touch with our support team at our [help center](https://ajuda.unico.io/hc/pt-br/categories/360002344171))

## Next steps

Great! You've come this far =). Next, we'll show you how to develop the image capture flows: 

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/captura-selfies)
- [Referencias do SDK](referencias);

