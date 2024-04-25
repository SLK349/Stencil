import { r as registerInstance, h, H as Host } from './index-a73b2c0c.js';
import { o as openURL, c as createColorClasses } from './theme-6bada181.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #0054e9);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
const IonRouterLinkStyle0 = routerLinkCss;

const RouterLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClick = (ev) => {
            openURL(this.href, ev, this.routerDirection, this.routerAnimation);
        };
        this.color = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.routerDirection = 'forward';
        this.routerAnimation = undefined;
        this.target = undefined;
    }
    render() {
        const mode = getIonMode(this);
        const attrs = {
            href: this.href,
            rel: this.rel,
            target: this.target,
        };
        return (h(Host, { key: '529ceed5beaf92d7b4cc315c82f449eac18310e8', onClick: this.onClick, class: createColorClasses(this.color, {
                [mode]: true,
                'ion-activatable': true,
            }) }, h("a", Object.assign({ key: 'd5f1f8b256695d70bdafd20ff3d1b625963fa2da' }, attrs), h("slot", { key: '613fcdb36a71e076f989551ea21f1d5c118b1cd2' }))));
    }
};
RouterLink.style = IonRouterLinkStyle0;

export { RouterLink as ion_router_link };

//# sourceMappingURL=ion-router-link.entry.js.map