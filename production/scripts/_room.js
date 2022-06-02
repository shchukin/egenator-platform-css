(function($) {

    $('.room__handler').on('click', function (){
        $(this).parents('.room').toggleClass('room--collapsed');
    });

})(jQuery);
