import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { f as findIonContent, p as printIonContentErrorMsg, g as getScrollElement } from './p-1db1f9e2.js';
import { c as createKeyboardController } from './p-db0ee376.js';
import { g as getIonMode } from './p-7ff156a4.js';
import { r as readTask, w as writeTask } from './p-d167d7f3.js';
import { k as clamp } from './p-4e0d3630.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const handleFooterFade = (scrollEl, baseEl) => {
    readTask(() => {
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
        const scale = clamp(0, 1 - distanceToStart / fadeDuration, 1);
        writeTask(() => {
            baseEl.style.setProperty('--opacity-scale', scale.toString());
        });
    });
};

const footerIosCss = "ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports (backdrop-filter: blur(0)){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}";
const IonFooterIosStyle0 = footerIosCss;

const footerMdCss = "ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{box-shadow:none}";
const IonFooterMdStyle0 = footerMdCss;

const Footer = /*@__PURE__*/ proxyCustomElement(class Footer extends H {
    constructor() {
        super();
        this.__registerHost();
        this.keyboardCtrl = null;
        this.checkCollapsibleFooter = () => {
            const mode = getIonMode(this);
            if (mode !== 'ios') {
                return;
            }
            const { collapse } = this;
            const hasFade = collapse === 'fade';
            this.destroyCollapsibleFooter();
            if (hasFade) {
                const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
                const contentEl = pageEl ? findIonContent(pageEl) : null;
                if (!contentEl) {
                    printIonContentErrorMsg(this.el);
                    return;
                }
                this.setupFadeFooter(contentEl);
            }
        };
        this.setupFadeFooter = async (contentEl) => {
            const scrollEl = (this.scrollEl = await getScrollElement(contentEl));
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
        this.keyboardCtrl = await createKeyboardController(async (keyboardOpen, waitForResize) => {
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
        const mode = getIonMode(this);
        const tabs = this.el.closest('ion-tabs');
        const tabBar = tabs === null || tabs === void 0 ? void 0 : tabs.querySelector(':scope > ion-tab-bar');
        return (h(Host, { key: 'ddc228f1a1e7fa4f707dccf74db2490ca3241137', role: "contentinfo", class: {
                [mode]: true,
                // Used internally for styling
                [`footer-${mode}`]: true,
                [`footer-translucent`]: translucent,
                [`footer-translucent-${mode}`]: translucent,
                ['footer-toolbar-padding']: !this.keyboardVisible && (!tabBar || tabBar.slot !== 'bottom'),
                [`footer-collapse-${collapse}`]: collapse !== undefined,
            } }, mode === 'ios' && translucent && h("div", { key: 'e16ed4963ff94e06de77eb8038201820af73937c', class: "footer-background" }), h("slot", { key: 'f186934febf85d37133d9351a96c1a64b0a4b203' })));
    }
    get el() { return this; }
    static get style() { return {
        ios: IonFooterIosStyle0,
        md: IonFooterMdStyle0
    }; }
}, [36, "ion-footer", {
        "collapse": [1],
        "translucent": [4],
        "keyboardVisible": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Footer);
            }
            break;
    } });
}
defineCustomElement$1();

const IonFooter = Footer;
const defineCustomElement = defineCustomElement$1;

export { IonFooter, defineCustomElement };

//# sourceMappingURL=ion-footer.js.map