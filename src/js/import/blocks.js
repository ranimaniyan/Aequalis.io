import $ from "jquery";
import "%blocks%/preloader/preloader.js";
// import "%blocks%/main/main.js";
import "%blocks%/sidenav/sidenav.js";
// import "%blocks%/home/home.js";
import "%blocks%/partners/partners.js";
import "%blocks%/clients/clients.js";
import "%blocks%/comming/comming.js";


import {mainScrollMagic} from "%blocks%/main/main.js";
import {particlesHome} from "%blocks%/home/home.js";

$(document).ready(function () {
	$(window).resize(function() {
		const width = $(window).width();
		console.log(width);
		if (width >= 1199) {
			mainScrollMagic();
			// particlesHome();
		}
	});
});

