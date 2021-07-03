$(document).ready(function(){
    $('.payouts_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      // sticky menu 
    var navoff = $(".header_navbar").offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $(".header_navbar").addClass("sticky_menu");
        } else {
            $(".header_navbar").removeClass("sticky_menu");
        }
    });

    // Trustpilot Review slide
    $('.trustpilot_slide_row').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<i class="fal fa-angle-right trustpilot_arrow trustpilot_arrow_next"></i>',
      prevArrow: '<i class="fal fa-angle-left trustpilot_arrow trustpilot_arrow_prev"></i>',
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
    });
})