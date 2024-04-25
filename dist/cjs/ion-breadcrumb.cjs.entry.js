'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const helpers = require('./helpers-0f03deef.js');
const theme = require('./theme-76a542db.js');
const index$1 = require('./index-767d9937.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const breadcrumbIosCss = ":host{display:flex;flex:0 0 auto;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:flex;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:flex;flex:1 1 100%;align-items:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #2d4665));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, rgba(233, 237, 243, 0.7)));font-size:clamp(16px, 1rem, 22px)}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, var(--ion-text-color-step-250, #445b78))}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-400, var(--ion-text-color-step-600, #92a0b3));font-size:min(1.125rem, 21.6px)}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #242d39))}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e9edf3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9e0ea))}.breadcrumbs-collapsed-indicator ion-icon{font-size:min(1.375rem, 22px)}";
const IonBreadcrumbIosStyle0 = breadcrumbIosCss;

const breadcrumbMdCss = ":host{display:flex;flex:0 0 auto;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:flex;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:flex;flex:1 1 100%;align-items:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #677483));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, var(--ion-text-color-step-200, #35404e));--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, #fff))}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}.breadcrumb-separator{-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:-1px}:host(.ion-focused) .breadcrumb-native{border-radius:4px;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-550, var(--ion-text-color-step-450, #7d8894));font-size:1.125rem}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #222d3a))}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #eef1f3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #dfe5e8))}";
const IonBreadcrumbMdStyle0 = breadcrumbMdCss;

const Breadcrumb = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionFocus = index.createEvent(this, "ionFocus", 7);
        this.ionBlur = index.createEvent(this, "ionBlur", 7);
        this.collapsedClick = index.createEvent(this, "collapsedClick", 7);
        this.inheritedAttributes = {};
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.collapsedIndicatorClick = () => {
            this.collapsedClick.emit({ ionShadowTarget: this.collapsedRef });
        };
        this.collapsed = false;
        this.last = undefined;
        this.showCollapsedIndicator = undefined;
        this.color = undefined;
        this.active = false;
        this.disabled = false;
        this.download = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.separator = undefined;
        this.target = undefined;
        this.routerDirection = 'forward';
        this.routerAnimation = undefined;
    }
    componentWillLoad() {
        this.inheritedAttributes = helpers.inheritAriaAttributes(this.el);
    }
    isClickable() {
        return this.href !== undefined;
    }
    render() {
        const { color, active, collapsed, disabled, download, el, inheritedAttributes, last, routerAnimation, routerDirection, separator, showCollapsedIndicator, target, } = this;
        const clickable = this.isClickable();
        const TagType = this.href === undefined ? 'span' : 'a';
        // Links can still be tabbed to when set to disabled if they have an href
        // in order to truly disable them we can keep it as an anchor but remove the href
        const href = disabled ? undefined : this.href;
        const mode = ionicGlobal.getIonMode(this);
        const attrs = TagType === 'span'
            ? {}
            : {
                download,
                href,
                target,
            };
        // If the breadcrumb is collapsed, check if it contains the collapsed indicator
        // to show the separator as long as it isn't also the last breadcrumb
        // otherwise if not collapsed use the value in separator
        const showSeparator = last ? false : collapsed ? (showCollapsedIndicator && !last ? true : false) : separator;
        return (index.h(index.Host, { key: 'dfe55ad57f23e5da5f2e2c51fea99964812472e3', onClick: (ev) => theme.openURL(href, ev, routerDirection, routerAnimation), "aria-disabled": disabled ? 'true' : null, class: theme.createColorClasses(color, {
                [mode]: true,
                'breadcrumb-active': active,
                'breadcrumb-collapsed': collapsed,
                'breadcrumb-disabled': disabled,
                'in-breadcrumbs-color': theme.hostContext('ion-breadcrumbs[color]', el),
                'in-toolbar': theme.hostContext('ion-toolbar', this.el),
                'in-toolbar-color': theme.hostContext('ion-toolbar[color]', this.el),
                'ion-activatable': clickable,
                'ion-focusable': clickable,
            }) }, index.h(TagType, Object.assign({ key: 'e361b1f0e7de6dd5c5dd4f6deae72c2c8210466d' }, attrs, { class: "breadcrumb-native", part: "native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), index.h("slot", { key: '9daeb45a8a28c89f3ad5751f71b8412197846371', name: "start" }), index.h("slot", { key: '4849e63cdffd6c712292745138b68730442c8b0d' }), index.h("slot", { key: '6edf9bac5aec06ccec2844efac2d9afa1d24cf57', name: "end" })), showCollapsedIndicator && (index.h("button", { key: 'de7f5faea75b44011b289d259265e2435a65874f', part: "collapsed-indicator", "aria-label": "Show more breadcrumbs", onClick: () => this.collapsedIndicatorClick(), ref: (collapsedEl) => (this.collapsedRef = collapsedEl), class: {
                'breadcrumbs-collapsed-indicator': true,
            } }, index.h("ion-icon", { key: '957d8851af9c99dda263f34eff0b35a0fc212c32', "aria-hidden": "true", icon: index$1.ellipsisHorizontal, lazy: false }))), showSeparator && (
        /**
         * Separators should not be announced by narrators.
         * We add aria-hidden on the span so that this applies
         * to any custom separators too.
         */
        index.h("span", { key: '97d646c37c4c41ad6b12c3a543d1146fde06fc9a', class: "breadcrumb-separator", part: "separator", "aria-hidden": "true" }, index.h("slot", { key: '0429f671a986f2d7be1b1b69fc879e80806d2916', name: "separator" }, mode === 'ios' ? (index.h("ion-icon", { icon: index$1.chevronForwardOutline, lazy: false, "flip-rtl": true })) : (index.h("span", null, "/")))))));
    }
    get el() { return index.getElement(this); }
};
Breadcrumb.style = {
    ios: IonBreadcrumbIosStyle0,
    md: IonBreadcrumbMdStyle0
};

exports.ion_breadcrumb = Breadcrumb;

//# sourceMappingURL=ion-breadcrumb.cjs.entry.js.map