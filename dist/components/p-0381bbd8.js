import { p as proxyCustomElement, H, d as createEvent, f as forceUpdate, h, c as Host } from './p-53634f3f.js';
import { E as ENABLE_HTML_CONTENT_DEFAULT, s as sanitizeDOMString } from './p-9fb36e10.js';
import { c as createButtonActiveGesture } from './p-1f401935.js';
import { r as raf } from './p-4e0d3630.js';
import { c as createLockController } from './p-25ec5224.js';
import { c as createDelegateController, a as createTriggerController, B as BACKDROP, i as isCancel, b as prepareOverlay, f as setOverlayId, p as present, d as dismiss, e as eventMethod, s as safeCall } from './p-697238e7.js';
import { g as getClassMap } from './p-100c2286.js';
import { c as config, g as getIonMode } from './p-7ff156a4.js';
import { c as createAnimation } from './p-1fd4aad1.js';
import { d as defineCustomElement$2 } from './p-06097879.js';
import { d as defineCustomElement$1 } from './p-7dc0645e.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * iOS Alert Enter Animation
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
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).keyframes([
        { offset: 0, opacity: '0.01', transform: 'scale(1.1)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' },
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
 * iOS Alert Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = createAnimation();
    const backdropAnimation = createAnimation();
    const wrapperAnimation = createAnimation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).keyframes([
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
 * Md Alert Enter Animation
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
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).keyframes([
        { offset: 0, opacity: '0.01', transform: 'scale(0.9)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' },
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Md Alert Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = createAnimation();
    const backdropAnimation = createAnimation();
    const wrapperAnimation = createAnimation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const alertIosCss = ".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:flex;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-label.sc-ion-alert-ios,.alert-radio-label.sc-ion-alert-ios{overflow-wrap:anywhere}@media (any-pointer: coarse){.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:flex;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{flex-direction:column;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:0.875rem;line-height:1.25rem;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.alert-button-inner.sc-ion-alert-ios{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;appearance:none;contain:content}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:clamp(270px, 16.875rem, 324px);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:max(14px, 0.875rem)}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;box-shadow:none;overflow:hidden}.alert-button.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{pointer-events:none}@supports (backdrop-filter: blur(0)){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:7px;text-align:center}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:max(17px, 1.0625rem);font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));font-size:max(14px, 0.875rem)}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:max(13px, 0.8125rem);text-align:center}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:7px;margin-top:10px;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:7px;padding-bottom:7px;border:0.55px solid var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf));background-color:var(--ion-background-color, #fff);appearance:none;font-size:1rem}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-input.sc-ion-alert-ios::-webkit-date-and-time-value{height:18px}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{min-height:44px}.alert-radio-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;flex:1;order:0;color:var(--ion-text-color, #000)}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #0054e9)}.alert-radio-icon.sc-ion-alert-ios{position:relative;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{top:-7px;position:absolute;width:6px;height:12px;transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{inset-inline-start:7px}.alert-checkbox-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;flex:1;color:var(--ion-text-color, #000)}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px;margin-top:10px;margin-bottom:10px;position:relative;width:min(1.375rem, 55.836px);height:min(1.375rem, 55.836px);border-width:0.125rem;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #0054e9);background-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{top:calc(min(1.375rem, 55.836px) / 8);position:absolute;width:calc(min(1.375rem, 55.836px) / 6 + 1px);height:calc(min(1.375rem, 55.836px) * 0.5);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{inset-inline-start:calc(min(1.375rem, 55.836px) / 3)}.alert-button-group.sc-ion-alert-ios{-webkit-margin-end:-0.55px;margin-inline-end:-0.55px;flex-wrap:wrap}.alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios{border-right:none}[dir=rtl].sc-ion-alert-ios-h .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:none}[dir=rtl].sc-ion-alert-ios .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:none}@supports selector(:dir(rtl)){.alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:none}}.alert-button.sc-ion-alert-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;flex:1 1 auto;min-width:50%;height:max(44px, 2.75rem);border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #0054e9);font-size:max(17px, 1.0625rem);overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:first-child:dir(rtl){border-right:0}}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}.alert-button-role-destructive.sc-ion-alert-ios,.alert-button-role-destructive.ion-activated.sc-ion-alert-ios,.alert-button-role-destructive.ion-focused.sc-ion-alert-ios{color:var(--ion-color-danger, #c5000f)}";
const IonAlertIosStyle0 = alertIosCss;

const alertMdCss = ".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:flex;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-label.sc-ion-alert-md,.alert-radio-label.sc-ion-alert-md{overflow-wrap:anywhere}@media (any-pointer: coarse){.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:flex;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{flex-direction:column;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:0.875rem;line-height:1.25rem;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.alert-button-inner.sc-ion-alert-md{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;appearance:none;contain:content}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:0.875rem}.alert-wrapper.sc-ion-alert-md{border-radius:4px;box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px;padding-top:20px;padding-bottom:15px;text-align:start}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:1.25rem;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:1rem}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.alert-message.sc-ion-alert-md{font-size:1rem}@media screen and (max-width: 767px){.alert-message.sc-ion-alert-md{max-height:266px}}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #0054e9)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;border-top:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));border-bottom:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));overflow:auto}@media screen and (max-width: 767px){.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{max-height:266px}}.alert-tappable.sc-ion-alert-md{position:relative;min-height:48px}.alert-radio-label.sc-ion-alert-md{-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;flex:1;color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:1rem}.alert-radio-icon.sc-ion-alert-md{top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, var(--ion-background-color-step-550, #737373))}.alert-radio-icon.sc-ion-alert-md{inset-inline-start:26px}.alert-radio-inner.sc-ion-alert-md{top:3px;border-radius:50%;position:absolute;width:10px;height:10px;transform:scale3d(0, 0, 0);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #0054e9)}.alert-radio-inner.sc-ion-alert-md{inset-inline-start:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626))}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;flex:1;width:calc(100% - 53px);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:1rem}.alert-checkbox-icon.sc-ion-alert-md{top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, var(--ion-background-color-step-550, #737373));contain:strict}.alert-checkbox-icon.sc-ion-alert-md{inset-inline-start:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #0054e9);background-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{top:0;position:absolute;width:6px;height:10px;transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{inset-inline-start:3px}.alert-button-group.sc-ion-alert-md{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;box-sizing:border-box;flex-wrap:wrap-reverse;justify-content:flex-end}.alert-button.sc-ion-alert-md{border-radius:2px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #0054e9);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}.alert-button-inner.sc-ion-alert-md{justify-content:flex-end}@media screen and (min-width: 768px){.sc-ion-alert-md-h{--max-width:min(100vw - 96px, 560px);--max-height:min(100vh - 96px, 560px)}}";
const IonAlertMdStyle0 = alertMdCss;

const Alert = /*@__PURE__*/ proxyCustomElement(class Alert extends H {
    constructor() {
        super();
        this.__registerHost();
        this.didPresent = createEvent(this, "ionAlertDidPresent", 7);
        this.willPresent = createEvent(this, "ionAlertWillPresent", 7);
        this.willDismiss = createEvent(this, "ionAlertWillDismiss", 7);
        this.didDismiss = createEvent(this, "ionAlertDidDismiss", 7);
        this.didPresentShorthand = createEvent(this, "didPresent", 7);
        this.willPresentShorthand = createEvent(this, "willPresent", 7);
        this.willDismissShorthand = createEvent(this, "willDismiss", 7);
        this.didDismissShorthand = createEvent(this, "didDismiss", 7);
        this.delegateController = createDelegateController(this);
        this.lockController = createLockController();
        this.triggerController = createTriggerController();
        this.customHTMLEnabled = config.get('innerHTMLTemplatesEnabled', ENABLE_HTML_CONTENT_DEFAULT);
        this.processedInputs = [];
        this.processedButtons = [];
        this.presented = false;
        this.onBackdropTap = () => {
            this.dismiss(undefined, BACKDROP);
        };
        this.dispatchCancelHandler = (ev) => {
            const role = ev.detail.role;
            if (isCancel(role)) {
                const cancelButton = this.processedButtons.find((b) => b.role === 'cancel');
                this.callButtonHandler(cancelButton);
            }
        };
        this.overlayIndex = undefined;
        this.delegate = undefined;
        this.hasController = false;
        this.keyboardClose = true;
        this.enterAnimation = undefined;
        this.leaveAnimation = undefined;
        this.cssClass = undefined;
        this.header = undefined;
        this.subHeader = undefined;
        this.message = undefined;
        this.buttons = [];
        this.inputs = [];
        this.backdropDismiss = true;
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
    onKeydown(ev) {
        const inputTypes = new Set(this.processedInputs.map((i) => i.type));
        /**
         * Based on keyboard navigation requirements, the
         * checkbox should not respond to the enter keydown event.
         */
        if (inputTypes.has('checkbox') && ev.key === 'Enter') {
            ev.preventDefault();
            return;
        }
        // The only inputs we want to navigate between using arrow keys are the radios
        // ignore the keydown event if it is not on a radio button
        if (!inputTypes.has('radio') ||
            (ev.target && !this.el.contains(ev.target)) ||
            ev.target.classList.contains('alert-button')) {
            return;
        }
        // Get all radios inside of the radio group and then
        // filter out disabled radios since we need to skip those
        const query = this.el.querySelectorAll('.alert-radio');
        const radios = Array.from(query).filter((radio) => !radio.disabled);
        // The focused radio is the one that shares the same id as
        // the event target
        const index = radios.findIndex((radio) => radio.id === ev.target.id);
        // We need to know what the next radio element should
        // be in order to change the focus
        let nextEl;
        // If hitting arrow down or arrow right, move to the next radio
        // If we're on the last radio, move to the first radio
        if (['ArrowDown', 'ArrowRight'].includes(ev.key)) {
            nextEl = index === radios.length - 1 ? radios[0] : radios[index + 1];
        }
        // If hitting arrow up or arrow left, move to the previous radio
        // If we're on the first radio, move to the last radio
        if (['ArrowUp', 'ArrowLeft'].includes(ev.key)) {
            nextEl = index === 0 ? radios[radios.length - 1] : radios[index - 1];
        }
        if (nextEl && radios.includes(nextEl)) {
            const nextProcessed = this.processedInputs.find((input) => input.id === (nextEl === null || nextEl === void 0 ? void 0 : nextEl.id));
            if (nextProcessed) {
                this.rbClick(nextProcessed);
                nextEl.focus();
            }
        }
    }
    buttonsChanged() {
        const buttons = this.buttons;
        this.processedButtons = buttons.map((btn) => {
            return typeof btn === 'string' ? { text: btn, role: btn.toLowerCase() === 'cancel' ? 'cancel' : undefined } : btn;
        });
    }
    inputsChanged() {
        const inputs = this.inputs;
        // Get the first input that is not disabled and the checked one
        // If an enabled checked input exists, set it to be the focusable input
        // otherwise we default to focus the first input
        // This will only be used when the input is type radio
        const first = inputs.find((input) => !input.disabled);
        const checked = inputs.find((input) => input.checked && !input.disabled);
        const focusable = checked || first;
        // An alert can be created with several different inputs. Radios,
        // checkboxes and inputs are all accepted, but they cannot be mixed.
        const inputTypes = new Set(inputs.map((i) => i.type));
        if (inputTypes.has('checkbox') && inputTypes.has('radio')) {
            console.warn(`Alert cannot mix input types: ${Array.from(inputTypes.values()).join('/')}. Please see alert docs for more info.`);
        }
        this.inputType = inputTypes.values().next().value;
        this.processedInputs = inputs.map((i, index) => {
            var _a;
            return ({
                type: i.type || 'text',
                name: i.name || `${index}`,
                placeholder: i.placeholder || '',
                value: i.value,
                label: i.label,
                checked: !!i.checked,
                disabled: !!i.disabled,
                id: i.id || `alert-input-${this.overlayIndex}-${index}`,
                handler: i.handler,
                min: i.min,
                max: i.max,
                cssClass: (_a = i.cssClass) !== null && _a !== void 0 ? _a : '',
                attributes: i.attributes || {},
                tabindex: i.type === 'radio' && i !== focusable ? -1 : 0,
            });
        });
    }
    connectedCallback() {
        prepareOverlay(this.el);
        this.triggerChanged();
    }
    componentWillLoad() {
        setOverlayId(this.el);
        this.inputsChanged();
        this.buttonsChanged();
    }
    disconnectedCallback() {
        this.triggerController.removeClickListener();
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    componentDidLoad() {
        /**
         * Only create gesture if:
         * 1. A gesture does not already exist
         * 2. App is running in iOS mode
         * 3. A wrapper ref exists
         */
        if (!this.gesture && getIonMode(this) === 'ios' && this.wrapperEl) {
            this.gesture = createButtonActiveGesture(this.wrapperEl, (refEl) => refEl.classList.contains('alert-button'));
            this.gesture.enable(true);
        }
        /**
         * If alert was rendered with isOpen="true"
         * then we should open alert immediately.
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
     * Present the alert overlay after it has been created.
     */
    async present() {
        const unlock = await this.lockController.lock();
        await this.delegateController.attachViewToDom();
        await present(this, 'alertEnter', iosEnterAnimation, mdEnterAnimation);
        unlock();
    }
    /**
     * Dismiss the alert overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     *
     * This is a no-op if the overlay has not been presented yet. If you want
     * to remove an overlay from the DOM that was never presented, use the
     * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
     */
    async dismiss(data, role) {
        const unlock = await this.lockController.lock();
        const dismissed = await dismiss(this, data, role, 'alertLeave', iosLeaveAnimation, mdLeaveAnimation);
        if (dismissed) {
            this.delegateController.removeViewFromDom();
        }
        unlock();
        return dismissed;
    }
    /**
     * Returns a promise that resolves when the alert did dismiss.
     */
    onDidDismiss() {
        return eventMethod(this.el, 'ionAlertDidDismiss');
    }
    /**
     * Returns a promise that resolves when the alert will dismiss.
     */
    onWillDismiss() {
        return eventMethod(this.el, 'ionAlertWillDismiss');
    }
    rbClick(selectedInput) {
        for (const input of this.processedInputs) {
            input.checked = input === selectedInput;
            input.tabindex = input === selectedInput ? 0 : -1;
        }
        this.activeId = selectedInput.id;
        safeCall(selectedInput.handler, selectedInput);
        forceUpdate(this);
    }
    cbClick(selectedInput) {
        selectedInput.checked = !selectedInput.checked;
        safeCall(selectedInput.handler, selectedInput);
        forceUpdate(this);
    }
    async buttonClick(button) {
        const role = button.role;
        const values = this.getValues();
        if (isCancel(role)) {
            return this.dismiss({ values }, role);
        }
        const returnData = await this.callButtonHandler(button, values);
        if (returnData !== false) {
            return this.dismiss(Object.assign({ values }, returnData), button.role);
        }
        return false;
    }
    async callButtonHandler(button, data) {
        if (button === null || button === void 0 ? void 0 : button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            const returnData = await safeCall(button.handler, data);
            if (returnData === false) {
                // if the return value of the handler is false then do not dismiss
                return false;
            }
            if (typeof returnData === 'object') {
                return returnData;
            }
        }
        return {};
    }
    getValues() {
        if (this.processedInputs.length === 0) {
            // this is an alert without any options/inputs at all
            return undefined;
        }
        if (this.inputType === 'radio') {
            // this is an alert with radio buttons (single value select)
            // return the one value which is checked, otherwise undefined
            const checkedInput = this.processedInputs.find((i) => !!i.checked);
            return checkedInput ? checkedInput.value : undefined;
        }
        if (this.inputType === 'checkbox') {
            // this is an alert with checkboxes (multiple value select)
            // return an array of all the checked values
            return this.processedInputs.filter((i) => i.checked).map((i) => i.value);
        }
        // this is an alert with text inputs
        // return an object of all the values with the input name as the key
        const values = {};
        this.processedInputs.forEach((i) => {
            values[i.name] = i.value || '';
        });
        return values;
    }
    renderAlertInputs() {
        switch (this.inputType) {
            case 'checkbox':
                return this.renderCheckbox();
            case 'radio':
                return this.renderRadio();
            default:
                return this.renderInput();
        }
    }
    renderCheckbox() {
        const inputs = this.processedInputs;
        const mode = getIonMode(this);
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-checkbox-group" }, inputs.map((i) => (h("button", { type: "button", onClick: () => this.cbClick(i), "aria-checked": `${i.checked}`, id: i.id, disabled: i.disabled, tabIndex: i.tabindex, role: "checkbox", class: Object.assign(Object.assign({}, getClassMap(i.cssClass)), { 'alert-tappable': true, 'alert-checkbox': true, 'alert-checkbox-button': true, 'ion-focusable': true, 'alert-checkbox-button-disabled': i.disabled || false }) }, h("div", { class: "alert-button-inner" }, h("div", { class: "alert-checkbox-icon" }, h("div", { class: "alert-checkbox-inner" })), h("div", { class: "alert-checkbox-label" }, i.label)), mode === 'md' && h("ion-ripple-effect", null))))));
    }
    renderRadio() {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-radio-group", role: "radiogroup", "aria-activedescendant": this.activeId }, inputs.map((i) => (h("button", { type: "button", onClick: () => this.rbClick(i), "aria-checked": `${i.checked}`, disabled: i.disabled, id: i.id, tabIndex: i.tabindex, class: Object.assign(Object.assign({}, getClassMap(i.cssClass)), { 'alert-radio-button': true, 'alert-tappable': true, 'alert-radio': true, 'ion-focusable': true, 'alert-radio-button-disabled': i.disabled || false }), role: "radio" }, h("div", { class: "alert-button-inner" }, h("div", { class: "alert-radio-icon" }, h("div", { class: "alert-radio-inner" })), h("div", { class: "alert-radio-label" }, i.label)))))));
    }
    renderInput() {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-input-group" }, inputs.map((i) => {
            var _a, _b, _c, _d;
            if (i.type === 'textarea') {
                return (h("div", { class: "alert-input-wrapper" }, h("textarea", Object.assign({ placeholder: i.placeholder, value: i.value, id: i.id, tabIndex: i.tabindex }, i.attributes, { disabled: (_b = (_a = i.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : i.disabled, class: inputClass(i), onInput: (e) => {
                        var _a;
                        i.value = e.target.value;
                        if ((_a = i.attributes) === null || _a === void 0 ? void 0 : _a.onInput) {
                            i.attributes.onInput(e);
                        }
                    } }))));
            }
            else {
                return (h("div", { class: "alert-input-wrapper" }, h("input", Object.assign({ placeholder: i.placeholder, type: i.type, min: i.min, max: i.max, value: i.value, id: i.id, tabIndex: i.tabindex }, i.attributes, { disabled: (_d = (_c = i.attributes) === null || _c === void 0 ? void 0 : _c.disabled) !== null && _d !== void 0 ? _d : i.disabled, class: inputClass(i), onInput: (e) => {
                        var _a;
                        i.value = e.target.value;
                        if ((_a = i.attributes) === null || _a === void 0 ? void 0 : _a.onInput) {
                            i.attributes.onInput(e);
                        }
                    } }))));
            }
        })));
    }
    renderAlertButtons() {
        const buttons = this.processedButtons;
        const mode = getIonMode(this);
        const alertButtonGroupClass = {
            'alert-button-group': true,
            'alert-button-group-vertical': buttons.length > 2,
        };
        return (h("div", { class: alertButtonGroupClass }, buttons.map((button) => (h("button", Object.assign({}, button.htmlAttributes, { type: "button", id: button.id, class: buttonClass(button), tabIndex: 0, onClick: () => this.buttonClick(button) }), h("span", { class: "alert-button-inner" }, button.text), mode === 'md' && h("ion-ripple-effect", null))))));
    }
    renderAlertMessage(msgId) {
        const { customHTMLEnabled, message } = this;
        if (customHTMLEnabled) {
            return h("div", { id: msgId, class: "alert-message", innerHTML: sanitizeDOMString(message) });
        }
        return (h("div", { id: msgId, class: "alert-message" }, message));
    }
    render() {
        const { overlayIndex, header, subHeader, message, htmlAttributes } = this;
        const mode = getIonMode(this);
        const hdrId = `alert-${overlayIndex}-hdr`;
        const subHdrId = `alert-${overlayIndex}-sub-hdr`;
        const msgId = `alert-${overlayIndex}-msg`;
        const role = this.inputs.length > 0 || this.buttons.length > 0 ? 'alertdialog' : 'alert';
        /**
         * If the header is defined, use that. Otherwise, fall back to the subHeader.
         * If neither is defined, don't set aria-labelledby.
         */
        const ariaLabelledBy = header ? hdrId : subHeader ? subHdrId : null;
        return (h(Host, Object.assign({ key: 'b1875ea565c40a25915e26e61864f8c61d840ccc', role: role, "aria-modal": "true", "aria-labelledby": ariaLabelledBy, "aria-describedby": message !== undefined ? msgId : null, tabindex: "-1" }, htmlAttributes, { style: {
                zIndex: `${20000 + overlayIndex}`,
            }, class: Object.assign(Object.assign({}, getClassMap(this.cssClass)), { [mode]: true, 'overlay-hidden': true, 'alert-translucent': this.translucent }), onIonAlertWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }), h("ion-backdrop", { key: '37d9d7d1a47bfa23c3bb8d8d9805f52a5bbedf61', tappable: this.backdropDismiss }), h("div", { key: '0134cc90b7f02dcdd13dfdc39a72f2259182de90', tabindex: "0" }), h("div", { key: 'ed054b063ec2d1847b3234d5bdf3e66054784ed7', class: "alert-wrapper ion-overlay-wrapper", ref: (el) => (this.wrapperEl = el) }, h("div", { key: 'fb81befae081424f03c64b434ffdd79bb1b00d0c', class: "alert-head" }, header && (h("h2", { key: '92596dfdd92c4f63c82ed86b4a2473b3110daae3', id: hdrId, class: "alert-title" }, header)), subHeader && (h("h2", { key: 'ba7a0734cf818224f453604ec638770ca61bfef6', id: subHdrId, class: "alert-sub-title" }, subHeader))), this.renderAlertMessage(msgId), this.renderAlertInputs(), this.renderAlertButtons()), h("div", { key: '41a2619836a4af5d158216ef14b49985c7941b78', tabindex: "0" })));
    }
    get el() { return this; }
    static get watchers() { return {
        "isOpen": ["onIsOpenChange"],
        "trigger": ["triggerChanged"],
        "buttons": ["buttonsChanged"],
        "inputs": ["inputsChanged"]
    }; }
    static get style() { return {
        ios: IonAlertIosStyle0,
        md: IonAlertMdStyle0
    }; }
}, [34, "ion-alert", {
        "overlayIndex": [2, "overlay-index"],
        "delegate": [16],
        "hasController": [4, "has-controller"],
        "keyboardClose": [4, "keyboard-close"],
        "enterAnimation": [16],
        "leaveAnimation": [16],
        "cssClass": [1, "css-class"],
        "header": [1],
        "subHeader": [1, "sub-header"],
        "message": [1],
        "buttons": [16],
        "inputs": [1040],
        "backdropDismiss": [4, "backdrop-dismiss"],
        "translucent": [4],
        "animated": [4],
        "htmlAttributes": [16],
        "isOpen": [4, "is-open"],
        "trigger": [1],
        "present": [64],
        "dismiss": [64],
        "onDidDismiss": [64],
        "onWillDismiss": [64]
    }, [[4, "keydown", "onKeydown"]], {
        "isOpen": ["onIsOpenChange"],
        "trigger": ["triggerChanged"],
        "buttons": ["buttonsChanged"],
        "inputs": ["inputsChanged"]
    }]);
const inputClass = (input) => {
    var _a, _b, _c;
    return Object.assign(Object.assign({ 'alert-input': true, 'alert-input-disabled': ((_b = (_a = input.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : input.disabled) || false }, getClassMap(input.cssClass)), getClassMap(input.attributes ? (_c = input.attributes.class) === null || _c === void 0 ? void 0 : _c.toString() : ''));
};
const buttonClass = (button) => {
    return Object.assign({ 'alert-button': true, 'ion-focusable': true, 'ion-activatable': true, [`alert-button-role-${button.role}`]: button.role !== undefined }, getClassMap(button.cssClass));
};
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-alert", "ion-backdrop", "ion-ripple-effect"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Alert);
            }
            break;
        case "ion-backdrop":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
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

export { Alert as A, defineCustomElement as d };

//# sourceMappingURL=p-0381bbd8.js.map