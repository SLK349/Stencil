import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { c as createColorClasses } from './p-100c2286.js';
import { g as getIonMode } from './p-7ff156a4.js';

const cardSubtitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.75rem;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}";
const IonCardSubtitleIosStyle0 = cardSubtitleIosCss;

const cardSubtitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.875rem;font-weight:500}";
const IonCardSubtitleMdStyle0 = cardSubtitleMdCss;

const CardSubtitle = /*@__PURE__*/ proxyCustomElement(class CardSubtitle extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: 'cbcb01bd01cf6de64a0b04fb626e42b07ceb8f53', role: "heading", "aria-level": "3", class: createColorClasses(this.color, {
                'ion-inherit-color': true,
                [mode]: true,
            }) }, h("slot", { key: 'cbcaa73aa5799882c48d6c0aabfb13651bcc91c0' })));
    }
    static get style() { return {
        ios: IonCardSubtitleIosStyle0,
        md: IonCardSubtitleMdStyle0
    }; }
}, [33, "ion-card-subtitle", {
        "color": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-card-subtitle"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-card-subtitle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardSubtitle);
            }
            break;
    } });
}
defineCustomElement$1();

const IonCardSubtitle = CardSubtitle;
const defineCustomElement = defineCustomElement$1;

export { IonCardSubtitle, defineCustomElement };

//# sourceMappingURL=ion-card-subtitle.js.map