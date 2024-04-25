'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$3 = require('./index-63b74c99.js');
const index$2 = require('./index-9b06e5b3.js');
const frameworkDelegate = require('./framework-delegate-ea328c64.js');
const helpers = require('./helpers-0f03deef.js');
const lockController = require('./lock-controller-24e563e5.js');
const index$4 = require('./index-7d4ba1aa.js');
const capacitor = require('./capacitor-97b4d9f3.js');
const overlays = require('./overlays-67c5782c.js');
const theme = require('./theme-76a542db.js');
const index$5 = require('./index-00d87bd1.js');
const ionicGlobal = require('./ionic-global-79bd1147.js');
const keyboard = require('./keyboard-3a5e6b23.js');
const animation = require('./animation-38c620f1.js');
const cubicBezier = require('./cubic-bezier-57bae29b.js');
const index$1 = require('./index-63bd8011.js');
const index = require('./index-a370c7e1.js');
require('./hardware-back-button-e87df2c5.js');
require('./gesture-controller-c77f93be.js');
require('./keyboard-caa0f933.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var Style;
(function (Style) {
    Style["Dark"] = "DARK";
    Style["Light"] = "LIGHT";
    Style["Default"] = "DEFAULT";
})(Style || (Style = {}));
const StatusBar = {
    getEngine() {
        const capacitor$1 = capacitor.getCapacitor();
        if (capacitor$1 === null || capacitor$1 === void 0 ? void 0 : capacitor$1.isPluginAvailable('StatusBar')) {
            return capacitor$1.Plugins.StatusBar;
        }
        return undefined;
    },
    setStyle(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        engine.setStyle(options);
    },
    getStyle: async function () {
        const engine = this.getEngine();
        if (!engine) {
            return Style.Default;
        }
        const { style } = await engine.getInfo();
        return style;
    },
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Use y = mx + b to
 * figure out the backdrop value
 * at a particular x coordinate. This
 * is useful when the backdrop does
 * not begin to fade in until after
 * the 0 breakpoint.
 */
const getBackdropValueForSheet = (x, backdropBreakpoint) => {
    /**
     * We will use these points:
     * (backdropBreakpoint, 0)
     * (maxBreakpoint, 1)
     * We know that at the beginning breakpoint,
     * the backdrop will be hidden. We also
     * know that at the maxBreakpoint, the backdrop
     * must be fully visible. maxBreakpoint should
     * always be 1 even if the maximum value
     * of the breakpoints array is not 1 since
     * the animation runs from a progress of 0
     * to a progress of 1.
     * m = (y2 - y1) / (x2 - x1)
     *
     * This is simplified from:
     * m = (1 - 0) / (maxBreakpoint - backdropBreakpoint)
     *
     * If the backdropBreakpoint is 1, we return 0 as the
     * backdrop is completely hidden.
     *
     */
    if (backdropBreakpoint === 1) {
        return 0;
    }
    const slope = 1 / (1 - backdropBreakpoint);
    /**
     * From here, compute b which is
     * the backdrop opacity if the offset
     * is 0. If the backdrop does not
     * begin to fade in until after the
     * 0 breakpoint, this b value will be
     * negative. This is fine as we never pass
     * b directly into the animation keyframes.
     * b = y - mx
     * Use a known point: (backdropBreakpoint, 0)
     * This is simplified from:
     * b = 0 - (backdropBreakpoint * slope)
     */
    const b = -(backdropBreakpoint * slope);
    /**
     * Finally, we can now determine the
     * backdrop offset given an arbitrary
     * gesture offset.
     */
    return x * slope + b;
};
/**
 * The tablet/desktop card modal activates
 * when the window width is >= 768.
 * At that point, the presenting element
 * is not transformed, so we do not need to
 * adjust the status bar color.
 *
 */
const setCardStatusBarDark = () => {
    if (!index.win || index.win.innerWidth >= 768) {
        return;
    }
    StatusBar.setStyle({ style: Style.Dark });
};
const setCardStatusBarDefault = (defaultStyle = Style.Default) => {
    if (!index.win || index.win.innerWidth >= 768) {
        return;
    }
    StatusBar.setStyle({ style: defaultStyle });
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const handleCanDismiss = async (el, animation) => {
    /**
     * If canDismiss is not a function
     * then we can return early. If canDismiss is `true`,
     * then canDismissBlocksGesture is `false` as canDismiss
     * will never interrupt the gesture. As a result,
     * this code block is never reached. If canDismiss is `false`,
     * then we never dismiss.
     */
    if (typeof el.canDismiss !== 'function') {
        return;
    }
    /**
     * Run the canDismiss callback.
     * If the function returns `true`,
     * then we can proceed with dismiss.
     */
    const shouldDismiss = await el.canDismiss(undefined, overlays.GESTURE);
    if (!shouldDismiss) {
        return;
    }
    /**
     * If canDismiss resolved after the snap
     * back animation finished, we can
     * dismiss immediately.
     *
     * If canDismiss resolved before the snap
     * back animation finished, we need to
     * wait until the snap back animation is
     * done before dismissing.
     */
    if (animation.isRunning()) {
        animation.onFinish(() => {
            el.dismiss(undefined, 'handler');
        }, { oneTimeCallback: true });
    }
    else {
        el.dismiss(undefined, 'handler');
    }
};
/**
 * This function lets us simulate a realistic spring-like animation
 * when swiping down on the modal.
 * There are two forces that we need to use to compute the spring physics:
 *
 * 1. Stiffness, k: This is a measure of resistance applied a spring.
 * 2. Dampening, c: This value has the effect of reducing or preventing oscillation.
 *
 * Using these two values, we can calculate the Spring Force and the Dampening Force
 * to compute the total force applied to a spring.
 *
 * Spring Force: This force pulls a spring back into its equilibrium position.
 * Hooke's Law tells us that that spring force (FS) = kX.
 * k is the stiffness of a spring, and X is the displacement of the spring from its
 * equilibrium position. In this case, it is the amount by which the free end
 * of a spring was displaced (stretched/pushed) from its "relaxed" position.
 *
 * Dampening Force: This force slows down motion. Without it, a spring would oscillate forever.
 * The dampening force, FD, can be found via this formula: FD = -cv
 * where c the dampening value and v is velocity.
 *
 * Therefore, the resulting force that is exerted on the block is:
 * F = FS + FD = -kX - cv
 *
 * Newton's 2nd Law tells us that F = ma:
 * ma = -kX - cv.
 *
 * For Ionic's purposes, we can assume that m = 1:
 * a = -kX - cv
 *
 * Imagine a block attached to the end of a spring. At equilibrium
 * the block is at position x = 1.
 * Pressing on the block moves it to position x = 0;
 * So, to calculate the displacement, we need to take the
 * current position and subtract the previous position from it.
 * X = x - x0 = 0 - 1 = -1.
 *
 * For Ionic's purposes, we are only pushing on the spring modal
 * so we have a max position of 1.
 * As a result, we can expand displacement to this formula:
 * X = x - 1
 *
 * a = -k(x - 1) - cv
 *
 * We can represent the motion of something as a function of time: f(t) = x.
 * The derivative of position gives us the velocity: f'(t)
 * The derivative of the velocity gives us the acceleration: f''(t)
 *
 * We can substitute the formula above with these values:
 *
 * f"(t) = -k * (f(t) - 1) - c * f'(t)
 *
 * This is called a differential equation.
 *
 * We know that at t = 0, we are at x = 0 because the modal does not move: f(0) = 0
 * This means our velocity is also zero: f'(0) = 0.
 *
 * We can cheat a bit and plug the formula into Wolfram Alpha.
 * However, we need to pick stiffness and dampening values:
 * k = 0.57
 * c = 15
 *
 * I picked these as they are fairly close to native iOS's spring effect
 * with the modal.
 *
 * What we plug in is this: f(0) = 0; f'(0) = 0; f''(t) = -0.57(f(t) - 1) - 15f'(t)
 *
 * The result is a formula that lets us calculate the acceleration
 * for a given time t.
 * Note: This is the approximate form of the solution. Wolfram Alpha will
 * give you a complex differential equation too.
 */
const calculateSpringStep = (t) => {
    return 0.00255275 * 2.71828 ** (-14.9619 * t) - 1.00255 * 2.71828 ** (-0.0380968 * t) + 1;
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
// Defaults for the card swipe animation
const SwipeToCloseDefaults = {
    MIN_PRESENTING_SCALE: 0.915,
};
const createSwipeToCloseGesture = (el, animation, statusBarStyle, onDismiss) => {
    /**
     * The step value at which a card modal
     * is eligible for dismissing via gesture.
     */
    const DISMISS_THRESHOLD = 0.5;
    const height = el.offsetHeight;
    let isOpen = false;
    let canDismissBlocksGesture = false;
    let contentEl = null;
    let scrollEl = null;
    const canDismissMaxStep = 0.2;
    let initialScrollY = true;
    let lastStep = 0;
    const getScrollY = () => {
        if (contentEl && index$2.isIonContent(contentEl)) {
            return contentEl.scrollY;
            /**
             * Custom scroll containers are intended to be
             * used with virtual scrolling, so we assume
             * there is scrolling in this case.
             */
        }
        else {
            return true;
        }
    };
    const canStart = (detail) => {
        const target = detail.event.target;
        if (target === null || !target.closest) {
            return true;
        }
        /**
         * If we are swiping on the content,
         * swiping should only be possible if
         * the content is scrolled all the way
         * to the top so that we do not interfere
         * with scrolling.
         *
         * We cannot assume that the `ion-content`
         * target will remain consistent between
         * swipes. For example, when using
         * ion-nav within a card modal it is
         * possible to swipe, push a view, and then
         * swipe again. The target content will not
         * be the same between swipes.
         */
        contentEl = index$2.findClosestIonContent(target);
        if (contentEl) {
            /**
             * The card should never swipe to close
             * on the content with a refresher.
             * Note: We cannot solve this by making the
             * swipeToClose gesture have a higher priority
             * than the refresher gesture as the iOS native
             * refresh gesture uses a scroll listener in
             * addition to a gesture.
             *
             * Note: Do not use getScrollElement here
             * because we need this to be a synchronous
             * operation, and getScrollElement is
             * asynchronous.
             */
            if (index$2.isIonContent(contentEl)) {
                const root = helpers.getElementRoot(contentEl);
                scrollEl = root.querySelector('.inner-scroll');
            }
            else {
                scrollEl = contentEl;
            }
            const hasRefresherInContent = !!contentEl.querySelector('ion-refresher');
            return !hasRefresherInContent && scrollEl.scrollTop === 0;
        }
        /**
         * Card should be swipeable on all
         * parts of the modal except for the footer.
         */
        const footer = target.closest('ion-footer');
        if (footer === null) {
            return true;
        }
        return false;
    };
    const onStart = (detail) => {
        const { deltaY } = detail;
        /**
         * Get the initial scrollY value so
         * that we can correctly reset the scrollY
         * prop when the gesture ends.
         */
        initialScrollY = getScrollY();
        /**
         * If canDismiss is anything other than `true`
         * then users should be able to swipe down
         * until a threshold is hit. At that point,
         * the card modal should not proceed any further.
         * TODO (FW-937)
         * Remove undefined check
         */
        canDismissBlocksGesture = el.canDismiss !== undefined && el.canDismiss !== true;
        /**
         * If we are pulling down, then
         * it is possible we are pulling on the
         * content. We do not want scrolling to
         * happen at the same time as the gesture.
         */
        if (deltaY > 0 && contentEl) {
            index$2.disableContentScrollY(contentEl);
        }
        animation.progressStart(true, isOpen ? 1 : 0);
    };
    const onMove = (detail) => {
        const { deltaY } = detail;
        /**
         * If we are pulling down, then
         * it is possible we are pulling on the
         * content. We do not want scrolling to
         * happen at the same time as the gesture.
         */
        if (deltaY > 0 && contentEl) {
            index$2.disableContentScrollY(contentEl);
        }
        /**
         * If we are swiping on the content
         * then the swipe gesture should only
         * happen if we are pulling down.
         *
         * However, if we pull up and
         * then down such that the scroll position
         * returns to 0, we should be able to swipe
         * the card.
         */
        const step = detail.deltaY / height;
        /**
         * Check if user is swiping down and
         * if we have a canDismiss value that
         * should block the gesture from
         * proceeding,
         */
        const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
        /**
         * If we are blocking the gesture from dismissing,
         * set the max step value so that the sheet cannot be
         * completely hidden.
         */
        const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
        /**
         * If we are blocking the gesture from
         * dismissing, calculate the spring modifier value
         * this will be added to the starting breakpoint
         * value to give the gesture a spring-like feeling.
         * Note that the starting breakpoint is always 0,
         * so we omit adding 0 to the result.
         */
        const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
        const clampedStep = helpers.clamp(0.0001, processedStep, maxStep);
        animation.progressStep(clampedStep);
        /**
         * When swiping down half way, the status bar style
         * should be reset to its default value.
         *
         * We track lastStep so that we do not fire these
         * functions on every onMove, only when the user has
         * crossed a certain threshold.
         */
        if (clampedStep >= DISMISS_THRESHOLD && lastStep < DISMISS_THRESHOLD) {
            setCardStatusBarDefault(statusBarStyle);
            /**
             * However, if we swipe back up, then the
             * status bar style should be set to have light
             * text on a dark background.
             */
        }
        else if (clampedStep < DISMISS_THRESHOLD && lastStep >= DISMISS_THRESHOLD) {
            setCardStatusBarDark();
        }
        lastStep = clampedStep;
    };
    const onEnd = (detail) => {
        const velocity = detail.velocityY;
        const step = detail.deltaY / height;
        const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
        const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
        const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
        const clampedStep = helpers.clamp(0.0001, processedStep, maxStep);
        const threshold = (detail.deltaY + velocity * 1000) / height;
        /**
         * If canDismiss blocks
         * the swipe gesture, then the
         * animation can never complete until
         * canDismiss is checked.
         */
        const shouldComplete = !isAttemptingDismissWithCanDismiss && threshold >= DISMISS_THRESHOLD;
        let newStepValue = shouldComplete ? -0.001 : 0.001;
        if (!shouldComplete) {
            animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
            newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], clampedStep)[0];
        }
        else {
            animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
            newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], clampedStep)[0];
        }
        const duration = shouldComplete
            ? computeDuration(step * height, velocity)
            : computeDuration((1 - clampedStep) * height, velocity);
        isOpen = shouldComplete;
        gesture.enable(false);
        if (contentEl) {
            index$2.resetContentScrollY(contentEl, initialScrollY);
        }
        animation
            .onFinish(() => {
            if (!shouldComplete) {
                gesture.enable(true);
            }
        })
            .progressEnd(shouldComplete ? 1 : 0, newStepValue, duration);
        /**
         * If the canDismiss value blocked the gesture
         * from proceeding, then we should ignore whatever
         * shouldComplete is. Whether or not the modal
         * animation should complete is now determined by
         * canDismiss.
         *
         * If the user swiped >25% of the way
         * to the max step, then we should
         * check canDismiss. 25% was chosen
         * to avoid accidental swipes.
         */
        if (isAttemptingDismissWithCanDismiss && clampedStep > maxStep / 4) {
            handleCanDismiss(el, animation);
        }
        else if (shouldComplete) {
            onDismiss();
        }
    };
    const gesture = index$1.createGesture({
        el,
        gestureName: 'modalSwipeToClose',
        gesturePriority: overlays.OVERLAY_GESTURE_PRIORITY,
        direction: 'y',
        threshold: 10,
        canStart,
        onStart,
        onMove,
        onEnd,
    });
    return gesture;
};
const computeDuration = (remaining, velocity) => {
    return helpers.clamp(400, remaining / Math.abs(velocity * 1.1), 500);
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const createSheetEnterAnimation = (opts) => {
    const { currentBreakpoint, backdropBreakpoint } = opts;
    /**
     * If the backdropBreakpoint is undefined, then the backdrop
     * should always fade in. If the backdropBreakpoint came before the
     * current breakpoint, then the backdrop should be fading in.
     */
    const shouldShowBackdrop = backdropBreakpoint === undefined || backdropBreakpoint < currentBreakpoint;
    const initialBackdrop = shouldShowBackdrop ? `calc(var(--backdrop-opacity) * ${currentBreakpoint})` : '0';
    const backdropAnimation = animation.createAnimation('backdropAnimation').fromTo('opacity', 0, initialBackdrop);
    if (shouldShowBackdrop) {
        backdropAnimation
            .beforeStyles({
            'pointer-events': 'none',
        })
            .afterClearStyles(['pointer-events']);
    }
    const wrapperAnimation = animation.createAnimation('wrapperAnimation').keyframes([
        { offset: 0, opacity: 1, transform: 'translateY(100%)' },
        { offset: 1, opacity: 1, transform: `translateY(${100 - currentBreakpoint * 100}%)` },
    ]);
    return { wrapperAnimation, backdropAnimation };
};
const createSheetLeaveAnimation = (opts) => {
    const { currentBreakpoint, backdropBreakpoint } = opts;
    /**
     * Backdrop does not always fade in from 0 to 1 if backdropBreakpoint
     * is defined, so we need to account for that offset by figuring out
     * what the current backdrop value should be.
     */
    const backdropValue = `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(currentBreakpoint, backdropBreakpoint)})`;
    const defaultBackdrop = [
        { offset: 0, opacity: backdropValue },
        { offset: 1, opacity: 0 },
    ];
    const customBackdrop = [
        { offset: 0, opacity: backdropValue },
        { offset: backdropBreakpoint, opacity: 0 },
        { offset: 1, opacity: 0 },
    ];
    const backdropAnimation = animation.createAnimation('backdropAnimation').keyframes(backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop);
    const wrapperAnimation = animation.createAnimation('wrapperAnimation').keyframes([
        { offset: 0, opacity: 1, transform: `translateY(${100 - currentBreakpoint * 100}%)` },
        { offset: 1, opacity: 1, transform: `translateY(100%)` },
    ]);
    return { wrapperAnimation, backdropAnimation };
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const createEnterAnimation$1 = () => {
    const backdropAnimation = animation.createAnimation()
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none',
    })
        .afterClearStyles(['pointer-events']);
    const wrapperAnimation = animation.createAnimation().fromTo('transform', 'translateY(100vh)', 'translateY(0vh)');
    return { backdropAnimation, wrapperAnimation };
};
/**
 * iOS Modal Enter Animation for the Card presentation style
 */
