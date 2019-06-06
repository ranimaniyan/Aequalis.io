import $ from "jquery"
// import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
// import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
// import { ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
// require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
//
// function mainScrollMagic(enabled) {
// 	const controller = new ScrollMagic.Controller();
// 	controller.enabled(enabled);
// 	console.log(controller.enabled(enabled));
// 	const slidesTotal = 11;
// 	const transitionWidth = 100/slidesTotal;
// 	const horizontalSlide = new TimelineMax()
//
// 	// animate slides
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*2 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*3 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*4 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*5 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*6 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*7 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*8 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*9 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*10 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*11 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	.to("#slideContainer", 1,   {x: '-' + transitionWidth*12 + '%'},{y:'0'},{ease : Cubic.easeInOut})
// 	// create scene to pin and link animation
// 	new ScrollMagic.Scene({
// 		triggerElement: "#pinContainer",
// 		triggerHook: "onLeave",
// 		duration: "500%",
// 		vertical: false
// 	})
// 	.setPin("#pinContainer")
// 	.setTween(horizontalSlide)
// 	// .addIndicators() // add indicators (requires plugin)
// 	.addTo(controller)
// }
//
// export {mainScrollMagic};

// var $ = require("jquery");
import { TweenMax, Power3, ScrollToPlugin } from 'gsap/all'

// const plugins = [ ScrollToPlugin ];
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

// // Init controller
// var controller = new ScrollMagic.Controller({
// 	globalSceneOptions: {
// 		duration: $('.section').height(),
// 		triggerHook: .025,
// 		reverse: true
// 	},
// 	vertical: true
// });


/*
object to hold href values of links inside our nav with
the class '.anchor-nav'

scene_object = {
  '[scene-name]' : {
    '[target-scene-id]' : '[anchor-href-value]'
  }
}
*/
// var scenes = {
// 	'home': {
// 		'home': 'home'
// 	},
// 	'industries': {
// 		'industries': 'industries'
// 	},
// 	'solutions': {
// 		'solutions': 'solutions'
// 	},
// 	'services': {
// 		'services': 'services'
// 	},
// 	'partners': {
// 		'partners': 'partners'
// 	},
// 	'client': {
// 		'client': 'client'
// 	},
// 	'about-us': {
// 		'about-us': 'about-us'
// 	},
// 	'careers': {
// 		'careers': 'careers'
// 	},
// 	'blog': {
// 		'blog': 'blog'
// 	},
// 	'contact': {
// 		'contact': 'contact'
// 	},
// 	'comming': {
// 		'comming': 'comming'
// 	}
// };


function mainScrollMagic(enabled) { // wait for document ready
	// init
	const controller = new ScrollMagic.Controller();
	controller.enabled(enabled);
	console.log(controller.enabled(enabled));
	const slidesTotal = 11; //get number of sections
	const transitionWidth = 100/slidesTotal;
	// define movement of slides
	var wipeAnimation = new TimelineMax()
		// animate to 1 slide
		.to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
		.to("#slideContainer", 1,   {x: '-' + transitionWidth + '%'})	// move in to first slide
		.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
		// animate to 2 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*2 + '%'})
		.to("#slideContainer", 0.5, {z: 0})
		// animate to 3 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*3 + '%'})
		.to("#slideContainer", 0.5, {z: 0})
		// animate to 4 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*4 + '%'})
		.to("#slideContainer", 0.5, {z: 0})
		// animate to 5 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*5 + '%'})
		.to("#slideContainer", 0.5, {z: 0})
		// animate to 6 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*6 + '%'})
		.to("#slideContainer", 0.5, {z: 0})
		// animate to 7 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*7 + '%'})
		.to("#slideContainer", 0.5, {z: 0})
		// animate to 8 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*8 + '%'})
		.to("#slideContainer", 0.5, {z: 0})
		// animate to 9 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*9 + '%'})
		.to("#slideContainer", 0.5, {z: 0})
		// animate to 10 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*10 + '%'})
		.to("#slideContainer", 0.5, {z: 0})
		// animate to 11 slide
		.to("#slideContainer", 0.5, {z: -150, delay: 1})
		.to("#slideContainer", 1,   {x: '-' + transitionWidth*11 + '%'})
		.to("#slideContainer", 0.5, {z: 0});

	// create scene to pin and link animation
	new ScrollMagic.Scene({
		triggerElement: "#pinContainer",
		triggerHook: "onLeave",
		duration: "500%"
	})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
}
export {mainScrollMagic};
