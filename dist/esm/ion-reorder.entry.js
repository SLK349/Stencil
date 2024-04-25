import { r as registerInstance, h, H as Host, e as getElement } from './index-a73b2c0c.js';
import { r as reorderThreeOutline, s as reorderTwoSharp } from './index-ac882a1a.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:2.125rem;opacity:0.4}";
const IonReorderIosStyle0 = reorderIosCss;

const reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:1.9375rem;opacity:0.3}";
const IonReorderMdStyle0 = reorderMdCss;

const Reorder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        const mode = getIonMode(this);
        const reorderIcon = mode === 'ios' ? reorderThreeOutline : reorderTwoSharp;
        return (h(Host, { key: '27266e30bcb7e10c57fb6d546399cfb1f1c93b23', class: mode }, h("slot", { key: '8745cb9a31458e884c27eed1fb90d104fe9a79eb' }, h("ion-icon", { key: '6c4b9631a2f5610f1e21b2db025b6702d0d593bf', icon: reorderIcon, lazy: false, class: "reorder-icon", part: "icon", "aria-hidden": "true" }))));
    }
    get el() { return getElement(this); }
};
Reorder.style = {
    ios: IonReorderIosStyle0,
    md: IonReorderMdStyle0
};

export { Reorder as ion_reorder };

//# sourceMappingURL=ion-reorder.entry.js.map