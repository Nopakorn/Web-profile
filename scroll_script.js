
$(function(){
    var shrinkHeader = 14;

    $('.about-me').hide();
    $('.work-ex').hide();

    $('.intro-self').addClass('animated fadeInUp');
    $('.social-ic').addClass('animated fadeInUp');



    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        console.log(scroll);
        if ( scroll >= shrinkHeader ) {
            $('.about-me').show();
            $('.about-me').addClass('animated fadeInUp');
            $('.work-ex').show();
        }
        // if (scroll >= 400){
        //     $('.work-ex').show();
        //     $('.work-ex').addClass('animated fadeInUp');
        // }
    });

    function getCurrentScroll() {
        return window.pageYOffset;
    }

});