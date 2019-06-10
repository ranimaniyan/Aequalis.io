import $ from 'jquery';
import Particle from "particleground-light";
import Pageable from "pageable";


$(document).ready(function () {
	if($( window ).width() > 1199) {
		new Particle(document.getElementById('particlesPartners'), {
			dotColor: '#e3e8ff',
			lineColor: '#e3e8ff',
			parallaxMultiplier: 5,
			particleRadius: 5,
			proximity: 130,
			density: 12000,
			directionX: 'center',
			parallax: false
		});
	}
});
