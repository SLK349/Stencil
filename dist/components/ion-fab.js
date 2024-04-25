import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { g as getIonMode } from './p-7ff156a4.js';

const fabCss = ":host{position:absolute;width:fit-content;height:fit-content;z-index:999}:host(.fab-horizontal-center){left:0px;right:0px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px));}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{right:calc(10px + var(--ion-safe-area-right, 0px));left:unset}@supports selector(:dir(rtl)){:host(.fab-horizontal-start:dir(rtl)){right:calc(10px + var(--ion-safe-area-right, 0px));left:unset}}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px));}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:calc(10px + var(--ion-safe-area-left, 0px));right:unset}@supports selector(:dir(rtl)){:host(.fab-horizontal-end:dir(rtl)){left:calc(10px + var(--ion-safe-area-left, 0px));right:unset}}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:0}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-button){margin-top:-50%}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-button.fab-button-small){margin-top:calc((-100% + 16px) / 2)}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-start),:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-end){margin-top:-50%}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-top),:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-bottom){margin-top:calc(50% + 10px)}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:0}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-button){margin-bottom:-50%}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-button.fab-button-small){margin-bottom:calc((-100% + 16px) / 2)}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-start),:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-end){margin-bottom:-50%}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-top),:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-bottom){margin-bottom:calc(50% + 10px)}:host(.fab-vertical-center){top:0px;bottom:0px;margin-top:auto;margin-bottom:auto}";
const IonFabStyle0 = fabCss;

const Fab = /*@__PURE__*/ proxyCustomElement(class Fab extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.horizontal = undefined;
        this.vertical = undefined;
        this.edge = false;
        this.activated = false;
    }
    activatedChanged() {
        const activated = this.activated;
        const fab = this.getFab();
        if (fab) {
            fab.activated = activated;
        }
        Array.from(this.el.querySelectorAll('ion-fab-list')).forEach((list) => {
            list.activated = activated;
        });
    }
    componentDidLoad() {
        if (this.activated) {
            this.activatedChanged();
        }
    }
    /**
     * Close an active FAB list container.
     */
    async close() {
        this.activated = false;
    }
    getFab() {
        return this.el.querySelector('ion-fab-button');
    }
    /**
     * Opens/Closes the FAB list container.
     * @internal
     */
    async toggle() {
        const hasList = !!this.el.querySelector('ion-fab-list');
        if (hasList) {
            this.activated = !this.activated;
        }
    }
    render() {
        const { horizontal, vertical, edge } = this;
        const mode = getIonMode(this);
        return (h(Host, { key: '8a310806d0e748d7ebb0ed3d9a2652038e0f2960', class: {
                [mode]: true,
                [`fab-horizontal-${horizontal}`]: horizontal !== undefined,
                [`fab-vertical-${vertical}`]: vertical !== undefined,
                'fab-edge': edge,
            } }, h("slot", { key: '9394ef6d6e5b0410fa6ba212171f687fb178ce2d' })));
    }
    get el() { return this; }
    static get watchers() { return {
        "activated": ["activatedChanged"]
    }; }
    static get style() { return IonFabStyle0; }
}, [1, "ion-fab", {
        "horizontal": [1],
        "vertical": [1],
        "edge": [4],
        "activated": [1028],
        "close": [64],
        "toggle": [64]
    }, undefined, {
        "activated": ["activatedChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-fab"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-fab":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Fab);
            }
            break;
    } });
}
defineCustomElement$1();

const IonFab = Fab;
const defineCustomElement = defineCustomElement$1;

export { IonFab, defineCustomElement };

//# sourceMappingURL=ion-fab.js.map