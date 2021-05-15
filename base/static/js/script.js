$(document).ready(function(){
    btn_click()
    tlit_card()
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