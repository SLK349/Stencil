'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const config = require('./config-a585eb18.js');
const index$1 = require('./index-767d9937.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');
const refresher_utils = require('./refresher.utils-2e914cd6.js');
const spinnerConfigs = require('./spinner-configs-11dba05c.js');
require('./animation-38c620f1.js');
require('./index-a370c7e1.js');
require('./helpers-0f03deef.js');

const RefresherContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.customHTMLEnabled = ionicGlobal.config.get('innerHTMLTemplatesEnabled', config.ENABLE_HTML_CONTENT_DEFAULT);
        this.pullingIcon = undefined;
        this.pullingText = undefined;
        this.refreshingSpinner = undefined;
        this.refreshingText = undefined;
    }
    componentWillLoad() {
        if (this.pullingIcon === undefined) {
            /**
             * The native iOS refresher uses a spinner instead of
             * an icon, so we need to see if this device supports
             * the native iOS refresher.
             */
            const hasRubberBandScrolling = refresher_utils.supportsRubberBandScrolling();
            const mode = ionicGlobal.getIonMode(this);
            const overflowRefresher = hasRubberBandScrolling ? 'lines' : index$1.arrowDown;
            this.pullingIcon = ionicGlobal.config.get('refreshingIcon', mode === 'ios' && hasRubberBandScrolling ? ionicGlobal.config.get('spinner', overflowRefresher) : 'circular');
        }
        if (this.refreshingSpinner === undefined) {
            const mode = ionicGlobal.getIonMode(this);
            this.refreshingSpinner = ionicGlobal.config.get('refreshingSpinner', ionicGlobal.config.get('spinner', mode === 'ios' ? 'lines' : 'circular'));
        }
    }
    renderPullingText() {
        const { customHTMLEnabled, pullingText } = this;
        if (customHTMLEnabled) {
            return index.h("div", { class: "refresher-pulling-text", innerHTML: config.sanitizeDOMString(pullingText) });
        }
        return index.h("div", { class: "refresher-pulling-text" }, pullingText);
    }
    renderRefreshingText() {
        const { customHTMLEnabled, refreshingText } = this;
        if (customHTMLEnabled) {
            return index.h("div", { class: "refresher-refreshing-text", innerHTML: config.sanitizeDOMString(refreshingText) });
        }
        return index.h("div", { class: "refresher-refreshing-text" }, refreshingText);
    }
    render() {
        const pullingIcon = this.pullingIcon;
        const hasSpinner = pullingIcon != null && spinnerConfigs.SPINNERS[pullingIcon] !== undefined;
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: '19633bbcf02e3dba885d6bdcdaf2269bf4c8e2f5', class: mode }, index.h("div", { key: '28922e434a55a6cac0476fe2bee56941ce0d1c02', class: "refresher-pulling" }, this.pullingIcon && hasSpinner && (index.h("div", { key: 'fe575bf996021884677e9b23a3215d63caf894f5', class: "refresher-pulling-icon" }, index.h("div", { key: '59fe12297fd95bc33b8df8cd35316e2a1c084d91', class: "spinner-arrow-container" }, index.h("ion-spinner", { key: 'af9cc013ae04945c140b2865610ca73edb52ab48', name: this.pullingIcon, paused: true }), mode === 'md' && this.pullingIcon === 'circular' && (index.h("div", { key: '34df66ad1b0f706a0532957251aa2c20bf4587d8', class: "arrow-container" }, index.h("ion-icon", { key: 'ffdb5c123e606b823491c6c51cc2b497f62581bb', icon: index$1.caretBackSharp, "aria-hidden": "true" })))))), this.pullingIcon && !hasSpinner && (index.h("div", { key: 'ac3a2032bb969264d20fa057e9123441005d7a9d', class: "refresher-pulling-icon" }, index.h("ion-icon", { key: 'd969d10915548e72aae289b52154366f3dd39b31', icon: this.pullingIcon, lazy: false, "aria-hidden": "true" }))), this.pullingText !== undefined && this.renderPullingText()), index.h("div", { key: 'a8f854f81a94812d7bef8ce088331d94f49ff53d', class: "refresher-refreshing" }, this.refreshingSpinner && (index.h("div", { key: 'a1f646945370e40c844d62bc0c647443ae9dfbe7', class: "refresher-refreshing-icon" }, index.h("ion-spinner", { key: 'ab3ff4047769b6436e222b46d193c1e8b23e2fce', name: this.refreshingSpinner }))), this.refreshingText !== undefined && this.renderRefreshingText())));
    }
    get el() { return index.getElement(this); }
};

exports.ion_refresher_content = RefresherContent;

//# sourceMappingURL=ion-refresher-content.cjs.entry.js.map