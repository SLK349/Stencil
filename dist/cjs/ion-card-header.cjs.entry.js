'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const theme = require('./theme-76a542db.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const cardHeaderIosCss = ":host{--background:transparent;--color:inherit;display:flex;position:relative;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;flex-direction:column-reverse}@supports (backdrop-filter: blur(0)){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);backdrop-filter:saturate(180%) blur(30px)}}";
const IonCardHeaderIosStyle0 = cardHeaderIosCss;

const cardHeaderMdCss = ":host{--background:transparent;--color:inherit;display:flex;position:relative;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}";
const IonCardHeaderMdStyle0 = cardHeaderMdCss;

const CardHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.translucent = false;
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: '18d12507ec6e650a72d721e9d0f4128b5e86df1d', class: theme.createColorClasses(this.color, {
                'card-header-translucent': this.translucent,
                'ion-inherit-color': true,
                [mode]: true,
            }) }, index.h("slot", { key: '3374c087d8c3f014082787e255432e7a335ef44f' })));
    }
};
CardHeader.style = {
    ios: IonCardHeaderIosStyle0,
    md: IonCardHeaderMdStyle0
};

exports.ion_card_header = CardHeader;

//# sourceMappingURL=ion-card-header.cjs.entry.js.map