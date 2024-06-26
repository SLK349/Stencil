import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-53634f3f.js';
import { i as inheritAriaAttributes } from './p-4e0d3630.js';
import { o as openURL, c as createColorClasses, h as hostContext } from './p-100c2286.js';
import { d as chevronForwardOutline, e as ellipsisHorizontal } from './p-ec8cca76.js';
import { g as getIonMode } from './p-7ff156a4.js';
import { d as defineCustomElement$2 } from './p-7046d50d.js';

const breadcrumbIosCss = ":host{display:flex;flex:0 0 auto;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:flex;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:flex;flex:1 1 100%;align-items:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #2d4665));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, rgba(233, 237, 243, 0.7)));font-size:clamp(16px, 1rem, 22px)}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, var(--ion-text-color-step-250, #445b78))}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-400, var(--ion-text-color-step-600, #92a0b3));font-size:min(1.125rem, 21.6px)}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #242d39))}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e9edf3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9e0ea))}.breadcrumbs-collapsed-indicator ion-icon{font-size:min(1.375rem, 22px)}";
const IonBreadcrumbIosStyle0 = breadcrumbIosCss;

const breadcrumbMdCss = ":host{display:flex;flex:0 0 auto;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:flex;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:flex;flex:1 1 100%;align-items:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #677483));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, var(--ion-text-color-step-200, #35404e));--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, #fff))}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}.breadcrumb-separator{-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:-1px}:host(.ion-focused) .breadcrumb-native{border-radius:4px;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-550, var(--ion-text-color-step-450, #7d8894));font-size:1.125rem}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #222d3a))}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #eef1f3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #dfe5e8))}";
const IonBreadcrumbMdStyle0 = breadcrumbMdCss;

const Breadcrumb = /*@__PURE__*/ proxyCustomElement(class Breadcrumb extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.ionFocus = createEvent(this, "ionFocus", 7);
        this.ionBlur = createEvent(this, "ionBlur", 7);
        this.collapsedClick = createEvent(this, "collapsedClick", 7);
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
        this.inheritedAttributes = inheritAriaAttributes(this.el);
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
        const mode = getIonMode(this);
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
        return (h(Host, { key: 'dfe55ad57f23e5da5f2e2c51fea99964812472e3', onClick: (ev) => openURL(href, ev, routerDirection, routerAnimation), "aria-disabled": disabled ? 'true' : null, class: createColorClasses(color, {
                [mode]: true,
                'breadcrumb-active': active,
                'breadcrumb-collapsed': collapsed,
                'breadcrumb-disabled': disabled,
                'in-breadcrumbs-color': hostContext('ion-breadcrumbs[color]', el),
                'in-toolbar': hostContext('ion-toolbar', this.el),
                'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
                'ion-activatable': clickable,
                'ion-focusable': clickable,
            }) }, h(TagType, Object.assign({ key: 'e361b1f0e7de6dd5c5dd4f6deae72c2c8210466d' }, attrs, { class: "breadcrumb-native", part: "native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), h("slot", { key: '9daeb45a8a28c89f3ad5751f71b8412197846371', name: "start" }), h("slot", { key: '4849e63cdffd6c712292745138b68730442c8b0d' }), h("slot", { key: '6edf9bac5aec06ccec2844efac2d9afa1d24cf57', name: "end" })), showCollapsedIndicator && (h("button", { key: 'de7f5faea75b44011b289d259265e2435a65874f', part: "collapsed-indicator", "aria-label": "Show more breadcrumbs", onClick: () => this.collapsedIndicatorClick(), ref: (collapsedEl) => (this.collapsedRef = collapsedEl), class: {
                'breadcrumbs-collapsed-indicator': true,
            } }, h("ion-icon", { key: '957d8851af9c99dda263f34eff0b35a0fc212c32', "aria-hidden": "true", icon: ellipsisHorizontal, lazy: false }))), showSeparator && (
        /**
         * Separators should not be announced by narrators.
         * We add aria-hidden on the span so that this applies
         * to any custom separators too.
         */
        h("span", { key: '97d646c37c4c41ad6b12c3a543d1146fde06fc9a', class: "breadcrumb-separator", part: "separator", "aria-hidden": "true" }, h("slot", { key: '0429f671a986f2d7be1b1b69fc879e80806d2916', name: "separator" }, mode === 'ios' ? (h("ion-icon", { icon: chevronForwardOutline, lazy: false, "flip-rtl": true })) : (h("span", null, "/")))))));
    }
    get el() { return this; }
    static get style() { return {
        ios: IonBreadcrumbIosStyle0,
        md: IonBreadcrumbMdStyle0
    }; }
}, [33, "ion-breadcrumb", {
        "collapsed": [4],
        "last": [4],
        "showCollapsedIndicator": [4, "show-collapsed-indicator"],
        "color": [1],
        "active": [4],
        "disabled": [4],
        "download": [1],
        "href": [1],
        "rel": [1],
        "separator": [4],
        "target": [1],
        "routerDirection": [1, "router-direction"],
        "routerAnimation": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-breadcrumb", "ion-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-breadcrumb":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Breadcrumb);
            }
            break;
        case "ion-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const IonBreadcrumb = Breadcrumb;
const defineCustomElement = defineCustomElement$1;

export { IonBreadcrumb, defineCustomElement };

//# sourceMappingURL=ion-breadcrumb.js.map