import { r as registerInstance, i as readTask, w as writeTask, h, e as getElement, H as Host } from './index-a73b2c0c.js';
import { g as getIonMode } from './ionic-global-fc593e4d.js';

const rippleEffectCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}";
const IonRippleEffectStyle0 = rippleEffectCss;

const RippleEffect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'bounded';
    }
    /**
     * Adds the ripple effect to the parent element.
     *
     * @param x The horizontal coordinate of where the ripple should start.
     * @param y The vertical coordinate of where the ripple should start.
     */
    async addRipple(x, y) {
        return new Promise((resolve) => {
            readTask(() => {
                const rect = this.el.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;
                const hypotenuse = Math.sqrt(width * width + height * height);
                const maxDim = Math.max(height, width);
                const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
                const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                const finalScale = maxRadius / initialSize;
                let posX = x - rect.left;
                let posY = y - rect.top;
                if (this.unbounded) {
                    posX = width * 0.5;
                    posY = height * 0.5;
                }
                const styleX = posX - initialSize * 0.5;
                const styleY = posY - initialSize * 0.5;
                const moveX = width * 0.5 - posX;
                const moveY = height * 0.5 - posY;
                writeTask(() => {
                    const div = document.createElement('div');
                    div.classList.add('ripple-effect');
                    const style = div.style;
                    style.top = styleY + 'px';
                    style.left = styleX + 'px';
                    style.width = style.height = initialSize + 'px';
                    style.setProperty('--final-scale', `${finalScale}`);
                    style.setProperty('--translate-end', `${moveX}px, ${moveY}px`);
                    const container = this.el.shadowRoot || this.el;
                    container.appendChild(div);
                    setTimeout(() => {
                        resolve(() => {
                            removeRipple(div);
                        });
                    }, 225 + 100);
                });
            });
        });
    }
    get unbounded() {
        return this.type === 'unbounded';
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '7ae559bda5d2c1856a45bfa150c2cb4f83373f8e', role: "presentation", class: {
                [mode]: true,
                unbounded: this.unbounded,
            } }));
    }
    get el() { return getElement(this); }
};
const removeRipple = (ripple) => {
    ripple.classList.add('fade-out');
    setTimeout(() => {
        ripple.remove();
    }, 200);
};
const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;
RippleEffect.style = IonRippleEffectStyle0;

export { RippleEffect as ion_ripple_effect };

//# sourceMappingURL=ion-ripple-effect.entry.js.map