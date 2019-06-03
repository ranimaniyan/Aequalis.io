import $ from 'jquery';

$(document).ready(function () {
	$('.alx-burger').on('click',function () {
		$('body').addClass('alx-aside-sidebar__openoverlay');
		$('#alx-sidebar').addClass('alx-aside-sidebar__open');
	});
	$('#alx-sidebar a').on('click', function () {
		$('body').removeClass('alx-aside-sidebar__openoverlay');
		$('#alx-sidebar').removeClass('alx-aside-sidebar__open');
	})
});
