// import $ from "jquery/dist/jquery.min.js";
import Particle from "particleground-light";

// $(document).ready(function () {
//     new Particle(document.getElementById('particlesHome'), {
//         dotColor: '#6E7797',
//         lineColor: '#7D85A2',
//         parallaxMultiplier: 5,
//         particleRadius: 5,
//         proximity: 130,
//         density: 12000,
//         directionY: 'center',
//         directionX: 'center',
//     });
// });


function particlesHome() {
    new Particle(document.getElementById('particlesHome'), {
        dotColor: '#6E7797',
        lineColor: '#7D85A2',
        parallaxMultiplier: 5,
        particleRadius: 5,
        proximity: 130,
        density: 12000,
        directionY: 'center',
        directionX: 'center',
    });
}

export {particlesHome}
