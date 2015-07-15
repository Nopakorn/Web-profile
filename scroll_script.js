
$(function(){
    var shrinkHeader = 14;
    var animationFadeInUp = 'animated fadeInUp';
    var animationFadeOutDown = 'animated fadeOutDown';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    var container_height = $('.container')[0].scrollHeight;
    console.log(container_height);
    //set container height default
    $('.container').height('+=20');
    $('.about-me').hide();
    $('.work-ex').hide();

    //initiated
    $('.intro-self').addClass(animationFadeInUp).one(animationEnd, function(){
                $(this).removeClass(animationFadeInUp);
    });
    $('.social-ic').addClass(animationFadeInUp).one(animationEnd, function(){
                $(this).removeClass(animationFadeInUp);
    });
    $('.trigger__info').addClass(animationFadeInUp).one(animationEnd, function(){
                $(this).removeClass(animationFadeInUp);
    });

    //on scrolling
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        console.log(scroll);
        if ( scroll >= shrinkHeader ) {
            $('.about-me').show();
            $('.work-ex').show();
            $('.about-me').addClass(animationFadeInUp);
            $('.work-ex').addClass(animationFadeInUp);
            $('.container').height('-=20');
            $('.trigger__info').addClass(animationFadeOutDown).one(animationEnd, function(){
                $(this).removeClass(animationFadeOutDown);
                $(this).hide();
            });
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset;
    }

});