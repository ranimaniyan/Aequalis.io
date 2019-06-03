import $ from 'jquery'
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

$(function () { // wait for document ready

	var controller = new ScrollMagic.Controller();
	var slidesTotal = 11;
	var transitionWidth = 100/slidesTotal;
	var horizontalSlide = new TimelineMax()
	// animate panels
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*2 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*3 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*4 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*5 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*6 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*7 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*8 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*9 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*10 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*11 + '%'})
			.to("#js-slideContainer", 1,   {x: '-' + transitionWidth*12 + '%'})


	// create scene to pin and link animation
	new ScrollMagic.Scene({
		triggerElement: "#js-wrapper",
		triggerHook: "onLeave",
		duration: "500%"
	})
			.setPin("#js-wrapper")
			.setTween(horizontalSlide)
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
});
