import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { a as attachComponent } from './p-1141e6f7.js';

const tabCss = ":host(.tab-hidden){display:none !important}";
const IonTabStyle0 = tabCss;

const Tab = /*@__PURE__*/ proxyCustomElement(class Tab extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.loaded = false;
        this.active = false;
        this.delegate = undefined;
        this.tab = undefined;
        this.component = undefined;
    }
    async componentWillLoad() {
        if (this.active) {
            await this.setActive();
        }
    }
    /** Set the active component for the tab */
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    changeActive(isActive) {
        if (isActive) {
            this.prepareLazyLoaded();
        }
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            try {
                return attachComponent(this.delegate, this.el, this.component, ['ion-page']);
            }
            catch (e) {
                console.error(e);
            }
        }
        return Promise.resolve(undefined);
    }
    render() {
        const { tab, active, component } = this;
        return (h(Host, { key: 'f341d086cc626834d2ac83a9b6366fcaf71a72d5', role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": `tab-button-${tab}`, class: {
                'ion-page': component === undefined,
                'tab-hidden': !active,
            } }, h("slot", { key: 'b665bb7a388f1a032685c9e7fe9b412ca742689e' })));
    }
    get el() { return this; }
    static get watchers() { return {
        "active": ["changeActive"]
    }; }
    static get style() { return IonTabStyle0; }
}, [1, "ion-tab", {
        "active": [1028],
        "delegate": [16],
        "tab": [1],
        "component": [1],
        "setActive": [64]
    }, undefined, {
        "active": ["changeActive"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-tab"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-tab":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Tab);
            }
            break;
    } });
}
defineCustomElement$1();

const IonTab = Tab;
const defineCustomElement = defineCustomElement$1;

export { IonTab, defineCustomElement };

//# sourceMappingURL=ion-tab.js.map