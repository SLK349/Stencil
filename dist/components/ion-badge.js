import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { c as createColorClasses } from './p-100c2286.js';
import { g as getIonMode } from './p-7ff156a4.js';

const badgeIosCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:0.8125rem;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px;font-size:max(13px, 0.8125rem)}";
const IonBadgeIosStyle0 = badgeIosCss;

const badgeMdCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:0.8125rem;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}";
const IonBadgeMdStyle0 = badgeMdCss;

const Badge = /*@__PURE__*/ proxyCustomElement(class Badge extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '1253618692342bcf9487188402dc3d49ae0de480', class: createColorClasses(this.color, {
                [mode]: true,
            }) }, h("slot", { key: '71d65e203965ea37b94504a8a0a96beb52d4e356' })));
    }
    static get style() { return {
        ios: IonBadgeIosStyle0,
        md: IonBadgeMdStyle0
    }; }
}, [33, "ion-badge", {
        "color": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-badge":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Badge);
            }
            break;
    } });
}
defineCustomElement$1();

const IonBadge = Badge;
const defineCustomElement = defineCustomElement$1;

export { IonBadge, defineCustomElement };

//# sourceMappingURL=ion-badge.js.map