// $(function() {
//     // body...
//     var shrinkHeader = 5;
//     $(window).scroll(function(){
//         var scroll = getCurrentScroll();

//         console.log(scroll);

//         if(scroll >= shrinkHeader){
//             $('.header').addClass('shrink');
//         }else{
//             $('.header').removeClass('shrink');
//         }
//     })
// });
// function getCurrentScroll(){
//     return window.pageYOffset || document.documentElement.scrollTop;
// }
$(function(){
    var shrinkHeader = 50;
    $('.upTop').hide();
    $('.shot_hover').hide();
    // $('.onTop2').hide();
    $(window).scroll(function() {
        var scroll = getCurrentScroll();

        console.log(scroll);
        if ( scroll >= shrinkHeader ) {
            $('.header').addClass('shrink');
            $('#main').addClass('shrink');
            $('.upTop').fadeIn();
            // $('.onTop2').fadeIn();
        }
        else {
            $('.header').removeClass('shrink');
            $('#main').removeClass('shrink');
            $('.upTop').hide(0);
            // $('.onTop2').hide(0);
        }

    });
    // $('.plate2').hover(function() {
    //     $('.shot_hover').show();
    // }, function() {
    //     $('.shot_hover').hide();
    // });
    function getCurrentScroll() {
        return window.pageYOffset;
    }
    // function getValue(){
    //     var x = 100;
    //     return x;
    // }
});