import { r as registerInstance, h, H as Host, e as getElement } from './index-a73b2c0c.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const selectOptionCss = ":host{display:none}";
const IonSelectOptionStyle0 = selectOptionCss;

const SelectOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputId = `ion-selopt-${selectOptionIds++}`;
        this.disabled = false;
        this.value = undefined;
    }
    render() {
        return h(Host, { key: '6fa504ac5597098086050c0f517a03be8b8032c9', role: "option", id: this.inputId, class: getIonMode(this) });
    }
    get el() { return getElement(this); }
};
let selectOptionIds = 0;
SelectOption.style = IonSelectOptionStyle0;

export { SelectOption as ion_select_option };

//# sourceMappingURL=ion-select-option.entry.js.map