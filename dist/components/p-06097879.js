import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-53634f3f.js';
import { g as getIonMode } from './p-7ff156a4.js';

const backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
const IonBackdropIosStyle0 = backdropIosCss;

const backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
const IonBackdropMdStyle0 = backdropMdCss;

const Backdrop = /*@__PURE__*/ proxyCustomElement(class Backdrop extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
        this.visible = true;
        this.tappable = true;
        this.stopPropagation = true;
    }
    onMouseDown(ev) {
        this.emitTap(ev);
    }
    emitTap(ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: 'c803b4302c8e722064feb03dafe3cb6e190b4f2b', tabindex: "-1", "aria-hidden": "true", class: {
                [mode]: true,
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            } }));
    }
    static get style() { return {
        ios: IonBackdropIosStyle0,
        md: IonBackdropMdStyle0
    }; }
}, [33, "ion-backdrop", {
        "visible": [4],
        "tappable": [4],
        "stopPropagation": [4, "stop-propagation"]
    }, [[2, "click", "onMouseDown"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-backdrop"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-backdrop":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Backdrop);
            }
            break;
    } });
}
defineCustomElement();

export { Backdrop as B, defineCustomElement as d };

//# sourceMappingURL=p-06097879.js.map