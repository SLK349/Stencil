import { r as registerInstance, h, H as Host } from './index-a73b2c0c.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";
const IonRowStyle0 = rowCss;

const Row = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'aea072a5005e3f1f309f0d1ae5be5ee19869b035', class: getIonMode(this) }, h("slot", { key: '2a481c2126ac6ca65f0a1bbd07c2d3365409cb78' })));
    }
};
Row.style = IonRowStyle0;

export { Row as ion_row };

//# sourceMappingURL=ion-row.entry.js.map