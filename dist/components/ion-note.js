import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { c as createColorClasses } from './p-100c2286.js';
import { g as getIonMode } from './p-7ff156a4.js';

const noteIosCss = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350, var(--ion-text-color-step-650, #a6a6a6));font-size:max(14px, 1rem)}";
const IonNoteIosStyle0 = noteIosCss;

const noteMdCss = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));font-size:0.875rem}";
const IonNoteMdStyle0 = noteMdCss;

const Note = /*@__PURE__*/ proxyCustomElement(class Note extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '10a3495bc21166176986441479f8f7539029d161', class: createColorClasses(this.color, {
                [mode]: true,
            }) }, h("slot", { key: 'b6a9459e1b85f608fafd060a4bfeb11637ebe873' })));
    }
    static get style() { return {
        ios: IonNoteIosStyle0,
        md: IonNoteMdStyle0
    }; }
}, [33, "ion-note", {
        "color": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-note"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-note":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Note);
            }
            break;
    } });
}
defineCustomElement$1();

const IonNote = Note;
const defineCustomElement = defineCustomElement$1;

export { IonNote, defineCustomElement };

//# sourceMappingURL=ion-note.js.map