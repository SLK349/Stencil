import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-53634f3f.js';
import { h as hasShadowDom, i as inheritAriaAttributes } from './p-4e0d3630.js';
import { p as printIonWarning } from './p-bd6f674d.js';
import { o as openURL, c as createColorClasses, h as hostContext } from './p-100c2286.js';
import { g as getIonMode } from './p-7ff156a4.js';
import { d as defineCustomElement$1 } from './p-7dc0645e.js';

const buttonIosCss = ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:flex;position:relative;align-items:center;width:100%;height:100%;min-height:inherit;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;box-sizing:border-box;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #004acd);--background-focused:var(--ion-color-primary-shade, #004acd);--background-hover:var(--ion-color-primary-tint, #1a65eb);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #0054e9);--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.125em, 60px);min-height:clamp(30px, 2.125em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 1.125em, 43.02px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(12.1394px, 1.308125em, 40.1856px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 0.9em, 43.056px)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}";
const IonButtonIosStyle0 = buttonIosCss;

const buttonMdCss = ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:flex;position:relative;align-items:center;width:100%;height:100%;min-height:inherit;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;box-sizing:border-box;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-strong){font-weight:bold}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.86em, 60px);min-height:clamp(30px, 2.86em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.104px, 1.6em, 43.008px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(13.002px, 1.23125em, 40.385px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.008px, 1.4em, 43.008px)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-background, var(--color));color:var(--ion-toolbar-color, var(--background), var(--ion-color-primary-contrast, #fff))}";
const IonButtonMdStyle0 = buttonMdCss;

const Button = /*@__PURE__*/ proxyCustomElement(class Button extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.ionFocus = createEvent(this, "ionFocus", 7);
        this.ionBlur = createEvent(this, "ionBlur", 7);
        this.inItem = false;
        this.inListHeader = false;
        this.inToolbar = false;
        this.formButtonEl = null;
        this.formEl = null;
        this.inheritedAttributes = {};
        this.handleClick = (ev) => {
            const { el } = this;
            if (this.type === 'button') {
                openURL(this.href, ev, this.routerDirection, this.routerAnimation);
            }
            else if (hasShadowDom(el)) {
                this.submitForm(ev);
            }
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.slotChanged = () => {
            /**
             * Ensures that the 'has-icon-only' class is properly added
             * or removed from `ion-button` when manipulating the
             * `icon-only` slot.
             *
             * Without this, the 'has-icon-only' class is only checked
             * or added when `ion-button` component first renders.
             */
            this.isCircle = this.hasIconOnly;
        };
        this.isCircle = false;
        this.color = undefined;
        this.buttonType = 'button';
        this.disabled = false;
        this.expand = undefined;
        this.fill = undefined;
        this.routerDirection = 'forward';
        this.routerAnimation = undefined;
        this.download = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.shape = undefined;
        this.size = undefined;
        this.strong = false;
        this.target = undefined;
        this.type = 'button';
        this.form = undefined;
    }
    disabledChanged() {
        const { disabled } = this;
        if (this.formButtonEl) {
            this.formButtonEl.disabled = disabled;
        }
    }
    /**
     * This is responsible for rendering a hidden native
     * button element inside the associated form. This allows
     * users to submit a form by pressing "Enter" when a text
     * field inside of the form is focused. The native button
     * rendered inside of `ion-button` is in the Shadow DOM
     * and therefore does not participate in form submission
     * which is why the following code is necessary.
     */
    renderHiddenButton() {
        const formEl = (this.formEl = this.findForm());
        if (formEl) {
            const { formButtonEl } = this;
            /**
             * If the form already has a rendered form button
             * then do not append a new one again.
             */
            if (formButtonEl !== null && formEl.contains(formButtonEl)) {
                return;
            }
            // Create a hidden native button inside of the form
            const newFormButtonEl = (this.formButtonEl = document.createElement('button'));
            newFormButtonEl.type = this.type;
            newFormButtonEl.style.display = 'none';
            // Only submit if the button is not disabled.
            newFormButtonEl.disabled = this.disabled;
            formEl.appendChild(newFormButtonEl);
        }
    }
    componentWillLoad() {
        this.inToolbar = !!this.el.closest('ion-buttons');
        this.inListHeader = !!this.el.closest('ion-list-header');
        this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
        this.inheritedAttributes = inheritAriaAttributes(this.el);
    }
    get hasIconOnly() {
        return !!this.el.querySelector('[slot="icon-only"]');
    }
    get rippleType() {
        const hasClearFill = this.fill === undefined || this.fill === 'clear';
        // If the button is in a toolbar, has a clear fill (which is the default)
        // and only has an icon we use the unbounded "circular" ripple effect
        if (hasClearFill && this.hasIconOnly && this.inToolbar) {
            return 'unbounded';
        }
        return 'bounded';
    }
    /**
     * Finds the form element based on the provided `form` selector
     * or element reference provided.
     */
    findForm() {
        const { form } = this;
        if (form instanceof HTMLFormElement) {
            return form;
        }
        if (typeof form === 'string') {
            // Check if the string provided is a form id.
            const el = document.getElementById(form);
            if (el) {
                if (el instanceof HTMLFormElement) {
                    return el;
                }
                else {
                    /**
                     * The developer specified a string for the form attribute, but the
                     * element with that id is not a form element.
                     */
                    printIonWarning(`Form with selector: "#${form}" could not be found. Verify that the id is attached to a <form> element.`, this.el);
                    return null;
                }
            }
            else {
                /**
                 * The developer specified a string for the form attribute, but the
                 * element with that id could not be found in the DOM.
                 */
                printIonWarning(`Form with selector: "#${form}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`, this.el);
                return null;
            }
        }
        if (form !== undefined) {
            /**
             * The developer specified a HTMLElement for the form attribute,
             * but the element is not a HTMLFormElement.
             * This will also catch if the developer tries to pass in null
             * as the form attribute.
             */
            printIonWarning(`The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.`, this.el);
            return null;
        }
        /**
         * If the form element is not set, the button may be inside
         * of a form element. Query the closest form element to the button.
         */
        return this.el.closest('form');
    }
    submitForm(ev) {
        // this button wants to specifically submit a form
        // climb up the dom to see if we're in a <form>
        // and if so, then use JS to submit it
        if (this.formEl && this.formButtonEl) {
            ev.preventDefault();
            this.formButtonEl.click();
        }
    }
    render() {
        const mode = getIonMode(this);
        const { buttonType, type, disabled, rel, target, size, href, color, expand, hasIconOnly, shape, strong, inheritedAttributes, } = this;
        const finalSize = size === undefined && this.inItem ? 'small' : size;
        const TagType = href === undefined ? 'button' : 'a';
        const attrs = TagType === 'button'
            ? { type }
            : {
                download: this.download,
                href,
                rel,
                target,
            };
        let fill = this.fill;
        /**
         * We check both undefined and null to
         * work around https://github.com/ionic-team/stencil/issues/3586.
         */
        if (fill == null) {
            fill = this.inToolbar || this.inListHeader ? 'clear' : 'solid';
        }
        /**
         * We call renderHiddenButton in the render function to account
         * for any properties being set async. For example, changing the
         * "type" prop from "button" to "submit" after the component has
         * loaded would warrant the hidden button being added to the
         * associated form.
         */
        {
            type !== 'button' && this.renderHiddenButton();
        }
        return (h(Host, { key: '8f3a0363d46ef888d22b0b0812c70cb4f79e6efa', onClick: this.handleClick, "aria-disabled": disabled ? 'true' : null, class: createColorClasses(color, {
                [mode]: true,
                [buttonType]: true,
                [`${buttonType}-${expand}`]: expand !== undefined,
                [`${buttonType}-${finalSize}`]: finalSize !== undefined,
                [`${buttonType}-${shape}`]: shape !== undefined,
                [`${buttonType}-${fill}`]: true,
                [`${buttonType}-strong`]: strong,
                'in-toolbar': hostContext('ion-toolbar', this.el),
                'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
                'in-buttons': hostContext('ion-buttons', this.el),
                'button-has-icon-only': hasIconOnly,
                'button-disabled': disabled,
                'ion-activatable': true,
                'ion-focusable': true,
            }) }, h(TagType, Object.assign({ key: 'a517c7d06aab15ad4c2a51b8ec224c1aeb4ed565' }, attrs, { class: "button-native", part: "native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), h("span", { key: '127c26dd97c0bf5097433df77df7313d59784899', class: "button-inner" }, h("slot", { key: '39d9a9cad8e1addbe63406062e555e05c2cb541b', name: "icon-only", onSlotchange: this.slotChanged }), h("slot", { key: 'cfdebdd89155c6c21eb80e51e06456a3a6d877e0', name: "start" }), h("slot", { key: 'eac497e0f97ab55baa834ae23155d89b0f7069c6' }), h("slot", { key: 'c99f7900f8856b32a0b4ac11092d461f5e9a1109', name: "end" })), mode === 'md' && h("ion-ripple-effect", { key: 'c681edb0480879fbd801575f2233f6e118898638', type: this.rippleType }))));
    }
    get el() { return this; }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return {
        ios: IonButtonIosStyle0,
        md: IonButtonMdStyle0
    }; }
}, [33, "ion-button", {
        "color": [513],
        "buttonType": [1025, "button-type"],
        "disabled": [516],
        "expand": [513],
        "fill": [1537],
        "routerDirection": [1, "router-direction"],
        "routerAnimation": [16],
        "download": [1],
        "href": [1],
        "rel": [1],
        "shape": [513],
        "size": [513],
        "strong": [4],
        "target": [1],
        "type": [1],
        "form": [1],
        "isCircle": [32]
    }, undefined, {
        "disabled": ["disabledChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-button", "ion-ripple-effect"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Button);
            }
            break;
        case "ion-ripple-effect":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { Button as B, defineCustomElement as d };

//# sourceMappingURL=p-e1a21ad0.js.map