let testimonial = document.querySelector('.testimonial-box');

let reviews = [
    {
        description: "Black Gold Mask လေးက ၀က်ခြံလေးတွေကို တော်တော်ကောင်းလာတယ်၊၊ ပြီးတော့ အသားအရည်လေးလည်းကြည်လာပါတယ်။",
        name: "Min Thu Kyaw"
    },
    {
        description: "အရမ်းကြိုက်ပါတယ်။ ညီမက dry skinမို့ ငှက်သိုက်လေးကို ပိုပြီးကြိုက်ပါတယ်။",
        name: "Sandar"
    },
    {
        description: "ညီမ၀က်ခြံလေးက အတော်လေးကို သက်သာလာပါတယ်။",
        name: "Sandar"
    },
    {
        description: "Sis‌ရေ maskလေးက သုံးရတာအဆင်ပြေတယ်နော်။ အမနဲ့တည့်လို့လားမသိဘူး အခု(၃)ခုပဲ သုံးရသေးတယ်၊၊ ၀င်းပြီး တကယ်glowလာတယ်နော်။",
        name: "Sandar"
    }
];

reviews.forEach(review => {
    testimonial.innerHTML += `
        <div class="col-md-12 mt-3 position-relative">
            <span>
                <img src="assets/img/pic15.png" width="25px" alt="">
            </span>
            <p class="ml-4 mb-0">${review.description}<img src="assets/img/pic16.png" class='quote' width="25px" alt=""></p>
            <div class="col-12 mx-auto">
                <hr class="my-4" style="border-width: 2px !important;">
            </div>
            <div class="d-flex align-items-center">
                <img src="./assets/img/pic14.png" class="ml-2" width="60px" alt="">
                <p class="font-weight-bold mb-0 ml-3">${review.name}</p>
            </div>
        </div>
    `
});

$('.testimonial-box').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

let screenHeight = $(window).height();
$(window).scroll(function() {
    let currentPosition = $(this).scrollTop();
    if(currentPosition > screenHeight) {
        $('nav').addClass('fixed-nav');
    } else {
        $('nav').removeClass('fixed-nav');
    }
});