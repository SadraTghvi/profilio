var csrf_token = document.currentScript.getAttribute("csrf_token");

$(document).ready(function(){
    btn_click()
    tlit_card()
    dark_mode()
    myFunction()
    back2Top()
    sendPOST("/theme/", {}, (d) => {
        if (d.theme) {
            toggleTheme(d.theme)
        }
    })
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

function sendPOST(uri, body, cb) {
    body['csrfmiddlewaretoken'] = csrf_token,

    $.ajax({
        type: "POST",
        url: uri,
        data: body,
        success: function(data) {
            if (typeof cb === 'function') {
                cb(data)
            }
        }
    });
}


function toggleTheme(theme='light') {
    if (theme === 'dark') {
        $(".toggle__input").prop('checked', true);
        $("body").css("background-color","#0d1117")
        $(".page-footer-mine ,.nav-wrapper").css("background-color","#000000")
        $(".langs").css("color","#f0f6fc")
        $(".card").css("background-color","#808080")
        $(".card_title").css("color","#000000")
        $(".heading-section").css("color","#FFF")
    } else {
        $(".toggle__input").prop('checked', false);
        $("body").css("background-color","")
        $(".langs").css("color", "")
        $(".page-footer-mine ,.nav-wrapper").css("background-color","")
        $(".card").css("background-color","")
        $(".card_title").css("color","")
        $(".heading-section").css("color","")
    }
}


function dark_mode(){
    $(".toggle__input").on("change",function(){
        if ($(this).is(":checked")){ // dark
            toggleTheme('dark')
            sendPOST("/theme/", {'theme':'dark'});
        } else {
            toggleTheme('light')
            sendPOST("/theme/", {'theme':'light'});
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

function back2Top(){
    $(".back2top").click(function(){
        window.scrollTo(0,0)
    })
}