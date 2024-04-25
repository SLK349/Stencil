'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const selectOptionCss = ":host{display:none}";
const IonSelectOptionStyle0 = selectOptionCss;

const SelectOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.inputId = `ion-selopt-${selectOptionIds++}`;
        this.disabled = false;
        this.value = undefined;
    }
    render() {
        return index.h(index.Host, { key: '6fa504ac5597098086050c0f517a03be8b8032c9', role: "option", id: this.inputId, class: ionicGlobal.getIonMode(this) });
    }
    get el() { return index.getElement(this); }
};
let selectOptionIds = 0;
SelectOption.style = IonSelectOptionStyle0;

exports.ion_select_option = SelectOption;

//# sourceMappingURL=ion-select-option.cjs.entry.js.map