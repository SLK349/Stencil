'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const index$1 = require('./index-9b06e5b3.js');
const keyboardController = require('./keyboard-controller-a16d77fa.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');
const helpers = require('./helpers-0f03deef.js');
require('./index-7d4ba1aa.js');
require('./index-a370c7e1.js');
require('./keyboard-caa0f933.js');
require('./capacitor-97b4d9f3.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const handleFooterFade = (scrollEl, baseEl) => {
    index.readTask(() => {
        const scrollTop = scrollEl.scrollTop;
        const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
        /**
         * Toolbar background will fade
         * out over fadeDuration in pixels.
         */
        const fadeDuration = 10;
        /**
         * Begin fading out maxScroll - 30px
         * from the bottom of the content.
         * Also determine how close we are
         * to starting the fade. If we are
         * before the starting point, the
         * scale value will get clamped to 0.
         * If we are after the maxScroll (rubber
         * band scrolling), the scale value will
         * get clamped to 1.
         */
        const fadeStart = maxScroll - fadeDuration;
        const distanceToStart = scrollTop - fadeStart;
        const scale = helpers.clamp(0, 1 - distanceToStart / fadeDuration, 1);
        index.writeTask(() => {
            baseEl.style.setProperty('--opacity-scale', scale.toString());
        });
    });
};

const footerIosCss = "ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports (backdrop-filter: blur(0)){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}";
const IonFooterIosStyle0 = footerIosCss;

const footerMdCss = "ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{box-shadow:none}";
const IonFooterMdStyle0 = footerMdCss;

const Footer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.keyboardCtrl = null;
        this.checkCollapsibleFooter = () => {
            const mode = ionicGlobal.getIonMode(this);
            if (mode !== 'ios') {
                return;
            }
            const { collapse } = this;
            const hasFade = collapse === 'fade';
            this.destroyCollapsibleFooter();
            if (hasFade) {
                const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
                const contentEl = pageEl ? index$1.findIonContent(pageEl) : null;
                if (!contentEl) {
                    index$1.printIonContentErrorMsg(this.el);
                    return;
                }
                this.setupFadeFooter(contentEl);
            }
        };
        this.setupFadeFooter = async (contentEl) => {
            const scrollEl = (this.scrollEl = await index$1.getScrollElement(contentEl));
            /**
             * Handle fading of toolbars on scroll
             */
            this.contentScrollCallback = () => {
                handleFooterFade(scrollEl, this.el);
            };
            scrollEl.addEventListener('scroll', this.contentScrollCallback);
            handleFooterFade(scrollEl, this.el);
        };
        this.keyboardVisible = false;
        this.collapse = undefined;
        this.translucent = false;
    }
    componentDidLoad() {
        this.checkCollapsibleFooter();
    }
    componentDidUpdate() {
        this.checkCollapsibleFooter();
    }
    async connectedCallback() {
        this.keyboardCtrl = await keyboardController.createKeyboardController(async (keyboardOpen, waitForResize) => {
            /**
             * If the keyboard is hiding, then we need to wait
             * for the webview to resize. Otherwise, the footer
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
    destroyCollapsibleFooter() {
        if (this.scrollEl && this.contentScrollCallback) {
            this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
            this.contentScrollCallback = undefined;
        }
    }
    render() {
        const { translucent, collapse } = this;
        const mode = ionicGlobal.getIonMode(this);
        const tabs = this.el.closest('ion-tabs');
        const tabBar = tabs === null || tabs === void 0 ? void 0 : tabs.querySelector(':scope > ion-tab-bar');
        return (index.h(index.Host, { key: 'ddc228f1a1e7fa4f707dccf74db2490ca3241137', role: "contentinfo", class: {
                [mode]: true,
                // Used internally for styling
                [`footer-${mode}`]: true,
                [`footer-translucent`]: translucent,
                [`footer-translucent-${mode}`]: translucent,
                ['footer-toolbar-padding']: !this.keyboardVisible && (!tabBar || tabBar.slot !== 'bottom'),
                [`footer-collapse-${collapse}`]: collapse !== undefined,
            } }, mode === 'ios' && translucent && index.h("div", { key: 'e16ed4963ff94e06de77eb8038201820af73937c', class: "footer-background" }), index.h("slot", { key: 'f186934febf85d37133d9351a96c1a64b0a4b203' })));
    }
    get el() { return index.getElement(this); }
};
Footer.style = {
    ios: IonFooterIosStyle0,
    md: IonFooterMdStyle0
};

exports.ion_footer = Footer;

//# sourceMappingURL=ion-footer.cjs.entry.js.map