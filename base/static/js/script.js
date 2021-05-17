$(document).ready(function(){
    btn_click()
    tlit_card()
    dark_mode()
    myFunction()
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
            $(".page-footer-mine ,.nav-wrapper").css("background-color","#000000")
            $(".langs").css("color","#f0f6fc")
            $(".card").css("background-color","#808080")
            $(".card_title").css("color","#000000")
            
        } else {
            $("body").css("background-color","")
            $(".page-footer-mine ,.nav-wrapper").css("background-color","")
            $(".card").css("background-color","")
            $(".card_title").css("color","")
        }

    })
}

function myFunction(){
    $(".back2top").fadeOut(0)
    document.addEventListener("scroll",function(){
        if (window.pageYOffset > 300){
            $(".back2top").fadeIn()
        } else{
            $(".back2top").fadeOut()
        }
    })
}