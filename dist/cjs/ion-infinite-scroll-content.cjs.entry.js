'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const config = require('./config-a585eb18.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
const IonInfiniteScrollContentIosStyle0 = infiniteScrollContentIosCss;

const infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
const IonInfiniteScrollContentMdStyle0 = infiniteScrollContentMdCss;

const InfiniteScrollContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.customHTMLEnabled = ionicGlobal.config.get('innerHTMLTemplatesEnabled', config.ENABLE_HTML_CONTENT_DEFAULT);
        this.loadingSpinner = undefined;
        this.loadingText = undefined;
    }
    componentDidLoad() {
        if (this.loadingSpinner === undefined) {
            const mode = ionicGlobal.getIonMode(this);
            this.loadingSpinner = ionicGlobal.config.get('infiniteLoadingSpinner', ionicGlobal.config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    }
    renderLoadingText() {
        const { customHTMLEnabled, loadingText } = this;
        if (customHTMLEnabled) {
            return index.h("div", { class: "infinite-loading-text", innerHTML: config.sanitizeDOMString(loadingText) });
        }
        return index.h("div", { class: "infinite-loading-text" }, this.loadingText);
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: '7c16060dcfe2a0b0fb3e2f8f4c449589a76f1baa', class: {
                [mode]: true,
                // Used internally for styling
                [`infinite-scroll-content-${mode}`]: true,
            } }, index.h("div", { key: 'a94f4d8746e053dc718f97520bd7e48cb316443a', class: "infinite-loading" }, this.loadingSpinner && (index.h("div", { key: '10143d5d2a50a2a2bc5de1cee8e7ab51263bcf23', class: "infinite-loading-spinner" }, index.h("ion-spinner", { key: '8846e88191690d9c61a0b462889ed56fbfed8b0d', name: this.loadingSpinner }))), this.loadingText !== undefined && this.renderLoadingText())));
    }
};
InfiniteScrollContent.style = {
    ios: IonInfiniteScrollContentIosStyle0,
    md: IonInfiniteScrollContentMdStyle0
};

exports.ion_infinite_scroll_content = InfiniteScrollContent;

//# sourceMappingURL=ion-infinite-scroll-content.cjs.entry.js.map