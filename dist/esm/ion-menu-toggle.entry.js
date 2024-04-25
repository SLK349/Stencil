import { r as registerInstance, h, H as Host } from './index-a73b2c0c.js';
import { m as menuController } from './index-aa6f1596.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';
import { u as updateVisibility } from './menu-toggle-util-5d44bac1.js';
import './index-51ff1772.js';
import './hardware-back-button-853efc3d.js';
import './index-93ceac82.js';
import './helpers-5a2c111a.js';
import './animation-45b3e295.js';

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";
const IonMenuToggleStyle0 = menuToggleCss;

const MenuToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClick = () => {
            return menuController.toggle(this.menu);
        };
        this.visible = false;
        this.menu = undefined;
        this.autoHide = true;
    }
    connectedCallback() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const mode = getIonMode(this);
        const hidden = this.autoHide && !this.visible;
        return (h(Host, { key: '7c27ea5b0795676bf5cb33e1f83aa142c197f64e', onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, h("slot", { key: '69f187becedc0fe34603d41d279f043cf0fdf776' })));
    }
};
MenuToggle.style = IonMenuToggleStyle0;

export { MenuToggle as ion_menu_toggle };

//# sourceMappingURL=ion-menu-toggle.entry.js.map