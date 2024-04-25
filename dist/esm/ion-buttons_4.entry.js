import { r as registerInstance, h, H as Host, d as createEvent, e as getElement } from './index-a73b2c0c.js';
import { g as getIonMode, a as isPlatform } from './ionic-global-fc593e4d.js';
import { g as getElementRoot, b as raf, d as inheritAttributes } from './helpers-5a2c111a.js';
import { d as doc } from './index-51ff1772.js';
import { a as hapticSelectionStart, b as hapticSelectionChanged, c as hapticSelectionEnd } from './haptic-70842af8.js';
import { c as createColorClasses } from './theme-6bada181.js';
import './capacitor-39b8ca8f.js';

const buttonsIosCss = ".sc-ion-buttons-ios-h{display:flex;align-items:center;transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-ios-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.65em;line-height:0.67}";
const IonButtonsIosStyle0 = buttonsIosCss;

const buttonsMdCss = ".sc-ion-buttons-md-h{display:flex;align-items:center;transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-md-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:3rem;height:3rem}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}";
const IonButtonsMdStyle0 = buttonsMdCss;

const Buttons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.collapse = false;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '4e5ce9abb3f56e8c91e3eb58c2819300e61eba24', class: {
                [mode]: true,
                ['buttons-collapse']: this.collapse,
            } }, h("slot", { key: 'f2f360ec888b6e946b512fed07431fab47c61482' })));
    }
};
Buttons.style = {
    ios: IonButtonsIosStyle0,
    md: IonButtonsMdStyle0
};

const pickerIosCss = ":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-after{background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-highlight{background:var(--highlight-background, var(--ion-color-step-150, var(--ion-background-color-step-150, #eeeeef)))}";
const IonPickerIosStyle0 = pickerIosCss;

const pickerMdCss = ":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}:host .picker-after{background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}";
const IonPickerMdStyle0 = pickerMdCss;

