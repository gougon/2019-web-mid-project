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

function openAdWin(){
    var w_width = 664;
    var w_height = 572;
    var x = (screen.width - w_width) / 2;
    var y = (screen.height - w_height) / 2;
    var feature = 'width=' + w_width + ', height=' + w_height + ', left=' + x + ', top=' + y;
    window.open('Ads.html', '', feature)
}