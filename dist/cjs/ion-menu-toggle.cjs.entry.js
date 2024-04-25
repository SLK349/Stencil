'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const index$1 = require('./index-f91760f5.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');
const menuToggleUtil = require('./menu-toggle-util-31f72701.js');
require('./index-a370c7e1.js');
require('./hardware-back-button-e87df2c5.js');
require('./index-7d4ba1aa.js');
require('./helpers-0f03deef.js');
require('./animation-38c620f1.js');

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";
const IonMenuToggleStyle0 = menuToggleCss;

const MenuToggle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onClick = () => {
            return index$1.menuController.toggle(this.menu);
        };
        this.visible = false;
        this.menu = undefined;
        this.autoHide = true;
    }
    connectedCallback() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await menuToggleUtil.updateVisibility(this.menu);
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        const hidden = this.autoHide && !this.visible;
        return (index.h(index.Host, { key: '7c27ea5b0795676bf5cb33e1f83aa142c197f64e', onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, index.h("slot", { key: '69f187becedc0fe34603d41d279f043cf0fdf776' })));
    }
};
MenuToggle.style = IonMenuToggleStyle0;

exports.ion_menu_toggle = MenuToggle;

//# sourceMappingURL=ion-menu-toggle.cjs.entry.js.map