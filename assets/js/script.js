$(function(){
    $('.counter').counterUp();
    $('.study-wrraper').slick({
        slidesToShow:4,
        arrows:true,
        autoplay: true,
        prevArrow:'<i class="fas fa-chevron-left arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right arrow-right"></i>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
        ]    
    })
    $('.service-wrapper').slick({
        slidesToShow:4,
        arrows:false,
        autoplay: true,
    })
    $('.test-main').slick({
        slidesToShow:3,
        arrows:false,
        dots:true,
        dotsClass: "latest-dots",
        autoplay: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
        ]    
    })
})