import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { c as createColorClasses } from './p-100c2286.js';
import { g as getIonMode } from './p-7ff156a4.js';

const cardHeaderIosCss = ":host{--background:transparent;--color:inherit;display:flex;position:relative;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;flex-direction:column-reverse}@supports (backdrop-filter: blur(0)){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);backdrop-filter:saturate(180%) blur(30px)}}";
const IonCardHeaderIosStyle0 = cardHeaderIosCss;

const cardHeaderMdCss = ":host{--background:transparent;--color:inherit;display:flex;position:relative;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}";
const IonCardHeaderMdStyle0 = cardHeaderMdCss;

const CardHeader = /*@__PURE__*/ proxyCustomElement(class CardHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
        this.translucent = false;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '18d12507ec6e650a72d721e9d0f4128b5e86df1d', class: createColorClasses(this.color, {
                'card-header-translucent': this.translucent,
                'ion-inherit-color': true,
                [mode]: true,
            }) }, h("slot", { key: '3374c087d8c3f014082787e255432e7a335ef44f' })));
    }
    static get style() { return {
        ios: IonCardHeaderIosStyle0,
        md: IonCardHeaderMdStyle0
    }; }
}, [33, "ion-card-header", {
        "color": [513],
        "translucent": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-card-header"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-card-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardHeader);
            }
            break;
    } });
}
defineCustomElement$1();

const IonCardHeader = CardHeader;
const defineCustomElement = defineCustomElement$1;

export { IonCardHeader, defineCustomElement };

//# sourceMappingURL=ion-card-header.js.map