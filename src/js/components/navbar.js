/**
 * Navbar
 */

function stickyHeader() {
	var lastScroll = 300;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		
		if(st < 32) {
			$('body').removeClass('on-scroll');
		} else {
			$('body').addClass('on-scroll');
		}

		lastScroll = st;
	});
}

function stickyClass() {
	$(window).scroll(function(event){
		var scroll = $(window).scrollTop();
		
		$('.filter-project .filter-nav').toggleClass('fixed',
			scroll >= $('.filter-project').offset().top - 20
		);
	});
}

$(function() {
	$(document).ready(function () {
		stickyHeader();
		
		if ($('.filter-project').length > 0) {
			stickyClass();
		}
	});

	$(".toggle-down").click(function(){
        $(this).toggleClass("toggleDrawer").siblings(".menu").toggleClass("show").parents(".header-fix").toggleClass("show-menu");
    });
})
