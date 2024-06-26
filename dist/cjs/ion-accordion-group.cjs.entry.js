'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const index$1 = require('./index-7d4ba1aa.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const accordionGroupIosCss = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}";
const IonAccordionGroupIosStyle0 = accordionGroupIosCss;

const accordionGroupMdCss = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-end-end-radius:6px;border-end-start-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-start-start-radius:6px;border-start-end-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
const IonAccordionGroupMdStyle0 = accordionGroupMdCss;

const AccordionGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionChange = index.createEvent(this, "ionChange", 7);
        this.ionValueChange = index.createEvent(this, "ionValueChange", 7);
        this.animated = true;
        this.multiple = undefined;
        this.value = undefined;
        this.disabled = false;
        this.readonly = false;
        this.expand = 'compact';
    }
    valueChanged() {
        const { value, multiple } = this;
        if (!multiple && Array.isArray(value)) {
            /**
             * We do some processing on the `value` array so
             * that it looks more like an array when logged to
             * the console.
             * Example given ['a', 'b']
             * Default toString() behavior: a,b
             * Custom behavior: ['a', 'b']
             */
            index$1.printIonWarning(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(', ')}]
`, this.el);
        }
        /**
         * Do not use `value` here as that will be
         * not account for the adjustment we make above.
         */
        this.ionValueChange.emit({ value: this.value });
    }
    async disabledChanged() {
        const { disabled } = this;
        const accordions = await this.getAccordions();
        for (const accordion of accordions) {
            accordion.disabled = disabled;
        }
    }
    async readonlyChanged() {
        const { readonly } = this;
        const accordions = await this.getAccordions();
        for (const accordion of accordions) {
            accordion.readonly = readonly;
        }
    }
    async onKeydown(ev) {
        const activeElement = document.activeElement;
        if (!activeElement) {
            return;
        }
        /**
         * Make sure focus is in the header, not the body, of the accordion. This ensures
         * that if there are any interactable elements in the body, their keyboard
         * interaction doesn't get stolen by the accordion. Example: using up/down keys
         * in ion-textarea.
         */
        const activeAccordionHeader = activeElement.closest('ion-accordion [slot="header"]');
        if (!activeAccordionHeader) {
            return;
        }
        const accordionEl = activeElement.tagName === 'ION-ACCORDION' ? activeElement : activeElement.closest('ion-accordion');
        if (!accordionEl) {
            return;
        }
        const closestGroup = accordionEl.closest('ion-accordion-group');
        if (closestGroup !== this.el) {
            return;
        }
        // If the active accordion is not in the current array of accordions, do not do anything
        const accordions = await this.getAccordions();
        const startingIndex = accordions.findIndex((a) => a === accordionEl);
        if (startingIndex === -1) {
            return;
        }
        let accordion;
        if (ev.key === 'ArrowDown') {
            accordion = this.findNextAccordion(accordions, startingIndex);
        }
        else if (ev.key === 'ArrowUp') {
            accordion = this.findPreviousAccordion(accordions, startingIndex);
        }
        else if (ev.key === 'Home') {
            accordion = accordions[0];
        }
        else if (ev.key === 'End') {
            accordion = accordions[accordions.length - 1];
        }
        if (accordion !== undefined && accordion !== activeElement) {
            accordion.focus();
        }
    }
    async componentDidLoad() {
        if (this.disabled) {
            this.disabledChanged();
        }
        if (this.readonly) {
            this.readonlyChanged();
        }
        /**
         * When binding values in frameworks such as Angular
         * it is possible for the value to be set after the Web Component
         * initializes but before the value watcher is set up in Stencil.
         * As a result, the watcher callback may not be fired.
         * We work around this by manually calling the watcher
         * callback when the component has loaded and the watcher
         * is configured.
         */
        this.valueChanged();
    }
    /**
     * Sets the value property and emits ionChange.
     * This should only be called when the user interacts
     * with the accordion and not for any update
     * to the value property. The exception is when
     * the app sets the value of a single-select
     * accordion group to an array.
     */
    setValue(accordionValue) {
        const value = (this.value = accordionValue);
        this.ionChange.emit({ value });
    }
    /**
     * This method is used to ensure that the value
     * of ion-accordion-group is being set in a valid
     * way. This method should only be called in
     * response to a user generated action.
     * @internal
     */
    async requestAccordionToggle(accordionValue, accordionExpand) {
        const { multiple, value, readonly, disabled } = this;
        if (readonly || disabled) {
            return;
        }
        if (accordionExpand) {
            /**
             * If group accepts multiple values
             * check to see if value is already in
             * in values array. If not, add it
             * to the array.
             */
            if (multiple) {
                const groupValue = value !== null && value !== void 0 ? value : [];
                const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
                const valueExists = processedValue.find((v) => v === accordionValue);
                if (valueExists === undefined && accordionValue !== undefined) {
                    this.setValue([...processedValue, accordionValue]);
                }
            }
            else {
                this.setValue(accordionValue);
            }
        }
        else {
            /**
             * If collapsing accordion, either filter the value
             * out of the values array or unset the value.
             */
            if (multiple) {
                const groupValue = value !== null && value !== void 0 ? value : [];
                const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
                this.setValue(processedValue.filter((v) => v !== accordionValue));
            }
            else {
                this.setValue(undefined);
            }
        }
    }
    findNextAccordion(accordions, startingIndex) {
        const nextAccordion = accordions[startingIndex + 1];
        if (nextAccordion === undefined) {
            return accordions[0];
        }
        return nextAccordion;
    }
    findPreviousAccordion(accordions, startingIndex) {
        const prevAccordion = accordions[startingIndex - 1];
        if (prevAccordion === undefined) {
            return accordions[accordions.length - 1];
        }
        return prevAccordion;
    }
    /**
     * @internal
     */
    async getAccordions() {
        return Array.from(this.el.querySelectorAll(':scope > ion-accordion'));
    }
    render() {
        const { disabled, readonly, expand } = this;
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: 'ac2e26ac91c95d08172bd2b51daa7a711c21db9e', class: {
                [mode]: true,
                'accordion-group-disabled': disabled,
                'accordion-group-readonly': readonly,
                [`accordion-group-expand-${expand}`]: true,
            }, role: "presentation" }, index.h("slot", { key: '444adc2af5730897eba57095da046d6bdb5af70f' })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"],
        "disabled": ["disabledChanged"],
        "readonly": ["readonlyChanged"]
    }; }
};
AccordionGroup.style = {
    ios: IonAccordionGroupIosStyle0,
    md: IonAccordionGroupMdStyle0
};

exports.ion_accordion_group = AccordionGroup;

//# sourceMappingURL=ion-accordion-group.cjs.entry.js.map