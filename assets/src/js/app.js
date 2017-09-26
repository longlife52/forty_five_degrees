//@prepros-append vendor/owl.carousel.min.js
//@prepros-append vendor/strip.pkgd.min.js
//@prepros-append vendor/smoothscroll.js
//@prepros-append vendor/jquery.scrollUp.min.js
//= include ../../../bower_components/jquery/dist/jquery.js
//= include ../../../bower_components/jquery.fitvids/jquery.fitvids.js

$(document).ready(function () {

//snippet from https://codepen.io/mel/pen/jLEKH
    $('#firstWord').html(function () {
        var text = $(this).text().trim().split('');
        var first = text.shift();
        return (text.length > 0 ? "<span class='bold'>" + first + '</span>' : first) + text.join('');
    });

});


/* jQuery(function ($) {

    var site = new SiteController($);
    site.init();

});
*/

/*
function SiteController($) {
    self.init = function () {
        initFitVid();
    };

	// MAKES VIDEOS RESIZE RESPONSIVELY
    function initFitVid() {

		// TARGET YOUTUBE
        $('iframe[src*="youtube"]').parent().fitVids();

		// TARGET VIMEO
        $('iframe[src*="vimeo"]').parent().fitVids();

    }

    return self;
}
*/
