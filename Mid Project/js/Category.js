$(document).ready(function(){
    $('.wrapper').mouseenter(function(){
        var title = $(this).parent('li').data('title');
        var desc = $(this).parent('li').data('desc');
        if(!$(this).children("div").length){
            $(this).append('<div class="overlay"></div>');
        }
    
        var overlay = $(this).children('.overlay');
    
        overlay.html('<p>' + title + '</p><p>viewer : ' + desc + '</p>');
    
        overlay.fadeIn(800);
    });
    
    $('.wrapper').mouseleave(function(){
        var overlay = $(this).children('.overlay');
    
        overlay.fadeOut(500);
    }) 
});
