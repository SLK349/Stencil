import { r as registerInstance, h, H as Host } from './index-a73b2c0c.js';
import { c as createColorClasses } from './theme-6bada181.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";
const IonTextStyle0 = textCss;

const Text = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '096d8ca01301500d61d9e92299e0cc78c2ad86e3', class: createColorClasses(this.color, {
                [mode]: true,
            }) }, h("slot", { key: '9399d939ec4f134c24c29bda8857cd348259c666' })));
    }
};
Text.style = IonTextStyle0;

export { Text as ion_text };

//# sourceMappingURL=ion-text.entry.js.map