import { p as proxyCustomElement, H, d as createEvent } from './p-53634f3f.js';

const RouteRedirect = /*@__PURE__*/ proxyCustomElement(class RouteRedirect extends H {
    constructor() {
        super();
        this.__registerHost();
        this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
        this.from = undefined;
        this.to = undefined;
    }
    propDidChange() {
        this.ionRouteRedirectChanged.emit();
    }
    connectedCallback() {
        this.ionRouteRedirectChanged.emit();
    }
    static get watchers() { return {
        "from": ["propDidChange"],
        "to": ["propDidChange"]
    }; }
}, [0, "ion-route-redirect", {
        "from": [1],
        "to": [1]
    }, undefined, {
        "from": ["propDidChange"],
        "to": ["propDidChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-route-redirect"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-route-redirect":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RouteRedirect);
            }
            break;
    } });
}
defineCustomElement$1();

const IonRouteRedirect = RouteRedirect;
const defineCustomElement = defineCustomElement$1;

export { IonRouteRedirect, defineCustomElement };

//# sourceMappingURL=ion-route-redirect.js.map