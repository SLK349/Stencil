import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { c as createColorClasses } from './p-100c2286.js';
import { g as getIonMode } from './p-7ff156a4.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";
const IonTextStyle0 = textCss;

const Text = /*@__PURE__*/ proxyCustomElement(class Text extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '096d8ca01301500d61d9e92299e0cc78c2ad86e3', class: createColorClasses(this.color, {
                [mode]: true,
            }) }, h("slot", { key: '9399d939ec4f134c24c29bda8857cd348259c666' })));
    }
    static get style() { return IonTextStyle0; }
}, [1, "ion-text", {
        "color": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-text"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Text);
            }
            break;
    } });
}
defineCustomElement$1();

const IonText = Text;
const defineCustomElement = defineCustomElement$1;

export { IonText, defineCustomElement };

//# sourceMappingURL=ion-text.js.map