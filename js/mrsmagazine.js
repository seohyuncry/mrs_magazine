$(document).ready(function(){

    mrsgnb();
    mrsgnbpanel();
    mrsmainslide();
    mrsmainsubslide();
    mrslistaniety();
    mrslistslide();
    mrsfoodslide();
});

function mrsgnb(){
    $('strong').click(function(){
        $(this).toggleClass("active");
    });
}

function mrsgnbpanel(){
    $("#open").click(function(){
        $('#magazinePanel').toggleClass('active');
    });
    $("#closed").click(function(){
        $('#magazinePanel').toggleClass('active');
    });
}

function mrsmainslide(){
    $('#mainslide').bxSlider({
        wrapperClass: "mrsfirst",
        auto: true,
        controls: true,
        page: false,
        touchEnabled: false

    });
}

function mrsmainsubslide(){
    $('#sub_text_slide').bxSlider({
        wrapperClass: "mrssecond",
        auto: true,
        controls: true,
        page: false,
        touchEnabled: false

    });
}

function mrslistaniety(){
    $('.anxiety_img').bxSlider({
        wrapperClass: "mrslistanxiety"
    });
}

function mrslistslide(){
    $('.img_text_slide').bxSlider({
        wrapperClass: "mrslistimg"
    });
}


function mrsfoodslide(){
    $('.food_famous_slide').bxSlider({
        wrapperClass: "mrsfoodfamous"
    });
}

