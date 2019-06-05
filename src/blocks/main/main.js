import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

function mainScrollMagic() {
	const controller = new ScrollMagic.Controller();
	const slidesTotal = 11;
	const transitionWidth = 100/slidesTotal;
	const horizontalSlide = new TimelineMax()

	// animate panels
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*2 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*3 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*4 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*5 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*6 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*7 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*8 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*9 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*10 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*11 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*12 + '%'},{y:'0'},{ease : Cubic.easeInOut})
	// create scene to pin and link animation
	new ScrollMagic.Scene({
		triggerElement: "#js-wrapper",
		triggerHook: "onLeave",
		duration: "500%"
	})
	.setPin("#js-wrapper")
	.setTween(horizontalSlide)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller)
}

export {mainScrollMagic};

