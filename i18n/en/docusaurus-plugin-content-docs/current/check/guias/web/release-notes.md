---
sidebar_label: 'Release Notes'
sidebar_position: 9
---

# What's new

:::tip Tip
You already know, but it doesn't hurt to remember: Always keep your SDK updated with the latest version available.

We use Semantic Versioning to number our versions. Learn more [here](/important-concepts).
:::

## `3.5.3`
``23/08/2022``
- Compatibility of normal and smart camera frames when using webview on instagram and facebook;
- Smartlive SDK version update with interaction;
- Hot fix: Correction in opening frame of normal camera and smart camera;

:::caution Attention
If you already have the SDK installed and want to update it, you will need to re-download the Unico Check Additional Resources for interactive Smartlive capture.
See this in the section [Loading other Unico Check files to your project](how-to-start/#loading-other-unico-check-files-to-your-project).
:::

## `3.5.2`
``7/25/2022``
- Hot fix: Error return from unsupported browsers
- Hot fix: Smartlive frame removal with interaction after error
- Smartlive cancelButton implementation with interaction

## `3.5.1`
``28/06/2022``
- Hot fix: Fixed the camera invoked for capturing documents on devices that have multiple cameras

:::info Worth remembering
Currently it is not yet possible to fully handle multiple cameras on all android devices available, as the [MediaDevices] API (https://developer.mozilla.org/pt-BR/docs/Web/API/MediaDevices) does not offer full features for that.
Below are some links to discussions raised on the topic:
[How to select proper backfacing camera in Javascript?](https://stackoverflow.com/questions/59636464/how-to-select-proper-backfacing-camera-in-javascript)
[How to avoid wide-lens backfacing camera on new phones?](https://lists.w3.org/Archives/Public/public-webrtc/2020Jan/0023.html)
[How to detect main / telephoto camera from multiple back cameras with getusermedia](https://stackoverflow.com/questions/56768386/how-to-detect-main-telephoto-camera-from-multiple-back-cameras-with- getusermed)
:::

## `3.5.0`
``6/17/2022``
- Smartlive SDK version update.

:::caution Attention
If you already have the SDK installed and want to update it, you will need to re-download the Unico Check Additional Resources for interactive Smartlive capture.
See this in the section [Loading other Unico Check files to your project](how-to-start/#loading-other-unico-check-files-to-your-project).
:::

## `3.4.3`
``4/18/2022``
- Fixed CNH Aberta capture frame on desktop

## `3.4.2`
``12/04/2022``
- Improved image quality returned in base64
- Improved authentication requests
- Fix for using WebCam in document camera

## `3.4.1`
``4/4/2022``
- Improved anti-injection treatment

## `3.4.0`
``4/4/2022``
- Launch of document capture frames with CNH front and CNH back.
- Capture documents in landscape mode on desktop

## `3.3.1`
``22/03/2022``
- Adjustment to use function instead of classes
- Adjustment on camera startup after the second opening

## `3.3.0`
``10/03/2022``
- Camera aperture adjustment for Motorola Edge 20
- Adjustment of encrypted information returned to the client

## `3.2.2`
``2/18/2022``
- Adjusted Facetec camera closing when an error is returned

## `3.2.1`
``2/17/2022``
- Removal of facetec camera permission screen

### `3.1.0`
``31/01/2022``
- Feature Flag for displaying the unico logo

### `3.0.1`
``25/01/2022``
- Removal of the unique logo

## `3.0.0`
``24/01/2022``
- Added liveness capture functionality with interaction

## Version `2.0.3`
Fixed a bug in Angular > 6 implementations. This bug left the screen frozen when there was competition between setTimeout's in our SDK and the client application."

## Version `2.0.2`

- Removal of the following types of documents used in the `initDocument()` method:
    - **2**: RG front and back
    - **4**: New double-sided ID card

  If you are using the types mentioned above (2 or 4), simply capture each document using the types:

    - **6**: Front ID
    - **7**: ID on the back
    - **8**: New ID front
    - **9**: New ID on the back

- Improved `on.error` and `on.support` callback returns.

- Improved mobile orientation change.
    - Property removal: `boxOrientationHtml`
    - If the orientation changes, we close the camera and return in the error callback.

- Improved security in the SDK.

- Improved the return object in the `on.success` method, adding the `encrypted` property that has a JWT that must be sent in less than 10 minutes for integration with **Unico check** onboarding.

    ```javascript
    {
        base64: string,
        encrypted: string
    }
    ```

- Changed browser support (check supported versions [here](overview#browsers))


## Version `1.0.0`
- Removing the old js lib and making it official.

## Version `0.0.6`
- Big silhouette fix in PWA.

## Version `0.0.5`
- Update external plugins to newer versions, fixing their vulnerabilities.

## Version `0.0.4`
- Inverted camera fix for captures using cell phone's rear camera.

## Version `0.0.3`
- Initial release.