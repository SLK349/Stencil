'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const rowCss = ":host{display:flex;flex-wrap:wrap}";
const IonRowStyle0 = rowCss;

const Row = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'aea072a5005e3f1f309f0d1ae5be5ee19869b035', class: ionicGlobal.getIonMode(this) }, index.h("slot", { key: '2a481c2126ac6ca65f0a1bbd07c2d3365409cb78' })));
    }
};
Row.style = IonRowStyle0;

exports.ion_row = Row;

//# sourceMappingURL=ion-row.cjs.entry.js.map