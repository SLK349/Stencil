'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const hardwareBackButton = require('./hardware-back-button-e87df2c5.js');
const index$1 = require('./index-7d4ba1aa.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');
require('./index-a370c7e1.js');

const appCss = "html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
const IonAppStyle0 = appCss;

const App = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        {
            rIC(async () => {
                const isHybrid = ionicGlobal.isPlatform(window, 'hybrid');
                if (!ionicGlobal.config.getBoolean('_testing')) {
                    Promise.resolve().then(function () { return require('./index-ad73340e.js'); }).then((module) => module.startTapClick(ionicGlobal.config));
                }
                if (ionicGlobal.config.getBoolean('statusTap', isHybrid)) {
                    Promise.resolve().then(function () { return require('./status-tap-9141c1d7.js'); }).then((module) => module.startStatusTap());
                }
                if (ionicGlobal.config.getBoolean('inputShims', needInputShims())) {
                    /**
                     * needInputShims() ensures that only iOS and Android
                     * platforms proceed into this block.
                     */
                    const platform = ionicGlobal.isPlatform(window, 'ios') ? 'ios' : 'android';
                    Promise.resolve().then(function () { return require('./input-shims-741ac2de.js'); }).then((module) => module.startInputShims(ionicGlobal.config, platform));
                }
                const hardwareBackButtonModule = await Promise.resolve().then(function () { return require('./hardware-back-button-e87df2c5.js'); });
                const supportsHardwareBackButtonEvents = isHybrid || hardwareBackButton.shouldUseCloseWatcher();
                if (ionicGlobal.config.getBoolean('hardwareBackButton', supportsHardwareBackButtonEvents)) {
                    hardwareBackButtonModule.startHardwareBackButton();
                }
                else {
                    /**
                     * If an app sets hardwareBackButton: false and experimentalCloseWatcher: true
                     * then the close watcher will not be used.
                     */
                    if (hardwareBackButton.shouldUseCloseWatcher()) {
                        index$1.printIonWarning('experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used.');
                    }
                    hardwareBackButtonModule.blockHardwareBackButton();
                }
                if (typeof window !== 'undefined') {
                    Promise.resolve().then(function () { return require('./keyboard-3a5e6b23.js'); }).then((module) => module.startKeyboardAssist(window));
                }
                Promise.resolve().then(function () { return require('./focus-visible-e882cff3.js'); }).then((module) => (this.focusVisible = module.startFocusVisible()));
            });
        }
    }
    /**
     * @internal
     * Used to set focus on an element that uses `ion-focusable`.
     * Do not use this if focusing the element as a result of a keyboard
     * event as the focus utility should handle this for us. This method
     * should be used when we want to programmatically focus an element as
     * a result of another user action. (Ex: We focus the first element
     * inside of a popover when the user presents it, but the popover is not always
     * presented as a result of keyboard action.)
     */
    async setFocus(elements) {
        if (this.focusVisible) {
            this.focusVisible.setFocus(elements);
        }
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: 'a562850f242d9d45573e35efdd4bd178254677ef', class: {
                [mode]: true,
                'ion-page': true,
                'force-statusbar-padding': ionicGlobal.config.getBoolean('_forceStatusbarPadding'),
            } }));
    }
    get el() { return index.getElement(this); }
};
const needInputShims = () => {
    /**
     * iOS always needs input shims
     */
    const needsShimsIOS = ionicGlobal.isPlatform(window, 'ios') && ionicGlobal.isPlatform(window, 'mobile');
    if (needsShimsIOS) {
        return true;
    }
    /**
     * Android only needs input shims when running
     * in the browser and only if the browser is using the
     * new Chrome 108+ resize behavior: https://developer.chrome.com/blog/viewport-resize-behavior/
     */
    const isAndroidMobileWeb = ionicGlobal.isPlatform(window, 'android') && ionicGlobal.isPlatform(window, 'mobileweb');
    if (isAndroidMobileWeb) {
        return true;
    }
    return false;
};
const rIC = (callback) => {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
App.style = IonAppStyle0;

exports.ion_app = App;

//# sourceMappingURL=ion-app.cjs.entry.js.map