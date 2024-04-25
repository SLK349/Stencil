import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { g as getIonMode } from './p-7ff156a4.js';

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}";
const IonThumbnailStyle0 = thumbnailCss;

const Thumbnail = /*@__PURE__*/ proxyCustomElement(class Thumbnail extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '29ed7678be93e55afad58bd37a61db3a289a5d76', class: getIonMode(this) }, h("slot", { key: 'da1eb174d2544b9d452c98076f6e0abcda60099d' })));
    }
    static get style() { return IonThumbnailStyle0; }
}, [1, "ion-thumbnail"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-thumbnail"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-thumbnail":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Thumbnail);
            }
            break;
    } });
}
defineCustomElement$1();

const IonThumbnail = Thumbnail;
const defineCustomElement = defineCustomElement$1;

export { IonThumbnail, defineCustomElement };

//# sourceMappingURL=ion-thumbnail.js.map