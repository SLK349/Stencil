'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const navLink = (el, routerDirection, component, componentProps, routerAnimation) => {
    const nav = el.closest('ion-nav');
    if (nav) {
        if (routerDirection === 'forward') {
            if (component !== undefined) {
                return nav.push(component, componentProps, { skipIfBusy: true, animationBuilder: routerAnimation });
            }
        }
        else if (routerDirection === 'root') {
            if (component !== undefined) {
                return nav.setRoot(component, componentProps, { skipIfBusy: true, animationBuilder: routerAnimation });
            }
        }
        else if (routerDirection === 'back') {
            return nav.pop({ skipIfBusy: true, animationBuilder: routerAnimation });
        }
    }
    return Promise.resolve(false);
};

const NavLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onClick = () => {
            return navLink(this.el, this.routerDirection, this.component, this.componentProps, this.routerAnimation);
        };
        this.component = undefined;
        this.componentProps = undefined;
        this.routerDirection = 'forward';
        this.routerAnimation = undefined;
    }
    render() {
        return index.h(index.Host, { key: 'd2f8545b4fbd5aa25ef36eb01dffbc5d35ccfbb9', onClick: this.onClick });
    }
    get el() { return index.getElement(this); }
};

exports.ion_nav_link = NavLink;

//# sourceMappingURL=ion-nav-link.cjs.entry.js.map