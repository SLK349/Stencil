import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { d as inheritAttributes } from './p-4e0d3630.js';
import { o as openURL, c as createColorClasses } from './p-100c2286.js';
import { g as getIonMode } from './p-7ff156a4.js';
import { d as defineCustomElement$2 } from './p-7dc0645e.js';

const cardIosCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:0.875rem;box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){transform:scale3d(0.97, 0.97, 1)}";
const IonCardIosStyle0 = cardIosCss;

const cardMdCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:0.875rem;box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}";
const IonCardMdStyle0 = cardMdCss;

const Card = /*@__PURE__*/ proxyCustomElement(class Card extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.inheritedAriaAttributes = {};
        this.color = undefined;
        this.button = false;
        this.type = 'button';
        this.disabled = false;
        this.download = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.routerDirection = 'forward';
        this.routerAnimation = undefined;
        this.target = undefined;
    }
    componentWillLoad() {
        this.inheritedAriaAttributes = inheritAttributes(this.el, ['aria-label']);
    }
    isClickable() {
        return this.href !== undefined || this.button;
    }
    renderCard(mode) {
        const clickable = this.isClickable();
        if (!clickable) {
            return [h("slot", null)];
        }
        const { href, routerAnimation, routerDirection, inheritedAriaAttributes } = this;
        const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
        const attrs = TagType === 'button'
            ? { type: this.type }
            : {
                download: this.download,
                href: this.href,
                rel: this.rel,
                target: this.target,
            };
        return (h(TagType, Object.assign({}, attrs, inheritedAriaAttributes, { class: "card-native", part: "native", disabled: this.disabled, onClick: (ev) => openURL(href, ev, routerDirection, routerAnimation) }), h("slot", null), clickable && mode === 'md' && h("ion-ripple-effect", null)));
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '8584300522f382ee8891c039d71da82533dfa36a', class: createColorClasses(this.color, {
                [mode]: true,
                'card-disabled': this.disabled,
                'ion-activatable': this.isClickable(),
            }) }, this.renderCard(mode)));
    }
    get el() { return this; }
    static get style() { return {
        ios: IonCardIosStyle0,
        md: IonCardMdStyle0
    }; }
}, [33, "ion-card", {
        "color": [513],
        "button": [4],
        "type": [1],
        "disabled": [4],
        "download": [1],
        "href": [1],
        "rel": [1],
        "routerDirection": [1, "router-direction"],
        "routerAnimation": [16],
        "target": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-card", "ion-ripple-effect"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Card);
            }
            break;
        case "ion-ripple-effect":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const IonCard = Card;
const defineCustomElement = defineCustomElement$1;

export { IonCard, defineCustomElement };

//# sourceMappingURL=ion-card.js.map