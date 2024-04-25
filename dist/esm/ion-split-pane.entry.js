import { r as registerInstance, d as createEvent, h, H as Host, e as getElement } from './index-a73b2c0c.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const splitPaneIosCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;flex:1;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--side-min-width:270px;--side-max-width:28%}";
const IonSplitPaneIosStyle0 = splitPaneIosCss;

const splitPaneMdCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;flex:1;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--side-min-width:270px;--side-max-width:28%}";
const IonSplitPaneMdStyle0 = splitPaneMdCss;

// TODO(FW-2832): types
const SPLIT_PANE_MAIN = 'split-pane-main';
const SPLIT_PANE_SIDE = 'split-pane-side';
const QUERY = {
    xs: '(min-width: 0px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    never: '',
};
const SplitPane = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionSplitPaneVisible = createEvent(this, "ionSplitPaneVisible", 7);
        this.visible = false;
        this.contentId = undefined;
        this.disabled = false;
        this.when = QUERY['lg'];
    }
    visibleChanged(visible) {
        this.ionSplitPaneVisible.emit({ visible });
    }
    /**
     * @internal
     */
    async isVisible() {
        return Promise.resolve(this.visible);
    }
    async connectedCallback() {
        // TODO: connectedCallback is fired in CE build
        // before WC is defined. This needs to be fixed in Stencil.
        if (typeof customElements !== 'undefined' && customElements != null) {
            await customElements.whenDefined('ion-split-pane');
        }
        this.styleMainElement();
        this.updateState();
    }
    disconnectedCallback() {
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
    }
    updateState() {
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
        // Check if the split-pane is disabled
        if (this.disabled) {
            this.visible = false;
            return;
        }
        // When query is a boolean
        const query = this.when;
        if (typeof query === 'boolean') {
            this.visible = query;
            return;
        }
        // When query is a string, let's find first if it is a shortcut
        const mediaQuery = QUERY[query] || query;
        // Media query is empty or null, we hide it
        if (mediaQuery.length === 0) {
            this.visible = false;
            return;
        }
        // Listen on media query
        const callback = (q) => {
            this.visible = q.matches;
        };
        const mediaList = window.matchMedia(mediaQuery);
        // TODO FW-5869
        mediaList.addListener(callback);
        this.rmL = () => mediaList.removeListener(callback);
        this.visible = mediaList.matches;
    }
    /**
     * Attempt to find the main content
     * element inside of the split pane.
     * If found, set it as the main node.
     *
     * We assume that the main node
     * is available in the DOM on split
     * pane load.
     */
    styleMainElement() {
        const contentId = this.contentId;
        const children = this.el.children;
        const nu = this.el.childElementCount;
        let foundMain = false;
        for (let i = 0; i < nu; i++) {
            const child = children[i];
            const isMain = contentId !== undefined && child.id === contentId;
            if (isMain) {
                if (foundMain) {
                    console.warn('split pane cannot have more than one main node');
                    return;
                }
                else {
                    setPaneClass(child, isMain);
                    foundMain = true;
                }
            }
        }
        if (!foundMain) {
            console.warn('split pane does not have a specified main node');
        }
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: 'd04ff97717268184725f25b39bb1416b2b423260', class: {
                [mode]: true,
                // Used internally for styling
                [`split-pane-${mode}`]: true,
                'split-pane-visible': this.visible,
            } }, h("slot", { key: '4d355509ab6fcdac415184068ffe1241a5078db3' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["visibleChanged"],
        "disabled": ["updateState"],
        "when": ["updateState"]
    }; }
};
const setPaneClass = (el, isMain) => {
    let toAdd;
    let toRemove;
    if (isMain) {
        toAdd = SPLIT_PANE_MAIN;
        toRemove = SPLIT_PANE_SIDE;
    }
    else {
        toAdd = SPLIT_PANE_SIDE;
        toRemove = SPLIT_PANE_MAIN;
    }
    const classList = el.classList;
    classList.add(toAdd);
    classList.remove(toRemove);
};
SplitPane.style = {
    ios: IonSplitPaneIosStyle0,
    md: IonSplitPaneMdStyle0
};

export { SplitPane as ion_split_pane };

//# sourceMappingURL=ion-split-pane.entry.js.map