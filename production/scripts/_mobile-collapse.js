(function($) {

    $('.mobile-collapse__handler').on('click', function () {
        $(this).parents('.mobile-collapse').toggleClass('mobile-collapse--expanded');
    });

})(jQuery);
