document.body.setAttribute("class", "noscroll");
document.getElementById("alx-preloader").style.display = "block";
const home = document.getElementById('home');
window.onload = function() {
	document.getElementById("alx-preloader").style.display = "none";
	document.body.className = document.body.className.replace(/\bnoscroll\b/,'');
};
