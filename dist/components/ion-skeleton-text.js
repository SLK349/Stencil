import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-53634f3f.js';
import { h as hostContext } from './p-100c2286.js';
import { c as config, g as getIonMode } from './p-7ff156a4.js';

const skeletonTextCss = ":host{--background:rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065);border-radius:var(--border-radius, inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;user-select:none;pointer-events:none}span{display:inline-block}:host(.in-media){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}:host(.skeleton-text-animated){position:relative;background:linear-gradient(to right, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 33%);background-size:800px 104px;animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:shimmer;animation-timing-function:linear}@keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}";
const IonSkeletonTextStyle0 = skeletonTextCss;

const SkeletonText = /*@__PURE__*/ proxyCustomElement(class SkeletonText extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.ionStyle = createEvent(this, "ionStyle", 7);
        this.animated = false;
    }
    componentWillLoad() {
        this.emitStyle();
    }
    emitStyle() {
        // The emitted property is used by item in order
        // to add the item-skeleton-text class which applies
        // overflow: hidden to its label
        const style = {
            'skeleton-text': true,
        };
        this.ionStyle.emit(style);
    }
    render() {
        const animated = this.animated && config.getBoolean('animated', true);
        const inMedia = hostContext('ion-avatar', this.el) || hostContext('ion-thumbnail', this.el);
        const mode = getIonMode(this);
        return (h(Host, { key: '8a1b489e35564056b3babce548982e58fec74119', class: {
                [mode]: true,
                'skeleton-text-animated': animated,
                'in-media': inMedia,
            } }, h("span", { key: '71df251a41967dc4dab241f6fa906fa4d568dd9e' }, "\u00A0")));
    }
    get el() { return this; }
    static get style() { return IonSkeletonTextStyle0; }
}, [1, "ion-skeleton-text", {
        "animated": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-skeleton-text"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-skeleton-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SkeletonText);
            }
            break;
    } });
}
defineCustomElement$1();

const IonSkeletonText = SkeletonText;
const defineCustomElement = defineCustomElement$1;

export { IonSkeletonText, defineCustomElement };

//# sourceMappingURL=ion-skeleton-text.js.map