import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-53634f3f.js';
import { k as clamp } from './p-4e0d3630.js';
import { b as hapticSelectionChanged, h as hapticSelectionEnd, a as hapticSelectionStart } from './p-005de791.js';
import { g as getClassMap } from './p-100c2286.js';
import { g as getIonMode } from './p-7ff156a4.js';

const pickerColumnIosCss = ".picker-col{display:flex;position:relative;flex:1;justify-content:center;height:100%;box-sizing:content-box;contain:content}.picker-opts{position:relative;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{justify-content:flex-start}.picker-opts-right{justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;transform-origin:center center;height:46px;transform-style:preserve-3d;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){transform-origin:calc(100% - center) center}}";
const IonPickerLegacyColumnIosStyle0 = pickerColumnIosCss;

const pickerColumnMdCss = ".picker-col{display:flex;position:relative;flex:1;justify-content:center;height:100%;box-sizing:content-box;contain:content}.picker-opts{position:relative;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{justify-content:flex-start}.picker-opts-right{justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #0054e9)}";
const IonPickerLegacyColumnMdStyle0 = pickerColumnMdCss;

const PickerColumnCmp = /*@__PURE__*/ proxyCustomElement(class PickerColumnCmp extends H {
    constructor() {
        super();
        this.__registerHost();
        this.ionPickerColChange = createEvent(this, "ionPickerColChange", 7);
        this.optHeight = 0;
        this.rotateFactor = 0;
        this.scaleFactor = 1;
        this.velocity = 0;
        this.y = 0;
        this.noAnimate = true;
        // `colDidChange` is a flag that gets set when the column is changed
        // dynamically. When this flag is set, the column will refresh
        // after the component re-renders to incorporate the new column data.
        // This is necessary because `this.refresh` queries for the option elements,
        // so it needs to wait for the latest elements to be available in the DOM.
        // Ex: column is created with 3 options. User updates the column data
        // to have 5 options. The column will still think it only has 3 options.
        this.colDidChange = false;
        this.col = undefined;
    }
    colChanged() {
        this.colDidChange = true;
    }
    async connectedCallback() {
        let pickerRotateFactor = 0;
        let pickerScaleFactor = 0.81;
        const mode = getIonMode(this);
        if (mode === 'ios') {
            pickerRotateFactor = -0.46;
            pickerScaleFactor = 1;
        }
        this.rotateFactor = pickerRotateFactor;
        this.scaleFactor = pickerScaleFactor;
        this.gesture = (await import('./p-52ed752a.js')).createGesture({
            el: this.el,
            gestureName: 'picker-swipe',
            gesturePriority: 100,
            threshold: 0,
            passive: false,
            onStart: (ev) => this.onStart(ev),
            onMove: (ev) => this.onMove(ev),
            onEnd: (ev) => this.onEnd(ev),
        });
        this.gesture.enable();
        // Options have not been initialized yet
        // Animation must be disabled through the `noAnimate` flag
        // Otherwise, the options will render
        // at the top of the column and transition down
        this.tmrId = setTimeout(() => {
            this.noAnimate = false;
            // After initialization, `refresh()` will be called
            // At this point, animation will be enabled. The options will
            // animate as they are being selected.
            this.refresh(true);
        }, 250);
    }
    componentDidLoad() {
        this.onDomChange();
    }
    componentDidUpdate() {
        // Options may have changed since last update.
        if (this.colDidChange) {
            // Animation must be disabled through the `onDomChange` parameter.
            // Otherwise, the recently added options will render
            // at the top of the column and transition down
            this.onDomChange(true, false);
            this.colDidChange = false;
        }
    }
    disconnectedCallback() {
        if (this.rafId !== undefined)
            cancelAnimationFrame(this.rafId);
        if (this.tmrId)
            clearTimeout(this.tmrId);
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    emitColChange() {
        this.ionPickerColChange.emit(this.col);
    }
    setSelected(selectedIndex, duration) {
        // if there is a selected index, then figure out it's y position
        // if there isn't a selected index, then just use the top y position
        const y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
        this.velocity = 0;
        // set what y position we're at
        if (this.rafId !== undefined)
            cancelAnimationFrame(this.rafId);
        this.update(y, duration, true);
        this.emitColChange();
    }
    update(y, duration, saveY) {
        if (!this.optsEl) {
            return;
        }
        // ensure we've got a good round number :)
        let translateY = 0;
        let translateZ = 0;
        const { col, rotateFactor } = this;
        const prevSelected = col.selectedIndex;
        const selectedIndex = (col.selectedIndex = this.indexForY(-y));
        const durationStr = duration === 0 ? '' : duration + 'ms';
        const scaleStr = `scale(${this.scaleFactor})`;
        const children = this.optsEl.children;
        for (let i = 0; i < children.length; i++) {
            const button = children[i];
            const opt = col.options[i];
            const optOffset = i * this.optHeight + y;
            let transform = '';
            if (rotateFactor !== 0) {
                const rotateX = optOffset * rotateFactor;
                if (Math.abs(rotateX) <= 90) {
                    translateY = 0;
                    translateZ = 90;
                    transform = `rotateX(${rotateX}deg) `;
                }
                else {
                    translateY = -9999;
                }
            }
            else {
                translateZ = 0;
                translateY = optOffset;
            }
            const selected = selectedIndex === i;
            transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
            if (this.scaleFactor !== 1 && !selected) {
                transform += scaleStr;
            }
            // Update transition duration
            if (this.noAnimate) {
                opt.duration = 0;
                button.style.transitionDuration = '';
            }
            else if (duration !== opt.duration) {
                opt.duration = duration;
                button.style.transitionDuration = durationStr;
            }
            // Update transform
            if (transform !== opt.transform) {
                opt.transform = transform;
            }
            button.style.transform = transform;
            /**
             * Ensure that the select column
             * item has the selected class
             */
            opt.selected = selected;
            if (selected) {
                button.classList.add(PICKER_OPT_SELECTED);
            }
            else {
                button.classList.remove(PICKER_OPT_SELECTED);
            }
        }
        this.col.prevSelected = prevSelected;
        if (saveY) {
            this.y = y;
        }
        if (this.lastIndex !== selectedIndex) {
            // have not set a last index yet
            hapticSelectionChanged();
            this.lastIndex = selectedIndex;
        }
    }
    decelerate() {
        if (this.velocity !== 0) {
            // still decelerating
            this.velocity *= DECELERATION_FRICTION;
            // do not let it go slower than a velocity of 1
            this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
            let y = this.y + this.velocity;
            if (y > this.minY) {
                // whoops, it's trying to scroll up farther than the options we have!
                y = this.minY;
                this.velocity = 0;
            }
            else if (y < this.maxY) {
                // gahh, it's trying to scroll down farther than we can!
                y = this.maxY;
                this.velocity = 0;
            }
            this.update(y, 0, true);
            const notLockedIn = Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;
            if (notLockedIn) {
                // isn't locked in yet, keep decelerating until it is
                this.rafId = requestAnimationFrame(() => this.decelerate());
            }
            else {
                this.velocity = 0;
                this.emitColChange();
                hapticSelectionEnd();
            }
        }
        else if (this.y % this.optHeight !== 0) {
            // needs to still get locked into a position so options line up
            const currentPos = Math.abs(this.y % this.optHeight);
            // create a velocity in the direction it needs to scroll
            this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
            this.decelerate();
        }
    }
    indexForY(y) {
        return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
    }
    onStart(detail) {
        // We have to prevent default in order to block scrolling under the picker
        // but we DO NOT have to stop propagation, since we still want
        // some "click" events to capture
        if (detail.event.cancelable) {
            detail.event.preventDefault();
        }
        detail.event.stopPropagation();
        hapticSelectionStart();
        // reset everything
        if (this.rafId !== undefined)
            cancelAnimationFrame(this.rafId);
        const options = this.col.options;
        let minY = options.length - 1;
        let maxY = 0;
        for (let i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                minY = Math.min(minY, i);
                maxY = Math.max(maxY, i);
            }
        }
        this.minY = -(minY * this.optHeight);
        this.maxY = -(maxY * this.optHeight);
    }
    onMove(detail) {
        if (detail.event.cancelable) {
            detail.event.preventDefault();
        }
        detail.event.stopPropagation();
        // update the scroll position relative to pointer start position
        let y = this.y + detail.deltaY;
        if (y > this.minY) {
            // scrolling up higher than scroll area
            y = Math.pow(y, 0.8);
            this.bounceFrom = y;
        }
        else if (y < this.maxY) {
            // scrolling down below scroll area
            y += Math.pow(this.maxY - y, 0.9);
            this.bounceFrom = y;
        }
        else {
            this.bounceFrom = 0;
        }
        this.update(y, 0, false);
    }
    onEnd(detail) {
        if (this.bounceFrom > 0) {
            // bounce back up
            this.update(this.minY, 100, true);
            this.emitColChange();
            return;
        }
        else if (this.bounceFrom < 0) {
            // bounce back down
            this.update(this.maxY, 100, true);
            this.emitColChange();
            return;
        }
        this.velocity = clamp(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
        if (this.velocity === 0 && detail.deltaY === 0) {
            const opt = detail.event.target.closest('.picker-opt');
            if (opt === null || opt === void 0 ? void 0 : opt.hasAttribute('opt-index')) {
                this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
            }
        }
        else {
            this.y += detail.deltaY;
            if (Math.abs(detail.velocityY) < 0.05) {
                const isScrollingUp = detail.deltaY > 0;
                const optHeightFraction = (Math.abs(this.y) % this.optHeight) / this.optHeight;
                if (isScrollingUp && optHeightFraction > 0.5) {
                    this.velocity = Math.abs(this.velocity) * -1;
                }
                else if (!isScrollingUp && optHeightFraction <= 0.5) {
                    this.velocity = Math.abs(this.velocity);
                }
            }
            this.decelerate();
        }
    }
    refresh(forceRefresh, animated) {
        var _a;
        let min = this.col.options.length - 1;
        let max = 0;
        const options = this.col.options;
        for (let i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                min = Math.min(min, i);
                max = Math.max(max, i);
            }
        }
        /**
         * Only update selected value if column has a
         * velocity of 0. If it does not, then the
         * column is animating might land on
         * a value different than the value at
         * selectedIndex
         */
        if (this.velocity !== 0) {
            return;
        }
        const selectedIndex = clamp(min, (_a = this.col.selectedIndex) !== null && _a !== void 0 ? _a : 0, max);
        if (this.col.prevSelected !== selectedIndex || forceRefresh) {
            const y = selectedIndex * this.optHeight * -1;
            const duration = animated ? TRANSITION_DURATION : 0;
            this.velocity = 0;
            this.update(y, duration, true);
        }
    }
    onDomChange(forceRefresh, animated) {
        const colEl = this.optsEl;
        if (colEl) {
            // DOM READ
            // We perfom a DOM read over a rendered item, this needs to happen after the first render or after the the column has changed
            this.optHeight = colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0;
        }
        this.refresh(forceRefresh, animated);
    }
    render() {
        const col = this.col;
        const mode = getIonMode(this);
        return (h(Host, { key: 'c015eb8bc01b3287cbd1d71af0aa311b6be89d36', class: Object.assign({ [mode]: true, 'picker-col': true, 'picker-opts-left': this.col.align === 'left', 'picker-opts-right': this.col.align === 'right' }, getClassMap(col.cssClass)), style: {
                'max-width': this.col.columnWidth,
            } }, col.prefix && (h("div", { key: 'f9de3fe2f5c7ad3256d6e5f44b6d03a2b1f96ffb', class: "picker-prefix", style: { width: col.prefixWidth } }, col.prefix)), h("div", { key: '10f9c12aa174f96c7cf9adc30efbb26695c0aa64', class: "picker-opts", style: { maxWidth: col.optionsWidth }, ref: (el) => (this.optsEl = el) }, col.options.map((o, index) => (h("button", { "aria-label": o.ariaLabel, class: { 'picker-opt': true, 'picker-opt-disabled': !!o.disabled }, "opt-index": index }, o.text)))), col.suffix && (h("div", { key: '1d9c0892ce56e0da9044c79eb953827166f5190b', class: "picker-suffix", style: { width: col.suffixWidth } }, col.suffix))));
    }
    get el() { return this; }
    static get watchers() { return {
        "col": ["colChanged"]
    }; }
    static get style() { return {
        ios: IonPickerLegacyColumnIosStyle0,
        md: IonPickerLegacyColumnMdStyle0
    }; }
}, [32, "ion-picker-legacy-column", {
        "col": [16]
    }, undefined, {
        "col": ["colChanged"]
    }]);
const PICKER_OPT_SELECTED = 'picker-opt-selected';
const DECELERATION_FRICTION = 0.97;
const MAX_PICKER_SPEED = 90;
const TRANSITION_DURATION = 150;
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-picker-legacy-column"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-picker-legacy-column":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PickerColumnCmp);
            }
            break;
    } });
}
defineCustomElement();

export { PickerColumnCmp as P, defineCustomElement as d };

//# sourceMappingURL=p-a63ff0b3.js.map