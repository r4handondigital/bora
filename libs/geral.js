$(document).ready(function(){



var nav = $('.topo');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

});

$(function() {
                $('.link').bind('click',function(event){
                    var $anchor = $(this);
        
                  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
                    
                  

                });
            });