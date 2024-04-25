'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const frameworkDelegate = require('./framework-delegate-ea328c64.js');
require('./helpers-0f03deef.js');

const tabCss = ":host(.tab-hidden){display:none !important}";
const IonTabStyle0 = tabCss;

const Tab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
                return frameworkDelegate.attachComponent(this.delegate, this.el, this.component, ['ion-page']);
            }
            catch (e) {
                console.error(e);
            }
        }
        return Promise.resolve(undefined);
    }
    render() {
        const { tab, active, component } = this;
        return (index.h(index.Host, { key: 'f341d086cc626834d2ac83a9b6366fcaf71a72d5', role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": `tab-button-${tab}`, class: {
                'ion-page': component === undefined,
                'tab-hidden': !active,
            } }, index.h("slot", { key: 'b665bb7a388f1a032685c9e7fe9b412ca742689e' })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "active": ["changeActive"]
    }; }
};
Tab.style = IonTabStyle0;

exports.ion_tab = Tab;

//# sourceMappingURL=ion-tab.cjs.entry.js.map