const Picker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionInputModeChange = createEvent(this, "ionInputModeChange", 7);
        this.useInputMode = false;
        this.isInHighlightBounds = (ev) => {
            const { highlightEl } = this;
            if (!highlightEl) {
                return false;
            }
            const bbox = highlightEl.getBoundingClientRect();
            /**
             * Check to see if the user clicked
             * outside the bounds of the highlight.
             */
            const outsideX = ev.clientX < bbox.left || ev.clientX > bbox.right;
            const outsideY = ev.clientY < bbox.top || ev.clientY > bbox.bottom;
            if (outsideX || outsideY) {
                return false;
            }
            return true;
        };
        /**
         * If we are no longer focused
         * on a picker column, then we should
         * exit input mode. An exception is made
         * for the input in the picker since having
         * that focused means we are still in input mode.
         */
        this.onFocusOut = (ev) => {
            // TODO(FW-2832): type
            const { relatedTarget } = ev;
            if (!relatedTarget || (relatedTarget.tagName !== 'ION-PICKER-COLUMN' && relatedTarget !== this.inputEl)) {
                this.exitInputMode();
            }
        };
        /**
         * When picker columns receive focus
         * the parent picker needs to determine
         * whether to enter/exit input mode.
         */
        this.onFocusIn = (ev) => {
            // TODO(FW-2832): type
            const { target } = ev;
            /**
             * Due to browser differences in how/when focus
             * is dispatched on certain elements, we need to
             * make sure that this function only ever runs when
             * focusing a picker column.
             */
            if (target.tagName !== 'ION-PICKER-COLUMN') {
                return;
            }
            /**
             * If we have actionOnClick
             * then this means the user focused
             * a picker column via mouse or
             * touch (i.e. a PointerEvent). As a result,
             * we should not enter/exit input mode
             * until the click event has fired, which happens
             * after the `focusin` event.
             *
             * Otherwise, the user likely focused
             * the column using their keyboard and
             * we should enter/exit input mode automatically.
             */
            if (!this.actionOnClick) {
                const columnEl = target;
                const allowInput = columnEl.numericInput;
                if (allowInput) {
                    this.enterInputMode(columnEl, false);
                }
                else {
                    this.exitInputMode();
                }
            }
        };
        /**
         * On click we need to run an actionOnClick
         * function that has been set in onPointerDown
         * so that we enter/exit input mode correctly.
         */
        this.onClick = () => {
            const { actionOnClick } = this;
            if (actionOnClick) {
                actionOnClick();
                this.actionOnClick = undefined;
            }
        };
        /**
         * Clicking a column also focuses the column on
         * certain browsers, so we use onPointerDown
         * to tell the onFocusIn function that users
         * are trying to click the column rather than
         * focus the column using the keyboard. When the
         * user completes the click, the onClick function
         * runs and runs the actionOnClick callback.
         */
        this.onPointerDown = (ev) => {
            const { useInputMode, inputModeColumn, el } = this;
            if (this.isInHighlightBounds(ev)) {
                /**
                 * If we were already in
                 * input mode, then we should determine
                 * if we tapped a particular column and
                 * should switch to input mode for
                 * that specific column.
                 */
                if (useInputMode) {
                    /**
                     * If we tapped a picker column
                     * then we should either switch to input
                     * mode for that column or all columns.
                     * Otherwise we should exit input mode
                     * since we just tapped the highlight and
                     * not a column.
                     */
                    if (ev.target.tagName === 'ION-PICKER-COLUMN') {
                        /**
                         * If user taps 2 different columns
                         * then we should just switch to input mode
                         * for the new column rather than switching to
                         * input mode for all columns.
                         */
                        if (inputModeColumn && inputModeColumn === ev.target) {
                            this.actionOnClick = () => {
                                this.enterInputMode();
                            };
                        }
                        else {
                            this.actionOnClick = () => {
                                this.enterInputMode(ev.target);
                            };
                        }
                    }
                    else {
                        this.actionOnClick = () => {
                            this.exitInputMode();
                        };
                    }
                    /**
                     * If we were not already in
                     * input mode, then we should
                     * enter input mode for all columns.
                     */
                }
                else {
                    /**
                     * If there is only 1 numeric input column
                     * then we should skip multi column input.
                     */
                    const columns = el.querySelectorAll('ion-picker-column.picker-column-numeric-input');
                    const columnEl = columns.length === 1 ? ev.target : undefined;
                    this.actionOnClick = () => {
                        this.enterInputMode(columnEl);
                    };
                }
                return;
            }
            this.actionOnClick = () => {
                this.exitInputMode();
            };
        };
        /**
         * Enters input mode to allow
         * for text entry of numeric values.
         * If on mobile, we focus a hidden input
         * field so that the on screen keyboard
         * is brought up. When tabbing using a
         * keyboard, picker columns receive an outline
         * to indicate they are focused. As a result,
         * we should not focus the hidden input as it
         * would cause the outline to go away, preventing
         * users from having any visual indication of which
         * column is focused.
         */
        this.enterInputMode = (columnEl, focusInput = true) => {
            const { inputEl, el } = this;
            if (!inputEl) {
                return;
            }
            /**
             * Only active input mode if there is at
             * least one column that accepts numeric input.
             */
            const hasInputColumn = el.querySelector('ion-picker-column.picker-column-numeric-input');
            if (!hasInputColumn) {
                return;
            }
            /**
             * If columnEl is undefined then
             * it is assumed that all numeric pickers
             * are eligible for text entry.
             * (i.e. hour and minute columns)
             */
            this.useInputMode = true;
            this.inputModeColumn = columnEl;
            /**
             * Users with a keyboard and mouse can
             * activate input mode where the input is
             * focused as well as when it is not focused,
             * so we need to make sure we clean up any
             * old listeners.
             */
            if (focusInput) {
                if (this.destroyKeypressListener) {
                    this.destroyKeypressListener();
                    this.destroyKeypressListener = undefined;
                }
                inputEl.focus();
            }
            else {
                // TODO FW-5900 Use keydown instead
                el.addEventListener('keypress', this.onKeyPress);
                this.destroyKeypressListener = () => {
                    el.removeEventListener('keypress', this.onKeyPress);
                };
            }
            this.emitInputModeChange();
        };
        this.onKeyPress = (ev) => {
            const { inputEl } = this;
            if (!inputEl) {
                return;
            }
            const parsedValue = parseInt(ev.key, 10);
            /**
             * Only numbers should be allowed
             */
            if (!Number.isNaN(parsedValue)) {
                inputEl.value += ev.key;
                this.onInputChange();
            }
        };
        this.selectSingleColumn = () => {
            const { inputEl, inputModeColumn, singleColumnSearchTimeout } = this;
            if (!inputEl || !inputModeColumn) {
                return;
            }
            const options = Array.from(inputModeColumn.querySelectorAll('ion-picker-column-option')).filter((el) => el.disabled !== true);
            /**
             * If users pause for a bit, the search
             * value should be reset similar to how a
             * <select> behaves. So typing "34", waiting,
             * then typing "5" should select "05".
             */
            if (singleColumnSearchTimeout) {
                clearTimeout(singleColumnSearchTimeout);
            }
            this.singleColumnSearchTimeout = setTimeout(() => {
                inputEl.value = '';
                this.singleColumnSearchTimeout = undefined;
            }, 1000);
            /**
             * For values that are longer than 2 digits long
             * we should shift the value over 1 character
             * to the left. So typing "456" would result in "56".
             * TODO: If we want to support more than just
             * time entry, we should update this value to be
             * the max length of all of the picker items.
             */
            if (inputEl.value.length >= 3) {
                const startIndex = inputEl.value.length - 2;
                const newString = inputEl.value.substring(startIndex);
                inputEl.value = newString;
                this.selectSingleColumn();
                return;
            }
            /**
             * Checking the value of the input gets priority
             * first. For example, if the value of the input
             * is "1" and we entered "2", then the complete value
             * is "12" and we should select hour 12.
             *
             * Regex removes any leading zeros from values like "02",
             * but it keeps a single zero if there are only zeros in the string.
             * 0+(?=[1-9]) --> Match 1 or more zeros that are followed by 1-9
             * 0+(?=0$) --> Match 1 or more zeros that must be followed by one 0 and end.
             */
            const findItemFromCompleteValue = options.find(({ textContent }) => {
                /**
                 * Keyboard entry is currently only used inside of Datetime
                 * where we guarantee textContent is set.
                 * If we end up exposing this feature publicly we should revisit this assumption.
                 */
                const parsedText = textContent.replace(/^0+(?=[1-9])|0+(?=0$)/, '');
                return parsedText === inputEl.value;
            });
            if (findItemFromCompleteValue) {
                inputModeColumn.setValue(findItemFromCompleteValue.value);
                return;
            }
            /**
             * If we typed "56" to get minute 56, then typed "7",
             * we should select "07" as "567" is not a valid minute.
             */
            if (inputEl.value.length === 2) {
                const changedCharacter = inputEl.value.substring(inputEl.value.length - 1);
                inputEl.value = changedCharacter;
                this.selectSingleColumn();
            }
        };
        /**
         * Searches a list of column items for a particular
         * value. This is currently used for numeric values.
         * The zeroBehavior can be set to account for leading
         * or trailing zeros when looking at the item text.
         */
        this.searchColumn = (colEl, value, zeroBehavior = 'start') => {
            const behavior = zeroBehavior === 'start' ? /^0+/ : /0$/;
            const option = Array.from(colEl.querySelectorAll('ion-picker-column-option')).find((el) => {
                return el.disabled !== true && el.textContent.replace(behavior, '') === value;
            });
            if (option) {
                colEl.setValue(option.value);
            }
        };
        this.selectMultiColumn = () => {
            const { inputEl, el } = this;
            if (!inputEl) {
                return;
            }
            const numericPickers = Array.from(el.querySelectorAll('ion-picker-column')).filter((col) => col.numericInput);
            const firstColumn = numericPickers[0];
            const lastColumn = numericPickers[1];
            let value = inputEl.value;
            let minuteValue;
            switch (value.length) {
                case 1:
                    this.searchColumn(firstColumn, value);
                    break;
                case 2:
                    /**
                     * If the first character is `0` or `1` it is
                     * possible that users are trying to type `09`
                     * or `11` into the hour field, so we should look
                     * at that first.
                     */
                    const firstCharacter = inputEl.value.substring(0, 1);
                    value = firstCharacter === '0' || firstCharacter === '1' ? inputEl.value : firstCharacter;
                    this.searchColumn(firstColumn, value);
                    /**
                     * If only checked the first value,
                     * we can check the second value
                     * for a match in the minutes column
                     */
                    if (value.length === 1) {
                        minuteValue = inputEl.value.substring(inputEl.value.length - 1);
                        this.searchColumn(lastColumn, minuteValue, 'end');
                    }
                    break;
                case 3:
                    /**
                     * If the first character is `0` or `1` it is
                     * possible that users are trying to type `09`
                     * or `11` into the hour field, so we should look
                     * at that first.
                     */
                    const firstCharacterAgain = inputEl.value.substring(0, 1);
                    value =
                        firstCharacterAgain === '0' || firstCharacterAgain === '1'
                            ? inputEl.value.substring(0, 2)
                            : firstCharacterAgain;
                    this.searchColumn(firstColumn, value);
                    /**
                     * If only checked the first value,
                     * we can check the second value
                     * for a match in the minutes column
                     */
                    minuteValue = value.length === 1 ? inputEl.value.substring(1) : inputEl.value.substring(2);
                    this.searchColumn(lastColumn, minuteValue, 'end');
                    break;
                case 4:
                    /**
                     * If the first character is `0` or `1` it is
                     * possible that users are trying to type `09`
                     * or `11` into the hour field, so we should look
                     * at that first.
                     */
                    const firstCharacterAgainAgain = inputEl.value.substring(0, 1);
                    value =
                        firstCharacterAgainAgain === '0' || firstCharacterAgainAgain === '1'
                            ? inputEl.value.substring(0, 2)
                            : firstCharacterAgainAgain;
                    this.searchColumn(firstColumn, value);
                    /**
                     * If only checked the first value,
                     * we can check the second value
                     * for a match in the minutes column
                     */
                    const minuteValueAgain = value.length === 1
                        ? inputEl.value.substring(1, inputEl.value.length)
                        : inputEl.value.substring(2, inputEl.value.length);
                    this.searchColumn(lastColumn, minuteValueAgain, 'end');
                    break;
                default:
                    const startIndex = inputEl.value.length - 4;
                    const newString = inputEl.value.substring(startIndex);
                    inputEl.value = newString;
                    this.selectMultiColumn();
                    break;
            }
        };
        /**
         * Searches the value of the active column
         * to determine which value users are trying
         * to select
         */
        this.onInputChange = () => {
            const { useInputMode, inputEl, inputModeColumn } = this;
            if (!useInputMode || !inputEl) {
                return;
            }
            if (inputModeColumn) {
                this.selectSingleColumn();
            }
            else {
                this.selectMultiColumn();
            }
        };
        /**
         * Emit ionInputModeChange. Picker columns
         * listen for this event to determine whether
         * or not their column is "active" for text input.
         */
        this.emitInputModeChange = () => {
            const { useInputMode, inputModeColumn } = this;
            this.ionInputModeChange.emit({
                useInputMode,
                inputModeColumn,
            });
        };
    }
    /**
     * When the picker is interacted with
     * we need to prevent touchstart so other
     * gestures do not fire. For example,
     * scrolling on the wheel picker
     * in ion-datetime should not cause
     * a card modal to swipe to close.
     */
    preventTouchStartPropagation(ev) {
        ev.stopPropagation();
    }
    componentWillLoad() {
        getElementRoot(this.el).addEventListener('focusin', this.onFocusIn);
        getElementRoot(this.el).addEventListener('focusout', this.onFocusOut);
    }
    /**
     * @internal
     * Exits text entry mode for the picker
     * This method blurs the hidden input
     * and cause the keyboard to dismiss.
     */
    async exitInputMode() {
        const { inputEl, useInputMode } = this;
        if (!useInputMode || !inputEl) {
            return;
        }
        this.useInputMode = false;
        this.inputModeColumn = undefined;
        inputEl.blur();
        inputEl.value = '';
        if (this.destroyKeypressListener) {
            this.destroyKeypressListener();
            this.destroyKeypressListener = undefined;
        }
        this.emitInputModeChange();
    }
    render() {
        return (h(Host, { key: 'f92214a09dc85b65873676f40fde2b802960e704', onPointerDown: (ev) => this.onPointerDown(ev), onClick: () => this.onClick() }, h("input", { key: '6da37f75aca4ea1c9cb3bc733ebda2116279f313', "aria-hidden": "true", tabindex: -1, inputmode: "numeric", type: "number", onKeyDown: (ev) => {
                var _a;
                /**
                 * The "Enter" key represents
                 * the user submitting their time
                 * selection, so we should blur the
                 * input (and therefore close the keyboard)
                 *
                 * Updating the picker's state to no longer
                 * be in input mode is handled in the onBlur
                 * callback below.
                 */
                if (ev.key === 'Enter') {
                    (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.blur();
                }
            }, ref: (el) => (this.inputEl = el), onInput: () => this.onInputChange(), onBlur: () => this.exitInputMode() }), h("div", { key: '298e99d83dd3f5bf2798150bab0bb4024af472fa', class: "picker-before" }), h("div", { key: 'ea578f04eb562a4dc6d6cc92de133dcb9fb7f42a', class: "picker-after" }), h("div", { key: '84567824956dfe967992a629904836ba8b75b3ec', class: "picker-highlight", ref: (el) => (this.highlightEl = el) }), h("slot", { key: 'df81f8fb90e1f649b608328034528f5c31c70c3b' })));
    }
    get el() { return getElement(this); }
};
Picker.style = {
    ios: IonPickerIosStyle0,
    md: IonPickerMdStyle0
};

