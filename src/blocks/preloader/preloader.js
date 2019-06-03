document.body.setAttribute("class", "noscroll");
document.getElementById("alx-preloader").style.display = "block";
window.onload = function() {
	document.getElementById("alx-preloader").style.display = "none";
	document.body.className = document.body.className.replace(/\bnoscroll\b/,'');
};
