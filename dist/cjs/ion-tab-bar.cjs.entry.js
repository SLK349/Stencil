'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const keyboardController = require('./keyboard-controller-a16d77fa.js');
const theme = require('./theme-76a542db.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');
require('./index-a370c7e1.js');
require('./keyboard-caa0f933.js');
require('./capacitor-97b4d9f3.js');

const tabBarIosCss = ":host{display:flex;align-items:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;user-select:none;z-index:10;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports (backdrop-filter: blur(0)){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}";
const IonTabBarIosStyle0 = tabBarIosCss;

const tabBarMdCss = ":host{display:flex;align-items:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;user-select:none;z-index:10;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}";
const IonTabBarMdStyle0 = tabBarMdCss;

const TabBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionTabBarChanged = index.createEvent(this, "ionTabBarChanged", 7);
        this.ionTabBarLoaded = index.createEvent(this, "ionTabBarLoaded", 7);
        this.keyboardCtrl = null;
        this.keyboardVisible = false;
        this.color = undefined;
        this.selectedTab = undefined;
        this.translucent = false;
    }
    selectedTabChanged() {
        if (this.selectedTab !== undefined) {
            this.ionTabBarChanged.emit({
                tab: this.selectedTab,
            });
        }
    }
    componentWillLoad() {
        this.selectedTabChanged();
    }
    async connectedCallback() {
        this.keyboardCtrl = await keyboardController.createKeyboardController(async (keyboardOpen, waitForResize) => {
            /**
             * If the keyboard is hiding, then we need to wait
             * for the webview to resize. Otherwise, the tab bar
             * will flicker before the webview resizes.
             */
            if (keyboardOpen === false && waitForResize !== undefined) {
                await waitForResize;
            }
            this.keyboardVisible = keyboardOpen; // trigger re-render by updating state
        });
    }
    disconnectedCallback() {
        if (this.keyboardCtrl) {
            this.keyboardCtrl.destroy();
        }
    }
    componentDidLoad() {
        this.ionTabBarLoaded.emit();
    }
    render() {
        const { color, translucent, keyboardVisible } = this;
        const mode = ionicGlobal.getIonMode(this);
        const shouldHide = keyboardVisible && this.el.getAttribute('slot') !== 'top';
        return (index.h(index.Host, { key: '77fe8ff42b083bfdb5e01a9873ef45b6f3ce3744', role: "tablist", "aria-hidden": shouldHide ? 'true' : null, class: theme.createColorClasses(color, {
                [mode]: true,
                'tab-bar-translucent': translucent,
                'tab-bar-hidden': shouldHide,
            }) }, index.h("slot", { key: 'd479c80ff66f4cfc12ab4a583bd292ef8392895e' })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "selectedTab": ["selectedTabChanged"]
    }; }
};
TabBar.style = {
    ios: IonTabBarIosStyle0,
    md: IonTabBarMdStyle0
};

exports.ion_tab_bar = TabBar;

//# sourceMappingURL=ion-tab-bar.cjs.entry.js.map