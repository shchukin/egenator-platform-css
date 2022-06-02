(function($) {

    var $test = $('.test');

    function pauseTest() {
        lockPage();
        $test.addClass('test--paused');
    }
    function resumeTest() {
        unlockPage();
        $test.removeClass('test--paused');
    }



    $('.test__toggle-pause').on('click', function () {
        if( ! $test.hasClass('test--paused') ) {
            pauseTest();
        } else {
            resumeTest();
        }
    });


    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            resumeTest();
        }
    });

    $('.test__resume').on('click', resumeTest);



})(jQuery);
