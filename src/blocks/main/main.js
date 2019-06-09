import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import Pageable from 'pageable'
import LazyLoad from 'lazyload'
$(window).on('load', function() {
	if($( window ).width() > 1199) {
		new Pageable("#slideContainer", {
		childSelector: "[data-anchor]", // CSS3 selector string for the pages
		anchors: ['home', 'industries', 'solutions', 'services', 'partners', 'client', 'about-us', 'careers', 'blog', 'contact', 'coming-soon'], // define the page anchors
		pips: false, // display the pips
		animation: 300, // the duration in ms of the scroll animation
		delay: 0, // the delay in ms before the scroll animation starts
		throttle: 50, // the interval in ms that the resize callback is fired
		orientation: "horizontal", // or vertical
		swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
		freeScroll: true, // allow manual scrolling when dragging instead of automatically moving to next page
		navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
		navNextEl: false, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
		infinite: false, // enable infinite scrolling (from 0.4.0)
		events: {
			wheel: true, // enable / disable mousewheel scrolling
			mouse: true, // enable / disable mouse drag scrolling
			touch: true, // enable / disable touch / swipe scrolling
			keydown: true, // enable / disable keyboard navigation
		},
		easing: function(currentTime, startPos, endPos, interval) {
			// the easing function used for the scroll animation
			return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
		},
		onInit: function() {
			// do something when the instance is ready
		},
		onUpdate: function() {
			// do something when the instance updates
		},
		onBeforeStart: function() {
			// do something before scrolling begins
		},
		onStart: function() {
			// do something when scrolling begins
		},
		onScroll: function() {
			// do something during scroll
		},
		onFinish: function() {
			// do something when scrolling ends
		},
	});
	}else {
		new Pageable("#slideContainer").destroy();
	}
});
$(document).on('load', function () {
	document.addEventListener("DOMContentLoaded", function() {
		let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
		let active = false;

		const lazyLoad = function() {
			if (active === false) {
				active = true;

				setTimeout(function() {
					lazyImages.forEach(function(lazyImage) {
						if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
							lazyImage.src = lazyImage.dataset.src;
							lazyImage.srcset = lazyImage.dataset.srcset;
							lazyImage.classList.remove("lazy");

							lazyImages = lazyImages.filter(function(image) {
								return image !== lazyImage;
							});

							if (lazyImages.length === 0) {
								document.removeEventListener("scroll", lazyLoad);
								window.removeEventListener("resize", lazyLoad);
								window.removeEventListener("orientationchange", lazyLoad);
							}
						}
					});

					active = false;
				}, 200);
			}
		};

		document.addEventListener("scroll", lazyLoad);
		window.addEventListener("resize", lazyLoad);
		window.addEventListener("orientationchange", lazyLoad);
	});
	// let images = document.querySelectorAll(".lazy");
	// new LazyLoad(images);
});
