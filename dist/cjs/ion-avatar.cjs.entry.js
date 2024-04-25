'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";
const IonAvatarIosStyle0 = avatarIosCss;

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";
const IonAvatarMdStyle0 = avatarMdCss;

const Avatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'dc1e3cd535e419eebe5599574fd2393ebfde8bbc', class: ionicGlobal.getIonMode(this) }, index.h("slot", { key: 'edb8441c063ea592b41345ea97d88ecd90cb3052' })));
    }
};
Avatar.style = {
    ios: IonAvatarIosStyle0,
    md: IonAvatarMdStyle0
};

exports.ion_avatar = Avatar;

//# sourceMappingURL=ion-avatar.cjs.entry.js.map