$(document).ready(function(){

    let arrow = $('.header__scrolltop');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $(arrow).fadeIn();
        }
        else {
            $(arrow).fadeOut();
        }
    })

    $(arrow).click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
        
    });
    
    let btn = $('#btnproject');

    $(btn).click(function(){
        $('html, body').animate({scrollTop: $('.projects__content').offset().top}, 1000);
        
    })


})