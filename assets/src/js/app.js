//@prepros-append vendor/owl.carousel.min.js
//@prepros-append vendor/strip.pkgd.min.js
//@prepros-append vendor/smoothscroll.js
//@prepros-append vendor/jquery.scrollUp.min.js
//= include ../../../bower_components/jquery/dist/jquery.js
//= include ../../../bower_components/jquery.fitvids/jquery.fitvids.js

jQuery(function ($) {

    var site = new SiteController($);
    site.init();

});


function SiteController($) {
    self.init = function () {
        /*
        initFitVid();
        */
        initMobileNav();
    };

    function initMobileNav() {
        // CLICK ON TRIGGER, OPEN THE MOBILE NAV
        $('.js-mobile-trigger').click(function (e) {
            e.preventDefault();
            $('.js-mobile-nav').addClass('open');
        });
        // CLICK ON CLOSE BUTTON, CLOSE MOBILE NAV
        $('.js-mobile-nav-close').click(function (e) {
            e.preventDefault();
            $('.js-mobile-nav').removeClass('open');
        });
    }

/*
	// MAKES VIDEOS RESIZE RESPONSIVELY
    function initFitVid() {

		// TARGET YOUTUBE
        $('iframe[src*="youtube"]').parent().fitVids();

		// TARGET VIMEO
        $('iframe[src*="vimeo"]').parent().fitVids();

    }
*/

    return self;
}
