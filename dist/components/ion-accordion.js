import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { r as raf, a as addEventListener, b as removeEventListener, g as getElementRoot, t as transitionEndAsync } from './p-4e0d3630.js';
import { c as chevronDown } from './p-ec8cca76.js';
import { c as config, g as getIonMode } from './p-7ff156a4.js';
import { d as defineCustomElement$2 } from './p-7046d50d.js';

const accordionIosCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}";
const IonAccordionIosStyle0 = accordionIosCss;

const accordionMdCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{transition:none !important}}";
const IonAccordionMdStyle0 = accordionMdCss;

const Accordion = /*@__PURE__*/ proxyCustomElement(class Accordion extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.updateListener = () => this.updateState(false);
        this.setItemDefaults = () => {
            const ionItem = this.getSlottedHeaderIonItem();
            if (!ionItem) {
                return;
            }
            /**
             * For a11y purposes, we make
             * the ion-item a button so users
             * can tab to it and use keyboard
             * navigation to get around.
             */
            ionItem.button = true;
            ionItem.detail = false;
            /**
             * By default, the lines in an
             * item should be full here, but
             * only do that if a user has
             * not explicitly overridden them
             */
            if (ionItem.lines === undefined) {
                ionItem.lines = 'full';
            }
        };
        this.getSlottedHeaderIonItem = () => {
            const { headerEl } = this;
            if (!headerEl) {
                return;
            }
            /**
             * Get the first ion-item
             * slotted in the header slot
             */
            const slot = headerEl.querySelector('slot');
            if (!slot) {
                return;
            }
            // This is not defined in unit tests
            if (slot.assignedElements === undefined)
                return;
            return slot.assignedElements().find((el) => el.tagName === 'ION-ITEM');
        };
        this.setAria = (expanded = false) => {
            const ionItem = this.getSlottedHeaderIonItem();
            if (!ionItem) {
                return;
            }
            /**
             * Get the native <button> element inside of
             * ion-item because that is what will be focused
             */
            const root = getElementRoot(ionItem);
            const button = root.querySelector('button');
            if (!button) {
                return;
            }
            button.setAttribute('aria-expanded', `${expanded}`);
        };
        this.slotToggleIcon = () => {
            const ionItem = this.getSlottedHeaderIonItem();
            if (!ionItem) {
                return;
            }
            const { toggleIconSlot, toggleIcon } = this;
            /**
             * Check if there already is a toggle icon.
             * If so, do not add another one.
             */
            const existingToggleIcon = ionItem.querySelector('.ion-accordion-toggle-icon');
            if (existingToggleIcon) {
                return;
            }
            const iconEl = document.createElement('ion-icon');
            iconEl.slot = toggleIconSlot;
            iconEl.lazy = false;
            iconEl.classList.add('ion-accordion-toggle-icon');
            iconEl.icon = toggleIcon;
            iconEl.setAttribute('aria-hidden', 'true');
            ionItem.appendChild(iconEl);
        };
        this.expandAccordion = (initialUpdate = false) => {
            const { contentEl, contentElWrapper } = this;
            if (initialUpdate || contentEl === undefined || contentElWrapper === undefined) {
                this.state = 4 /* AccordionState.Expanded */;
                return;
            }
            if (this.state === 4 /* AccordionState.Expanded */) {
                return;
            }
            if (this.currentRaf !== undefined) {
                cancelAnimationFrame(this.currentRaf);
            }
            if (this.shouldAnimate()) {
                raf(() => {
                    this.state = 8 /* AccordionState.Expanding */;
                    this.currentRaf = raf(async () => {
                        const contentHeight = contentElWrapper.offsetHeight;
                        const waitForTransition = transitionEndAsync(contentEl, 2000);
                        contentEl.style.setProperty('max-height', `${contentHeight}px`);
                        await waitForTransition;
                        this.state = 4 /* AccordionState.Expanded */;
                        contentEl.style.removeProperty('max-height');
                    });
                });
            }
            else {
                this.state = 4 /* AccordionState.Expanded */;
            }
        };
        this.collapseAccordion = (initialUpdate = false) => {
            const { contentEl } = this;
            if (initialUpdate || contentEl === undefined) {
                this.state = 1 /* AccordionState.Collapsed */;
                return;
            }
            if (this.state === 1 /* AccordionState.Collapsed */) {
                return;
            }
            if (this.currentRaf !== undefined) {
                cancelAnimationFrame(this.currentRaf);
            }
            if (this.shouldAnimate()) {
                this.currentRaf = raf(async () => {
                    const contentHeight = contentEl.offsetHeight;
                    contentEl.style.setProperty('max-height', `${contentHeight}px`);
                    raf(async () => {
                        const waitForTransition = transitionEndAsync(contentEl, 2000);
                        this.state = 2 /* AccordionState.Collapsing */;
                        await waitForTransition;
                        this.state = 1 /* AccordionState.Collapsed */;
                        contentEl.style.removeProperty('max-height');
                    });
                });
            }
            else {
                this.state = 1 /* AccordionState.Collapsed */;
            }
        };
        /**
         * Helper function to determine if
         * something should animate.
         * If prefers-reduced-motion is set
         * then we should not animate, regardless
         * of what is set in the config.
         */
        this.shouldAnimate = () => {
            if (typeof window === 'undefined') {
                return false;
            }
            const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) {
                return false;
            }
            const animated = config.get('animated', true);
            if (!animated) {
                return false;
            }
            if (this.accordionGroupEl && !this.accordionGroupEl.animated) {
                return false;
            }
            return true;
        };
        this.updateState = async (initialUpdate = false) => {
            const accordionGroup = this.accordionGroupEl;
            const accordionValue = this.value;
            if (!accordionGroup) {
                return;
            }
            const value = accordionGroup.value;
            const shouldExpand = Array.isArray(value) ? value.includes(accordionValue) : value === accordionValue;
            if (shouldExpand) {
                this.expandAccordion(initialUpdate);
                this.isNext = this.isPrevious = false;
            }
            else {
                this.collapseAccordion(initialUpdate);
                /**
                 * When using popout or inset,
                 * the collapsed accordion items
                 * may need additional border radius
                 * applied. Check to see if the
                 * next or previous accordion is selected.
                 */
                const nextAccordion = this.getNextSibling();
                const nextAccordionValue = nextAccordion === null || nextAccordion === void 0 ? void 0 : nextAccordion.value;
                if (nextAccordionValue !== undefined) {
                    this.isPrevious = Array.isArray(value) ? value.includes(nextAccordionValue) : value === nextAccordionValue;
                }
                const previousAccordion = this.getPreviousSibling();
                const previousAccordionValue = previousAccordion === null || previousAccordion === void 0 ? void 0 : previousAccordion.value;
                if (previousAccordionValue !== undefined) {
                    this.isNext = Array.isArray(value) ? value.includes(previousAccordionValue) : value === previousAccordionValue;
                }
            }
        };
        this.getNextSibling = () => {
            if (!this.el) {
                return;
            }
            const nextSibling = this.el.nextElementSibling;
            if ((nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.tagName) !== 'ION-ACCORDION') {
                return;
            }
            return nextSibling;
        };
        this.getPreviousSibling = () => {
            if (!this.el) {
                return;
            }
            const previousSibling = this.el.previousElementSibling;
            if ((previousSibling === null || previousSibling === void 0 ? void 0 : previousSibling.tagName) !== 'ION-ACCORDION') {
                return;
            }
            return previousSibling;
        };
        this.state = 1 /* AccordionState.Collapsed */;
        this.isNext = false;
        this.isPrevious = false;
        this.value = `ion-accordion-${accordionIds++}`;
        this.disabled = false;
        this.readonly = false;
        this.toggleIcon = chevronDown;
        this.toggleIconSlot = 'end';
    }
    valueChanged() {
        this.updateState();
    }
    connectedCallback() {
        var _a;
        const accordionGroupEl = (this.accordionGroupEl = (_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('ion-accordion-group'));
        if (accordionGroupEl) {
            this.updateState(true);
            addEventListener(accordionGroupEl, 'ionValueChange', this.updateListener);
        }
    }
    disconnectedCallback() {
        const accordionGroupEl = this.accordionGroupEl;
        if (accordionGroupEl) {
            removeEventListener(accordionGroupEl, 'ionValueChange', this.updateListener);
        }
    }
    componentDidLoad() {
        this.setItemDefaults();
        this.slotToggleIcon();
        /**
         * We need to wait a tick because we
         * just set ionItem.button = true and
         * the button has not have been rendered yet.
         */
        raf(() => {
            /**
             * Set aria label on button inside of ion-item
             * once the inner content has been rendered.
             */
            const expanded = this.state === 4 /* AccordionState.Expanded */ || this.state === 8 /* AccordionState.Expanding */;
            this.setAria(expanded);
        });
    }
    toggleExpanded() {
        const { accordionGroupEl, disabled, readonly, value, state } = this;
        if (disabled || readonly)
            return;
        if (accordionGroupEl) {
            /**
             * Because the accordion group may or may
             * not allow multiple accordions open, we
             * need to request the toggling of this
             * accordion and the accordion group will
             * make the decision on whether or not
             * to allow it.
             */
            const expand = state === 1 /* AccordionState.Collapsed */ || state === 2 /* AccordionState.Collapsing */;
            accordionGroupEl.requestAccordionToggle(value, expand);
        }
    }
    render() {
        const { disabled, readonly } = this;
        const mode = getIonMode(this);
        const expanded = this.state === 4 /* AccordionState.Expanded */ || this.state === 8 /* AccordionState.Expanding */;
        const headerPart = expanded ? 'header expanded' : 'header';
        const contentPart = expanded ? 'content expanded' : 'content';
        this.setAria(expanded);
        return (h(Host, { key: '073e1d02c18dcbc20c68648426e87c14750c031d', class: {
                [mode]: true,
                'accordion-expanding': this.state === 8 /* AccordionState.Expanding */,
                'accordion-expanded': this.state === 4 /* AccordionState.Expanded */,
                'accordion-collapsing': this.state === 2 /* AccordionState.Collapsing */,
                'accordion-collapsed': this.state === 1 /* AccordionState.Collapsed */,
                'accordion-next': this.isNext,
                'accordion-previous': this.isPrevious,
                'accordion-disabled': disabled,
                'accordion-readonly': readonly,
                'accordion-animated': this.shouldAnimate(),
            } }, h("div", { key: '9b4cf326de8bb6b4033992903c0c1bfd7eea9bcc', onClick: () => this.toggleExpanded(), id: "header", part: headerPart, "aria-controls": "content", ref: (headerEl) => (this.headerEl = headerEl) }, h("slot", { key: '464c32a37f64655eacf4218284214f5f30b14a1e', name: "header" })), h("div", { key: '8bb52e6a62d7de0106b253201a89a32e79d9a594', id: "content", part: contentPart, role: "region", "aria-labelledby": "header", ref: (contentEl) => (this.contentEl = contentEl) }, h("div", { key: '1d9dfd952ad493754aaeea7a8f625b33c2dd90a0', id: "content-wrapper", ref: (contentElWrapper) => (this.contentElWrapper = contentElWrapper) }, h("slot", { key: '970dfbc55a612d739d0ca3b7b1a08e5c96d0c479', name: "content" })))));
    }
    static get delegatesFocus() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return {
        ios: IonAccordionIosStyle0,
        md: IonAccordionMdStyle0
    }; }
}, [49, "ion-accordion", {
        "value": [1],
        "disabled": [4],
        "readonly": [4],
        "toggleIcon": [1, "toggle-icon"],
        "toggleIconSlot": [1, "toggle-icon-slot"],
        "state": [32],
        "isNext": [32],
        "isPrevious": [32]
    }, undefined, {
        "value": ["valueChanged"]
    }]);
let accordionIds = 0;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-accordion", "ion-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Accordion);
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

const IonAccordion = Accordion;
const defineCustomElement = defineCustomElement$1;

export { IonAccordion, defineCustomElement };

//# sourceMappingURL=ion-accordion.js.map