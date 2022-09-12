---
sidebar_label: 'Get started'
sidebar_position: 2
hide_title: true
---

# Get started

This page demonstrates how to configure your account to use our SDK, as well as how to install and configure it in your project. 

## Before you begin

Before you start, make sure that your development environment meets the following requirements:

- [Android Studio](https://developer.android.com/sdk?hl=pt-br) 9 or higher;
- Android SDK (API level 21) or higher;
- [Maven JitPack](https://JitPack.io/); 

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
6. Expand the Android SDK section and add your Android application name and Bundle ID;
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

#### Option 1: (Recommended) Implementing the interface `AcessoBioConfigDataSource`

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
  <TabItem value="java" label="Java" default>

```java 
package <package_name>

import com.acesso.acessobio_android.onboarding.AcessoBioConfigDataSource;

public class UnicoConfig implements AcessoBioConfigDataSource {
    @Override
    public String getProjectNumber() {
        return PROJECT_NUMBER;
    }
    
    @Override
    public String getProjectId() {
        return PROJECT_ID;
    }
    
    @Override
    public String getMobileSdkAppId() {
        return MOBILE_SDK_APP_ID;
    }
    
    @Override
    public String getBundleIdentifier() {
        return BUNDLE_IDENTIFIER;
    }
    
    @Override
    public String getHostInfo() {
        return HOST_INFO;
    }
    
    @Override
    public String getHostKey() {
        return HOST_KEY;
    }
}

```
  </TabItem>

  <TabItem value="kotlin" label="Koltin">

```kotlin
package <package_name>

import com.acesso.acessobio_android.onboarding.AcessoBioConfigDataSource

class UnicoConfig : AcessoBioConfigDataSource {
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

#### Option 2: Embed the JSON file (deprecated)

Add the JSON file, downloaded in the step above, inside your project's `assets` directory.

## Installation

### Using JitPack Manager

To install our SDK, add a reference to the JitPack repository to your root [build.gradle](https://jitpack.io/#gradle) file by adding the reference to https://jitpack.io at the end of the repositories section. Your `build.gradle` file should look like this:

```gradle title="build.gradle"
// Top-level build file where you can add configuration options common to all sub-projects/modules.
allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://JitPack.io'}
    }
}
```

### Enable the use of AndroidX in your project

Enable the use of AndroidX in your project by setting both of the following Android Gradle plugin flags to true in your `gradle.properties` file. This configuration will enhance the performance of our *image capture component*.

```gradle title="gradle.properties"
# Project-wide Gradle settings.
# https://developer.android.com/topic/libraries/support-library/androidx-rn
android.useAndroidX=true
# Automatically convert third-party libraries to use AndroidX
android.enableJetifier=true
```

### Declare app permissions 

In order to use user's camera and internet, include the following user permissions in your app's manifest file (`AndroidManifest.xml`):

```xml title="AndroidManifest.xml"
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.INTERNET" />
```

### Including dependencies 

Now you just need to correctly import our SDK into your project. In your **module (app-level) Gradle file** ([`app/build.gradle`](https://developer.android.com/studio/build/dependencies)), add `acessobio-android` as a dependency:

:::note Note about Gradle file

Please, note that in this step you must use a different **Gradle file** than used in the previous steps. You must use the app-level Gradle file, instead of the project-level one.

:::

```java title="app/build.gradle"
/* unico */
implementation 'com.github.acesso-io:acessobio-android:+'
```

:::caution Compilation errors
If you find the following error trying to compile your project:

> Invoke-customs are only supported starting with android 0 --min-api 26 ao compilar por incompatibilidade da versão do frame min-26

Add the following lines to the block `compileOptions` in the `app/build.gradle` file:

```
android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```
::: 

## Getting help

We hope this page has clarified most of your doubts. Are you missing something or still need help? Please, get in touch with our support team at our [help center](https://ajuda.unico.io/hc/pt-br/categories/360002344171))

## Next steps

Great! You've come this far =). Next, we'll show you how to develop the image capture flows: 

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/captura-documentos)

