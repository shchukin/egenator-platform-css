(function($) {

    $('.progress__handler').on('click', function () {
        $(this).parents('.progress__item').toggleClass('progress__item--expanded');
    });


})(jQuery);
