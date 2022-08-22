(function($) {

    /* Notifications */

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
        if (event.keyCode === 27) {
            $('html').removeClass('notifications-expanded');
        }
    });



    /* User */

    $('.header__user').on('click', function () {
        $('html').toggleClass('user-expanded');
    });

    $('.user__close').on('click', function () {
        $('html').removeClass('user-expanded');
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.header__user, .user').length) {
            $('html').removeClass('user-expanded');
        }
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('html').removeClass('user-expanded');
        }
    });



    /* Nav */

    $('.header__burger').on('click', function () {
        $('html').toggleClass('nav-expanded');
    });

    $('.nav__close').on('click', function () {
        $('html').removeClass('nav-expanded');
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.header__burger, .nav').length) {
            $('html').removeClass('nav-expanded');
        }
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('html').removeClass('nav-expanded');
        }
    });


})(jQuery);
