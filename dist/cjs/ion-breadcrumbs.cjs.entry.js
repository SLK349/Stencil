'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const theme = require('./theme-76a542db.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const breadcrumbsIosCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;flex-wrap:wrap;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;justify-content:center}";
const IonBreadcrumbsIosStyle0 = breadcrumbsIosCss;

const breadcrumbsMdCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;flex-wrap:wrap;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}";
const IonBreadcrumbsMdStyle0 = breadcrumbsMdCss;

const Breadcrumbs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionCollapsedClick = index.createEvent(this, "ionCollapsedClick", 7);
        this.breadcrumbsInit = () => {
            this.setBreadcrumbSeparator();
            this.setMaxItems();
        };
        this.resetActiveBreadcrumb = () => {
            const breadcrumbs = this.getBreadcrumbs();
            // Only reset the active breadcrumb if we were the ones to change it
            // otherwise use the one set on the component
            const activeBreadcrumb = breadcrumbs.find((breadcrumb) => breadcrumb.active);
            if (activeBreadcrumb && this.activeChanged) {
                activeBreadcrumb.active = false;
            }
        };
        this.setMaxItems = () => {
            const { itemsAfterCollapse, itemsBeforeCollapse, maxItems } = this;
            const breadcrumbs = this.getBreadcrumbs();
            for (const breadcrumb of breadcrumbs) {
                breadcrumb.showCollapsedIndicator = false;
                breadcrumb.collapsed = false;
            }
            // If the number of breadcrumbs exceeds the maximum number of items
            // that should show and the items before / after collapse do not
            // exceed the maximum items then we need to collapse the breadcrumbs
            const shouldCollapse = maxItems !== undefined && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;
            if (shouldCollapse) {
                // Show the collapsed indicator in the first breadcrumb that collapses
                breadcrumbs.forEach((breadcrumb, index) => {
                    if (index === itemsBeforeCollapse) {
                        breadcrumb.showCollapsedIndicator = true;
                    }
                    // Collapse all breadcrumbs that have an index greater than or equal to
                    // the number before collapse and an index less than the total number
                    // of breadcrumbs minus the items that should show after the collapse
                    if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
                        breadcrumb.collapsed = true;
                    }
                });
            }
        };
        this.setBreadcrumbSeparator = () => {
            const { itemsAfterCollapse, itemsBeforeCollapse, maxItems } = this;
            const breadcrumbs = this.getBreadcrumbs();
            // Check if an active breadcrumb exists already
            const active = breadcrumbs.find((breadcrumb) => breadcrumb.active);
            // Set the separator on all but the last breadcrumb
            for (const breadcrumb of breadcrumbs) {
                // The only time the last breadcrumb changes is when
                // itemsAfterCollapse is set to 0, in this case the
                // last breadcrumb will be the collapsed indicator
                const last = maxItems !== undefined && itemsAfterCollapse === 0
                    ? breadcrumb === breadcrumbs[itemsBeforeCollapse]
                    : breadcrumb === breadcrumbs[breadcrumbs.length - 1];
                breadcrumb.last = last;
                // If the breadcrumb has defined whether or not to show the
                // separator then use that value, otherwise check if it's the
                // last breadcrumb
                const separator = breadcrumb.separator !== undefined ? breadcrumb.separator : last ? undefined : true;
                breadcrumb.separator = separator;
                // If there is not an active breadcrumb already
                // set the last one to active
                if (!active && last) {
                    breadcrumb.active = true;
                    this.activeChanged = true;
                }
            }
        };
        this.getBreadcrumbs = () => {
            return Array.from(this.el.querySelectorAll('ion-breadcrumb'));
        };
        this.slotChanged = () => {
            this.resetActiveBreadcrumb();
            this.breadcrumbsInit();
        };
        this.collapsed = undefined;
        this.activeChanged = undefined;
        this.color = undefined;
        this.maxItems = undefined;
        this.itemsBeforeCollapse = 1;
        this.itemsAfterCollapse = 1;
    }
    onCollapsedClick(ev) {
        const breadcrumbs = this.getBreadcrumbs();
        const collapsedBreadcrumbs = breadcrumbs.filter((breadcrumb) => breadcrumb.collapsed);
        this.ionCollapsedClick.emit(Object.assign(Object.assign({}, ev.detail), { collapsedBreadcrumbs }));
    }
    maxItemsChanged() {
        this.resetActiveBreadcrumb();
        this.breadcrumbsInit();
    }
    componentWillLoad() {
        this.breadcrumbsInit();
    }
    render() {
        const { color, collapsed } = this;
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: '18ffba1642f10cc2bc31440e84f23aa6f042e501', class: theme.createColorClasses(color, {
                [mode]: true,
                'in-toolbar': theme.hostContext('ion-toolbar', this.el),
                'in-toolbar-color': theme.hostContext('ion-toolbar[color]', this.el),
                'breadcrumbs-collapsed': collapsed,
            }) }, index.h("slot", { key: '3db6d31590e3047889ce554d57d155c8ea2e1455', onSlotchange: this.slotChanged })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "maxItems": ["maxItemsChanged"],
        "itemsBeforeCollapse": ["maxItemsChanged"],
        "itemsAfterCollapse": ["maxItemsChanged"]
    }; }
};
Breadcrumbs.style = {
    ios: IonBreadcrumbsIosStyle0,
    md: IonBreadcrumbsMdStyle0
};

exports.ion_breadcrumbs = Breadcrumbs;

//# sourceMappingURL=ion-breadcrumbs.cjs.entry.js.map