
$(function(){
    var shrinkHeader = 50;

    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        console.log(scroll);
        if ( scroll >= shrinkHeader ) {
            $('.page-header').addClass('slideClosed');

        }
        else {
            $('.page-header.b-header').removeClass('slideClosed');
        }

    });

    function getCurrentScroll() {
        return window.pageYOffset;
    }

});