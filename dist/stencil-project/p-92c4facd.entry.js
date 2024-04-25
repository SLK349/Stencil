import{r as e,d as t,h as l,H as i,e as o,f as s}from"./p-df30d222.js";import{c as a}from"./p-6da72c17.js";import{i as r,c as n}from"./p-f417ea6c.js";import{d as c,f as d,e as h}from"./p-f5e0d65c.js";import{k as p,l as b,m as g}from"./p-853b70d2.js";import{i as f}from"./p-15a24f88.js";import{h as m,c as u}from"./p-100c2286.js";import{w as x}from"./p-75038a3f.js";import{v,h as w}from"./p-ec8cca76.js";import{g as k}from"./p-64733d3b.js";import"./p-3647f076.js";import"./p-11462911.js";import"./p-62e7c4b4.js";import"./p-c7ee7cfe.js";import"./p-bd6f674d.js";const y=":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:flex;position:relative;flex-grow:1;align-items:center;height:inherit;min-height:inherit;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;box-sizing:border-box}.select-wrapper .select-placeholder{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:flex;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:flex;align-items:center;max-width:200px;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:flex;align-items:center;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{justify-content:space-between}:host(.select-justify-start) .select-wrapper{justify-content:start}:host(.select-justify-end) .select-wrapper{justify-content:end}:host(.select-label-placement-start) .select-wrapper{flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{flex-direction:column;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){flex-shrink:0}::slotted([slot=start]:last-of-type){margin-inline-end:16px;margin-inline-start:0}::slotted([slot=end]:first-of-type){margin-inline-start:16px;margin-inline-end:0}:host{--highlight-height:0px}.select-icon{width:1.125rem;height:1.125rem;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 1.125rem - 4px)}:host(.select-disabled){opacity:0.3}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}";const j=y;const z=":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:flex;position:relative;flex-grow:1;align-items:center;height:inherit;min-height:inherit;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;box-sizing:border-box}.select-wrapper .select-placeholder{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:flex;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:flex;align-items:center;max-width:200px;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:flex;align-items:center;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{justify-content:space-between}:host(.select-justify-start) .select-wrapper{justify-content:start}:host(.select-justify-end) .select-wrapper{justify-content:end}:host(.select-label-placement-start) .select-wrapper{flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{flex-direction:column;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){flex-shrink:0}::slotted([slot=start]:last-of-type){margin-inline-end:16px;margin-inline-start:0}::slotted([slot=end]:first-of-type){margin-inline-start:16px;margin-inline-end:0}:host(.select-fill-solid){--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-solid) .select-wrapper{border-bottom:var(--border-width) var(--border-style) var(--border-color)}:host(.has-focus.select-fill-solid.ion-valid),:host(.select-fill-solid.ion-touched.ion-invalid){--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-bottom{border-top:none}@media (any-hover: hover){:host(.select-fill-solid:hover){--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-solid.select-expanded),:host(.select-fill-solid.ion-focused){--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}:host(.select-fill-solid) .select-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}:host(.label-floating.select-fill-solid) .label-text-wrapper{max-width:calc(100% / 0.75)}:host(.select-fill-outline){--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-outline.select-shape-round){--border-radius:28px;--padding-start:32px;--padding-end:32px}:host(.has-focus.select-fill-outline.ion-valid),:host(.select-fill-outline.ion-touched.ion-invalid){--border-color:var(--highlight-color)}@media (any-hover: hover){:host(.select-fill-outline:hover){--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-outline.select-expanded),:host(.select-fill-outline.ion-focused){--border-width:var(--highlight-height);--border-color:var(--highlight-color)}:host(.select-fill-outline) .select-bottom{border-top:none}:host(.select-fill-outline) .select-wrapper{border-bottom:none}:host(.select-ltr.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-fill-outline.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-fill-outline.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-floating) .label-text-wrapper{position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .label-text-wrapper{position:relative;z-index:1}:host(.label-floating.select-fill-outline) .label-text-wrapper{transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}:host(.select-fill-outline.select-label-placement-stacked) select,:host(.select-fill-outline.select-label-placement-floating) select{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}:host(.select-fill-outline) .select-outline-container{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;width:100%;height:100%}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-end{pointer-events:none}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-notch,:host(.select-fill-outline) .select-outline-end{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color);box-sizing:border-box}:host(.select-fill-outline) .select-outline-notch{max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .notch-spacer{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none}:host(.select-fill-outline) .select-outline-start{-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-start{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius)}:host(.select-fill-outline) .select-outline-start{width:calc(var(--padding-start) - 4px)}:host(.select-fill-outline) .select-outline-end{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-end{border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px}:host(.select-fill-outline) .select-outline-end{flex-grow:1}:host(.label-floating.select-fill-outline) .select-outline-notch{border-top:none}:host{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--highlight-height:2px}.select-icon{width:0.8125rem;transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray))}:host(.select-label-placement-floating.select-expanded) .label-text-wrapper,:host(.select-label-placement-floating.ion-focused) .label-text-wrapper,:host(.select-label-placement-stacked.select-expanded) .label-text-wrapper,:host(.select-label-placement-stacked.ion-focused) .label-text-wrapper{color:var(--highlight-color)}:host(.has-focus.select-label-placement-floating.ion-valid) .label-text-wrapper,:host(.select-label-placement-floating.ion-touched.ion-invalid) .label-text-wrapper,:host(.has-focus.select-label-placement-stacked.ion-valid) .label-text-wrapper,:host(.select-label-placement-stacked.ion-touched.ion-invalid) .label-text-wrapper{color:var(--highlight-color)}.select-highlight{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);transform:scale(0);transition:transform 200ms;background:var(--highlight-color)}.select-highlight{inset-inline-start:0}:host(.select-expanded) .select-highlight,:host(.ion-focused) .select-highlight{transform:scale(1)}:host(.in-item) .select-highlight{bottom:0}:host(.in-item) .select-highlight{inset-inline-start:0}:host(.select-expanded:not(.has-expanded-icon)) .select-icon{transform:rotate(180deg)}:host(.select-expanded) .select-wrapper .select-icon,:host(.has-focus.ion-valid) .select-wrapper .select-icon,:host(.ion-touched.ion-invalid) .select-wrapper .select-icon,:host(.ion-focused) .select-wrapper .select-icon{color:var(--highlight-color)}:host(.select-shape-round){--border-radius:16px}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 0.8125rem - 4px)}:host(.select-disabled){opacity:0.38}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}";const C=z;const $=class{constructor(l){e(this,l);this.ionChange=t(this,"ionChange",7);this.ionCancel=t(this,"ionCancel",7);this.ionDismiss=t(this,"ionDismiss",7);this.ionFocus=t(this,"ionFocus",7);this.ionBlur=t(this,"ionBlur",7);this.ionStyle=t(this,"ionStyle",7);this.inputId=`ion-sel-${L++}`;this.inheritedAttributes={};this.onClick=e=>{const t=e.target;const l=t.closest('[slot="start"], [slot="end"]');if(t===this.el||l===null){this.setFocus();this.open(e)}else{e.preventDefault()}};this.onFocus=()=>{this.ionFocus.emit()};this.onBlur=()=>{this.ionBlur.emit()};this.isExpanded=false;this.cancelText="Cancel";this.color=undefined;this.compareWith=undefined;this.disabled=false;this.fill=undefined;this.interface="alert";this.interfaceOptions={};this.justify="space-between";this.label=undefined;this.labelPlacement="start";this.multiple=false;this.name=this.inputId;this.okText="OK";this.placeholder=undefined;this.selectedText=undefined;this.toggleIcon=undefined;this.expandedIcon=undefined;this.shape=undefined;this.value=undefined}styleChanged(){this.emitStyle()}setValue(e){this.value=e;this.ionChange.emit({value:e})}componentWillLoad(){this.inheritedAttributes=c(this.el,["aria-label"])}async connectedCallback(){const{el:e}=this;this.notchController=a(e,(()=>this.notchSpacerEl),(()=>this.labelSlot));this.updateOverlayOptions();this.emitStyle();this.mutationO=x(this.el,"ion-select-option",(async()=>{this.updateOverlayOptions();s(this)}))}disconnectedCallback(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}if(this.notchController){this.notchController.destroy();this.notchController=undefined}}async open(e){if(this.disabled||this.isExpanded){return undefined}this.isExpanded=true;const t=this.overlay=await this.createOverlay(e);t.onDidDismiss().then((()=>{this.overlay=undefined;this.isExpanded=false;this.ionDismiss.emit();this.setFocus()}));await t.present();if(this.interface==="popover"){const e=this.childOpts.map((e=>e.value)).indexOf(this.value);if(e>-1){const l=t.querySelector(`.select-interface-option:nth-child(${e+1})`);if(l){d(l);const e=l.querySelector("ion-radio, ion-checkbox");if(e){e.focus()}}}else{const e=t.querySelector("ion-radio:not(.radio-disabled), ion-checkbox:not(.checkbox-disabled)");if(e){d(e.closest("ion-item"));e.focus()}}}return t}createOverlay(e){let t=this.interface;if(t==="action-sheet"&&this.multiple){console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`);t="alert"}if(t==="popover"&&!e){console.warn(`Select interface cannot be a "${t}" without passing an event. Using the "alert" interface instead.`);t="alert"}if(t==="action-sheet"){return this.openActionSheet()}if(t==="popover"){return this.openPopover(e)}return this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e){return}const t=this.childOpts;const l=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,l);break;case"popover":const i=e.querySelector("ion-select-popover");if(i){i.options=this.createPopoverOptions(t,l)}break;case"alert":const o=this.multiple?"checkbox":"radio";e.inputs=this.createAlertInputs(t,o,l);break}}createActionSheetButtons(e,t){const l=e.map((e=>{const l=O(e);const i=Array.from(e.classList).filter((e=>e!=="hydrated")).join(" ");const o=`${P} ${i}`;return{role:r(t,l,this.compareWith)?"selected":"",text:e.textContent,cssClass:o,handler:()=>{this.setValue(l)}}}));l.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}});return l}createAlertInputs(e,t,l){const i=e.map((e=>{const i=O(e);const o=Array.from(e.classList).filter((e=>e!=="hydrated")).join(" ");const s=`${P} ${o}`;return{type:t,cssClass:s,label:e.textContent||"",value:i,checked:r(l,i,this.compareWith),disabled:e.disabled}}));return i}createPopoverOptions(e,t){const l=e.map((e=>{const l=O(e);const i=Array.from(e.classList).filter((e=>e!=="hydrated")).join(" ");const o=`${P} ${i}`;return{text:e.textContent||"",cssClass:o,value:l,checked:r(t,l,this.compareWith),disabled:e.disabled,handler:e=>{this.setValue(e);if(!this.multiple){this.close()}}}}));return l}async openPopover(e){const{fill:t,labelPlacement:l}=this;const i=this.interfaceOptions;const o=k(this);const s=o==="md"?false:true;const a=this.multiple;const r=this.value;let n=e;let c="auto";const d=l==="floating"||l==="stacked";if(d||o==="md"&&t!==undefined){c="cover"}else{n=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:this.nativeWrapperEl}})}const h=Object.assign(Object.assign({mode:o,event:n,alignment:"center",size:c,showBackdrop:s},i),{component:"ion-select-popover",cssClass:["select-popover",i.cssClass],componentProps:{header:i.header,subHeader:i.subHeader,message:i.message,multiple:a,value:r,options:this.createPopoverOptions(this.childOpts,r)}});return p.create(h)}async openActionSheet(){const e=k(this);const t=this.interfaceOptions;const l=Object.assign(Object.assign({mode:e},t),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",t.cssClass]});return b.create(l)}async openAlert(){const e=this.interfaceOptions;const t=this.multiple?"checkbox":"radio";const l=k(this);const i=Object.assign(Object.assign({mode:l},e),{header:e.header?e.header:this.labelText,inputs:this.createAlertInputs(this.childOpts,t,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:e=>{this.setValue(e)}}],cssClass:["select-alert",e.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return g.create(i)}close(){if(!this.overlay){return Promise.resolve(false)}return this.overlay.dismiss()}hasValue(){return this.getText()!==""}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}get labelText(){const{label:e}=this;if(e!==undefined){return e}const{labelSlot:t}=this;if(t!==null){return t.textContent}return}getText(){const e=this.selectedText;if(e!=null&&e!==""){return e}return S(this.childOpts,this.value,this.compareWith)}setFocus(){if(this.focusEl){this.focusEl.focus()}}emitStyle(){const{disabled:e}=this;const t={"interactive-disabled":e};this.ionStyle.emit(t)}renderLabel(){const{label:e}=this;return l("div",{class:{"label-text-wrapper":true,"label-text-wrapper-hidden":!this.hasLabel},part:"label"},e===undefined?l("slot",{name:"label"}):l("div",{class:"label-text"},e))}componentDidRender(){var e;(e=this.notchController)===null||e===void 0?void 0:e.calculateNotchWidth()}get labelSlot(){return this.el.querySelector('[slot="label"]')}get hasLabel(){return this.label!==undefined||this.labelSlot!==null}renderLabelContainer(){const e=k(this);const t=e==="md"&&this.fill==="outline";if(t){return[l("div",{class:"select-outline-container"},l("div",{class:"select-outline-start"}),l("div",{class:{"select-outline-notch":true,"select-outline-notch-hidden":!this.hasLabel}},l("div",{class:"notch-spacer","aria-hidden":"true",ref:e=>this.notchSpacerEl=e},this.label)),l("div",{class:"select-outline-end"})),this.renderLabel()]}return this.renderLabel()}renderSelectText(){const{placeholder:e}=this;const t=this.getText();let i=false;let o=t;if(o===""&&e!==undefined){o=e;i=true}const s={"select-text":true,"select-placeholder":i};const a=i?"placeholder":"text";return l("div",{"aria-hidden":"true",class:s,part:a},o)}renderSelectIcon(){const e=k(this);const{isExpanded:t,toggleIcon:i,expandedIcon:o}=this;let s;if(t&&o!==undefined){s=o}else{const t=e==="ios"?v:w;s=i!==null&&i!==void 0?i:t}return l("ion-icon",{class:"select-icon",part:"icon","aria-hidden":"true",icon:s})}get ariaLabel(){var e;const{placeholder:t,inheritedAttributes:l}=this;const i=this.getText();const o=(e=l["aria-label"])!==null&&e!==void 0?e:this.labelText;let s=i;if(s===""&&t!==undefined){s=t}if(o!==undefined){s=s===""?o:`${o}, ${s}`}return s}renderListbox(){const{disabled:e,inputId:t,isExpanded:i}=this;return l("button",{disabled:e,id:t,"aria-label":this.ariaLabel,"aria-haspopup":"dialog","aria-expanded":`${i}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:e=>this.focusEl=e})}render(){const{disabled:e,el:t,isExpanded:o,expandedIcon:s,labelPlacement:a,justify:r,placeholder:n,fill:c,shape:d,name:p,value:b}=this;const g=k(this);const x=a==="floating"||a==="stacked";const v=!x;const w=f(t)?"rtl":"ltr";const y=m("ion-item",this.el);const j=g==="md"&&c!=="outline"&&!y;const z=this.hasValue();const C=t.querySelector('[slot="start"], [slot="end"]')!==null;h(true,t,p,A(b),e);const $=a==="stacked"||a==="floating"&&(z||o||C);return l(i,{key:"5a1b82be3f737a2ce5b87c5cd716f898a902ab10",onClick:this.onClick,class:u(this.color,{[g]:true,"in-item":y,"in-item-color":m("ion-item.ion-color",t),"select-disabled":e,"select-expanded":o,"has-expanded-icon":s!==undefined,"has-value":z,"label-floating":$,"has-placeholder":n!==undefined,"ion-focusable":true,[`select-${w}`]:true,[`select-fill-${c}`]:c!==undefined,[`select-justify-${r}`]:v,[`select-shape-${d}`]:d!==undefined,[`select-label-placement-${a}`]:true})},l("label",{key:"79a6e99e38fa3f72d876f4b8ac0077a9fbf4bd2d",class:"select-wrapper",id:"select-label"},this.renderLabelContainer(),l("div",{key:"e18ac0b4a35e2cdde858347a9b116218533cd532",class:"select-wrapper-inner"},l("slot",{key:"cc194f718ef9363d3496531f0d9259e33b66f4d8",name:"start"}),l("div",{key:"833c5544e453c0ac543f5d4898d0f492caac405a",class:"native-wrapper",ref:e=>this.nativeWrapperEl=e,part:"container"},this.renderSelectText(),this.renderListbox()),l("slot",{key:"adaa4064c9ad01ef7a452308680eb09dc3ad60ff",name:"end"}),!x&&this.renderSelectIcon()),x&&this.renderSelectIcon(),j&&l("div",{key:"d47a6ef0a6192c5f098973aa517aad2aa9ae8dfc",class:"select-highlight"})))}get el(){return o(this)}static get watchers(){return{disabled:["styleChanged"],isExpanded:["styleChanged"],placeholder:["styleChanged"],value:["styleChanged"]}}};const O=e=>{const t=e.value;return t===undefined?e.textContent||"":t};const A=e=>{if(e==null){return undefined}if(Array.isArray(e)){return e.join(",")}return e.toString()};const S=(e,t,l)=>{if(t===undefined){return""}if(Array.isArray(t)){return t.map((t=>I(e,t,l))).filter((e=>e!==null)).join(", ")}else{return I(e,t,l)||""}};const I=(e,t,l)=>{const i=e.find((e=>n(t,O(e),l)));return i?i.textContent:null};let L=0;const P="select-interface-option";$.style={ios:j,md:C};export{$ as ion_select};
//# sourceMappingURL=p-92c4facd.entry.js.map