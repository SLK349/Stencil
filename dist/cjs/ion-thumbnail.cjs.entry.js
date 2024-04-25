'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}";
const IonThumbnailStyle0 = thumbnailCss;

const Thumbnail = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '29ed7678be93e55afad58bd37a61db3a289a5d76', class: ionicGlobal.getIonMode(this) }, index.h("slot", { key: 'da1eb174d2544b9d452c98076f6e0abcda60099d' })));
    }
};
Thumbnail.style = IonThumbnailStyle0;

exports.ion_thumbnail = Thumbnail;

//# sourceMappingURL=ion-thumbnail.cjs.entry.js.map