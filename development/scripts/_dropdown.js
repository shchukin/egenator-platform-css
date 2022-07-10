(function($) {

    $('.dropdown__handler').on('click', function () {
        $(this).parents('.dropdown').toggleClass('dropdown--expanded');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('dropdown--expanded');
        }
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode == 27) {
            $('.dropdown').removeClass('dropdown--expanded');
        }
    });


})(jQuery);
