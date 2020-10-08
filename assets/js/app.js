
  
  let screenHeight = $(window).height();
  $(window).scroll(function() {
    let currentPosition = $(this).scrollTop();
    if(currentPosition > screenHeight - 200) {
      $('nav').addClass('fixed-nav');
    } else {
      $('nav').removeClass('fixed-nav');
    }
  });
  $('.single-item').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $(window).on("load",function() {
    $('.loading').fadeOut(500,function() {
      $(this).remove();
    })
  });
  AOS.init();
  
  