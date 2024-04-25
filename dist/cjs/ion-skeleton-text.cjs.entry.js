'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const theme = require('./theme-76a542db.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const skeletonTextCss = ":host{--background:rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065);border-radius:var(--border-radius, inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;user-select:none;pointer-events:none}span{display:inline-block}:host(.in-media){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}:host(.skeleton-text-animated){position:relative;background:linear-gradient(to right, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 33%);background-size:800px 104px;animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:shimmer;animation-timing-function:linear}@keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}";
const IonSkeletonTextStyle0 = skeletonTextCss;

const SkeletonText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionStyle = index.createEvent(this, "ionStyle", 7);
        this.animated = false;
    }
    componentWillLoad() {
        this.emitStyle();
    }
    emitStyle() {
        // The emitted property is used by item in order
        // to add the item-skeleton-text class which applies
        // overflow: hidden to its label
        const style = {
            'skeleton-text': true,
        };
        this.ionStyle.emit(style);
    }
    render() {
        const animated = this.animated && ionicGlobal.config.getBoolean('animated', true);
        const inMedia = theme.hostContext('ion-avatar', this.el) || theme.hostContext('ion-thumbnail', this.el);
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: '8a1b489e35564056b3babce548982e58fec74119', class: {
                [mode]: true,
                'skeleton-text-animated': animated,
                'in-media': inMedia,
            } }, index.h("span", { key: '71df251a41967dc4dab241f6fa906fa4d568dd9e' }, "\u00A0")));
    }
    get el() { return index.getElement(this); }
};
SkeletonText.style = IonSkeletonTextStyle0;

exports.ion_skeleton_text = SkeletonText;

//# sourceMappingURL=ion-skeleton-text.cjs.entry.js.map