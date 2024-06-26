import { p as proxyCustomElement, H, h, c as Host } from './p-53634f3f.js';
import { k as clamp } from './p-4e0d3630.js';
import { c as createColorClasses } from './p-100c2286.js';
import { c as config, g as getIonMode } from './p-7ff156a4.js';

const progressBarIosCss = ":host{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.3);--progress-background:var(--ion-color-primary, #0054e9);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{transform-origin:left top;transition:transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{animation:primary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{animation:secondary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--background) 0%, var(--background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{animation-play-state:paused}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{to{transform:translateX(-10px)}}:host{border-radius:9999px;height:4px}:host(.progress-bar-solid){--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}";
const IonProgressBarIosStyle0 = progressBarIosCss;

const progressBarMdCss = ":host{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.3);--progress-background:var(--ion-color-primary, #0054e9);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{transform-origin:left top;transition:transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{animation:primary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{animation:secondary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--background) 0%, var(--background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{animation-play-state:paused}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{to{transform:translateX(-10px)}}:host{height:4px}:host(.ion-color) .progress-buffer-bar{background:rgba(var(--ion-color-base-rgb), 0.3)}";
const IonProgressBarMdStyle0 = progressBarMdCss;

const ProgressBar = /*@__PURE__*/ proxyCustomElement(class ProgressBar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = 'determinate';
        this.reversed = false;
        this.value = 0;
        this.buffer = 1;
        this.color = undefined;
    }
    render() {
        const { color, type, reversed, value, buffer } = this;
        const paused = config.getBoolean('_testing');
        const mode = getIonMode(this);
        // If the progress is displayed as a solid bar.
        const progressSolid = buffer === 1;
        return (h(Host, { key: '8d8ddf0b26fe33803d3a6168cbedd523d1a888e7', role: "progressbar", "aria-valuenow": type === 'determinate' ? value : null, "aria-valuemin": "0", "aria-valuemax": "1", class: createColorClasses(color, {
                [mode]: true,
                [`progress-bar-${type}`]: true,
                'progress-paused': paused,
                'progress-bar-reversed': document.dir === 'rtl' ? !reversed : reversed,
                'progress-bar-solid': progressSolid,
            }) }, type === 'indeterminate' ? renderIndeterminate() : renderProgress(value, buffer)));
    }
    static get style() { return {
        ios: IonProgressBarIosStyle0,
        md: IonProgressBarMdStyle0
    }; }
}, [33, "ion-progress-bar", {
        "type": [1],
        "reversed": [4],
        "value": [2],
        "buffer": [2],
        "color": [513]
    }]);
const renderIndeterminate = () => {
    return (h("div", { part: "track", class: "progress-buffer-bar" }, h("div", { class: "indeterminate-bar-primary" }, h("span", { part: "progress", class: "progress-indeterminate" })), h("div", { class: "indeterminate-bar-secondary" }, h("span", { part: "progress", class: "progress-indeterminate" }))));
};
const renderProgress = (value, buffer) => {
    const finalValue = clamp(0, value, 1);
    const finalBuffer = clamp(0, buffer, 1);
    return [
        h("div", { part: "progress", class: "progress", style: { transform: `scaleX(${finalValue})` } }),
        /**
         * Buffer circles with two container to move
         * the circles behind the buffer progress
         * with respecting the animation.
         * When finalBuffer === 1, we use display: none
         * instead of removing the element to avoid flickering.
         */
        h("div", { class: { 'buffer-circles-container': true, 'ion-hide': finalBuffer === 1 }, style: { transform: `translateX(${finalBuffer * 100}%)` } }, h("div", { class: "buffer-circles-container", style: { transform: `translateX(-${finalBuffer * 100}%)` } }, h("div", { part: "stream", class: "buffer-circles" }))),
        h("div", { part: "track", class: "progress-buffer-bar", style: { transform: `scaleX(${finalBuffer})` } }),
    ];
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-progress-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-progress-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProgressBar);
            }
            break;
    } });
}
defineCustomElement$1();

const IonProgressBar = ProgressBar;
const defineCustomElement = defineCustomElement$1;

export { IonProgressBar, defineCustomElement };

//# sourceMappingURL=ion-progress-bar.js.map