const iosEnterAnimation = (baseEl, opts) => {
    const { presentingEl, currentBreakpoint } = opts;
    const root = helpers.getElementRoot(baseEl);
    const { wrapperAnimation, backdropAnimation } = currentBreakpoint !== undefined ? createSheetEnterAnimation(opts) : createEnterAnimation$1();
    backdropAnimation.addElement(root.querySelector('ion-backdrop'));
    wrapperAnimation.addElement(root.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({ opacity: 1 });
    const baseAnimation = animation.createAnimation('entering-base')
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .addAnimation(wrapperAnimation);
    if (presentingEl) {
        const isMobile = window.innerWidth < 768;
        const hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
        const presentingElRoot = helpers.getElementRoot(presentingEl);
        const presentingAnimation = animation.createAnimation().beforeStyles({
            transform: 'translateY(0)',
            'transform-origin': 'top center',
            overflow: 'hidden',
        });
        const bodyEl = document.body;
        if (isMobile) {
            /**
             * Fallback for browsers that does not support `max()` (ex: Firefox)
             * No need to worry about statusbar padding since engines like Gecko
             * are not used as the engine for standalone Cordova/Capacitor apps
             */
            const transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
            const modalTransform = hasCardModal ? '-10px' : transformOffset;
            const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
            const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
            presentingAnimation
                .afterStyles({
                transform: finalTransform,
            })
                .beforeAddWrite(() => bodyEl.style.setProperty('background-color', 'black'))
                .addElement(presentingEl)
                .keyframes([
                { offset: 0, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
                { offset: 1, filter: 'contrast(0.85)', transform: finalTransform, borderRadius: '10px 10px 0 0' },
            ]);
            baseAnimation.addAnimation(presentingAnimation);
        }
        else {
            baseAnimation.addAnimation(backdropAnimation);
            if (!hasCardModal) {
                wrapperAnimation.fromTo('opacity', '0', '1');
            }
            else {
                const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
                const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
                presentingAnimation
                    .afterStyles({
                    transform: finalTransform,
                })
                    .addElement(presentingElRoot.querySelector('.modal-wrapper'))
                    .keyframes([
                    { offset: 0, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
                    { offset: 1, filter: 'contrast(0.85)', transform: finalTransform },
                ]);
                const shadowAnimation = animation.createAnimation()
                    .afterStyles({
                    transform: finalTransform,
                })
                    .addElement(presentingElRoot.querySelector('.modal-shadow'))
                    .keyframes([
                    { offset: 0, opacity: '1', transform: 'translateY(0) scale(1)' },
                    { offset: 1, opacity: '0', transform: finalTransform },
                ]);
                baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
            }
        }
    }
    else {
        baseAnimation.addAnimation(backdropAnimation);
    }
    return baseAnimation;
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const createLeaveAnimation$1 = () => {
    const backdropAnimation = animation.createAnimation().fromTo('opacity', 'var(--backdrop-opacity)', 0);
    const wrapperAnimation = animation.createAnimation().fromTo('transform', 'translateY(0vh)', 'translateY(100vh)');
    return { backdropAnimation, wrapperAnimation };
};
/**
 * iOS Modal Leave Animation
 */
const iosLeaveAnimation = (baseEl, opts, duration = 500) => {
    const { presentingEl, currentBreakpoint } = opts;
    const root = helpers.getElementRoot(baseEl);
    const { wrapperAnimation, backdropAnimation } = currentBreakpoint !== undefined ? createSheetLeaveAnimation(opts) : createLeaveAnimation$1();
    backdropAnimation.addElement(root.querySelector('ion-backdrop'));
    wrapperAnimation.addElement(root.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({ opacity: 1 });
    const baseAnimation = animation.createAnimation('leaving-base')
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(duration)
        .addAnimation(wrapperAnimation);
    if (presentingEl) {
        const isMobile = window.innerWidth < 768;
        const hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
        const presentingElRoot = helpers.getElementRoot(presentingEl);
        const presentingAnimation = animation.createAnimation()
            .beforeClearStyles(['transform'])
            .afterClearStyles(['transform'])
            .onFinish((currentStep) => {
            // only reset background color if this is the last card-style modal
            if (currentStep !== 1) {
                return;
            }
            presentingEl.style.setProperty('overflow', '');
            const numModals = Array.from(bodyEl.querySelectorAll('ion-modal:not(.overlay-hidden)')).filter((m) => m.presentingElement !== undefined).length;
            if (numModals <= 1) {
                bodyEl.style.setProperty('background-color', '');
            }
        });
        const bodyEl = document.body;
        if (isMobile) {
            const transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
            const modalTransform = hasCardModal ? '-10px' : transformOffset;
            const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
            const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
            presentingAnimation.addElement(presentingEl).keyframes([
                { offset: 0, filter: 'contrast(0.85)', transform: finalTransform, borderRadius: '10px 10px 0 0' },
                { offset: 1, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
            ]);
            baseAnimation.addAnimation(presentingAnimation);
        }
        else {
            baseAnimation.addAnimation(backdropAnimation);
            if (!hasCardModal) {
                wrapperAnimation.fromTo('opacity', '1', '0');
            }
            else {
                const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
                const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
                presentingAnimation
                    .addElement(presentingElRoot.querySelector('.modal-wrapper'))
                    .afterStyles({
                    transform: 'translate3d(0, 0, 0)',
                })
                    .keyframes([
                    { offset: 0, filter: 'contrast(0.85)', transform: finalTransform },
                    { offset: 1, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
                ]);
                const shadowAnimation = animation.createAnimation()
                    .addElement(presentingElRoot.querySelector('.modal-shadow'))
                    .afterStyles({
                    transform: 'translateY(0) scale(1)',
                })
                    .keyframes([
                    { offset: 0, opacity: '0', transform: finalTransform },
                    { offset: 1, opacity: '1', transform: 'translateY(0) scale(1)' },
                ]);
                baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
            }
        }
    }
    else {
        baseAnimation.addAnimation(backdropAnimation);
    }
    return baseAnimation;
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const createEnterAnimation = () => {
    const backdropAnimation = animation.createAnimation()
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none',
    })
        .afterClearStyles(['pointer-events']);
    const wrapperAnimation = animation.createAnimation().keyframes([
        { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
        { offset: 1, opacity: 1, transform: `translateY(0px)` },
    ]);
    return { backdropAnimation, wrapperAnimation };
};
/**
 * Md Modal Enter Animation
 */
const mdEnterAnimation = (baseEl, opts) => {
    const { currentBreakpoint } = opts;
    const root = helpers.getElementRoot(baseEl);
    const { wrapperAnimation, backdropAnimation } = currentBreakpoint !== undefined ? createSheetEnterAnimation(opts) : createEnterAnimation();
    backdropAnimation.addElement(root.querySelector('ion-backdrop'));
    wrapperAnimation.addElement(root.querySelector('.modal-wrapper'));
    return animation.createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(280)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const createLeaveAnimation = () => {
    const backdropAnimation = animation.createAnimation().fromTo('opacity', 'var(--backdrop-opacity)', 0);
    const wrapperAnimation = animation.createAnimation().keyframes([
        { offset: 0, opacity: 0.99, transform: `translateY(0px)` },
        { offset: 1, opacity: 0, transform: 'translateY(40px)' },
    ]);
    return { backdropAnimation, wrapperAnimation };
};
/**
 * Md Modal Leave Animation
 */
const mdLeaveAnimation = (baseEl, opts) => {
    const { currentBreakpoint } = opts;
    const root = helpers.getElementRoot(baseEl);
    const { wrapperAnimation, backdropAnimation } = currentBreakpoint !== undefined ? createSheetLeaveAnimation(opts) : createLeaveAnimation();
    backdropAnimation.addElement(root.querySelector('ion-backdrop'));
    wrapperAnimation.addElement(root.querySelector('.modal-wrapper'));
    return animation.createAnimation()
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const createSheetGesture = (baseEl, backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, animation, breakpoints = [], getCurrentBreakpoint, onDismiss, onBreakpointChange) => {
    // Defaults for the sheet swipe animation
    const defaultBackdrop = [
        { offset: 0, opacity: 'var(--backdrop-opacity)' },
        { offset: 1, opacity: 0.01 },
    ];
    const customBackdrop = [
        { offset: 0, opacity: 'var(--backdrop-opacity)' },
        { offset: 1 - backdropBreakpoint, opacity: 0 },
        { offset: 1, opacity: 0 },
    ];
    const SheetDefaults = {
        WRAPPER_KEYFRAMES: [
            { offset: 0, transform: 'translateY(0%)' },
            { offset: 1, transform: 'translateY(100%)' },
        ],
        BACKDROP_KEYFRAMES: backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop,
    };
    const contentEl = baseEl.querySelector('ion-content');
    const height = wrapperEl.clientHeight;
    let currentBreakpoint = initialBreakpoint;
    let offset = 0;
    let canDismissBlocksGesture = false;
    const canDismissMaxStep = 0.95;
    const wrapperAnimation = animation.childAnimations.find((ani) => ani.id === 'wrapperAnimation');
    const backdropAnimation = animation.childAnimations.find((ani) => ani.id === 'backdropAnimation');
    const maxBreakpoint = breakpoints[breakpoints.length - 1];
    const minBreakpoint = breakpoints[0];
    const enableBackdrop = () => {
        baseEl.style.setProperty('pointer-events', 'auto');
        backdropEl.style.setProperty('pointer-events', 'auto');
        /**
         * When the backdrop is enabled, elements such
         * as inputs should not be focusable outside
         * the sheet.
         */
        baseEl.classList.remove('ion-disable-focus-trap');
    };
    const disableBackdrop = () => {
        baseEl.style.setProperty('pointer-events', 'none');
        backdropEl.style.setProperty('pointer-events', 'none');
        /**
         * When the backdrop is enabled, elements such
         * as inputs should not be focusable outside
         * the sheet.
         * Adding this class disables focus trapping
         * for the sheet temporarily.
         */
        baseEl.classList.add('ion-disable-focus-trap');
    };
    /**
     * After the entering animation completes,
     * we need to set the animation to go from
     * offset 0 to offset 1 so that users can
     * swipe in any direction. We then set the
     * animation offset to the current breakpoint
     * so there is no flickering.
     */
    if (wrapperAnimation && backdropAnimation) {
        wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
        backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
        animation.progressStart(true, 1 - currentBreakpoint);
        /**
         * If backdrop is not enabled, then content
         * behind modal should be clickable. To do this, we need
         * to remove pointer-events from ion-modal as a whole.
         * ion-backdrop and .modal-wrapper always have pointer-events: auto
         * applied, so the modal content can still be interacted with.
         */
        const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
        if (shouldEnableBackdrop) {
            enableBackdrop();
        }
        else {
            disableBackdrop();
        }
    }
    if (contentEl && currentBreakpoint !== maxBreakpoint) {
        contentEl.scrollY = false;
    }
    const canStart = (detail) => {
        /**
         * If we are swiping on the content, swiping should only be possible if the content
         * is scrolled all the way to the top so that we do not interfere with scrolling.
         *
         * We cannot assume that the `ion-content` target will remain consistent between swipes.
         * For example, when using ion-nav within a modal it is possible to swipe, push a view,
         * and then swipe again. The target content will not be the same between swipes.
         */
        const contentEl = index$2.findClosestIonContent(detail.event.target);
        currentBreakpoint = getCurrentBreakpoint();
        if (currentBreakpoint === 1 && contentEl) {
            /**
             * The modal should never swipe to close on the content with a refresher.
             * Note 1: We cannot solve this by making this gesture have a higher priority than
             * the refresher gesture as the iOS native refresh gesture uses a scroll listener in
             * addition to a gesture.
             *
             * Note 2: Do not use getScrollElement here because we need this to be a synchronous
             * operation, and getScrollElement is asynchronous.
             */
            const scrollEl = index$2.isIonContent(contentEl) ? helpers.getElementRoot(contentEl).querySelector('.inner-scroll') : contentEl;
            const hasRefresherInContent = !!contentEl.querySelector('ion-refresher');
            return !hasRefresherInContent && scrollEl.scrollTop === 0;
        }
        return true;
    };
    const onStart = (detail) => {
        /**
         * If canDismiss is anything other than `true`
         * then users should be able to swipe down
         * until a threshold is hit. At that point,
         * the card modal should not proceed any further.
         *
         * canDismiss is never fired via gesture if there is
         * no 0 breakpoint. However, it can be fired if the user
         * presses Esc or the hardware back button.
         * TODO (FW-937)
         * Remove undefined check
         */
        canDismissBlocksGesture = baseEl.canDismiss !== undefined && baseEl.canDismiss !== true && minBreakpoint === 0;
        /**
         * If we are pulling down, then it is possible we are pulling on the content.
         * We do not want scrolling to happen at the same time as the gesture.
         */
        if (detail.deltaY > 0 && contentEl) {
            contentEl.scrollY = false;
        }
        helpers.raf(() => {
            /**
             * Dismisses the open keyboard when the sheet drag gesture is started.
             * Sets the focus onto the modal element.
             */
            baseEl.focus();
        });
        animation.progressStart(true, 1 - currentBreakpoint);
    };
    const onMove = (detail) => {
        /**
         * If we are pulling down, then it is possible we are pulling on the content.
         * We do not want scrolling to happen at the same time as the gesture.
         * This accounts for when the user scrolls down, scrolls all the way up, and then
         * pulls down again such that the modal should start to move.
         */
        if (detail.deltaY > 0 && contentEl) {
            contentEl.scrollY = false;
        }
        /**
         * Given the change in gesture position on the Y axis,
         * compute where the offset of the animation should be
         * relative to where the user dragged.
         */
        const initialStep = 1 - currentBreakpoint;
        const secondToLastBreakpoint = breakpoints.length > 1 ? 1 - breakpoints[1] : undefined;
        const step = initialStep + detail.deltaY / height;
        const isAttemptingDismissWithCanDismiss = secondToLastBreakpoint !== undefined && step >= secondToLastBreakpoint && canDismissBlocksGesture;
        /**
         * If we are blocking the gesture from dismissing,
         * set the max step value so that the sheet cannot be
         * completely hidden.
         */
        const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
        /**
         * If we are blocking the gesture from
         * dismissing, calculate the spring modifier value
         * this will be added to the starting breakpoint
         * value to give the gesture a spring-like feeling.
         * Note that when isAttemptingDismissWithCanDismiss is true,
         * the modifier is always added to the breakpoint that
         * appears right after the 0 breakpoint.
         *
         * Note that this modifier is essentially the progression
         * between secondToLastBreakpoint and maxStep which is
         * why we subtract secondToLastBreakpoint. This lets us get
         * the result as a value from 0 to 1.
         */
        const processedStep = isAttemptingDismissWithCanDismiss && secondToLastBreakpoint !== undefined
            ? secondToLastBreakpoint +
                calculateSpringStep((step - secondToLastBreakpoint) / (maxStep - secondToLastBreakpoint))
            : step;
        offset = helpers.clamp(0.0001, processedStep, maxStep);
        animation.progressStep(offset);
    };
    const onEnd = (detail) => {
        /**
         * When the gesture releases, we need to determine
         * the closest breakpoint to snap to.
         */
        const velocity = detail.velocityY;
        const threshold = (detail.deltaY + velocity * 350) / height;
        const diff = currentBreakpoint - threshold;
        const closest = breakpoints.reduce((a, b) => {
            return Math.abs(b - diff) < Math.abs(a - diff) ? b : a;
        });
        moveSheetToBreakpoint({
            breakpoint: closest,
            breakpointOffset: offset,
            canDismiss: canDismissBlocksGesture,
            /**
             * The swipe is user-driven, so we should
             * always animate when the gesture ends.
             */
            animated: true,
        });
    };
    const moveSheetToBreakpoint = (options) => {
        const { breakpoint, canDismiss, breakpointOffset, animated } = options;
        /**
         * canDismiss should only prevent snapping
         * when users are trying to dismiss. If canDismiss
         * is present but the user is trying to swipe upwards,
         * we should allow that to happen,
         */
        const shouldPreventDismiss = canDismiss && breakpoint === 0;
        const snapToBreakpoint = shouldPreventDismiss ? currentBreakpoint : breakpoint;
        const shouldRemainOpen = snapToBreakpoint !== 0;
        currentBreakpoint = 0;
        /**
         * Update the animation so that it plays from
         * the last offset to the closest snap point.
         */
        if (wrapperAnimation && backdropAnimation) {
            wrapperAnimation.keyframes([
                { offset: 0, transform: `translateY(${breakpointOffset * 100}%)` },
                { offset: 1, transform: `translateY(${(1 - snapToBreakpoint) * 100}%)` },
            ]);
            backdropAnimation.keyframes([
                {
                    offset: 0,
                    opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(1 - breakpointOffset, backdropBreakpoint)})`,
                },
                {
                    offset: 1,
                    opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(snapToBreakpoint, backdropBreakpoint)})`,
                },
            ]);
            animation.progressStep(0);
        }
        /**
         * Gesture should remain disabled until the
         * snapping animation completes.
         */
        gesture.enable(false);
        if (shouldPreventDismiss) {
            handleCanDismiss(baseEl, animation);
        }
        else if (!shouldRemainOpen) {
            onDismiss();
        }
        /**
         * If the sheet is going to be fully expanded then we should enable
         * scrolling immediately. The sheet modal animation takes ~500ms to finish
         * so if we wait until then there is a visible delay for when scrolling is
         * re-enabled. Native iOS allows for scrolling on the sheet modal as soon
         * as the gesture is released, so we align with that.
         */
        if (contentEl && snapToBreakpoint === breakpoints[breakpoints.length - 1]) {
            contentEl.scrollY = true;
        }
        return new Promise((resolve) => {
            animation
                .onFinish(() => {
                if (shouldRemainOpen) {
                    /**
                     * Once the snapping animation completes,
                     * we need to reset the animation to go
                     * from 0 to 1 so users can swipe in any direction.
                     * We then set the animation offset to the current
                     * breakpoint so that it starts at the snapped position.
                     */
                    if (wrapperAnimation && backdropAnimation) {
                        helpers.raf(() => {
                            wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
                            backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
                            animation.progressStart(true, 1 - snapToBreakpoint);
                            currentBreakpoint = snapToBreakpoint;
                            onBreakpointChange(currentBreakpoint);
                            /**
                             * Backdrop should become enabled
                             * after the backdropBreakpoint value
                             */
                            const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
                            if (shouldEnableBackdrop) {
                                enableBackdrop();
                            }
                            else {
                                disableBackdrop();
                            }
                            gesture.enable(true);
                            resolve();
                        });
                    }
                    else {
                        gesture.enable(true);
                        resolve();
                    }
                }
                else {
                    resolve();
                }
                /**
                 * This must be a one time callback
                 * otherwise a new callback will
                 * be added every time onEnd runs.
                 */
            }, { oneTimeCallback: true })
                .progressEnd(1, 0, animated ? 500 : 0);
        });
    };
    const gesture = index$1.createGesture({
        el: wrapperEl,
        gestureName: 'modalSheet',
        gesturePriority: 40,
        direction: 'y',
        threshold: 10,
        canStart,
        onStart,
        onMove,
        onEnd,
    });
    return {
        gesture,
        moveSheetToBreakpoint,
    };
};

const modalIosCss = ":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;transform:translate(-50%, -50%);content:\"\"}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{box-shadow:none}:host(.modal-card) .modal-shadow{box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}";
const IonModalIosStyle0 = modalIosCss;

const modalMdCss = ":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;transform:translate(-50%, -50%);content:\"\"}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{transform:translate3d(0,  40px,  0);opacity:0.01}";
const IonModalMdStyle0 = modalMdCss;

const Modal = class {
    constructor(hostRef) {
        index$3.registerInstance(this, hostRef);
        this.didPresent = index$3.createEvent(this, "ionModalDidPresent", 7);
        this.willPresent = index$3.createEvent(this, "ionModalWillPresent", 7);
        this.willDismiss = index$3.createEvent(this, "ionModalWillDismiss", 7);
        this.didDismiss = index$3.createEvent(this, "ionModalDidDismiss", 7);
        this.ionBreakpointDidChange = index$3.createEvent(this, "ionBreakpointDidChange", 7);
        this.didPresentShorthand = index$3.createEvent(this, "didPresent", 7);
        this.willPresentShorthand = index$3.createEvent(this, "willPresent", 7);
        this.willDismissShorthand = index$3.createEvent(this, "willDismiss", 7);
        this.didDismissShorthand = index$3.createEvent(this, "didDismiss", 7);
        this.ionMount = index$3.createEvent(this, "ionMount", 7);
        this.lockController = lockController.createLockController();
        this.triggerController = overlays.createTriggerController();
        this.coreDelegate = frameworkDelegate.CoreDelegate();
        this.isSheetModal = false;
        this.inheritedAttributes = {};
        this.inline = false;
        // Whether or not modal is being dismissed via gesture
        this.gestureAnimationDismissing = false;
        this.onHandleClick = () => {
            const { sheetTransition, handleBehavior } = this;
            if (handleBehavior !== 'cycle' || sheetTransition !== undefined) {
                /**
                 * The sheet modal should not advance to the next breakpoint
                 * if the handle behavior is not `cycle` or if the handle
                 * is clicked while the sheet is moving to a breakpoint.
                 */
                return;
            }
            this.moveToNextBreakpoint();
        };
        this.onBackdropTap = () => {
            const { sheetTransition } = this;
            if (sheetTransition !== undefined) {
                /**
                 * When the handle is double clicked at the largest breakpoint,
                 * it will start to move to the first breakpoint. While transitioning,
                 * the backdrop will often receive the second click. We prevent the
                 * backdrop from dismissing the modal while moving between breakpoints.
                 */
                return;
            }
            this.dismiss(undefined, overlays.BACKDROP);
        };
        this.onLifecycle = (modalEvent) => {
            const el = this.usersElement;
            const name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                const ev = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail,
                });
                el.dispatchEvent(ev);
            }
        };
        this.presented = false;
        this.hasController = false;
        this.overlayIndex = undefined;
        this.delegate = undefined;
        this.keyboardClose = true;
        this.enterAnimation = undefined;
        this.leaveAnimation = undefined;
        this.breakpoints = undefined;
        this.initialBreakpoint = undefined;
        this.backdropBreakpoint = 0;
        this.handle = undefined;
        this.handleBehavior = 'none';
        this.component = undefined;
        this.componentProps = undefined;
        this.cssClass = undefined;
        this.backdropDismiss = true;
        this.showBackdrop = true;
        this.animated = true;
        this.presentingElement = undefined;
        this.htmlAttributes = undefined;
        this.isOpen = false;
        this.trigger = undefined;
        this.keepContentsMounted = false;
        this.canDismiss = true;
    }
    onIsOpenChange(newValue, oldValue) {
        if (newValue === true && oldValue === false) {
            this.present();
        }
        else if (newValue === false && oldValue === true) {
            this.dismiss();
        }
    }
    triggerChanged() {
        const { trigger, el, triggerController } = this;
        if (trigger) {
            triggerController.addClickListener(el, trigger);
        }
    }
    breakpointsChanged(breakpoints) {
        if (breakpoints !== undefined) {
            this.sortedBreakpoints = breakpoints.sort((a, b) => a - b);
        }
    }
    connectedCallback() {
        const { el } = this;
        overlays.prepareOverlay(el);
        this.triggerChanged();
    }
    disconnectedCallback() {
        this.triggerController.removeClickListener();
    }
    componentWillLoad() {
        const { breakpoints, initialBreakpoint, el, htmlAttributes } = this;
        const isSheetModal = (this.isSheetModal = breakpoints !== undefined && initialBreakpoint !== undefined);
        const attributesToInherit = ['aria-label', 'role'];
        this.inheritedAttributes = helpers.inheritAttributes(el, attributesToInherit);
        /**
         * When using a controller modal you can set attributes
         * using the htmlAttributes property. Since the above attributes
         * need to be inherited inside of the modal, we need to look
         * and see if these attributes are being set via htmlAttributes.
         *
         * We could alternatively move this to componentDidLoad to simplify the work
         * here, but we'd then need to make inheritedAttributes a State variable,
         * thus causing another render to always happen after the first render.
         */
        if (htmlAttributes !== undefined) {
            attributesToInherit.forEach((attribute) => {
                const attributeValue = htmlAttributes[attribute];
                if (attributeValue) {
                    /**
                     * If an attribute we need to inherit was
                     * set using htmlAttributes then add it to
                     * inheritedAttributes and remove it from htmlAttributes.
                     * This ensures the attribute is inherited and not
                     * set on the host.
                     *
                     * In this case, if an inherited attribute is set
                     * on the host element and using htmlAttributes then
                     * htmlAttributes wins, but that's not a pattern that we recommend.
                     * The only time you'd need htmlAttributes is when using modalController.
                     */
                    this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), { [attribute]: htmlAttributes[attribute] });
                    delete htmlAttributes[attribute];
                }
            });
        }
        if (isSheetModal) {
            this.currentBreakpoint = this.initialBreakpoint;
        }
        if (breakpoints !== undefined && initialBreakpoint !== undefined && !breakpoints.includes(initialBreakpoint)) {
            index$4.printIonWarning('Your breakpoints array must include the initialBreakpoint value.');
        }
        overlays.setOverlayId(el);
    }
    componentDidLoad() {
        /**
         * If modal was rendered with isOpen="true"
         * then we should open modal immediately.
         */
        if (this.isOpen === true) {
            helpers.raf(() => this.present());
        }
        this.breakpointsChanged(this.breakpoints);
        /**
         * When binding values in frameworks such as Angular
         * it is possible for the value to be set after the Web Component
         * initializes but before the value watcher is set up in Stencil.
         * As a result, the watcher callback may not be fired.
         * We work around this by manually calling the watcher
         * callback when the component has loaded and the watcher
         * is configured.
         */
        this.triggerChanged();
    }
    /**
     * Determines whether or not an overlay
     * is being used inline or via a controller/JS
     * and returns the correct delegate.
     * By default, subsequent calls to getDelegate
     * will use a cached version of the delegate.
     * This is useful for calling dismiss after
     * present so that the correct delegate is given.
     */
    getDelegate(force = false) {
        if (this.workingDelegate && !force) {
            return {
                delegate: this.workingDelegate,
                inline: this.inline,
            };
        }
        /**
         * If using overlay inline
         * we potentially need to use the coreDelegate
         * so that this works in vanilla JS apps.
         * If a developer has presented this component
         * via a controller, then we can assume
         * the component is already in the
         * correct place.
         */
        const parentEl = this.el.parentNode;
        const inline = (this.inline = parentEl !== null && !this.hasController);
        const delegate = (this.workingDelegate = inline ? this.delegate || this.coreDelegate : this.delegate);
        return { inline, delegate };
    }
    /**
     * Determines whether or not the
     * modal is allowed to dismiss based
     * on the state of the canDismiss prop.
     */
    async checkCanDismiss(data, role) {
        const { canDismiss } = this;
        if (typeof canDismiss === 'function') {
            return canDismiss(data, role);
        }
        return canDismiss;
    }
    /**
     * Present the modal overlay after it has been created.
     */
    async present() {
        const unlock = await this.lockController.lock();
        if (this.presented) {
            unlock();
            return;
        }
        const { presentingElement, el } = this;
        /**
         * If the modal is presented multiple times (inline modals), we
         * need to reset the current breakpoint to the initial breakpoint.
         */
        this.currentBreakpoint = this.initialBreakpoint;
        const { inline, delegate } = this.getDelegate(true);
        /**
         * Emit ionMount so JS Frameworks have an opportunity
         * to add the child component to the DOM. The child
         * component will be assigned to this.usersElement below.
         */
        this.ionMount.emit();
        this.usersElement = await frameworkDelegate.attachComponent(delegate, el, this.component, ['ion-page'], this.componentProps, inline);
        /**
         * When using the lazy loaded build of Stencil, we need to wait
         * for every Stencil component instance to be ready before presenting
         * otherwise there can be a flash of unstyled content. With the
         * custom elements bundle we need to wait for the JS framework
         * mount the inner contents of the overlay otherwise WebKit may
         * get the transition incorrect.
         */
        if (helpers.hasLazyBuild(el)) {
            await index$5.deepReady(this.usersElement);
            /**
             * If keepContentsMounted="true" then the
             * JS Framework has already mounted the inner
             * contents so there is no need to wait.
             * Otherwise, we need to wait for the JS
             * Framework to mount the inner contents
             * of this component.
             */
        }
        else if (!this.keepContentsMounted) {
            await index$5.waitForMount();
        }
        index$3.writeTask(() => this.el.classList.add('show-modal'));
        const hasCardModal = presentingElement !== undefined;
        /**
         * We need to change the status bar at the
         * start of the animation so that it completes
         * by the time the card animation is done.
         */
        if (hasCardModal && ionicGlobal.getIonMode(this) === 'ios') {
            // Cache the original status bar color before the modal is presented
            this.statusBarStyle = await StatusBar.getStyle();
            setCardStatusBarDark();
        }
        await overlays.present(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, {
            presentingEl: presentingElement,
            currentBreakpoint: this.initialBreakpoint,
            backdropBreakpoint: this.backdropBreakpoint,
        });
        /* tslint:disable-next-line */
        if (typeof window !== 'undefined') {
            /**
             * This needs to be setup before any
             * non-transition async work so it can be dereferenced
             * in the dismiss method. The dismiss method
             * only waits for the entering transition
             * to finish. It does not wait for all of the `present`
             * method to resolve.
             */
            this.keyboardOpenCallback = () => {
                if (this.gesture) {
                    /**
                     * When the native keyboard is opened and the webview
                     * is resized, the gesture implementation will become unresponsive
                     * and enter a free-scroll mode.
                     *
                     * When the keyboard is opened, we disable the gesture for
                     * a single frame and re-enable once the contents have repositioned
                     * from the keyboard placement.
                     */
                    this.gesture.enable(false);
                    helpers.raf(() => {
                        if (this.gesture) {
                            this.gesture.enable(true);
                        }
                    });
                }
            };
            window.addEventListener(keyboard.KEYBOARD_DID_OPEN, this.keyboardOpenCallback);
        }
        if (this.isSheetModal) {
            this.initSheetGesture();
        }
        else if (hasCardModal) {
            this.initSwipeToClose();
        }
        unlock();
    }
    initSwipeToClose() {
        var _a;
        if (ionicGlobal.getIonMode(this) !== 'ios') {
            return;
        }
        const { el } = this;
        // All of the elements needed for the swipe gesture
        // should be in the DOM and referenced by now, except
        // for the presenting el
        const animationBuilder = this.leaveAnimation || ionicGlobal.config.get('modalLeave', iosLeaveAnimation);
        const ani = (this.animation = animationBuilder(el, { presentingEl: this.presentingElement }));
        const contentEl = index$2.findIonContent(el);
        if (!contentEl) {
            index$2.printIonContentErrorMsg(el);
            return;
        }
        const statusBarStyle = (_a = this.statusBarStyle) !== null && _a !== void 0 ? _a : Style.Default;
        this.gesture = createSwipeToCloseGesture(el, ani, statusBarStyle, () => {
            /**
             * While the gesture animation is finishing
             * it is possible for a user to tap the backdrop.
             * This would result in the dismiss animation
             * being played again. Typically this is avoided
             * by setting `presented = false` on the overlay
             * component; however, we cannot do that here as
             * that would prevent the element from being
             * removed from the DOM.
             */
            this.gestureAnimationDismissing = true;
            /**
             * Reset the status bar style as the dismiss animation
             * starts otherwise the status bar will be the wrong
             * color for the duration of the dismiss animation.
             * The dismiss method does this as well, but
             * in this case it's only called once the animation
             * has finished.
             */
            setCardStatusBarDefault(this.statusBarStyle);
            this.animation.onFinish(async () => {
                await this.dismiss(undefined, overlays.GESTURE);
                this.gestureAnimationDismissing = false;
            });
        });
        this.gesture.enable(true);
    }
    initSheetGesture() {
        const { wrapperEl, initialBreakpoint, backdropBreakpoint } = this;
        if (!wrapperEl || initialBreakpoint === undefined) {
            return;
        }
        const animationBuilder = this.enterAnimation || ionicGlobal.config.get('modalEnter', iosEnterAnimation);
        const ani = (this.animation = animationBuilder(this.el, {
            presentingEl: this.presentingElement,
            currentBreakpoint: initialBreakpoint,
            backdropBreakpoint,
        }));
        ani.progressStart(true, 1);
        const { gesture, moveSheetToBreakpoint } = createSheetGesture(this.el, this.backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, ani, this.sortedBreakpoints, () => { var _a; return (_a = this.currentBreakpoint) !== null && _a !== void 0 ? _a : 0; }, () => this.sheetOnDismiss(), (breakpoint) => {
            if (this.currentBreakpoint !== breakpoint) {
                this.currentBreakpoint = breakpoint;
                this.ionBreakpointDidChange.emit({ breakpoint });
            }
        });
        this.gesture = gesture;
        this.moveSheetToBreakpoint = moveSheetToBreakpoint;
        this.gesture.enable(true);
    }
    sheetOnDismiss() {
        /**
         * While the gesture animation is finishing
         * it is possible for a user to tap the backdrop.
         * This would result in the dismiss animation
         * being played again. Typically this is avoided
         * by setting `presented = false` on the overlay
         * component; however, we cannot do that here as
         * that would prevent the element from being
         * removed from the DOM.
         */
        this.gestureAnimationDismissing = true;
        this.animation.onFinish(async () => {
            this.currentBreakpoint = 0;
            this.ionBreakpointDidChange.emit({ breakpoint: this.currentBreakpoint });
            await this.dismiss(undefined, overlays.GESTURE);
            this.gestureAnimationDismissing = false;
        });
    }
    /**
     * Dismiss the modal overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
     *
     * This is a no-op if the overlay has not been presented yet. If you want
     * to remove an overlay from the DOM that was never presented, use the
     * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
     */
    async dismiss(data, role) {
        var _a;
        if (this.gestureAnimationDismissing && role !== overlays.GESTURE) {
            return false;
        }
        /**
         * Because the canDismiss check below is async,
         * we need to claim a lock before the check happens,
         * in case the dismiss transition does run.
         */
        const unlock = await this.lockController.lock();
        /**
         * If a canDismiss handler is responsible
         * for calling the dismiss method, we should
         * not run the canDismiss check again.
         */
        if (role !== 'handler' && !(await this.checkCanDismiss(data, role))) {
            unlock();
            return false;
        }
        const { presentingElement } = this;
        /**
         * We need to start the status bar change
         * before the animation so that the change
         * finishes when the dismiss animation does.
         */
        const hasCardModal = presentingElement !== undefined;
        if (hasCardModal && ionicGlobal.getIonMode(this) === 'ios') {
            setCardStatusBarDefault(this.statusBarStyle);
        }
        /* tslint:disable-next-line */
        if (typeof window !== 'undefined' && this.keyboardOpenCallback) {
            window.removeEventListener(keyboard.KEYBOARD_DID_OPEN, this.keyboardOpenCallback);
            this.keyboardOpenCallback = undefined;
        }
        const dismissed = await overlays.dismiss(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, {
            presentingEl: presentingElement,
            currentBreakpoint: (_a = this.currentBreakpoint) !== null && _a !== void 0 ? _a : this.initialBreakpoint,
            backdropBreakpoint: this.backdropBreakpoint,
        });
        if (dismissed) {
            const { delegate } = this.getDelegate();
            await frameworkDelegate.detachComponent(delegate, this.usersElement);
            index$3.writeTask(() => this.el.classList.remove('show-modal'));
            if (this.animation) {
                this.animation.destroy();
            }
            if (this.gesture) {
                this.gesture.destroy();
            }
        }
        this.currentBreakpoint = undefined;
        this.animation = undefined;
        unlock();
        return dismissed;
    }
    /**
     * Returns a promise that resolves when the modal did dismiss.
     */
    onDidDismiss() {
        return overlays.eventMethod(this.el, 'ionModalDidDismiss');
    }
    /**
     * Returns a promise that resolves when the modal will dismiss.
     */
    onWillDismiss() {
        return overlays.eventMethod(this.el, 'ionModalWillDismiss');
    }
    /**
     * Move a sheet style modal to a specific breakpoint. The breakpoint value must
     * be a value defined in your `breakpoints` array.
     */
    async setCurrentBreakpoint(breakpoint) {
        if (!this.isSheetModal) {
            index$4.printIonWarning('setCurrentBreakpoint is only supported on sheet modals.');
            return;
        }
        if (!this.breakpoints.includes(breakpoint)) {
            index$4.printIonWarning(`Attempted to set invalid breakpoint value ${breakpoint}. Please double check that the breakpoint value is part of your defined breakpoints.`);
            return;
        }
        const { currentBreakpoint, moveSheetToBreakpoint, canDismiss, breakpoints, animated } = this;
        if (currentBreakpoint === breakpoint) {
            return;
        }
        if (moveSheetToBreakpoint) {
            this.sheetTransition = moveSheetToBreakpoint({
                breakpoint,
                breakpointOffset: 1 - currentBreakpoint,
                canDismiss: canDismiss !== undefined && canDismiss !== true && breakpoints[0] === 0,
                animated,
            });
            await this.sheetTransition;
            this.sheetTransition = undefined;
        }
    }
    /**
     * Returns the current breakpoint of a sheet style modal
     */
    async getCurrentBreakpoint() {
        return this.currentBreakpoint;
    }
    async moveToNextBreakpoint() {
        const { breakpoints, currentBreakpoint } = this;
        if (!breakpoints || currentBreakpoint == null) {
            /**
             * If the modal does not have breakpoints and/or the current
             * breakpoint is not set, we can't move to the next breakpoint.
             */
            return false;
        }
        const allowedBreakpoints = breakpoints.filter((b) => b !== 0);
        const currentBreakpointIndex = allowedBreakpoints.indexOf(currentBreakpoint);
        const nextBreakpointIndex = (currentBreakpointIndex + 1) % allowedBreakpoints.length;
        const nextBreakpoint = allowedBreakpoints[nextBreakpointIndex];
        /**
         * Sets the current breakpoint to the next available breakpoint.
         * If the current breakpoint is the last breakpoint, we set the current
         * breakpoint to the first non-zero breakpoint to avoid dismissing the sheet.
         */
        await this.setCurrentBreakpoint(nextBreakpoint);
        return true;
    }
    render() {
        const { handle, isSheetModal, presentingElement, htmlAttributes, handleBehavior, inheritedAttributes } = this;
        const showHandle = handle !== false && isSheetModal;
        const mode = ionicGlobal.getIonMode(this);
        const isCardModal = presentingElement !== undefined && mode === 'ios';
        const isHandleCycle = handleBehavior === 'cycle';
        return (index$3.h(index$3.Host, Object.assign({ key: 'bb00efb8cbbdb2d1bbcc5e9c638586e2904882a8', "no-router": true, tabindex: "-1" }, htmlAttributes, { style: {
                zIndex: `${20000 + this.overlayIndex}`,
            }, class: Object.assign({ [mode]: true, ['modal-default']: !isCardModal && !isSheetModal, [`modal-card`]: isCardModal, [`modal-sheet`]: isSheetModal, 'overlay-hidden': true }, theme.getClassMap(this.cssClass)), onIonBackdropTap: this.onBackdropTap, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }), index$3.h("ion-backdrop", { key: 'd2d50f736fdc34b933c00309fe0b67e4aff7ee63', ref: (el) => (this.backdropEl = el), visible: this.showBackdrop, tappable: this.backdropDismiss, part: "backdrop" }), mode === 'ios' && index$3.h("div", { key: '5d3523a04da9350ae435a4f3247198095b71f206', class: "modal-shadow" }), index$3.h("div", Object.assign({ key: '09b3c4b629155f8c32f5c896cf689ffbe7004de8',
            /*
              role and aria-modal must be used on the
              same element. They must also be set inside the
              shadow DOM otherwise ion-button will not be highlighted
              when using VoiceOver: https://bugs.webkit.org/show_bug.cgi?id=247134
            */
            role: "dialog" }, inheritedAttributes, { "aria-modal": "true", class: "modal-wrapper ion-overlay-wrapper", part: "content", ref: (el) => (this.wrapperEl = el) }), showHandle && (index$3.h("button", { key: 'e47d90068927f3a518e4144e17f18ac326126712', class: "modal-handle",
            // Prevents the handle from receiving keyboard focus when it does not cycle
            tabIndex: !isHandleCycle ? -1 : 0, "aria-label": "Activate to adjust the size of the dialog overlaying the screen", onClick: isHandleCycle ? this.onHandleClick : undefined, part: "handle" })), index$3.h("slot", { key: '5733e94b3ecc4ed9bfb6aec5cd254cd0e43ee8f7' }))));
    }
    get el() { return index$3.getElement(this); }
    static get watchers() { return {
        "isOpen": ["onIsOpenChange"],
        "trigger": ["triggerChanged"]
    }; }
};
const LIFECYCLE_MAP = {
    ionModalDidPresent: 'ionViewDidEnter',
    ionModalWillPresent: 'ionViewWillEnter',
    ionModalWillDismiss: 'ionViewWillLeave',
    ionModalDidDismiss: 'ionViewDidLeave',
};
Modal.style = {
    ios: IonModalIosStyle0,
    md: IonModalMdStyle0
};

exports.ion_modal = Modal;

//# sourceMappingURL=ion-modal.cjs.entry.js.map