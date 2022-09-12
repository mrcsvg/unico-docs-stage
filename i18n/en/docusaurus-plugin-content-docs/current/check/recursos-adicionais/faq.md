---
sidebar_label: 'FAQs'
sidebar_position: 1
hide_table_of_contents: true
---

# FAQs

Find below some frequently asked questions:

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## What is the size of the Android SDK?
The Unico Check Android SDK will increase 9MB in your app.

## What is the size of the iOS SDK?
The Unico Check Android SDK will increase 4,9MB in your app.

## Why is it important to use the SDK in your project?
Apart from all the encryption mechanisms, our SDK have some features against image injection. Moreover, we offer resources to help users to take biometrically valid pictures, reducing image drop when compared with standard cameras.

## What makes our SDK different?
Our SDKs have several anti-fraud features as well as many kind of experiences, such as: Smartlive with interaction, Smart Camera, Manual Camera and document capture.

## What are the security layers of the unico SDKs?
Our SDKs have several security layers working in a complementary way, both at application level and also in the information that is exchanged with our backend servers. Apart from that, our SDK counts on code obfuscation, emulator blocking and bundle check mechanisms.

## How robust is the JWT security? What is the encryption level?
The files travel over a secure channel using TLS encryption. Each file is also encrypted using JWS (Json Web Signature), which depends on a valid signature to be validated. Furthermore, the token expires after a short period of time, what considerably reduces the opportunity window for an attack.

## How can I update my SDK?
First, check the version description our Release Notes (You can find it "Implementation Section" in our documentation - and then increment the implementation tag within your project.

## How can I get updated about new SDK releases?
You can subscribe to our newsletter to receive our news by e-mails (Just as you account manager). You also can check it in our release notes (inside our documentation)

## Is it possible to customize the camera's layout?
Yes! You can do it for Android, iOS and Web SDKs. Learn more about it inside the customization section in the implementation guides.

## How to disable the automatic capture mode?
You just need to use the corresponding method to disable it. Learn more about it inside the Selfie Capture guide corresponding to your platform.

## How to disable the Smart Frame?
You just need to use the corresponding method to disable it. Learn more about it inside the Selfie Capture guide corresponding to your platform.


## When I find a conflict related the files AndroidManifest and the meta-data `com.google.mlkit.vision.DEPENDENCIES`. What to do?

In this case, we have to add `tools:replace="android:value"` inside the meta-tag, as below:

![Conflitos entre arquivos AndroidManifest ](/img/faqs/faq-conflited-mlkit.png)
