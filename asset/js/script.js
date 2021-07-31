(function($){

    $('.envelope img').click(function(){
        $(this).parent().fadeOut();
        $('body').removeClass('overflow');
    });
    
}(jQuery));