const pickerColumnCss = ":host{display:flex;align-items:center;justify-content:center;max-width:100%;height:200px;font-size:22px;text-align:center}.picker-opts{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-width:26px;max-height:200px;outline:none;text-align:inherit;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none}.picker-item-empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.picker-opts::-webkit-scrollbar{display:none}::slotted(ion-picker-column-option){display:block;scroll-snap-align:center}.picker-item-empty,:host(:not([disabled])) ::slotted(ion-picker-column-option.option-disabled){scroll-snap-align:none}::slotted([slot=prefix]),::slotted([slot=suffix]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}::slotted([slot=prefix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;justify-content:end}::slotted([slot=suffix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;justify-content:start}:host(.picker-column-disabled) .picker-opts{overflow-y:hidden}:host(.picker-column-disabled) ::slotted(ion-picker-column-option){cursor:default;opacity:0.4;pointer-events:none}@media (any-hover: hover){:host(:focus) .picker-opts{outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}";
const IonPickerColumnStyle0 = pickerColumnCss;

const PickerColumn = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionChange = createEvent(this, "ionChange", 7);
        this.isScrolling = false;
        this.isColumnVisible = false;
        this.canExitInputMode = true;
        this.centerPickerItemInView = (target, smooth = true, canExitInputMode = true) => {
            const { isColumnVisible, scrollEl } = this;
            if (isColumnVisible && scrollEl) {
                // (Vertical offset from parent) - (three empty picker rows) + (half the height of the target to ensure the scroll triggers)
                const top = target.offsetTop - 3 * target.clientHeight + target.clientHeight / 2;
                if (scrollEl.scrollTop !== top) {
                    /**
                     * Setting this flag prevents input
                     * mode from exiting in the picker column's
                     * scroll callback. This is useful when the user manually
                     * taps an item or types on the keyboard as both
                     * of these can cause a scroll to occur.
                     */
                    this.canExitInputMode = canExitInputMode;
                    scrollEl.scroll({
                        top,
                        left: 0,
                        behavior: smooth ? 'smooth' : undefined,
                    });
                }
            }
        };
        this.setPickerItemActiveState = (item, isActive) => {
            if (isActive) {
                item.classList.add(PICKER_ITEM_ACTIVE_CLASS);
            }
            else {
                item.classList.remove(PICKER_ITEM_ACTIVE_CLASS);
            }
        };
        /**
         * When ionInputModeChange is emitted, each column
         * needs to check if it is the one being made available
         * for text entry.
         */
        this.inputModeChange = (ev) => {
            if (!this.numericInput) {
                return;
            }
            const { useInputMode, inputModeColumn } = ev.detail;
            /**
             * If inputModeColumn is undefined then this means
             * all numericInput columns are being selected.
             */
            const isColumnActive = inputModeColumn === undefined || inputModeColumn === this.el;
            if (!useInputMode || !isColumnActive) {
                this.setInputModeActive(false);
                return;
            }
            this.setInputModeActive(true);
        };
        /**
         * Setting isActive will cause a re-render.
         * As a result, we do not want to cause the
         * re-render mid scroll as this will cause
         * the picker column to jump back to
         * whatever value was selected at the
         * start of the scroll interaction.
         */
        this.setInputModeActive = (state) => {
            if (this.isScrolling) {
                this.scrollEndCallback = () => {
                    this.isActive = state;
                };
                return;
            }
            this.isActive = state;
        };
        /**
         * When the column scrolls, the component
         * needs to determine which item is centered
         * in the view and will emit an ionChange with
         * the item object.
         */
        this.initializeScrollListener = () => {
            /**
             * The haptics for the wheel picker are
             * an iOS-only feature. As a result, they should
             * be disabled on Android.
             */
            const enableHaptics = isPlatform('ios');
            const { el, scrollEl } = this;
            let timeout;
            let activeEl = this.activeItem;
            const scrollCallback = () => {
                raf(() => {
                    if (!scrollEl)
                        return;
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = undefined;
                    }
                    if (!this.isScrolling) {
                        enableHaptics && hapticSelectionStart();
                        this.isScrolling = true;
                    }
                    /**
                     * Select item in the center of the column
                     * which is the month/year that we want to select
                     */
                    const bbox = scrollEl.getBoundingClientRect();
                    const centerX = bbox.x + bbox.width / 2;
                    const centerY = bbox.y + bbox.height / 2;
                    /**
                     * elementFromPoint returns the top-most element.
                     * This means that if an ion-backdrop is overlaying the
                     * picker then the appropriate picker column option will
                     * not be selected. To account for this, we use elementsFromPoint
                     * and use an Array.find to find the appropriate column option
                     * at that point.
                     *
                     * Additionally, the picker column could be used in the
                     * Shadow DOM (i.e. in ion-datetime) so we need to make
                     * sure we are choosing the correct host otherwise
                     * the elements returns by elementsFromPoint will be
                     * retargeted. To account for this, we check to see
                     * if the picker column has a parent shadow root. If
                     * so, we use that shadow root when doing elementsFromPoint.
                     * Otherwise, we just use the document.
                     */
                    const rootNode = el.getRootNode();
                    const hasParentShadow = rootNode instanceof ShadowRoot;
                    const referenceNode = hasParentShadow ? rootNode : doc;
                    /**
                     * If the reference node is undefined
                     * then it's likely that doc is undefined
                     * due to being in an SSR environment.
                     */
                    if (referenceNode === undefined) {
                        return;
                    }
                    const elementsAtPoint = referenceNode.elementsFromPoint(centerX, centerY);
                    /**
                     * elementsFromPoint can returns multiple elements
                     * so find the relevant picker column option if one exists.
                     */
                    const newActiveElement = elementsAtPoint.find((el) => el.tagName === 'ION-PICKER-COLUMN-OPTION');
                    if (activeEl !== undefined) {
                        this.setPickerItemActiveState(activeEl, false);
                    }
                    if (newActiveElement === undefined || newActiveElement.disabled) {
                        return;
                    }
                    /**
                     * If we are selecting a new value,
                     * we need to run haptics again.
                     */
                    if (newActiveElement !== activeEl) {
                        enableHaptics && hapticSelectionChanged();
                        if (this.canExitInputMode) {
                            /**
                             * The native iOS wheel picker
                             * only dismisses the keyboard
                             * once the selected item has changed
                             * as a result of a swipe
                             * from the user. If `canExitInputMode` is
                             * `false` then this means that the
                             * scroll is happening as a result of
                             * the `value` property programmatically changing
                             * either by an application or by the user via the keyboard.
                             */
                            this.exitInputMode();
                        }
                    }
                    activeEl = newActiveElement;
                    this.setPickerItemActiveState(newActiveElement, true);
                    timeout = setTimeout(() => {
                        this.isScrolling = false;
                        enableHaptics && hapticSelectionEnd();
                        /**
                         * Certain tasks (such as those that
                         * cause re-renders) should only be done
                         * once scrolling has finished, otherwise
                         * flickering may occur.
                         */
                        const { scrollEndCallback } = this;
                        if (scrollEndCallback) {
                            scrollEndCallback();
                            this.scrollEndCallback = undefined;
                        }
                        /**
                         * Reset this flag as the
                         * next scroll interaction could
                         * be a scroll from the user. In this
                         * case, we should exit input mode.
                         */
                        this.canExitInputMode = true;
                        this.setValue(newActiveElement.value);
                    }, 250);
                });
            };
            /**
             * Wrap this in an raf so that the scroll callback
             * does not fire when component is initially shown.
             */
            raf(() => {
                if (!scrollEl)
                    return;
                scrollEl.addEventListener('scroll', scrollCallback);
                this.destroyScrollListener = () => {
                    scrollEl.removeEventListener('scroll', scrollCallback);
                };
            });
        };
        /**
         * Tells the parent picker to
         * exit text entry mode. This is only called
         * when the selected item changes during scroll, so
         * we know that the user likely wants to scroll
         * instead of type.
         */
        this.exitInputMode = () => {
            const { parentEl } = this;
            if (parentEl == null)
                return;
            parentEl.exitInputMode();
            /**
             * setInputModeActive only takes
             * effect once scrolling stops to avoid
             * a component re-render while scrolling.
             * However, we want the visual active
             * indicator to go away immediately, so
             * we call classList.remove here.
             */
            this.el.classList.remove('picker-column-active');
        };
        this.isActive = false;
        this.disabled = false;
        this.value = undefined;
        this.color = 'primary';
        this.numericInput = false;
    }
    valueChange() {
        if (this.isColumnVisible) {
            /**
             * Only scroll the active item into view when the picker column
             * is actively visible to the user.
             */
            this.scrollActiveItemIntoView(true);
        }
    }
    /**
     * Only setup scroll listeners
     * when the picker is visible, otherwise
     * the container will have a scroll
     * height of 0px.
     */
    componentWillLoad() {
        /**
         * We cache parentEl in a local variable
         * so we don't need to keep accessing
         * the class variable (which comes with
         * a small performance hit)
         */
        const parentEl = (this.parentEl = this.el.closest('ion-picker'));
        const visibleCallback = (entries) => {
            /**
             * Browsers will sometimes group multiple IO events into a single callback.
             * As a result, we want to grab the last/most recent event in case there are multiple events.
             */
            const ev = entries[entries.length - 1];
            if (ev.isIntersecting) {
                const { activeItem, el } = this;
                this.isColumnVisible = true;
                /**
                 * Because this initial call to scrollActiveItemIntoView has to fire before
                 * the scroll listener is set up, we need to manage the active class manually.
                 */
                const oldActive = getElementRoot(el).querySelector(`.${PICKER_ITEM_ACTIVE_CLASS}`);
                if (oldActive) {
                    this.setPickerItemActiveState(oldActive, false);
                }
                this.scrollActiveItemIntoView();
                if (activeItem) {
                    this.setPickerItemActiveState(activeItem, true);
                }
                this.initializeScrollListener();
            }
            else {
                this.isColumnVisible = false;
                if (this.destroyScrollListener) {
                    this.destroyScrollListener();
                    this.destroyScrollListener = undefined;
                }
            }
        };
        /**
         * Set the root to be the parent picker element
         * This causes the IO callback
         * to be fired in WebKit as soon as the element
         * is visible. If we used the default root value
         * then WebKit would only fire the IO callback
         * after any animations (such as a modal transition)
         * finished, and there would potentially be a flicker.
         */
        new IntersectionObserver(visibleCallback, { threshold: 0.001, root: this.parentEl }).observe(this.el);
        if (parentEl !== null) {
            // TODO(FW-2832): type
            parentEl.addEventListener('ionInputModeChange', (ev) => this.inputModeChange(ev));
        }
    }
    componentDidRender() {
        const { el, activeItem, isColumnVisible, value } = this;
        if (isColumnVisible && !activeItem) {
            const firstOption = el.querySelector('ion-picker-column-option');
            /**
             * If the picker column does not have an active item and the current value
             * does not match the first item in the picker column, that means
             * the value is out of bounds. In this case, we assign the value to the
             * first item to match the scroll position of the column.
             *
             */
            if (firstOption !== null && firstOption.value !== value) {
                this.setValue(firstOption.value);
            }
        }
    }
    /** @internal  */
    async scrollActiveItemIntoView(smooth = false) {
        const activeEl = this.activeItem;
        if (activeEl) {
            this.centerPickerItemInView(activeEl, smooth, false);
        }
    }
    /**
     * Sets the value prop and fires the ionChange event.
     * This is used when we need to fire ionChange from
     * user-generated events that cannot be caught with normal
     * input/change event listeners.
     * @internal
     */
    async setValue(value) {
        if (this.disabled === true || this.value === value) {
            return;
        }
        this.value = value;
        this.ionChange.emit({ value });
    }
    /**
     * Sets focus on the scrollable container within the picker column.
     * Use this method instead of the global `pickerColumn.focus()`.
     */
    async setFocus() {
        if (this.scrollEl) {
            this.scrollEl.focus();
        }
    }
    get activeItem() {
        const { value } = this;
        const options = Array.from(this.el.querySelectorAll('ion-picker-column-option'));
        return options.find((option) => {
            /**
             * If the whole picker column is disabled, the current value should appear active
             * If the current value item is specifically disabled, it should not appear active
             */
            if (!this.disabled && option.disabled) {
                return false;
            }
            return option.value === value;
        });
    }
    render() {
        const { color, disabled, isActive, numericInput } = this;
        const mode = getIonMode(this);
        return (h(Host, { key: '59648ef23cef1ab6d30955bb95bc23e670ec7256', class: createColorClasses(color, {
                [mode]: true,
                ['picker-column-active']: isActive,
                ['picker-column-numeric-input']: numericInput,
                ['picker-column-disabled']: disabled,
            }) }, h("slot", { key: 'fd93192d4945b2c33e0fe93cc90b505f2cec12fc', name: "prefix" }), h("div", { key: '99e49c6d58badd2fe5e75f0ebcd4bc00eb50aa58', class: "picker-opts", tabindex: disabled ? undefined : 0, ref: (el) => {
                this.scrollEl = el;
            } }, h("div", { key: 'bb44892ef179b25373e45e4b4bc4d1fa617b1ea1', class: "picker-item-empty", "aria-hidden": "true" }, "\u00A0"), h("div", { key: '9ee7aeb8468bbb03f7192d56849dae089b7a0250', class: "picker-item-empty", "aria-hidden": "true" }, "\u00A0"), h("div", { key: '0baa4bda4bf02a8d06dbf3392b1516ca8ea8d26a', class: "picker-item-empty", "aria-hidden": "true" }, "\u00A0"), h("slot", { key: 'ff4cad20fd82ab66599473f60d10c18dc1dc76d8' }), h("div", { key: '04dcb0390209081e6223b90e45b8f2ef0fdf94bd', class: "picker-item-empty", "aria-hidden": "true" }, "\u00A0"), h("div", { key: '734e3b431a30ce93957e1452516efc86e29ff9c9', class: "picker-item-empty", "aria-hidden": "true" }, "\u00A0"), h("div", { key: '1c68dcf9a029e607bb6bc9c19cd02214914eb6d7', class: "picker-item-empty", "aria-hidden": "true" }, "\u00A0")), h("slot", { key: 'd85210cc99c8c1bf83eb1cd51540ebe875d4adeb', name: "suffix" })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueChange"]
    }; }
};
const PICKER_ITEM_ACTIVE_CLASS = 'option-active';
PickerColumn.style = IonPickerColumnStyle0;

const pickerColumnOptionIosCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}";
const IonPickerColumnOptionIosStyle0 = pickerColumnOptionIosCss;

const pickerColumnOptionMdCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}";
const IonPickerColumnOptionMdStyle0 = pickerColumnOptionMdCss;

const PickerColumnOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * We keep track of the parent picker column
         * so we can update the value of it when
         * clicking an enable option.
         */
        this.pickerColumn = null;
        this.ariaLabel = null;
        this.disabled = false;
        this.value = undefined;
        this.color = 'primary';
    }
    /**
     * The aria-label of the option has changed after the
     * first render and needs to be updated within the component.
     *
     * @param ariaLbl The new aria-label value.
     */
    onAriaLabelChange(ariaLbl) {
        this.ariaLabel = ariaLbl;
    }
    componentWillLoad() {
        const inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
        /**
         * The initial value of `aria-label` needs to be set for
         * the first render.
    
         */
        this.ariaLabel = inheritedAttributes['aria-label'] || null;
    }
    connectedCallback() {
        this.pickerColumn = this.el.closest('ion-picker-column');
    }
    disconnectedCallback() {
        this.pickerColumn = null;
    }
    /**
     * The column options can load at any time
     * so the options needs to tell the
     * parent picker column when it is loaded
     * so the picker column can ensure it is
     * centered in the view.
     *
     * We intentionally run this for every
     * option. If we only ran this from
     * the selected option then if the newly
     * loaded options were not selected then
     * scrollActiveItemIntoView would not be called.
     */
    componentDidLoad() {
        const { pickerColumn } = this;
        if (pickerColumn !== null) {
            pickerColumn.scrollActiveItemIntoView();
        }
    }
    /**
     * When an option is clicked, update the
     * parent picker column value. This
     * component will handle centering the option
     * in the column view.
     */
    onClick() {
        const { pickerColumn } = this;
        if (pickerColumn !== null) {
            pickerColumn.setValue(this.value);
        }
    }
    render() {
        const { color, disabled, ariaLabel } = this;
        const mode = getIonMode(this);
        return (h(Host, { key: 'c743c6ef44bb9f765cc15b3b5d2864de6520203a', class: createColorClasses(color, {
                [mode]: true,
                ['option-disabled']: disabled,
            }) }, h("button", { key: '4c3d9eb245c52b2c007f727e145cfb55759bd7a9', tabindex: "-1", "aria-label": ariaLabel, disabled: disabled, onClick: () => this.onClick() }, h("slot", { key: '4c907d2187cbe9d5941e27f2b12578e2b7271461' }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "aria-label": ["onAriaLabelChange"]
    }; }
};
PickerColumnOption.style = {
    ios: IonPickerColumnOptionIosStyle0,
    md: IonPickerColumnOptionMdStyle0
};

export { Buttons as ion_buttons, Picker as ion_picker, PickerColumn as ion_picker_column, PickerColumnOption as ion_picker_column_option };

//# sourceMappingURL=ion-buttons_4.entry.js.map