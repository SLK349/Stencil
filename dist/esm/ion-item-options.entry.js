import { r as registerInstance, d as createEvent, h, e as getElement, H as Host } from './index-a73b2c0c.js';
import { l as isEndSide } from './helpers-5a2c111a.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const itemOptionsIosCss = "ion-item-options{top:0;right:0;justify-content:flex-end;display:none;position:absolute;height:100%;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;justify-content:flex-end}[dir=rtl] ion-item-options{justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;justify-content:flex-end}}.item-options-start{right:auto;left:0;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{justify-content:flex-end}[dir=rtl] .item-options-start{justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
const IonItemOptionsIosStyle0 = itemOptionsIosCss;

const itemOptionsMdCss = "ion-item-options{top:0;right:0;justify-content:flex-end;display:none;position:absolute;height:100%;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;justify-content:flex-end}[dir=rtl] ion-item-options{justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;justify-content:flex-end}}.item-options-start{right:auto;left:0;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{justify-content:flex-end}[dir=rtl] .item-options-start{justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";
const IonItemOptionsMdStyle0 = itemOptionsMdCss;

const ItemOptions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionSwipe = createEvent(this, "ionSwipe", 7);
        this.side = 'end';
    }
    /** @internal */
    async fireSwipeEvent() {
        this.ionSwipe.emit({
            side: this.side,
        });
    }
    render() {
        const mode = getIonMode(this);
        const isEnd = isEndSide(this.side);
        return (h(Host, { key: '6d91399d2aaaa81d514d0bbc8dffe53eeec25d36', class: {
                [mode]: true,
                // Used internally for styling
                [`item-options-${mode}`]: true,
                /**
                 * Note: The "start" and "end" terms refer to the
                 * direction ion-item-option instances within ion-item-options flow.
                 * They do not refer to how ion-item-options flows within ion-item-sliding.
                 * As a result, "item-options-start" means the ion-item-options container
                 * always appears on the left, and "item-options-end" means the ion-item-options
                 * container always appears on the right.
                 */
                'item-options-start': !isEnd,
                'item-options-end': isEnd,
            } }));
    }
    get el() { return getElement(this); }
};
ItemOptions.style = {
    ios: IonItemOptionsIosStyle0,
    md: IonItemOptionsMdStyle0
};

export { ItemOptions as ion_item_options };

//# sourceMappingURL=ion-item-options.entry.js.map