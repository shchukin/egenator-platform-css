const mobileMediaQuery = window.matchMedia('(max-width: 767px)')


var $html = $('html');
var scrollWidth = $(window).outerWidth() - $(window).width();

/* Блокирование страницы */

function lockPage() {
    if ( ! $html.hasClass('scroll-locked') ) {
        $html.addClass('scroll-locked');
        $html.css( 'padding-right', scrollWidth + 'px' );
    }
}

function unlockPage() {
    if ( $html.hasClass('scroll-locked') ) {
        $html.removeClass('scroll-locked');
        $html.css( 'padding-right', '' );
    }
}

