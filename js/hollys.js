$(function(){
    //메뉴
    $(".main > li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown()
    },function(){
        $(".sub, .sub_bg").stop().slideUp()
    }) //hover

    //slick

    $(".move").slick({
        autoplay:true,
        fade:true,
        dots:true,
        arrows:false,
        autoplaySpeed:2000,
        adaptiveHeight:true
    });

    //팝업
    $(".close").click(function(){
        $(".popup").hide();
    })


























})//jQuery