/** Change the value of this constant to change the `start autoredialing` shortcut. */
const START_AUTOREDIALING_SHORTCUT_BUTTON = 'p';

/** Change the value of this constant to change the `stop autoredialing` shortcut. */
const STOP_AUTOREDIALING_SHORTCUT_BUTTON = '[';

/** Change the value of this constant to change the title of `start call` button in your locale. */
const START_CALL_BUTTON_TITLE = "Голосовой звонок";

/** Change the value of this constant to change the title of `end call` button in your locale. */
const END_CALL_BUTTON_TITLE = "Завершить звонок";

/** Change the value of this constant to change the duration that this extension waits before redialing. */
const CALL_DURATION = 13_000;

/** Change the value of this constant to change the duration that this extension waits between the calls. */
const BETWEEN_CALLS_DURATION = 1500;

/** Appends the `Start` autoredialling button to the web page. */
appendActionButton(
    "Start",
    `Press '${START_AUTOREDIALING_SHORTCUT_BUTTON}' to start autoredialing`,
    startAutoredialing
);

/** Appends the `Stop` autoredialling button to the web page. */
appendActionButton(
    "Stop",
    `Press '${STOP_AUTOREDIALING_SHORTCUT_BUTTON}' to stop autoredialing`,
    stopAutoredialing
);

/** Adds the `Start` and `Stop` autoredialling shortcuts. */
document.addEventListener('keyup', function (event) {
    /** #toLowerCase() is used to avoid misunderstanding with case-sencitivity. */
    switch (event.key.toLowerCase()) {
        case START_AUTOREDIALING_SHORTCUT_BUTTON.toLowerCase():
            startAutoredialing();
            break;
        case STOP_AUTOREDIALING_SHORTCUT_BUTTON.toLowerCase():
            stopAutoredialing();
            break;
    }
});

/** A flag used to prevent the user of launching multiple autoredialing processes. */
let autoredialingInProgress = false;

/** A flag used to exit autoredialing process.*/
let aborted = false;

/** Starts the autoredialing process. */
async function startAutoredialing() {
    if (autoredialingInProgress) {
        alert('Autoredialing is already in progress. Abort it, or try again in a small while.')
        return;
    };

    aborted = false;
    autoredialingInProgress = true;

    while (!aborted) {
        try {
            clickOnButtonWithTitle(START_CALL_BUTTON_TITLE);
            await sleep(CALL_DURATION);
            /** If `aborted` is `true`, then the user has decided to continue the call. */
            if (!aborted) {
                clickOnButtonWithTitle(END_CALL_BUTTON_TITLE);
                await sleep(BETWEEN_CALLS_DURATION);
            }
        } catch (e) {
            alert(`Error: ${e}`);
            aborted = true;
        }
    }

    autoredialingInProgress = false;
}

/** Exits autoredialling process by setting `aborted` to `true`. */
function stopAutoredialing() {
    aborted = true;
}

/** Attempts to click on the button, identified by the given `title`. Throws a button with the given `title` is not found.  */
function clickOnButtonWithTitle(title) {
    let maybeButton = document.querySelector(`[title*="${title}"]`);

    if (maybeButton) {
        maybeButton.click();
    } else {
        throw `Button with title '${title}' is not found. Please double check whether the expected button titles match the titles in your locale.`;
    }
}

/** Appends an action button with the given `text`, `tooltipText`, and `onClick` callback to the body of the web page. */
function appendActionButton(text, tooltipText, onClick) {
    const button = document.createElement("button");

    button.textContent = text;
    button.title = tooltipText;
    button.addEventListener("click", onClick);

    document.body.append(button);
}

/** Returns a `Promise` that resolves after the given `durationMilliseconds`. */
function sleep(durationMilliseconds) {
    return new Promise(resolve => setTimeout(resolve, durationMilliseconds));
}