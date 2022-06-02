(function($) {

    $('.recommendations__handler').on('click', function () {
        $(this).parents('.recommendations__item').toggleClass('recommendations__item--expanded');
    });

})(jQuery);
