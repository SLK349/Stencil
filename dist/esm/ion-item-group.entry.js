import { r as registerInstance, h, H as Host } from './index-a73b2c0c.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const itemGroupIosCss = "ion-item-group{display:block}";
const IonItemGroupIosStyle0 = itemGroupIosCss;

const itemGroupMdCss = "ion-item-group{display:block}";
const IonItemGroupMdStyle0 = itemGroupMdCss;

const ItemGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: 'f9ffe0290d3fa546494fe55f952d8554f2a8abf8', role: "group", class: {
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

export { ItemGroup as ion_item_group };

//# sourceMappingURL=ion-item-group.entry.js.map