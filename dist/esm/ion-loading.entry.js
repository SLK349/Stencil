import { r as registerInstance, d as createEvent, h, H as Host, e as getElement } from './index-a73b2c0c.js';
import { E as ENABLE_HTML_CONTENT_DEFAULT, s as sanitizeDOMString } from './config-d2670022.js';
import { b as raf } from './helpers-5a2c111a.js';
import { c as createLockController } from './lock-controller-6e56849c.js';
import { c as createDelegateController, a as createTriggerController, B as BACKDROP, p as prepareOverlay, s as setOverlayId, b as present, d as dismiss, e as eventMethod } from './overlays-5d1ecbb1.js';
import { g as getClassMap } from './theme-6bada181.js';
import { c as config, g as getIonMode } from './ionic-global-fc593e4d.js';
import { c as createAnimation } from './animation-45b3e295.js';
import './index-51ff1772.js';
import './hardware-back-button-853efc3d.js';
import './framework-delegate-b07d7318.js';
import './gesture-controller-a0857859.js';
import './index-93ceac82.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * iOS Loading Enter Animation
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
    wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' },
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * iOS Loading Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = createAnimation();
    const backdropAnimation = createAnimation();
    const wrapperAnimation = createAnimation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' },
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Md Loading Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
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
    wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' },
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Md Loading Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = createAnimation();
    const backdropAnimation = createAnimation();
    const wrapperAnimation = createAnimation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' },
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const loadingIosCss = ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports (backdrop-filter: blur(0)){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}";
const IonLoadingIosStyle0 = loadingIosCss;

const loadingMdCss = ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}";
const IonLoadingMdStyle0 = loadingMdCss;

const Loading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.didPresent = createEvent(this, "ionLoadingDidPresent", 7);
        this.willPresent = createEvent(this, "ionLoadingWillPresent", 7);
        this.willDismiss = createEvent(this, "ionLoadingWillDismiss", 7);
        this.didDismiss = createEvent(this, "ionLoadingDidDismiss", 7);
        this.didPresentShorthand = createEvent(this, "didPresent", 7);
        this.willPresentShorthand = createEvent(this, "willPresent", 7);
        this.willDismissShorthand = createEvent(this, "willDismiss", 7);
        this.didDismissShorthand = createEvent(this, "didDismiss", 7);
        this.delegateController = createDelegateController(this);
        this.lockController = createLockController();
        this.triggerController = createTriggerController();
        this.customHTMLEnabled = config.get('innerHTMLTemplatesEnabled', ENABLE_HTML_CONTENT_DEFAULT);
        this.presented = false;
        this.onBackdropTap = () => {
            this.dismiss(undefined, BACKDROP);
        };
        this.overlayIndex = undefined;
        this.delegate = undefined;
        this.hasController = false;
        this.keyboardClose = true;
        this.enterAnimation = undefined;
        this.leaveAnimation = undefined;
        this.message = undefined;
        this.cssClass = undefined;
        this.duration = 0;
        this.backdropDismiss = false;
        this.showBackdrop = true;
        this.spinner = undefined;
        this.translucent = false;
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
    componentWillLoad() {
        if (this.spinner === undefined) {
            const mode = getIonMode(this);
            this.spinner = config.get('loadingSpinner', config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
        setOverlayId(this.el);
    }
    componentDidLoad() {
        /**
         * If loading indicator was rendered with isOpen="true"
         * then we should open loading indicator immediately.
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
    disconnectedCallback() {
        this.triggerController.removeClickListener();
    }
    /**
     * Present the loading overlay after it has been created.
     */
    async present() {
        const unlock = await this.lockController.lock();
        await this.delegateController.attachViewToDom();
        await present(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration + 10);
        }
        unlock();
    }
    /**
     * Dismiss the loading overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     *
     * This is a no-op if the overlay has not been presented yet. If you want
     * to remove an overlay from the DOM that was never presented, use the
     * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
     */
    async dismiss(data, role) {
        const unlock = await this.lockController.lock();
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        const dismissed = await dismiss(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
        if (dismissed) {
            this.delegateController.removeViewFromDom();
        }
        unlock();
        return dismissed;
    }
    /**
     * Returns a promise that resolves when the loading did dismiss.
     */
    onDidDismiss() {
        return eventMethod(this.el, 'ionLoadingDidDismiss');
    }
    /**
     * Returns a promise that resolves when the loading will dismiss.
     */
    onWillDismiss() {
        return eventMethod(this.el, 'ionLoadingWillDismiss');
    }
    renderLoadingMessage(msgId) {
        const { customHTMLEnabled, message } = this;
        if (customHTMLEnabled) {
            return h("div", { class: "loading-content", id: msgId, innerHTML: sanitizeDOMString(message) });
        }
        return (h("div", { class: "loading-content", id: msgId }, message));
    }
    render() {
        const { message, spinner, htmlAttributes, overlayIndex } = this;
        const mode = getIonMode(this);
        const msgId = `loading-${overlayIndex}-msg`;
        /**
         * If the message is defined, use that as the label.
         * Otherwise, don't set aria-labelledby.
         */
        const ariaLabelledBy = message !== undefined ? msgId : null;
        return (h(Host, Object.assign({ key: 'f48fc35c38f3c200f39a44f3e741c1676057248e', role: "dialog", "aria-modal": "true", "aria-labelledby": ariaLabelledBy, tabindex: "-1" }, htmlAttributes, { style: {
                zIndex: `${40000 + this.overlayIndex}`,
            }, onIonBackdropTap: this.onBackdropTap, class: Object.assign(Object.assign({}, getClassMap(this.cssClass)), { [mode]: true, 'overlay-hidden': true, 'loading-translucent': this.translucent }) }), h("ion-backdrop", { key: 'e46058f693235c8ce5474df167595f6a80e4559d', visible: this.showBackdrop, tappable: this.backdropDismiss }), h("div", { key: '2ecd77581a2f130616033b8a78fb9da9d508b588', tabindex: "0" }), h("div", { key: '0243f93c41684f30c81623a8fbb533fd8f17b679', class: "loading-wrapper ion-overlay-wrapper" }, spinner && (h("div", { key: '0643bc42b6e691580d29af27ea5a9fe395a6c5ce', class: "loading-spinner" }, h("ion-spinner", { key: 'f0417802dfbcad6ab9903b84bad692eedd326c88', name: spinner, "aria-hidden": "true" }))), message !== undefined && this.renderLoadingMessage(msgId)), h("div", { key: '3d3a256fe1074bda91cd09212460aa6460c4c723', tabindex: "0" })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "isOpen": ["onIsOpenChange"],
        "trigger": ["triggerChanged"]
    }; }
};
Loading.style = {
    ios: IonLoadingIosStyle0,
    md: IonLoadingMdStyle0
};

export { Loading as ion_loading };

//# sourceMappingURL=ion-loading.entry.js.map