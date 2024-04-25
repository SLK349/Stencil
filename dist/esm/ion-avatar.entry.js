import { r as registerInstance, h, H as Host } from './index-a73b2c0c.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";
const IonAvatarIosStyle0 = avatarIosCss;

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";
const IonAvatarMdStyle0 = avatarMdCss;

const Avatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'dc1e3cd535e419eebe5599574fd2393ebfde8bbc', class: getIonMode(this) }, h("slot", { key: 'edb8441c063ea592b41345ea97d88ecd90cb3052' })));
    }
};
Avatar.style = {
    ios: IonAvatarIosStyle0,
    md: IonAvatarMdStyle0
};

export { Avatar as ion_avatar };

//# sourceMappingURL=ion-avatar.entry.js.map