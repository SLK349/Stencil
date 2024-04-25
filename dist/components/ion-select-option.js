import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { g as getIonMode } from './p-7ff156a4.js';

const selectOptionCss = ":host{display:none}";
const IonSelectOptionStyle0 = selectOptionCss;

const SelectOption = /*@__PURE__*/ proxyCustomElement(class SelectOption extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.inputId = `ion-selopt-${selectOptionIds++}`;
        this.disabled = false;
        this.value = undefined;
    }
    render() {
        return h(Host, { key: '6fa504ac5597098086050c0f517a03be8b8032c9', role: "option", id: this.inputId, class: getIonMode(this) });
    }
    get el() { return this; }
    static get style() { return IonSelectOptionStyle0; }
}, [1, "ion-select-option", {
        "disabled": [4],
        "value": [8]
    }]);
let selectOptionIds = 0;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-select-option"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-select-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SelectOption);
            }
            break;
    } });
}
defineCustomElement$1();

const IonSelectOption = SelectOption;
const defineCustomElement = defineCustomElement$1;

export { IonSelectOption, defineCustomElement };

//# sourceMappingURL=ion-select-option.js.map