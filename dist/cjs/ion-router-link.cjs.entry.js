'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const theme = require('./theme-76a542db.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #0054e9);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
const IonRouterLinkStyle0 = routerLinkCss;

const RouterLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onClick = (ev) => {
            theme.openURL(this.href, ev, this.routerDirection, this.routerAnimation);
        };
        this.color = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.routerDirection = 'forward';
        this.routerAnimation = undefined;
        this.target = undefined;
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        const attrs = {
            href: this.href,
            rel: this.rel,
            target: this.target,
        };
        return (index.h(index.Host, { key: '529ceed5beaf92d7b4cc315c82f449eac18310e8', onClick: this.onClick, class: theme.createColorClasses(this.color, {
                [mode]: true,
                'ion-activatable': true,
            }) }, index.h("a", Object.assign({ key: 'd5f1f8b256695d70bdafd20ff3d1b625963fa2da' }, attrs), index.h("slot", { key: '613fcdb36a71e076f989551ea21f1d5c118b1cd2' }))));
    }
};
RouterLink.style = IonRouterLinkStyle0;

exports.ion_router_link = RouterLink;

//# sourceMappingURL=ion-router-link.cjs.entry.js.map