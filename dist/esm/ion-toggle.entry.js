import { r as registerInstance, d as createEvent, h, H as Host, e as getElement } from './index-a73b2c0c.js';
import { i as inheritAriaAttributes, e as renderHiddenInput } from './helpers-5a2c111a.js';
import { d as hapticSelection } from './haptic-70842af8.js';
import { i as isRTL } from './dir-5b6b6539.js';
import { c as createColorClasses, h as hostContext } from './theme-6bada181.js';
import { w as checkmarkOutline, x as removeOutline, y as ellipseOutline } from './index-ac882a1a.js';
import { c as config, g as getIonMode } from './ionic-global-fc593e4d.js';
import './capacitor-39b8ca8f.js';
import './index-51ff1772.js';

const toggleIosCss = ":host{box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;user-select:none;z-index:2}:host(.in-item){flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:flex;position:relative;flex-grow:1;height:inherit;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.toggle-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.toggle-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:flex;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{justify-content:end}:host(.toggle-alignment-start) .toggle-wrapper{align-items:start}:host(.toggle-alignment-center) .toggle-wrapper{align-items:center}:host(.toggle-label-placement-start) .toggle-wrapper{flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.toggle-label-placement-stacked) .toggle-wrapper{flex-direction:column}:host(.toggle-label-placement-stacked) .label-text-wrapper{transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper{transform-origin:left top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-start .label-text-wrapper{transform-origin:right top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-start:dir(rtl)) .label-text-wrapper{transform-origin:right top}}:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper{transform-origin:center top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-center .label-text-wrapper{transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-center:dir(rtl)) .label-text-wrapper{transform-origin:calc(100% - center) top}}.toggle-icon-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%;transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);transition:var(--handle-transition);background:var(--handle-background);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--track-background-checked:var(--ion-color-primary, #0054e9);--border-radius:15.5px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 4px rgba(0, 0, 0, 0.06), 0 3px 8px rgba(0, 0, 0, 0.06);--handle-height:calc(31px - (2px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(31px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms}.native-wrapper .toggle-icon{width:51px;height:31px;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.toggle-activated) .toggle-switch-icon{opacity:0}.toggle-icon{transform:translate3d(0, 0, 0);transition:background-color 300ms}.toggle-inner{will-change:transform}.toggle-switch-icon{position:absolute;top:50%;width:11px;height:11px;transform:translateY(-50%);transition:opacity 300ms, color 300ms}.toggle-switch-icon{position:absolute;color:var(--ion-color-dark, #222428)}:host(.toggle-ltr) .toggle-switch-icon{right:6px}:host(.toggle-rtl) .toggle-switch-icon{right:initial;left:6px;}:host(.toggle-checked) .toggle-switch-icon.toggle-switch-icon-checked{color:var(--ion-color-contrast, #fff)}:host(.toggle-checked) .toggle-switch-icon:not(.toggle-switch-icon-checked){opacity:0}.toggle-switch-icon-checked{position:absolute;width:15px;height:15px;transform:translateY(-50%) rotate(90deg)}:host(.toggle-ltr) .toggle-switch-icon-checked{right:initial;left:4px;}:host(.toggle-rtl) .toggle-switch-icon-checked{right:4px}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-ltr.toggle-activated.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host(.toggle-rtl.toggle-activated.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}";
const IonToggleIosStyle0 = toggleIosCss;

const toggleMdCss = ":host{box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;user-select:none;z-index:2}:host(.in-item){flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:flex;position:relative;flex-grow:1;height:inherit;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.toggle-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.toggle-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:flex;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{justify-content:end}:host(.toggle-alignment-start) .toggle-wrapper{align-items:start}:host(.toggle-alignment-center) .toggle-wrapper{align-items:center}:host(.toggle-label-placement-start) .toggle-wrapper{flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.toggle-label-placement-stacked) .toggle-wrapper{flex-direction:column}:host(.toggle-label-placement-stacked) .label-text-wrapper{transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper{transform-origin:left top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-start .label-text-wrapper{transform-origin:right top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-start:dir(rtl)) .label-text-wrapper{transform-origin:right top}}:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper{transform-origin:center top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-center .label-text-wrapper{transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-center:dir(rtl)) .label-text-wrapper{transform-origin:calc(100% - center) top}}.toggle-icon-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%;transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);transition:var(--handle-transition);background:var(--handle-background);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--track-background-checked:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #0054e9);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1)}.native-wrapper .toggle-icon{width:36px;height:14px}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}:host(.toggle-checked) .toggle-inner{color:var(--ion-color-contrast, #fff)}.toggle-icon{transition:background-color 160ms}.toggle-inner{will-change:background-color, transform;display:flex;align-items:center;justify-content:center;color:#000}.toggle-inner .toggle-switch-icon{-webkit-padding-start:1px;padding-inline-start:1px;-webkit-padding-end:1px;padding-inline-end:1px;padding-top:1px;padding-bottom:1px;width:100%;height:100%}:host(.toggle-disabled){opacity:0.38}";
const IonToggleMdStyle0 = toggleMdCss;

const Toggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionChange = createEvent(this, "ionChange", 7);
        this.ionFocus = createEvent(this, "ionFocus", 7);
        this.ionBlur = createEvent(this, "ionBlur", 7);
        this.inputId = `ion-tg-${toggleIds++}`;
        this.lastDrag = 0;
        this.inheritedAttributes = {};
        this.didLoad = false;
        this.setupGesture = async () => {
            const { toggleTrack } = this;
            if (toggleTrack) {
                this.gesture = (await import('./index-493838d0.js')).createGesture({
                    el: toggleTrack,
                    gestureName: 'toggle',
                    gesturePriority: 100,
                    threshold: 5,
                    passive: false,
                    onStart: () => this.onStart(),
                    onMove: (ev) => this.onMove(ev),
                    onEnd: (ev) => this.onEnd(ev),
                });
                this.disabledChanged();
            }
        };
        this.onClick = (ev) => {
            if (this.disabled) {
                return;
            }
            ev.preventDefault();
            if (this.lastDrag + 300 < Date.now()) {
                this.toggleChecked();
            }
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.getSwitchLabelIcon = (mode, checked) => {
            if (mode === 'md') {
                return checked ? checkmarkOutline : removeOutline;
            }
            return checked ? removeOutline : ellipseOutline;
        };
        this.activated = false;
        this.color = undefined;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = 'on';
        this.enableOnOffLabels = config.get('toggleOnOffLabels');
        this.labelPlacement = 'start';
        this.justify = 'space-between';
        this.alignment = 'center';
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.enable(!this.disabled);
        }
    }
    toggleChecked() {
        const { checked, value } = this;
        const isNowChecked = !checked;
        this.checked = isNowChecked;
        this.ionChange.emit({
            checked: isNowChecked,
            value,
        });
    }
    async connectedCallback() {
        /**
         * If we have not yet rendered
         * ion-toggle, then toggleTrack is not defined.
         * But if we are moving ion-toggle via appendChild,
         * then toggleTrack will be defined.
         */
        if (this.didLoad) {
            this.setupGesture();
        }
    }
    componentDidLoad() {
        this.setupGesture();
        this.didLoad = true;
    }
    disconnectedCallback() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    componentWillLoad() {
        this.inheritedAttributes = Object.assign({}, inheritAriaAttributes(this.el));
    }
    onStart() {
        this.activated = true;
        // touch-action does not work in iOS
        this.setFocus();
    }
    onMove(detail) {
        if (shouldToggle(isRTL(this.el), this.checked, detail.deltaX, -10)) {
            this.toggleChecked();
            hapticSelection();
        }
    }
    onEnd(ev) {
        this.activated = false;
        this.lastDrag = Date.now();
        ev.event.preventDefault();
        ev.event.stopImmediatePropagation();
    }
    getValue() {
        return this.value || '';
    }
    setFocus() {
        if (this.focusEl) {
            this.focusEl.focus();
        }
    }
    renderOnOffSwitchLabels(mode, checked) {
        const icon = this.getSwitchLabelIcon(mode, checked);
        return (h("ion-icon", { class: {
                'toggle-switch-icon': true,
                'toggle-switch-icon-checked': checked,
            }, icon: icon, "aria-hidden": "true" }));
    }
    renderToggleControl() {
        const mode = getIonMode(this);
        const { enableOnOffLabels, checked } = this;
        return (h("div", { class: "toggle-icon", part: "track", ref: (el) => (this.toggleTrack = el) }, enableOnOffLabels &&
            mode === 'ios' && [this.renderOnOffSwitchLabels(mode, true), this.renderOnOffSwitchLabels(mode, false)], h("div", { class: "toggle-icon-wrapper" }, h("div", { class: "toggle-inner", part: "handle" }, enableOnOffLabels && mode === 'md' && this.renderOnOffSwitchLabels(mode, checked)))));
    }
    get hasLabel() {
        return this.el.textContent !== '';
    }
    render() {
        const { activated, color, checked, disabled, el, justify, labelPlacement, inputId, name, alignment } = this;
        const mode = getIonMode(this);
        const value = this.getValue();
        const rtl = isRTL(el) ? 'rtl' : 'ltr';
        renderHiddenInput(true, el, name, checked ? value : '', disabled);
        return (h(Host, { key: 'c945ab955306b2fcb7833f7ff771ac943d73d27d', onClick: this.onClick, class: createColorClasses(color, {
                [mode]: true,
                'in-item': hostContext('ion-item', el),
                'toggle-activated': activated,
                'toggle-checked': checked,
                'toggle-disabled': disabled,
                [`toggle-justify-${justify}`]: true,
                [`toggle-alignment-${alignment}`]: true,
                [`toggle-label-placement-${labelPlacement}`]: true,
                [`toggle-${rtl}`]: true,
            }) }, h("label", { key: '71fb6976e877639ca9f28c2103f6290917cdb6ce', class: "toggle-wrapper" }, h("input", Object.assign({ key: 'ed2495568197928ef1f17fc60470f4d9754a6244', type: "checkbox", role: "switch", "aria-checked": `${checked}`, checked: checked, disabled: disabled, id: inputId, onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), ref: (focusEl) => (this.focusEl = focusEl) }, this.inheritedAttributes)), h("div", { key: '953ab9a29c432de4b869aeac296007e703bcdf27', class: {
                'label-text-wrapper': true,
                'label-text-wrapper-hidden': !this.hasLabel,
            }, part: "label" }, h("slot", { key: '718b24b4d59b979c11edfb1d90fa0270ac248b2f' })), h("div", { key: '293595f9dc291df38a54e23f81797b89428ff2c5', class: "native-wrapper" }, this.renderToggleControl()))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
};
const shouldToggle = (rtl, checked, deltaX, margin) => {
    if (checked) {
        return (!rtl && margin > deltaX) || (rtl && -margin < deltaX);
    }
    else {
        return (!rtl && -margin < deltaX) || (rtl && margin > deltaX);
    }
};
let toggleIds = 0;
Toggle.style = {
    ios: IonToggleIosStyle0,
    md: IonToggleMdStyle0
};

export { Toggle as ion_toggle };

//# sourceMappingURL=ion-toggle.entry.js.map