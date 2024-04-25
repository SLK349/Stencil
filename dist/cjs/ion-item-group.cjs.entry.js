'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const itemGroupIosCss = "ion-item-group{display:block}";
const IonItemGroupIosStyle0 = itemGroupIosCss;

const itemGroupMdCss = "ion-item-group{display:block}";
const IonItemGroupMdStyle0 = itemGroupMdCss;

const ItemGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: 'f9ffe0290d3fa546494fe55f952d8554f2a8abf8', role: "group", class: {
                [mode]: true,
                // Used internally for styling
                [`item-group-${mode}`]: true,
                item: true,
            } }));
    }
};
ItemGroup.style = {
    ios: IonItemGroupIosStyle0,
    md: IonItemGroupMdStyle0
};

exports.ion_item_group = ItemGroup;

//# sourceMappingURL=ion-item-group.cjs.entry.js.map