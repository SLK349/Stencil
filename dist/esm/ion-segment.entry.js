import { r as registerInstance, d as createEvent, w as writeTask, h, H as Host, e as getElement } from './index-a73b2c0c.js';
import { b as raf } from './helpers-5a2c111a.js';
import { i as isRTL } from './dir-5b6b6539.js';
import { c as createColorClasses, h as hostContext } from './theme-6bada181.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const segmentIosCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}";
const IonSegmentIosStyle0 = segmentIosCss;

const segmentMdCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent;grid-auto-columns:minmax(auto, 360px)}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}";
const IonSegmentMdStyle0 = segmentMdCss;

const Segment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionChange = createEvent(this, "ionChange", 7);
        this.ionSelect = createEvent(this, "ionSelect", 7);
        this.ionStyle = createEvent(this, "ionStyle", 7);
        this.onClick = (ev) => {
            const current = ev.target;
            const previous = this.checked;
            // If the current element is a segment then that means
            // the user tried to swipe to a segment button and
            // click a segment button at the same time so we should
            // not update the checked segment button
            if (current.tagName === 'ION-SEGMENT') {
                return;
            }
            this.value = current.value;
            if (current !== previous) {
                this.emitValueChange();
            }
            if (this.scrollable || !this.swipeGesture) {
                if (previous) {
                    this.checkButton(previous, current);
                }
                else {
                    this.setCheckedClasses();
                }
            }
        };
        this.getSegmentButton = (selector) => {
            var _a, _b;
            const buttons = this.getButtons().filter((button) => !button.disabled);
            const currIndex = buttons.findIndex((button) => button === document.activeElement);
            switch (selector) {
                case 'first':
                    return buttons[0];
                case 'last':
                    return buttons[buttons.length - 1];
                case 'next':
                    return (_a = buttons[currIndex + 1]) !== null && _a !== void 0 ? _a : buttons[0];
                case 'previous':
                    return (_b = buttons[currIndex - 1]) !== null && _b !== void 0 ? _b : buttons[buttons.length - 1];
                default:
                    return null;
            }
        };
        this.activated = false;
        this.color = undefined;
        this.disabled = false;
        this.scrollable = false;
        this.swipeGesture = true;
        this.value = undefined;
        this.selectOnFocus = false;
    }
    colorChanged(value, oldValue) {
        /**
         * If color is set after not having
         * previously been set (or vice versa),
         * we need to emit style so the segment-buttons
         * can apply their color classes properly.
         */
        if ((oldValue === undefined && value !== undefined) || (oldValue !== undefined && value === undefined)) {
            this.emitStyle();
        }
    }
    swipeGestureChanged() {
        this.gestureChanged();
    }
    valueChanged(value) {
        /**
         * `ionSelect` is emitted every time the value changes (internal or external changes).
         * Used by `ion-segment-button` to determine if the button should be checked.
         */
        this.ionSelect.emit({ value });
        this.scrollActiveButtonIntoView();
    }
    disabledChanged() {
        this.gestureChanged();
        const buttons = this.getButtons();
        for (const button of buttons) {
            button.disabled = this.disabled;
        }
    }
    gestureChanged() {
        if (this.gesture) {
            this.gesture.enable(!this.scrollable && !this.disabled && this.swipeGesture);
        }
    }
    connectedCallback() {
        this.emitStyle();
    }
    componentWillLoad() {
        this.emitStyle();
    }
    async componentDidLoad() {
        this.setCheckedClasses();
        /**
         * If the value changes before watchers
         * are setup, then the ionSelect watch callback
         * will not fire. As a result, we manually
         * fire this event when Select is loaded.
         */
        this.ionSelect.emit({ value: this.value });
        /**
         * We need to wait for the buttons to all be rendered
         * before we can scroll.
         */
        raf(() => {
            /**
             * When the segment loads for the first
             * time we just want to snap the active button into
             * place instead of scroll. Smooth scrolling should only
             * happen when the user interacts with the segment.
             */
            this.scrollActiveButtonIntoView(false);
        });
        this.gesture = (await import('./index-493838d0.js')).createGesture({
            el: this.el,
            gestureName: 'segment',
            gesturePriority: 100,
            threshold: 0,
            passive: false,
            onStart: (ev) => this.onStart(ev),
            onMove: (ev) => this.onMove(ev),
            onEnd: (ev) => this.onEnd(ev),
        });
        this.gestureChanged();
        if (this.disabled) {
            this.disabledChanged();
        }
    }
    onStart(detail) {
        this.valueBeforeGesture = this.value;
        this.activate(detail);
    }
    onMove(detail) {
        this.setNextIndex(detail);
    }
    onEnd(detail) {
        this.setActivated(false);
        this.setNextIndex(detail, true);
        detail.event.stopImmediatePropagation();
        const value = this.value;
        if (value !== undefined) {
            if (this.valueBeforeGesture !== value) {
                this.emitValueChange();
            }
        }
        this.valueBeforeGesture = undefined;
    }
    /**
     * Emits an `ionChange` event.
     *
     * This API should be called for user committed changes.
     * This API should not be used for external value changes.
     */
    emitValueChange() {
        const { value } = this;
        this.ionChange.emit({ value });
    }
    getButtons() {
        return Array.from(this.el.querySelectorAll('ion-segment-button'));
    }
    get checked() {
        return this.getButtons().find((button) => button.value === this.value);
    }
    /*
     * Activate both the segment and the buttons
     * due to a bug with ::slotted in Safari
     */
    setActivated(activated) {
        const buttons = this.getButtons();
        buttons.forEach((button) => {
            if (activated) {
                button.classList.add('segment-button-activated');
            }
            else {
                button.classList.remove('segment-button-activated');
            }
        });
        this.activated = activated;
    }
    activate(detail) {
        const clicked = detail.event.target;
        const buttons = this.getButtons();
        const checked = buttons.find((button) => button.value === this.value);
        // Make sure we are only checking for activation on a segment button
        // since disabled buttons will get the click on the segment
        if (clicked.tagName !== 'ION-SEGMENT-BUTTON') {
            return;
        }
        // If there are no checked buttons, set the current button to checked
        if (!checked) {
            this.value = clicked.value;
            this.setCheckedClasses();
        }
        // If the gesture began on the clicked button with the indicator
        // then we should activate the indicator
        if (this.value === clicked.value) {
            this.setActivated(true);
        }
    }
    getIndicator(button) {
        const root = button.shadowRoot || button;
        return root.querySelector('.segment-button-indicator');
    }
    checkButton(previous, current) {
        const previousIndicator = this.getIndicator(previous);
        const currentIndicator = this.getIndicator(current);
        if (previousIndicator === null || currentIndicator === null) {
            return;
        }
        const previousClientRect = previousIndicator.getBoundingClientRect();
        const currentClientRect = currentIndicator.getBoundingClientRect();
        const widthDelta = previousClientRect.width / currentClientRect.width;
        const xPosition = previousClientRect.left - currentClientRect.left;
        // Scale the indicator width to match the previous indicator width
        // and translate it on top of the previous indicator
        const transform = `translate3d(${xPosition}px, 0, 0) scaleX(${widthDelta})`;
        writeTask(() => {
            // Remove the transition before positioning on top of the previous indicator
            currentIndicator.classList.remove('segment-button-indicator-animated');
            currentIndicator.style.setProperty('transform', transform);
            // Force a repaint to ensure the transform happens
            currentIndicator.getBoundingClientRect();
            // Add the transition to move the indicator into place
            currentIndicator.classList.add('segment-button-indicator-animated');
            // Remove the transform to slide the indicator back to the button clicked
            currentIndicator.style.setProperty('transform', '');
        });
        this.value = current.value;
        this.setCheckedClasses();
    }
    setCheckedClasses() {
        const buttons = this.getButtons();
        const index = buttons.findIndex((button) => button.value === this.value);
        const next = index + 1;
        for (const button of buttons) {
            button.classList.remove('segment-button-after-checked');
        }
        if (next < buttons.length) {
            buttons[next].classList.add('segment-button-after-checked');
        }
    }
    scrollActiveButtonIntoView(smoothScroll = true) {
        const { scrollable, value, el } = this;
        if (scrollable) {
            const buttons = this.getButtons();
            const activeButton = buttons.find((button) => button.value === value);
            if (activeButton !== undefined) {
                const scrollContainerBox = el.getBoundingClientRect();
                const activeButtonBox = activeButton.getBoundingClientRect();
                /**
                 * Subtract the active button x position from the scroll
                 * container x position. This will give us the x position
                 * of the active button within the scroll container.
                 */
                const activeButtonLeft = activeButtonBox.x - scrollContainerBox.x;
                /**
                 * If we just used activeButtonLeft, then the active button
                 * would be aligned with the left edge of the scroll container.
                 * Instead, we want the segment button to be centered. As a result,
                 * we subtract half of the scroll container width. This will position
                 * the left edge of the active button at the midpoint of the scroll container.
                 * We then add half of the active button width. This will position the active
                 * button such that the midpoint of the active button is at the midpoint of the
                 * scroll container.
                 */
                const centeredX = activeButtonLeft - scrollContainerBox.width / 2 + activeButtonBox.width / 2;
                /**
                 * We intentionally use scrollBy here instead of scrollIntoView
                 * to avoid a WebKit bug where accelerated animations break
                 * when using scrollIntoView. Using scrollIntoView will cause the
                 * segment container to jump during the transition and then snap into place.
                 * This is because scrollIntoView can potentially cause parent element
                 * containers to also scroll. scrollBy does not have this same behavior, so
                 * we use this API instead.
                 *
                 * Note that if there is not enough scrolling space to center the element
                 * within the scroll container, the browser will attempt
                 * to center by as much as it can.
                 */
                el.scrollBy({
                    top: 0,
                    left: centeredX,
                    behavior: smoothScroll ? 'smooth' : 'instant',
                });
            }
        }
    }
    setNextIndex(detail, isEnd = false) {
        const rtl = isRTL(this.el);
        const activated = this.activated;
        const buttons = this.getButtons();
        const index = buttons.findIndex((button) => button.value === this.value);
        const previous = buttons[index];
        let current;
        let nextIndex;
        if (index === -1) {
            return;
        }
        // Get the element that the touch event started on in case
        // it was the checked button, then we will move the indicator
        const rect = previous.getBoundingClientRect();
        const left = rect.left;
        const width = rect.width;
        // Get the element that the gesture is on top of based on the currentX of the
        // gesture event and the Y coordinate of the starting element, since the gesture
        // can move up and down off of the segment
        const currentX = detail.currentX;
        const previousY = rect.top + rect.height / 2;
        /**
         * Segment can be used inside the shadow dom
         * so doing document.elementFromPoint would never
         * return a segment button in that instance.
         * We use getRootNode to which will return the parent
         * shadow root if used inside a shadow component and
         * returns document otherwise.
         */
        const root = this.el.getRootNode();
        const nextEl = root.elementFromPoint(currentX, previousY);
        const decreaseIndex = rtl ? currentX > left + width : currentX < left;
        const increaseIndex = rtl ? currentX < left : currentX > left + width;
        // If the indicator is currently activated then we have started the gesture
        // on top of the checked button so we need to slide the indicator
        // by checking the button next to it as we move
        if (activated && !isEnd) {
            // Decrease index, move left in LTR & right in RTL
            if (decreaseIndex) {
                const newIndex = index - 1;
                if (newIndex >= 0) {
                    nextIndex = newIndex;
                }
                // Increase index, moves right in LTR & left in RTL
            }
            else if (increaseIndex) {
                if (activated && !isEnd) {
                    const newIndex = index + 1;
                    if (newIndex < buttons.length) {
                        nextIndex = newIndex;
                    }
                }
            }
            if (nextIndex !== undefined && !buttons[nextIndex].disabled) {
                current = buttons[nextIndex];
            }
        }
        // If the indicator is not activated then we will just set the indicator
        // to the element where the gesture ended
        if (!activated && isEnd) {
            current = nextEl;
        }
        if (current != null) {
            /**
             * If current element is ion-segment then that means
             * user tried to select a disabled ion-segment-button,
             * and we should not update the ripple.
             */
            if (current.tagName === 'ION-SEGMENT') {
                return false;
            }
            if (previous !== current) {
                this.checkButton(previous, current);
            }
        }
        return true;
    }
    emitStyle() {
        this.ionStyle.emit({
            segment: true,
        });
    }
    onKeyDown(ev) {
        const rtl = isRTL(this.el);
        let keyDownSelectsButton = this.selectOnFocus;
        let current;
        switch (ev.key) {
            case 'ArrowRight':
                ev.preventDefault();
                current = rtl ? this.getSegmentButton('previous') : this.getSegmentButton('next');
                break;
            case 'ArrowLeft':
                ev.preventDefault();
                current = rtl ? this.getSegmentButton('next') : this.getSegmentButton('previous');
                break;
            case 'Home':
                ev.preventDefault();
                current = this.getSegmentButton('first');
                break;
            case 'End':
                ev.preventDefault();
                current = this.getSegmentButton('last');
                break;
            case ' ':
            case 'Enter':
                ev.preventDefault();
                current = document.activeElement;
                keyDownSelectsButton = true;
        }
        if (!current) {
            return;
        }
        if (keyDownSelectsButton) {
            const previous = this.checked;
            this.checkButton(previous || current, current);
            if (current !== previous) {
                this.emitValueChange();
            }
        }
        current.setFocus();
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '22bd7bbecaa9f0c95971565e06ef3fa4ad44a946', role: "tablist", onClick: this.onClick, class: createColorClasses(this.color, {
                [mode]: true,
                'in-toolbar': hostContext('ion-toolbar', this.el),
                'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
                'segment-activated': this.activated,
                'segment-disabled': this.disabled,
                'segment-scrollable': this.scrollable,
            }) }, h("slot", { key: '6d6fe81026928662137b872206de55117fda30a2' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "color": ["colorChanged"],
        "swipeGesture": ["swipeGestureChanged"],
        "value": ["valueChanged"],
        "disabled": ["disabledChanged"]
    }; }
};
Segment.style = {
    ios: IonSegmentIosStyle0,
    md: IonSegmentMdStyle0
};

export { Segment as ion_segment };

//# sourceMappingURL=ion-segment.entry.js.map