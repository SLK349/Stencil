import { r as registerInstance, h, H as Host } from './index-a73b2c0c.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}";
const IonThumbnailStyle0 = thumbnailCss;

const Thumbnail = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '29ed7678be93e55afad58bd37a61db3a289a5d76', class: getIonMode(this) }, h("slot", { key: 'da1eb174d2544b9d452c98076f6e0abcda60099d' })));
    }
};
Thumbnail.style = IonThumbnailStyle0;

export { Thumbnail as ion_thumbnail };

//# sourceMappingURL=ion-thumbnail.entry.js.map