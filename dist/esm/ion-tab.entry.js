import { r as registerInstance, h, H as Host, e as getElement } from './index-a73b2c0c.js';
import { a as attachComponent } from './framework-delegate-b07d7318.js';
import './helpers-5a2c111a.js';

const tabCss = ":host(.tab-hidden){display:none !important}";
const IonTabStyle0 = tabCss;

const Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "active": ["changeActive"]
    }; }
};
Tab.style = IonTabStyle0;

export { Tab as ion_tab };

//# sourceMappingURL=ion-tab.entry.js.map