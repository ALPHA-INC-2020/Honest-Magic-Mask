let testimonial = document.querySelector('.testimonial-box');

let reviews = [
    {
        description: "Sis‌ရေ maskလေးက သုံးရတာအဆင်ပြေတယ်နော်။ အမနဲ့တည့်လို့လားမသိဘူး အခု(၃)ခုပဲ သုံးရသေးတယ်၊၊ ၀င်းပြီး တကယ်glowလာတယ်နော်။",
        name: "Sandar"
    },
    {
        description: "ကျွန်တော့် အထင်တော့ အမည်းက ကပ်ပြီး ခွာလိုက်ရင် တင်းနေရော နေလို့လဲကောင်းတယ် night cream အနေနဲ့ သုံးပြီး လိမ်းအိပ်လိုက်ရင် မနက်မျက်နှာလေးတင်းတင်းလေးနဲ့ ဖြူဝင်းနေရော .... ဟုတ်တော်တော်လေးလဲ သိသာတယ် နေ့တိုင်းသုံးလို့လားမသိဘူး ... အခုတော့ အမတို့ brand ဖြစ်တဲ့ H&m ကို အရမ်းကြိုက်နေပြီ သုံးရတာလဲ အဆင်ပြေတယ်",
        name: "Min Khant"
    },
    {
        description: "မျက်နှာကဝက်ခြံတွေ bye ပဲ😙",
        name: "Khine Thinzar Aung"
    },
    {
        description: "အရမ်းကောင်းတယ် သုံးပြီးသွားတော့ နောက်နေ့ကြတော့ မျက်နှာလေးကို ဝင်းပြီး ကြည်လင်လာတာတွေ့ရတယ်",
        name: "Arr Chit Tone"
    },
    {
        description: "sis ရေ black gold လေးသုံးနေတာ အရမ်းကောင်းတယ် sis နောက်လဲ အားပေးပါမယ်",
        name: "Unknown"
    },
    {
        description: "Black gold mask လေးကလေ ဝက်ခြံလေးတွေတောတော်သက်သာလာတယ် ပြီးတော့ အသားအရည်လဲ ကြည်လာတယ်",
        name: "Unknown"
    },
    {
        description: "ညီမဝက်ခြံတွေတော်တော်လေး သိသာလာတယ် Black gold mask လေးက တော်တော်ကောင်းတယ် ညီမသုံးတာ အခု ၅ ချပ်ပဲရှိသေးတယ် ၃ ခုလောက် ကပ်ပြီးတာနဲ့ အဖုတွေခြောက်သွားပြီး အစံလေးတွေထွက်လာတယ် အခုတော့ ၂ လုံး ၃လုံးပဲ ကျန်တော့တယ်။ ဆက်သုံးနေတယ်။ fri တွေကိုလဲ ညွှန်းပေးထားတယ်နော်",
        name: "Unknown"
    },

    {
        description: "Hello အမရေ , review လေးပေးချင်လို့ ။ ညီမလေးလေ ကြည်ပြီး  ဖွေးလာတယ် ပြီးတော့ အသားအရည်ကလဲ တင်းလာတယ် နောက်လဲ အများကြီး အားပေးဦးမယ်နော် ",
        name: "Unknown"
    },
    {
        description: "ညီမ မျက်နှာ က oily skin ပါ။ သူငယ်ချင်းတွေက ကောင်းတယ် ဆိုလို့ စမ်းသုံးကြည့်တာပါ။ အခုသုံးနေတာ ၁ လပြည့်တော့မယ်။ ဝက်ခြံတွေသိပ်မထွက်တော့ဘဲနဲ့ အသားအရည်ဝင်းလာတယ် အမ",
        name: "Unknown"
    },
    {
        description: "ညီမ ဝက်ခြံလေးတွေက တော်တော်လေး ကို သက်သာလာတယ် အမ အခု သုံးနေတာ ၄ ချပ်ပဲ ကျန်တော့တယ်",
        name: "Unknown"
    },
    {
        description: "ညီမရေ အခု အဝါရောင်လေးသုံးနေတာ တကယ်ကောင်းတယ်",
        name: "Unknown"
    },
    {
        description: "sis ရေ mask လေး က သုံးရတာ အဆင်ပြေပါတယ်နော်။ အမနဲ့ တည့်လို့လားမသိ အခု ၃ ခါပဲ သုံးရသေးတယ် ဝင်းပြီး တကယ် glow လာတယ်နော် များများအောင်မြင်ပါစေရှင့်",
        name: "Sandar"
    },
    {
        description: "အရမ်းကြိုက်ပါတယ်။ ညီမက dry skinမို့ ငှက်သိုက်လေးကို ပိုပြီးကြိုက်ပါတယ်။",
        name: "Unknown"
    },
    {
        description: "ညီမ၀က်ခြံလေးက အတော်လေးကို သက်သာလာပါတယ်။",
        name: "Unknown"
    },
    
];

reviews.forEach(review => {
    testimonial.innerHTML += `
    <div class="col-md-12 mt-3 position-relative wow animate__zoomInDown">
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

var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
    );
    wow.init();
    
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