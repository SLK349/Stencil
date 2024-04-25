import { r as registerInstance, h, H as Host } from './index-a73b2c0c.js';
import { c as createColorClasses } from './theme-6bada181.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const noteIosCss = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350, var(--ion-text-color-step-650, #a6a6a6));font-size:max(14px, 1rem)}";
const IonNoteIosStyle0 = noteIosCss;

const noteMdCss = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));font-size:0.875rem}";
const IonNoteMdStyle0 = noteMdCss;

const Note = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '10a3495bc21166176986441479f8f7539029d161', class: createColorClasses(this.color, {
                [mode]: true,
            }) }, h("slot", { key: 'b6a9459e1b85f608fafd060a4bfeb11637ebe873' })));
    }
};
Note.style = {
    ios: IonNoteIosStyle0,
    md: IonNoteMdStyle0
};

export { Note as ion_note };

//# sourceMappingURL=ion-note.entry.js.map