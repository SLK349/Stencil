'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
const cubicBezier = require('./cubic-bezier-57bae29b.js');
const frameworkDelegate = require('./framework-delegate-ea328c64.js');
const helpers = require('./helpers-0f03deef.js');
const lockController = require('./lock-controller-24e563e5.js');
const index$1 = require('./index-00d87bd1.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');

const routerOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
const IonRouterOutletStyle0 = routerOutletCss;

const RouterOutlet = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionNavWillLoad = index.createEvent(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = index.createEvent(this, "ionNavWillChange", 3);
        this.ionNavDidChange = index.createEvent(this, "ionNavDidChange", 3);
        this.lockController = lockController.createLockController();
        this.gestureOrAnimationInProgress = false;
        this.mode = ionicGlobal.getIonMode(this);
        this.delegate = undefined;
        this.animated = true;
        this.animation = undefined;
        this.swipeHandler = undefined;
    }
    swipeHandlerChanged() {
        if (this.gesture) {
            this.gesture.enable(this.swipeHandler !== undefined);
        }
    }
    async connectedCallback() {
        const onStart = () => {
            this.gestureOrAnimationInProgress = true;
            if (this.swipeHandler) {
                this.swipeHandler.onStart();
            }
        };
        this.gesture = (await Promise.resolve().then(function () { return require('./swipe-back-cbe535f3.js'); })).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => onStart(), (step) => { var _a; return (_a = this.ani) === null || _a === void 0 ? void 0 : _a.progressStep(step); }, (shouldComplete, step, dur) => {
            if (this.ani) {
                this.ani.onFinish(() => {
                    this.gestureOrAnimationInProgress = false;
                    if (this.swipeHandler) {
                        this.swipeHandler.onEnd(shouldComplete);
                    }
                }, { oneTimeCallback: true });
                // Account for rounding errors in JS
                let newStepValue = shouldComplete ? -0.001 : 0.001;
                /**
                 * Animation will be reversed here, so need to
                 * reverse the easing curve as well
                 *
                 * Additionally, we need to account for the time relative
                 * to the new easing curve, as `stepValue` is going to be given
                 * in terms of a linear curve.
                 */
                if (!shouldComplete) {
                    this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                    newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
                }
                else {
                    newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
                }
                this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
            }
            else {
                this.gestureOrAnimationInProgress = false;
            }
        });
        this.swipeHandlerChanged();
    }
    componentWillLoad() {
        this.ionNavWillLoad.emit();
    }
    disconnectedCallback() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    /** @internal */
    async commit(enteringEl, leavingEl, opts) {
        const unlock = await this.lockController.lock();
        let changed = false;
        try {
            changed = await this.transition(enteringEl, leavingEl, opts);
        }
        catch (e) {
            console.error(e);
        }
        unlock();
        return changed;
    }
    /** @internal */
    async setRouteId(id, params, direction, animation) {
        const changed = await this.setRoot(id, params, {
            duration: direction === 'root' ? 0 : undefined,
            direction: direction === 'back' ? 'back' : 'forward',
            animationBuilder: animation,
        });
        return {
            changed,
            element: this.activeEl,
        };
    }
    /** @internal */
    async getRouteId() {
        const active = this.activeEl;
        return active
            ? {
                id: active.tagName,
                element: active,
                params: this.activeParams,
            }
            : undefined;
    }
    async setRoot(component, params, opts) {
        if (this.activeComponent === component && helpers.shallowEqualStringMap(params, this.activeParams)) {
            return false;
        }
        // attach entering view to DOM
        const leavingEl = this.activeEl;
        const enteringEl = await frameworkDelegate.attachComponent(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params);
        this.activeComponent = component;
        this.activeEl = enteringEl;
        this.activeParams = params;
        // commit animation
        await this.commit(enteringEl, leavingEl, opts);
        await frameworkDelegate.detachComponent(this.delegate, leavingEl);
        return true;
    }
    async transition(enteringEl, leavingEl, opts = {}) {
        if (leavingEl === enteringEl) {
            return false;
        }
        // emit nav will change event
        this.ionNavWillChange.emit();
        const { el, mode } = this;
        const animated = this.animated && ionicGlobal.config.getBoolean('animated', true);
        const animationBuilder = opts.animationBuilder || this.animation || ionicGlobal.config.get('navAnimation');
        await index$1.transition(Object.assign(Object.assign({ mode,
            animated,
            enteringEl,
            leavingEl, baseEl: el,
            /**
             * We need to wait for all Stencil components
             * to be ready only when using the lazy
             * loaded bundle.
             */
            deepWait: helpers.hasLazyBuild(el), progressCallback: opts.progressAnimation
                ? (ani) => {
                    /**
                     * Because this progress callback is called asynchronously
                     * it is possible for the gesture to start and end before
                     * the animation is ever set. In that scenario, we should
                     * immediately call progressEnd so that the transition promise
                     * resolves and the gesture does not get locked up.
                     */
                    if (ani !== undefined && !this.gestureOrAnimationInProgress) {
                        this.gestureOrAnimationInProgress = true;
                        ani.onFinish(() => {
                            this.gestureOrAnimationInProgress = false;
                            if (this.swipeHandler) {
                                this.swipeHandler.onEnd(false);
                            }
                        }, { oneTimeCallback: true });
                        /**
                         * Playing animation to beginning
                         * with a duration of 0 prevents
                         * any flickering when the animation
                         * is later cleaned up.
                         */
                        ani.progressEnd(0, 0, 0);
                    }
                    else {
                        this.ani = ani;
                    }
                }
                : undefined }, opts), { animationBuilder }));
        // emit nav changed event
        this.ionNavDidChange.emit();
        return true;
    }
    render() {
        return index.h("slot", { key: 'a70341f58d19df55de1dad00e3464388e446aa2a' });
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "swipeHandler": ["swipeHandlerChanged"]
    }; }
};
RouterOutlet.style = IonRouterOutletStyle0;

exports.ion_router_outlet = RouterOutlet;

//# sourceMappingURL=ion-router-outlet.cjs.entry.js.map