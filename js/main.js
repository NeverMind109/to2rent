$(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        fade: true,
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="Next Arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="Previous Arrow"></button>',
        responsive: [
          {
            breakpoint: 441,
            settings: {
              arrows: false,
            }
          },
        ]
      });
});