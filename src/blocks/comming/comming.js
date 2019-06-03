import Particle from "particleground-light";

new Particle(document.getElementById('particlesComming'), {
	dotColor: '#e3e8ff',
	lineColor: '#e3e8ff',
	parallaxMultiplier: 5,
	particleRadius: 5,
	proximity: 130,
	density: 12000,
	directionX: 'center',
	parallax: false
});
