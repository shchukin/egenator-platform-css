(function($) {

    $('.task__show-solution').on('click', function () {
        $(this).parents('.task').toggleClass('task--expanded');
    });

})(jQuery);
