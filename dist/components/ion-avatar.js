import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { g as getIonMode } from './p-7ff156a4.js';

const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";
const IonAvatarIosStyle0 = avatarIosCss;

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";
const IonAvatarMdStyle0 = avatarMdCss;

const Avatar = /*@__PURE__*/ proxyCustomElement(class Avatar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'dc1e3cd535e419eebe5599574fd2393ebfde8bbc', class: getIonMode(this) }, h("slot", { key: 'edb8441c063ea592b41345ea97d88ecd90cb3052' })));
    }
    static get style() { return {
        ios: IonAvatarIosStyle0,
        md: IonAvatarMdStyle0
    }; }
}, [33, "ion-avatar"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-avatar"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-avatar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Avatar);
            }
            break;
    } });
}
defineCustomElement$1();

const IonAvatar = Avatar;
const defineCustomElement = defineCustomElement$1;

export { IonAvatar, defineCustomElement };

//# sourceMappingURL=ion-avatar.js.map