import { r as registerInstance, d as createEvent, h, H as Host, e as getElement } from './index-a73b2c0c.js';
import { b as raf } from './helpers-5a2c111a.js';
import { c as createLockController } from './lock-controller-6e56849c.js';
import { p as printIonWarning } from './index-93ceac82.js';
import { c as createDelegateController, a as createTriggerController, B as BACKDROP, i as isCancel, p as prepareOverlay, s as setOverlayId, b as present, d as dismiss, e as eventMethod, j as safeCall } from './overlays-5d1ecbb1.js';
import { g as getClassMap } from './theme-6bada181.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';
import { c as createAnimation } from './animation-45b3e295.js';
import './index-51ff1772.js';
import './hardware-back-button-853efc3d.js';
import './framework-delegate-b07d7318.js';
import './gesture-controller-a0857859.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * iOS Picker Enter Animation
 */
const iosEnterAnimation = (baseEl) => {
    const baseAnimation = createAnimation();
    const backdropAnimation = createAnimation();
    const wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none',
    })
        .afterClearStyles(['pointer-events']);
    wrapperAnimation
        .addElement(baseEl.querySelector('.picker-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * iOS Picker Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = createAnimation();
    const backdropAnimation = createAnimation();
    const wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.01);
    wrapperAnimation
        .addElement(baseEl.querySelector('.picker-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const pickerIosCss = ".sc-ion-picker-legacy-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;user-select:none;z-index:1001}.sc-ion-picker-legacy-ios-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-ios-h{display:none}.picker-wrapper.sc-ion-picker-legacy-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-ios:active,.picker-button.sc-ion-picker-legacy-ios:focus{outline:none}.picker-columns.sc-ion-picker-legacy-ios{display:flex;position:relative;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-ios,.picker-below-highlight.sc-ion-picker-legacy-ios{display:none;pointer-events:none}.sc-ion-picker-legacy-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-ios{display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-legacy-ios{flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-legacy-ios:last-child .picker-button.sc-ion-picker-legacy-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-legacy-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-legacy-ios,.picker-button.ion-activated.sc-ion-picker-legacy-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:16px}.picker-columns.sc-ion-picker-legacy-ios{height:215px;perspective:1000px}.picker-above-highlight.sc-ion-picker-legacy-ios{top:0;transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-ios{top:115px;transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}";
const IonPickerLegacyIosStyle0 = pickerIosCss;

const pickerMdCss = ".sc-ion-picker-legacy-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;user-select:none;z-index:1001}.sc-ion-picker-legacy-md-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-md-h{display:none}.picker-wrapper.sc-ion-picker-legacy-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-md:active,.picker-button.sc-ion-picker-legacy-md:focus{outline:none}.picker-columns.sc-ion-picker-legacy-md{display:flex;position:relative;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-md,.picker-below-highlight.sc-ion-picker-legacy-md{display:none;pointer-events:none}.sc-ion-picker-legacy-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-md{display:flex;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-legacy-md,.picker-button.ion-activated.sc-ion-picker-legacy-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:14px;font-weight:500;text-transform:uppercase;box-shadow:none}.picker-columns.sc-ion-picker-legacy-md{height:216px;perspective:1800px}.picker-above-highlight.sc-ion-picker-legacy-md{top:0;transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-md{top:115px;transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}";
const IonPickerLegacyMdStyle0 = pickerMdCss;

const Picker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.didPresent = createEvent(this, "ionPickerDidPresent", 7);
        this.willPresent = createEvent(this, "ionPickerWillPresent", 7);
        this.willDismiss = createEvent(this, "ionPickerWillDismiss", 7);
        this.didDismiss = createEvent(this, "ionPickerDidDismiss", 7);
        this.didPresentShorthand = createEvent(this, "didPresent", 7);
        this.willPresentShorthand = createEvent(this, "willPresent", 7);
        this.willDismissShorthand = createEvent(this, "willDismiss", 7);
        this.didDismissShorthand = createEvent(this, "didDismiss", 7);
        this.delegateController = createDelegateController(this);
        this.lockController = createLockController();
        this.triggerController = createTriggerController();
        this.onBackdropTap = () => {
            this.dismiss(undefined, BACKDROP);
        };
        this.dispatchCancelHandler = (ev) => {
            const role = ev.detail.role;
            if (isCancel(role)) {
                const cancelButton = this.buttons.find((b) => b.role === 'cancel');
                this.callButtonHandler(cancelButton);
            }
        };
        this.presented = false;
        this.overlayIndex = undefined;
        this.delegate = undefined;
        this.hasController = false;
        this.keyboardClose = true;
        this.enterAnimation = undefined;
        this.leaveAnimation = undefined;
        this.buttons = [];
        this.columns = [];
        this.cssClass = undefined;
        this.duration = 0;
        this.showBackdrop = true;
        this.backdropDismiss = true;
        this.animated = true;
        this.htmlAttributes = undefined;
        this.isOpen = false;
        this.trigger = undefined;
    }
    onIsOpenChange(newValue, oldValue) {
        if (newValue === true && oldValue === false) {
            this.present();
        }
        else if (newValue === false && oldValue === true) {
            this.dismiss();
        }
    }
    triggerChanged() {
        const { trigger, el, triggerController } = this;
        if (trigger) {
            triggerController.addClickListener(el, trigger);
        }
    }
    connectedCallback() {
        prepareOverlay(this.el);
        this.triggerChanged();
    }
    disconnectedCallback() {
        this.triggerController.removeClickListener();
    }
    componentWillLoad() {
        setOverlayId(this.el);
    }
    componentDidLoad() {
        printIonWarning('ion-picker-legacy and ion-picker-legacy-column have been deprecated in favor of new versions of the ion-picker and ion-picker-column components. These new components display inline with your page content allowing for more presentation flexibility than before.', this.el);
        /**
         * If picker was rendered with isOpen="true"
         * then we should open picker immediately.
         */
        if (this.isOpen === true) {
            raf(() => this.present());
        }
        /**
         * When binding values in frameworks such as Angular
         * it is possible for the value to be set after the Web Component
         * initializes but before the value watcher is set up in Stencil.
         * As a result, the watcher callback may not be fired.
         * We work around this by manually calling the watcher
         * callback when the component has loaded and the watcher
         * is configured.
         */
        this.triggerChanged();
    }
    /**
     * Present the picker overlay after it has been created.
     */
    async present() {
        const unlock = await this.lockController.lock();
        await this.delegateController.attachViewToDom();
        await present(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
        }
        unlock();
    }
    /**
     * Dismiss the picker overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    async dismiss(data, role) {
        const unlock = await this.lockController.lock();
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        const dismissed = await dismiss(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
        if (dismissed) {
            this.delegateController.removeViewFromDom();
        }
        unlock();
        return dismissed;
    }
    /**
     * Returns a promise that resolves when the picker did dismiss.
     */
    onDidDismiss() {
        return eventMethod(this.el, 'ionPickerDidDismiss');
    }
    /**
     * Returns a promise that resolves when the picker will dismiss.
     */
    onWillDismiss() {
        return eventMethod(this.el, 'ionPickerWillDismiss');
    }
    /**
     * Get the column that matches the specified name.
     *
     * @param name The name of the column.
     */
    getColumn(name) {
        return Promise.resolve(this.columns.find((column) => column.name === name));
    }
    async buttonClick(button) {
        const role = button.role;
        if (isCancel(role)) {
            return this.dismiss(undefined, role);
        }
        const shouldDismiss = await this.callButtonHandler(button);
        if (shouldDismiss) {
            return this.dismiss(this.getSelected(), button.role);
        }
        return Promise.resolve();
    }
    async callButtonHandler(button) {
        if (button) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            const rtn = await safeCall(button.handler, this.getSelected());
            if (rtn === false) {
                // if the return value of the handler is false then do not dismiss
                return false;
            }
        }
        return true;
    }
    getSelected() {
        const selected = {};
        this.columns.forEach((col, index) => {
            const selectedColumn = col.selectedIndex !== undefined ? col.options[col.selectedIndex] : undefined;
            selected[col.name] = {
                text: selectedColumn ? selectedColumn.text : undefined,
                value: selectedColumn ? selectedColumn.value : undefined,
                columnIndex: index,
            };
        });
        return selected;
    }
    render() {
        const { htmlAttributes } = this;
        const mode = getIonMode(this);
        return (h(Host, Object.assign({ key: 'cb1495acc8842c00e9f51ae792a01f769e36b0c6', "aria-modal": "true", tabindex: "-1" }, htmlAttributes, { style: {
                zIndex: `${20000 + this.overlayIndex}`,
            }, class: Object.assign({ [mode]: true,
                // Used internally for styling
                [`picker-${mode}`]: true, 'overlay-hidden': true }, getClassMap(this.cssClass)), onIonBackdropTap: this.onBackdropTap, onIonPickerWillDismiss: this.dispatchCancelHandler }), h("ion-backdrop", { key: 'eecbcdfd474f5ab2f9962a030b1dcbf7714fe938', visible: this.showBackdrop, tappable: this.backdropDismiss }), h("div", { key: '262e1d3bc916b30068f7be1edbc73283a815fc0f', tabindex: "0" }), h("div", { key: 'a036cf789ab768428aae26a19dbd0c5cb696188c', class: "picker-wrapper ion-overlay-wrapper", role: "dialog" }, h("div", { key: '6be7a8986976ead39611ce398ed6ad71f3b7427e', class: "picker-toolbar" }, this.buttons.map((b) => (h("div", { class: buttonWrapperClass(b) }, h("button", { type: "button", onClick: () => this.buttonClick(b), class: buttonClass(b) }, b.text))))), h("div", { key: '66a1d99aebf48219cab4177d06d893fe1d458a1f', class: "picker-columns" }, h("div", { key: 'ed7fd940c5f54453587e13ab52cbfd4122a397c6', class: "picker-above-highlight" }), this.presented && this.columns.map((c) => h("ion-picker-legacy-column", { col: c })), h("div", { key: '21c491c08bce126dde03196b21e28d903e157e1f', class: "picker-below-highlight" }))), h("div", { key: 'bd892f74b886ae1bfd010d687a2b9741213b246c', tabindex: "0" })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "isOpen": ["onIsOpenChange"],
        "trigger": ["triggerChanged"]
    }; }
};
const buttonWrapperClass = (button) => {
    return {
        [`picker-toolbar-${button.role}`]: button.role !== undefined,
        'picker-toolbar-button': true,
    };
};
const buttonClass = (button) => {
    return Object.assign({ 'picker-button': true, 'ion-activatable': true }, getClassMap(button.cssClass));
};
Picker.style = {
    ios: IonPickerLegacyIosStyle0,
    md: IonPickerLegacyMdStyle0
};

export { Picker as ion_picker_legacy };

//# sourceMappingURL=ion-picker-legacy.entry.js.map