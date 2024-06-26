'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const theme = require('./theme-76a542db.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";
const IonTextStyle0 = textCss;

const Text = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: '096d8ca01301500d61d9e92299e0cc78c2ad86e3', class: theme.createColorClasses(this.color, {
                [mode]: true,
            }) }, index.h("slot", { key: '9399d939ec4f134c24c29bda8857cd348259c666' })));
    }
};
Text.style = IonTextStyle0;

exports.ion_text = Text;

//# sourceMappingURL=ion-text.cjs.entry.js.map