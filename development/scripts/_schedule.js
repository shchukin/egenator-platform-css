(function($) {

    $('.schedule__handler').on('click', function () {
        $(this).parents('.schedule__item').toggleClass('schedule__item--expanded');
    });


})(jQuery);
