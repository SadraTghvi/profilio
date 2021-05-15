$(document).ready(function(){
    btn_click()
    tlit_card()
    dark_mode()
    $(".main").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
})

function btn_click(){
    $(".brand-img").click(function(){
        window.open("https://github.com/SadraTghvi");
    })
    $("#seeMore").click(function(){
        window.open("https://github.com/SadraTghvi?tab=repositories");
    })
}

function tlit_card(){
    $(".card").tilt({})
}

function dark_mode(){
    $(".toggle__input").on("change",function(){
        if ($(this).is(":checked")){
            $("body").css("background-color","#0d1117")
            $(".langs").css("color","#f0f6fc")
            $(".card").css("background-color","#808080")
            $(".card_title").css("color","#000000")
            
        } else {
            $("body").css("background-color","")
            $(".card").css("background-color","")
            $(".card_title").css("color","")
        }

    })
}