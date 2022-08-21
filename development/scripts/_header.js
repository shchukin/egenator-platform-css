(function($) {

    $('.header__notifications').on('click', function () {
        $('html').toggleClass('notifications-expanded');
    });

    $('.notifications__close').on('click', function () {
        $('html').removeClass('notifications-expanded');
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.header__notifications, .notifications').length) {
            $('html').removeClass('notifications-expanded');
        }
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode == 27) {
            $('html').removeClass('notifications-expanded');
        }
    });


})(jQuery);
