'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const notchController = require('./notch-controller-24d4b472.js');
const compareWithUtils = require('./compare-with-utils-e56f9a8e.js');
const helpers = require('./helpers-0f03deef.js');
const overlays = require('./overlays-67c5782c.js');
const dir = require('./dir-b7559e1f.js');
const theme = require('./theme-76a542db.js');
const watchOptions = require('./watch-options-b75d9664.js');
const index$1 = require('./index-767d9937.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');
require('./index-a370c7e1.js');
require('./hardware-back-button-e87df2c5.js');
require('./framework-delegate-ea328c64.js');
require('./gesture-controller-c77f93be.js');
require('./index-7d4ba1aa.js');

const selectIosCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:flex;position:relative;flex-grow:1;align-items:center;height:inherit;min-height:inherit;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;box-sizing:border-box}.select-wrapper .select-placeholder{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:flex;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:flex;align-items:center;max-width:200px;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:flex;align-items:center;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{justify-content:space-between}:host(.select-justify-start) .select-wrapper{justify-content:start}:host(.select-justify-end) .select-wrapper{justify-content:end}:host(.select-label-placement-start) .select-wrapper{flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{flex-direction:column;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){flex-shrink:0}::slotted([slot=start]:last-of-type){margin-inline-end:16px;margin-inline-start:0}::slotted([slot=end]:first-of-type){margin-inline-start:16px;margin-inline-end:0}:host{--highlight-height:0px}.select-icon{width:1.125rem;height:1.125rem;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 1.125rem - 4px)}:host(.select-disabled){opacity:0.3}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}";
const IonSelectIosStyle0 = selectIosCss;

const selectMdCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:flex;position:relative;flex-grow:1;align-items:center;height:inherit;min-height:inherit;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;box-sizing:border-box}.select-wrapper .select-placeholder{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:flex;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:flex;align-items:center;max-width:200px;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:flex;align-items:center;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{justify-content:space-between}:host(.select-justify-start) .select-wrapper{justify-content:start}:host(.select-justify-end) .select-wrapper{justify-content:end}:host(.select-label-placement-start) .select-wrapper{flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{flex-direction:column;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){flex-shrink:0}::slotted([slot=start]:last-of-type){margin-inline-end:16px;margin-inline-start:0}::slotted([slot=end]:first-of-type){margin-inline-start:16px;margin-inline-end:0}:host(.select-fill-solid){--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-solid) .select-wrapper{border-bottom:var(--border-width) var(--border-style) var(--border-color)}:host(.has-focus.select-fill-solid.ion-valid),:host(.select-fill-solid.ion-touched.ion-invalid){--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-bottom{border-top:none}@media (any-hover: hover){:host(.select-fill-solid:hover){--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-solid.select-expanded),:host(.select-fill-solid.ion-focused){--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}:host(.select-fill-solid) .select-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}:host(.label-floating.select-fill-solid) .label-text-wrapper{max-width:calc(100% / 0.75)}:host(.select-fill-outline){--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-outline.select-shape-round){--border-radius:28px;--padding-start:32px;--padding-end:32px}:host(.has-focus.select-fill-outline.ion-valid),:host(.select-fill-outline.ion-touched.ion-invalid){--border-color:var(--highlight-color)}@media (any-hover: hover){:host(.select-fill-outline:hover){--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-outline.select-expanded),:host(.select-fill-outline.ion-focused){--border-width:var(--highlight-height);--border-color:var(--highlight-color)}:host(.select-fill-outline) .select-bottom{border-top:none}:host(.select-fill-outline) .select-wrapper{border-bottom:none}:host(.select-ltr.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-fill-outline.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-fill-outline.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-floating) .label-text-wrapper{position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .label-text-wrapper{position:relative;z-index:1}:host(.label-floating.select-fill-outline) .label-text-wrapper{transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}:host(.select-fill-outline.select-label-placement-stacked) select,:host(.select-fill-outline.select-label-placement-floating) select{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}:host(.select-fill-outline) .select-outline-container{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;width:100%;height:100%}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-end{pointer-events:none}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-notch,:host(.select-fill-outline) .select-outline-end{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color);box-sizing:border-box}:host(.select-fill-outline) .select-outline-notch{max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .notch-spacer{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none}:host(.select-fill-outline) .select-outline-start{-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-start{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius)}:host(.select-fill-outline) .select-outline-start{width:calc(var(--padding-start) - 4px)}:host(.select-fill-outline) .select-outline-end{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-end{border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px}:host(.select-fill-outline) .select-outline-end{flex-grow:1}:host(.label-floating.select-fill-outline) .select-outline-notch{border-top:none}:host{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--highlight-height:2px}.select-icon{width:0.8125rem;transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray))}:host(.select-label-placement-floating.select-expanded) .label-text-wrapper,:host(.select-label-placement-floating.ion-focused) .label-text-wrapper,:host(.select-label-placement-stacked.select-expanded) .label-text-wrapper,:host(.select-label-placement-stacked.ion-focused) .label-text-wrapper{color:var(--highlight-color)}:host(.has-focus.select-label-placement-floating.ion-valid) .label-text-wrapper,:host(.select-label-placement-floating.ion-touched.ion-invalid) .label-text-wrapper,:host(.has-focus.select-label-placement-stacked.ion-valid) .label-text-wrapper,:host(.select-label-placement-stacked.ion-touched.ion-invalid) .label-text-wrapper{color:var(--highlight-color)}.select-highlight{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);transform:scale(0);transition:transform 200ms;background:var(--highlight-color)}.select-highlight{inset-inline-start:0}:host(.select-expanded) .select-highlight,:host(.ion-focused) .select-highlight{transform:scale(1)}:host(.in-item) .select-highlight{bottom:0}:host(.in-item) .select-highlight{inset-inline-start:0}:host(.select-expanded:not(.has-expanded-icon)) .select-icon{transform:rotate(180deg)}:host(.select-expanded) .select-wrapper .select-icon,:host(.has-focus.ion-valid) .select-wrapper .select-icon,:host(.ion-touched.ion-invalid) .select-wrapper .select-icon,:host(.ion-focused) .select-wrapper .select-icon{color:var(--highlight-color)}:host(.select-shape-round){--border-radius:16px}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 0.8125rem - 4px)}:host(.select-disabled){opacity:0.38}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}";
const IonSelectMdStyle0 = selectMdCss;

