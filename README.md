### Skype Web Autoredial

I truly wish you'll never have the necessity to use this extension. However, if circumstances lead you here, it's likely you're attempting to contact SEF (AIMA). Wishing you the best of luck on your endeavor! 🍀 🫡

### Usage 

1. **Download Repository**: Begin by downloading this repository to your local machine.
2. **Open Firefox Developer Mode**:
   - Launch Firefox.
   - Enter `about:debugging` in the address bar.
3. **Load Extension**:
   - Click on `Load Temporary Add-on`.
   - Navigate to and select the `manifest.js` file from the downloaded repository (refer to Step 1).
4. **Access Skype Web**:
   - Go to [Skype Web](https://web.skype.com/).
5. **Select Contact for Autoredial**:
   - Choose the contact you wish to autoredial from the left panel on Skype Web.
6. **Enable the Extension**:
   - Activate the `Skype Web Autoredial` extension from the addon menu, identifiable by a puzzle icon 🧩.
7. **Start Autoredialing**:
   - Click the `Start` button that appears. Alternatively, use the shortcut key `P` for a quick start.
8. **Stop Autoredialing**:
   - Once your call is connected, press the `Stop` button located next to the `Start` button to end autoredialing. Alternatively, use the shortcut `[` for quick stopping.


### Potential Issues and Troubleshooting

#### Locale Compatibility

This extension was initially developed for personal use and primarily supports the RU locale. As a result, it may not automatically recognize the `Start` and `End` call buttons in other locales. To customize the extension for your specific locale, follow these steps:

1. **Edit Main JavaScript File**:
   - Open the `main.js` file in your preferred code editor.
2. **Update Button Titles**:
   - Modify the `START_CALL_BUTTON_TITLE` and `END_CALL_BUTTON_TITLE` constants to reflect the exact titles used in your locale.
3. **Apply Changes**:
   - Reload the extension in your browser to activate the updates.

#### Adjusting Call Durations

Depending on your needs, you might find it necessary to adjust the duration the extension waits before ending a call or the interval between calls. This is particularly useful for tailoring the autoredialing process to your specific scenario:

1. **Access Main JavaScript File**:
   - Locate and open `main.js`.
2. **Customize Time Durations**:
   - Alter the `CALL_DURATION` and/or `BETWEEN_CALLS_DURATION` constants. Note that these values are in milliseconds (ms).
3. **Apply Changes**:
   - Reload the extension in your browser to activate the updates.
