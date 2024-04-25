import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { m as menuController } from './p-d2f62dc7.js';
import { g as getIonMode } from './p-7ff156a4.js';
import { u as updateVisibility } from './p-b4c69928.js';

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";
const IonMenuToggleStyle0 = menuToggleCss;

const MenuToggle = /*@__PURE__*/ proxyCustomElement(class MenuToggle extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.onClick = () => {
            return menuController.toggle(this.menu);
        };
        this.visible = false;
        this.menu = undefined;
        this.autoHide = true;
    }
    connectedCallback() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const mode = getIonMode(this);
        const hidden = this.autoHide && !this.visible;
        return (h(Host, { key: '7c27ea5b0795676bf5cb33e1f83aa142c197f64e', onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, h("slot", { key: '69f187becedc0fe34603d41d279f043cf0fdf776' })));
    }
    static get style() { return IonMenuToggleStyle0; }
}, [1, "ion-menu-toggle", {
        "menu": [1],
        "autoHide": [4, "auto-hide"],
        "visible": [32]
    }, [[16, "ionMenuChange", "visibilityChanged"], [16, "ionSplitPaneVisible", "visibilityChanged"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-menu-toggle"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-menu-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuToggle);
            }
            break;
    } });
}
defineCustomElement$1();

const IonMenuToggle = MenuToggle;
const defineCustomElement = defineCustomElement$1;

export { IonMenuToggle, defineCustomElement };

//# sourceMappingURL=ion-menu-toggle.js.map