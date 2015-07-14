
$(function(){
    var shrinkHeader = 14;
    var animationFadeInUp = 'animated fadeInUp';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


    $('.about-me').hide();
    $('.work-ex').hide();

    $('.intro-self').addClass(animationFadeInUp).one(animationEnd, function(){
                $(this).removeClass(animationFadeInUp);
    });
    $('.social-ic').addClass(animationFadeInUp).one(animationEnd, function(){
                $(this).removeClass(animationFadeInUp);
    });


    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        console.log(scroll);
        if ( scroll >= shrinkHeader ) {

            $('.about-me').show();
            $('.about-me').addClass(animationFadeInUp)
            $('.work-ex').show();
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset;
    }

});