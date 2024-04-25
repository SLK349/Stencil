'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const theme = require('./theme-76a542db.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const cardSubtitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.75rem;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}";
const IonCardSubtitleIosStyle0 = cardSubtitleIosCss;

const cardSubtitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.875rem;font-weight:500}";
const IonCardSubtitleMdStyle0 = cardSubtitleMdCss;

const CardSubtitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: 'cbcb01bd01cf6de64a0b04fb626e42b07ceb8f53', role: "heading", "aria-level": "3", class: theme.createColorClasses(this.color, {
                'ion-inherit-color': true,
                [mode]: true,
            }) }, index.h("slot", { key: 'cbcaa73aa5799882c48d6c0aabfb13651bcc91c0' })));
    }
};
CardSubtitle.style = {
    ios: IonCardSubtitleIosStyle0,
    md: IonCardSubtitleMdStyle0
};

exports.ion_card_subtitle = CardSubtitle;

//# sourceMappingURL=ion-card-subtitle.cjs.entry.js.map