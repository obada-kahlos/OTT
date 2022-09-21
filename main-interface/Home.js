var scrollButtom = $("#buttom-up");
$(window).scroll(function() {

    if ($(this).scrollTop() >= 300) {
        scrollButtom.fadeIn(1000);
    } else if ($(this).scrollTop() <= 300) {
        scrollButtom.fadeOut(1000);
    }
})
scrollButtom.click(function() {
    $("html,body").animate({
         scrollTop: 0     
    }, 1000);
})
// start looding page 


$(".loading-overlay .spinner").fadeOut(4000,function(){
    $(this).parent().fadeOut(1000,function(){
        $("body").css("overflow","auto")
        $(".loading-overlay").remove()
    })
})

function back(){
    window.history.back();
}

