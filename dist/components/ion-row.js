import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { g as getIonMode } from './p-7ff156a4.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";
const IonRowStyle0 = rowCss;

const Row = /*@__PURE__*/ proxyCustomElement(class Row extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'aea072a5005e3f1f309f0d1ae5be5ee19869b035', class: getIonMode(this) }, h("slot", { key: '2a481c2126ac6ca65f0a1bbd07c2d3365409cb78' })));
    }
    static get style() { return IonRowStyle0; }
}, [1, "ion-row"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-row"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Row);
            }
            break;
    } });
}
defineCustomElement$1();

const IonRow = Row;
const defineCustomElement = defineCustomElement$1;

export { IonRow, defineCustomElement };

//# sourceMappingURL=ion-row.js.map