const Select = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionChange = index.createEvent(this, "ionChange", 7);
        this.ionCancel = index.createEvent(this, "ionCancel", 7);
        this.ionDismiss = index.createEvent(this, "ionDismiss", 7);
        this.ionFocus = index.createEvent(this, "ionFocus", 7);
        this.ionBlur = index.createEvent(this, "ionBlur", 7);
        this.ionStyle = index.createEvent(this, "ionStyle", 7);
        this.inputId = `ion-sel-${selectIds++}`;
        this.inheritedAttributes = {};
        this.onClick = (ev) => {
            const target = ev.target;
            const closestSlot = target.closest('[slot="start"], [slot="end"]');
            if (target === this.el || closestSlot === null) {
                this.setFocus();
                this.open(ev);
            }
            else {
                /**
                 * Prevent clicks to the start/end slots from opening the select.
                 * We ensure the target isn't this element in case the select is slotted
                 * in, for example, an item. This would prevent the select from ever
                 * being opened since the element itself has slot="start"/"end".
                 *
                 * Clicking a slotted element also causes a click
                 * on the <label> element (since it wraps the slots).
                 * Clicking <label> dispatches another click event on
                 * the native form control that then bubbles up to this
                 * listener. This additional event targets the host
                 * element, so the select overlay is opened.
                 *
                 * When the slotted elements are clicked (and therefore
                 * the ancestor <label> element) we want to prevent the label
                 * from dispatching another click event.
                 *
                 * Do not call stopPropagation() because this will cause
                 * click handlers on the slotted elements to never fire in React.
                 * When developers do onClick in React a native "click" listener
                 * is added on the root element, not the slotted element. When that
                 * native click listener fires, React then dispatches the synthetic
                 * click event on the slotted element. However, if stopPropagation
                 * is called then the native click event will never bubble up
                 * to the root element.
                 */
                ev.preventDefault();
            }
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.isExpanded = false;
        this.cancelText = 'Cancel';
        this.color = undefined;
        this.compareWith = undefined;
        this.disabled = false;
        this.fill = undefined;
        this.interface = 'alert';
        this.interfaceOptions = {};
        this.justify = 'space-between';
        this.label = undefined;
        this.labelPlacement = 'start';
        this.multiple = false;
        this.name = this.inputId;
        this.okText = 'OK';
        this.placeholder = undefined;
        this.selectedText = undefined;
        this.toggleIcon = undefined;
        this.expandedIcon = undefined;
        this.shape = undefined;
        this.value = undefined;
    }
    styleChanged() {
        this.emitStyle();
    }
    setValue(value) {
        this.value = value;
        this.ionChange.emit({ value });
    }
    componentWillLoad() {
        this.inheritedAttributes = helpers.inheritAttributes(this.el, ['aria-label']);
    }
    async connectedCallback() {
        const { el } = this;
        this.notchController = notchController.createNotchController(el, () => this.notchSpacerEl, () => this.labelSlot);
        this.updateOverlayOptions();
        this.emitStyle();
        this.mutationO = watchOptions.watchForOptions(this.el, 'ion-select-option', async () => {
            this.updateOverlayOptions();
            /**
             * We need to re-render the component
             * because one of the new ion-select-option
             * elements may match the value. In this case,
             * the rendered selected text should be updated.
             */
            index.forceUpdate(this);
        });
    }
    disconnectedCallback() {
        if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
        }
        if (this.notchController) {
            this.notchController.destroy();
            this.notchController = undefined;
        }
    }
    /**
     * Open the select overlay. The overlay is either an alert, action sheet, or popover,
     * depending on the `interface` property on the `ion-select`.
     *
     * @param event The user interface event that called the open.
     */
    async open(event) {
        if (this.disabled || this.isExpanded) {
            return undefined;
        }
        this.isExpanded = true;
        const overlay = (this.overlay = await this.createOverlay(event));
        overlay.onDidDismiss().then(() => {
            this.overlay = undefined;
            this.isExpanded = false;
            this.ionDismiss.emit();
            this.setFocus();
        });
        await overlay.present();
        // focus selected option for popovers
        if (this.interface === 'popover') {
            const indexOfSelected = this.childOpts.map((o) => o.value).indexOf(this.value);
            if (indexOfSelected > -1) {
                const selectedItem = overlay.querySelector(`.select-interface-option:nth-child(${indexOfSelected + 1})`);
                if (selectedItem) {
                    helpers.focusVisibleElement(selectedItem);
                    /**
                     * Browsers such as Firefox do not
                     * correctly delegate focus when manually
                     * focusing an element with delegatesFocus.
                     * We work around this by manually focusing
                     * the interactive element.
                     * ion-radio and ion-checkbox are the only
                     * elements that ion-select-popover uses, so
                     * we only need to worry about those two components
                     * when focusing.
                     */
                    const interactiveEl = selectedItem.querySelector('ion-radio, ion-checkbox');
                    if (interactiveEl) {
                        interactiveEl.focus();
                    }
                }
            }
            else {
                /**
                 * If no value is set then focus the first enabled option.
                 */
                const firstEnabledOption = overlay.querySelector('ion-radio:not(.radio-disabled), ion-checkbox:not(.checkbox-disabled)');
                if (firstEnabledOption) {
                    helpers.focusVisibleElement(firstEnabledOption.closest('ion-item'));
                    /**
                     * Focus the option for the same reason as we do above.
                     */
                    firstEnabledOption.focus();
                }
            }
        }
        return overlay;
    }
    createOverlay(ev) {
        let selectInterface = this.interface;
        if (selectInterface === 'action-sheet' && this.multiple) {
            console.warn(`Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover' && !ev) {
            console.warn(`Select interface cannot be a "${selectInterface}" without passing an event. Using the "alert" interface instead.`);
            selectInterface = 'alert';
        }
        if (selectInterface === 'action-sheet') {
            return this.openActionSheet();
        }
        if (selectInterface === 'popover') {
            return this.openPopover(ev);
        }
        return this.openAlert();
    }
    updateOverlayOptions() {
        const overlay = this.overlay;
        if (!overlay) {
            return;
        }
        const childOpts = this.childOpts;
        const value = this.value;
        switch (this.interface) {
            case 'action-sheet':
                overlay.buttons = this.createActionSheetButtons(childOpts, value);
                break;
            case 'popover':
                const popover = overlay.querySelector('ion-select-popover');
                if (popover) {
                    popover.options = this.createPopoverOptions(childOpts, value);
                }
                break;
            case 'alert':
                const inputType = this.multiple ? 'checkbox' : 'radio';
                overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
                break;
        }
    }
    createActionSheetButtons(data, selectValue) {
        const actionSheetButtons = data.map((option) => {
            const value = getOptionValue(option);
            // Remove hydrated before copying over classes
            const copyClasses = Array.from(option.classList)
                .filter((cls) => cls !== 'hydrated')
                .join(' ');
            const optClass = `${OPTION_CLASS} ${copyClasses}`;
            return {
                role: compareWithUtils.isOptionSelected(selectValue, value, this.compareWith) ? 'selected' : '',
                text: option.textContent,
                cssClass: optClass,
                handler: () => {
                    this.setValue(value);
                },
            };
        });
        // Add "cancel" button
        actionSheetButtons.push({
            text: this.cancelText,
            role: 'cancel',
            handler: () => {
                this.ionCancel.emit();
            },
        });
        return actionSheetButtons;
    }
    createAlertInputs(data, inputType, selectValue) {
        const alertInputs = data.map((option) => {
            const value = getOptionValue(option);
            // Remove hydrated before copying over classes
            const copyClasses = Array.from(option.classList)
                .filter((cls) => cls !== 'hydrated')
                .join(' ');
            const optClass = `${OPTION_CLASS} ${copyClasses}`;
            return {
                type: inputType,
                cssClass: optClass,
                label: option.textContent || '',
                value,
                checked: compareWithUtils.isOptionSelected(selectValue, value, this.compareWith),
                disabled: option.disabled,
            };
        });
        return alertInputs;
    }
    createPopoverOptions(data, selectValue) {
        const popoverOptions = data.map((option) => {
            const value = getOptionValue(option);
            // Remove hydrated before copying over classes
            const copyClasses = Array.from(option.classList)
                .filter((cls) => cls !== 'hydrated')
                .join(' ');
            const optClass = `${OPTION_CLASS} ${copyClasses}`;
            return {
                text: option.textContent || '',
                cssClass: optClass,
                value,
                checked: compareWithUtils.isOptionSelected(selectValue, value, this.compareWith),
                disabled: option.disabled,
                handler: (selected) => {
                    this.setValue(selected);
                    if (!this.multiple) {
                        this.close();
                    }
                },
            };
        });
        return popoverOptions;
    }
    async openPopover(ev) {
        const { fill, labelPlacement } = this;
        const interfaceOptions = this.interfaceOptions;
        const mode = ionicGlobal.getIonMode(this);
        const showBackdrop = mode === 'md' ? false : true;
        const multiple = this.multiple;
        const value = this.value;
        let event = ev;
        let size = 'auto';
        const hasFloatingOrStackedLabel = labelPlacement === 'floating' || labelPlacement === 'stacked';
        /**
         * The popover should take up the full width
         * when using a fill in MD mode or if the
         * label is floating/stacked.
         */
        if (hasFloatingOrStackedLabel || (mode === 'md' && fill !== undefined)) {
            size = 'cover';
            /**
             * Otherwise the popover
             * should be positioned relative
             * to the native element.
             */
        }
        else {
            event = Object.assign(Object.assign({}, ev), { detail: {
                    ionShadowTarget: this.nativeWrapperEl,
                } });
        }
        const popoverOpts = Object.assign(Object.assign({ mode,
            event, alignment: 'center', size,
            showBackdrop }, interfaceOptions), { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], componentProps: {
                header: interfaceOptions.header,
                subHeader: interfaceOptions.subHeader,
                message: interfaceOptions.message,
                multiple,
                value,
                options: this.createPopoverOptions(this.childOpts, value),
            } });
        return overlays.popoverController.create(popoverOpts);
    }
    async openActionSheet() {
        const mode = ionicGlobal.getIonMode(this);
        const interfaceOptions = this.interfaceOptions;
        const actionSheetOpts = Object.assign(Object.assign({ mode }, interfaceOptions), { buttons: this.createActionSheetButtons(this.childOpts, this.value), cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
        return overlays.actionSheetController.create(actionSheetOpts);
    }
    async openAlert() {
        const interfaceOptions = this.interfaceOptions;
        const inputType = this.multiple ? 'checkbox' : 'radio';
        const mode = ionicGlobal.getIonMode(this);
        const alertOpts = Object.assign(Object.assign({ mode }, interfaceOptions), { header: interfaceOptions.header ? interfaceOptions.header : this.labelText, inputs: this.createAlertInputs(this.childOpts, inputType, this.value), buttons: [
                {
                    text: this.cancelText,
                    role: 'cancel',
                    handler: () => {
                        this.ionCancel.emit();
                    },
                },
                {
                    text: this.okText,
                    handler: (selectedValues) => {
                        this.setValue(selectedValues);
                    },
                },
            ], cssClass: [
                'select-alert',
                interfaceOptions.cssClass,
                this.multiple ? 'multiple-select-alert' : 'single-select-alert',
            ] });
        return overlays.alertController.create(alertOpts);
    }
    /**
     * Close the select interface.
     */
    close() {
        if (!this.overlay) {
            return Promise.resolve(false);
        }
        return this.overlay.dismiss();
    }
    hasValue() {
        return this.getText() !== '';
    }
    get childOpts() {
        return Array.from(this.el.querySelectorAll('ion-select-option'));
    }
    /**
     * Returns any plaintext associated with
     * the label (either prop or slot).
     * Note: This will not return any custom
     * HTML. Use the `hasLabel` getter if you
     * want to know if any slotted label content
     * was passed.
     */
    get labelText() {
        const { label } = this;
        if (label !== undefined) {
            return label;
        }
        const { labelSlot } = this;
        if (labelSlot !== null) {
            return labelSlot.textContent;
        }
        return;
    }
    getText() {
        const selectedText = this.selectedText;
        if (selectedText != null && selectedText !== '') {
            return selectedText;
        }
        return generateText(this.childOpts, this.value, this.compareWith);
    }
    setFocus() {
        if (this.focusEl) {
            this.focusEl.focus();
        }
    }
    emitStyle() {
        const { disabled } = this;
        const style = {
            'interactive-disabled': disabled,
        };
        this.ionStyle.emit(style);
    }
    renderLabel() {
        const { label } = this;
        return (index.h("div", { class: {
                'label-text-wrapper': true,
                'label-text-wrapper-hidden': !this.hasLabel,
            }, part: "label" }, label === undefined ? index.h("slot", { name: "label" }) : index.h("div", { class: "label-text" }, label)));
    }
    componentDidRender() {
        var _a;
        (_a = this.notchController) === null || _a === void 0 ? void 0 : _a.calculateNotchWidth();
    }
    /**
     * Gets any content passed into the `label` slot,
     * not the <slot> definition.
     */
    get labelSlot() {
        return this.el.querySelector('[slot="label"]');
    }
    /**
     * Returns `true` if label content is provided
     * either by a prop or a content. If you want
     * to get the plaintext value of the label use
     * the `labelText` getter instead.
     */
    get hasLabel() {
        return this.label !== undefined || this.labelSlot !== null;
    }
    /**
     * Renders the border container
     * when fill="outline".
     */
    renderLabelContainer() {
        const mode = ionicGlobal.getIonMode(this);
        const hasOutlineFill = mode === 'md' && this.fill === 'outline';
        if (hasOutlineFill) {
            /**
             * The outline fill has a special outline
             * that appears around the select and the label.
             * Certain stacked and floating label placements cause the
             * label to translate up and create a "cut out"
             * inside of that border by using the notch-spacer element.
             */
            return [
                index.h("div", { class: "select-outline-container" }, index.h("div", { class: "select-outline-start" }), index.h("div", { class: {
                        'select-outline-notch': true,
                        'select-outline-notch-hidden': !this.hasLabel,
                    } }, index.h("div", { class: "notch-spacer", "aria-hidden": "true", ref: (el) => (this.notchSpacerEl = el) }, this.label)), index.h("div", { class: "select-outline-end" })),
                this.renderLabel(),
            ];
        }
        /**
         * If not using the outline style,
         * we can render just the label.
         */
        return this.renderLabel();
    }
    /**
     * Renders either the placeholder
     * or the selected values based on
     * the state of the select.
     */
    renderSelectText() {
        const { placeholder } = this;
        const displayValue = this.getText();
        let addPlaceholderClass = false;
        let selectText = displayValue;
        if (selectText === '' && placeholder !== undefined) {
            selectText = placeholder;
            addPlaceholderClass = true;
        }
        const selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass,
        };
        const textPart = addPlaceholderClass ? 'placeholder' : 'text';
        return (index.h("div", { "aria-hidden": "true", class: selectTextClasses, part: textPart }, selectText));
    }
    /**
     * Renders the chevron icon
     * next to the select text.
     */
    renderSelectIcon() {
        const mode = ionicGlobal.getIonMode(this);
        const { isExpanded, toggleIcon, expandedIcon } = this;
        let icon;
        if (isExpanded && expandedIcon !== undefined) {
            icon = expandedIcon;
        }
        else {
            const defaultIcon = mode === 'ios' ? index$1.chevronExpand : index$1.caretDownSharp;
            icon = toggleIcon !== null && toggleIcon !== void 0 ? toggleIcon : defaultIcon;
        }
        return index.h("ion-icon", { class: "select-icon", part: "icon", "aria-hidden": "true", icon: icon });
    }
    get ariaLabel() {
        var _a;
        const { placeholder, inheritedAttributes } = this;
        const displayValue = this.getText();
        // The aria label should be preferred over visible text if both are specified
        const definedLabel = (_a = inheritedAttributes['aria-label']) !== null && _a !== void 0 ? _a : this.labelText;
        /**
         * If developer has specified a placeholder
         * and there is nothing selected, the selectText
         * should have the placeholder value.
         */
        let renderedLabel = displayValue;
        if (renderedLabel === '' && placeholder !== undefined) {
            renderedLabel = placeholder;
        }
        /**
         * If there is a developer-defined label,
         * then we need to concatenate the developer label
         * string with the current current value.
         * The label for the control should be read
         * before the values of the control.
         */
        if (definedLabel !== undefined) {
            renderedLabel = renderedLabel === '' ? definedLabel : `${definedLabel}, ${renderedLabel}`;
        }
        return renderedLabel;
    }
    renderListbox() {
        const { disabled, inputId, isExpanded } = this;
        return (index.h("button", { disabled: disabled, id: inputId, "aria-label": this.ariaLabel, "aria-haspopup": "dialog", "aria-expanded": `${isExpanded}`, onFocus: this.onFocus, onBlur: this.onBlur, ref: (focusEl) => (this.focusEl = focusEl) }));
    }
    render() {
        const { disabled, el, isExpanded, expandedIcon, labelPlacement, justify, placeholder, fill, shape, name, value } = this;
        const mode = ionicGlobal.getIonMode(this);
        const hasFloatingOrStackedLabel = labelPlacement === 'floating' || labelPlacement === 'stacked';
        const justifyEnabled = !hasFloatingOrStackedLabel;
        const rtl = dir.isRTL(el) ? 'rtl' : 'ltr';
        const inItem = theme.hostContext('ion-item', this.el);
        const shouldRenderHighlight = mode === 'md' && fill !== 'outline' && !inItem;
        const hasValue = this.hasValue();
        const hasStartEndSlots = el.querySelector('[slot="start"], [slot="end"]') !== null;
        helpers.renderHiddenInput(true, el, name, parseValue(value), disabled);
        /**
         * If the label is stacked, it should always sit above the select.
         * For floating labels, the label should move above the select if
         * the select has a value, is open, or has anything in either
         * the start or end slot.
         *
         * If there is content in the start slot, the label would overlap
         * it if not forced to float. This is also applied to the end slot
         * because with the default or solid fills, the select is not
         * vertically centered in the container, but the label is. This
         * causes the slots and label to appear vertically offset from each
         * other when the label isn't floating above the input. This doesn't
         * apply to the outline fill, but this was not accounted for to keep
         * things consistent.
         *
         * TODO(FW-5592): Remove hasStartEndSlots condition
         */
        const labelShouldFloat = labelPlacement === 'stacked' || (labelPlacement === 'floating' && (hasValue || isExpanded || hasStartEndSlots));
        return (index.h(index.Host, { key: '5a1b82be3f737a2ce5b87c5cd716f898a902ab10', onClick: this.onClick, class: theme.createColorClasses(this.color, {
                [mode]: true,
                'in-item': inItem,
                'in-item-color': theme.hostContext('ion-item.ion-color', el),
                'select-disabled': disabled,
                'select-expanded': isExpanded,
                'has-expanded-icon': expandedIcon !== undefined,
                'has-value': hasValue,
                'label-floating': labelShouldFloat,
                'has-placeholder': placeholder !== undefined,
                'ion-focusable': true,
                [`select-${rtl}`]: true,
                [`select-fill-${fill}`]: fill !== undefined,
                [`select-justify-${justify}`]: justifyEnabled,
                [`select-shape-${shape}`]: shape !== undefined,
                [`select-label-placement-${labelPlacement}`]: true,
            }) }, index.h("label", { key: '79a6e99e38fa3f72d876f4b8ac0077a9fbf4bd2d', class: "select-wrapper", id: "select-label" }, this.renderLabelContainer(), index.h("div", { key: 'e18ac0b4a35e2cdde858347a9b116218533cd532', class: "select-wrapper-inner" }, index.h("slot", { key: 'cc194f718ef9363d3496531f0d9259e33b66f4d8', name: "start" }), index.h("div", { key: '833c5544e453c0ac543f5d4898d0f492caac405a', class: "native-wrapper", ref: (el) => (this.nativeWrapperEl = el), part: "container" }, this.renderSelectText(), this.renderListbox()), index.h("slot", { key: 'adaa4064c9ad01ef7a452308680eb09dc3ad60ff', name: "end" }), !hasFloatingOrStackedLabel && this.renderSelectIcon()), hasFloatingOrStackedLabel && this.renderSelectIcon(), shouldRenderHighlight && index.h("div", { key: 'd47a6ef0a6192c5f098973aa517aad2aa9ae8dfc', class: "select-highlight" }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": ["styleChanged"],
        "isExpanded": ["styleChanged"],
        "placeholder": ["styleChanged"],
        "value": ["styleChanged"]
    }; }
};
const getOptionValue = (el) => {
    const value = el.value;
    return value === undefined ? el.textContent || '' : value;
};
const parseValue = (value) => {
    if (value == null) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.join(',');
    }
    return value.toString();
};
const generateText = (opts, value, compareWith) => {
    if (value === undefined) {
        return '';
    }
    if (Array.isArray(value)) {
        return value
            .map((v) => textForValue(opts, v, compareWith))
            .filter((opt) => opt !== null)
            .join(', ');
    }
    else {
        return textForValue(opts, value, compareWith) || '';
    }
};
const textForValue = (opts, value, compareWith) => {
    const selectOpt = opts.find((opt) => {
        return compareWithUtils.compareOptions(value, getOptionValue(opt), compareWith);
    });
    return selectOpt ? selectOpt.textContent : null;
};
let selectIds = 0;
const OPTION_CLASS = 'select-interface-option';
Select.style = {
    ios: IonSelectIosStyle0,
    md: IonSelectMdStyle0
};

exports.ion_select = Select;

//# sourceMappingURL=ion-select.cjs.entry.js.map