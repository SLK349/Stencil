'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const index$1 = require('./index-767d9937.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:2.125rem;opacity:0.4}";
const IonReorderIosStyle0 = reorderIosCss;

const reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:1.9375rem;opacity:0.3}";
const IonReorderMdStyle0 = reorderMdCss;

const Reorder = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    onClick(ev) {
        const reorderGroup = this.el.closest('ion-reorder-group');
        ev.preventDefault();
        // Only stop event propagation if the reorder is inside of an enabled
        // reorder group. This allows interaction with clickable children components.
        if (!reorderGroup || !reorderGroup.disabled) {
            ev.stopImmediatePropagation();
        }
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        const reorderIcon = mode === 'ios' ? index$1.reorderThreeOutline : index$1.reorderTwoSharp;
        return (index.h(index.Host, { key: '27266e30bcb7e10c57fb6d546399cfb1f1c93b23', class: mode }, index.h("slot", { key: '8745cb9a31458e884c27eed1fb90d104fe9a79eb' }, index.h("ion-icon", { key: '6c4b9631a2f5610f1e21b2db025b6702d0d593bf', icon: reorderIcon, lazy: false, class: "reorder-icon", part: "icon", "aria-hidden": "true" }))));
    }
    get el() { return index.getElement(this); }
};
Reorder.style = {
    ios: IonReorderIosStyle0,
    md: IonReorderMdStyle0
};

exports.ion_reorder = Reorder;

//# sourceMappingURL=ion-reorder.cjs.entry.js.map