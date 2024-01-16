

  // Sticky Section
  var fixed_top = $(".page-contains-area");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1800) {
      fixed_top.addClass("animated fadeInDown section-fixed");
    } else {
      fixed_top.removeClass("animated fadeInDown section-fixed");
    }
  });



  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($('.loader-wrap').length) {
      $('.loader-wrap').delay(1000).fadeOut(500);
    }
  }

  if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function () {
      $('.loader-wrap').delay(200).fadeOut(500);
    })
  }





  function thmSwiperInit() {
    // swiper slider
    if ($(".thm-swiper__slider").length) {
      $(".thm-swiper__slider").each(function () {
        let elm = $(this);
        let options = elm.data('swiper-options');
        let thmSwiperSlider = new Swiper(elm, options);
      });
    }
  }



  function thmOwlInit() {
    // owl slider

    if ($(".thm-owl__carousel").length) {
      $(".thm-owl__carousel").each(function () {
        let elm = $(this);
        let options = elm.data('owl-options');
        let thmOwlCarousel = elm.owlCarousel(options);
      });
    }

    if ($(".thm-owl__carousel--custom-nav").length) {
      $(".thm-owl__carousel--custom-nav").each(function () {
        let elm = $(this);
        let owlNavPrev = elm.data('owl-nav-prev');
        let owlNavNext = elm.data('owl-nav-next');
        $(owlNavPrev).on("click", function (e) {
          elm.trigger('prev.owl.carousel');
          e.preventDefault();
        })

        $(owlNavNext).on("click", function (e) {
          elm.trigger('next.owl.carousel');
          e.preventDefault();
        })
      });
    }

  }




  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }


  }



  if ($(".main-menu__list").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }


  if ($(".service-details__sidebar-service-list").length) {
    // dynamic current class
    let mainNavUL = $(".service-details__sidebar-service-list");
    dynamicCurrentMenuClass(mainNavUL);
  }


  if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu__list").outerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }



  if ($(".sticky-header__content").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".sticky-header__content");
    mobileNavContainer.innerHTML = navContent;
  }




  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }



  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }


  function thmSwiperInit() {
    // swiper slider
    if ($(".thm-swiper__slider").length) {
      $(".thm-swiper__slider").each(function () {
        let elm = $(this);
        let options = elm.data('swiper-options');
        let thmSwiperSlider = new Swiper(elm, options);
      });
    }
  }



  function thmOwlInit() {
    // owl slider

    if ($(".thm-owl__carousel").length) {
      $(".thm-owl__carousel").each(function () {
        let elm = $(this);
        let options = elm.data('owl-options');
        let thmOwlCarousel = elm.owlCarousel(options);
      });
    }

    if ($(".thm-owl__carousel--custom-nav").length) {
      $(".thm-owl__carousel--custom-nav").each(function () {
        let elm = $(this);
        let owlNavPrev = elm.data('owl-nav-prev');
        let owlNavNext = elm.data('owl-nav-next');
        $(owlNavPrev).on("click", function (e) {
          elm.trigger('prev.owl.carousel');
          e.preventDefault();
        })

        $(owlNavNext).on("click", function (e) {
          elm.trigger('next.owl.carousel');
          e.preventDefault();
        })
      });
    }

  }





 
  // AOS Animation
  if ($("[data-aos]").length) {
    AOS.init({
      duration: '1000',
      disable: 'false',
      easing: 'ease',
      mirror: true
    });
  }


 
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }



  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }


  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});



   /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: true,
      nav: true,
      navText: ["<i class='fa fa-angle-left'><i/>", "<i class='fa fa-angle-right'><i/>"],
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 1500,
      autoHeight: false,
      autoplay: true,
      mouseDrag: false,
      onInitialized: function (e) {
          var a = this.items().length;
          $("#snh-1").html("<span>01</span><span>" + "0" + a + "</span>");
          var presentage = Math.round((100 / a));
          $('.slider__progress span').css("width", presentage + "%");
      }
  }).on("changed.owl.carousel", function (e) {
      var b = --e.item.index,
          a = e.item.count;
      $("#snh-1").html("<span> " + "0" + (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + "0" + a + "</span>");

      var current = e.page.index + 1;
      var presentage = Math.round((100 / e.page.count) * current);
      $('.slider__progress span').css("width", presentage + "%");
  });


$('.rs-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  margin: 30,
  nav: true,
  dots: true,
  smartSpeed: 500,
  autoplayTimeout: 10000,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  responsive:{
    "0": {
      "items": 1
  },
  "768": {
      "items": 2
  },
  "992": {
      "items": 3
  },
  "1200": {
      "items": 4
  }
  }
});
$(document).on('click', '.owl-item>div', function(){
  var $speed = 1000;
  $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
});

$('.Partnership').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: 'linear',
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    600: {
      items: 4
    },
    800: {
      items: 4
    },
    1200: {
      items: 4
    }

  }
});

  // Project and Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText : [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
  0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});
var counter = function() {
		
  $('#section-counter').waypoint( function( direction ) {

    if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator('.')
      $('.number').each(function(){
        var $this = $(this),
          num = $this.data('number');
          console.log(num);
        $this.animateNumber(
          {
          number: num,
          numberStep: comma_separator_number_step
          }, 7000
        );
      });
      
    }

  } , { offset: '95%' } );

}
counter();
  // window scroll event
  $(window).on("scroll", function () {

    //Stricked Menu Fixed
    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }

    //Scroll To Top
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }

    OnePageMenuScroll();


  });

    //===Language switcher===
    function languageSwitcher() {
      if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
          effect: 'slide',
          animSpeed: 100,
          testMode: true,
          onChange: function (evt) {
            alert("The selected language is: " + evt.selectedItem);
          }
  
        });
      };
    }

  // window load event
  $(window).on("load", function () {
    languageSwitcher();
  });  

  $(".item ").slice(0, 4).show()
  $(".btn-one").on("click", function(){
     $(".item:hidden").slice(0, 4).slideDown()
     if ($(".item:hidden").length = 0) {
     $(".btn-one").fadeOut('slow') 
     }
  })


  // Service Style1 Tab
  if ($('.service-style1-tab').length) {
    $('.service-style1-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
      e.preventDefault();
      var target = $($(this).attr('data-tab'));

      if ($(target).hasClass('actve-tab')) {
        return false;
      } else {
        $('.service-style1-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
        $(this).addClass('active-btn-item');
        $('.service-style1-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
        $(target).addClass('tab-content-box-item-active');
      }
    });
  }

  function computeLoan() {
    const calculete_btn = document.querySelector("#btn");
    const amount = document.querySelector("#amount").value;
    const interest_rate = document.querySelector("#interest_rate").value;
    const months = document.querySelector("#months").value;
    const interest = (amount * (interest_rate * 0.01)) / months;
    let payment = (amount / months + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector(
      "#payment"
    ).innerHTML = `Monthly Payment = ₹${payment}`;
  }
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

  $(document).ready(function () {
    $('select:not(.ignore)').niceSelect();
  });


  // Banking Tab
  if ($('.banking-tab').length) {
    $('.banking-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
      e.preventDefault();
      var target = $($(this).attr('data-tab'));

      if ($(target).hasClass('actve-tab')) {
        return false;
      } else {
        $('.banking-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
        $(this).addClass('active-btn-item');
        $('.banking-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
        $(target).addClass('tab-content-box-item-active');
      }
    });
  }


 



  if ($(".odometer").length) {
    var odo = $(".odometer");
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }
  
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

 

    var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

  
  //Add One Page nav
  if ($('.scroll-nav').length) {
    $('.scroll-nav').onePageNav();
  }
 // Branch Atm Tab
 if ($('.branch-atm-tab').length) {
  $('.branch-atm-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
    e.preventDefault();
    var target = $($(this).attr('data-tab'));

    if ($(target).hasClass('actve-tab')) {
      return false;
    } else {
      $('.branch-atm-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
      $(this).addClass('active-btn-item');
      $('.branch-atm-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
      $(target).addClass('tab-content-box-item-active');
    }
  });
}



// Branch Atm Tab
if ($('.features-style2-tab').length) {
  $('.features-style2-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
    e.preventDefault();
    var target = $($(this).attr('data-tab'));

    if ($(target).hasClass('actve-tab')) {
      return false;
    } else {
      $('.features-style2-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
      $(this).addClass('active-btn-item');
      $('.features-style2-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
      $(target).addClass('tab-content-box-item-active');
    }
  });
}

// Customer Care Numbers Tab
if ($('.customer-care-numbers-tab').length) {
  $('.customer-care-numbers-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
    e.preventDefault();
    var target = $($(this).attr('data-tab'));

    if ($(target).hasClass('actve-tab')) {
      return false;
    } else {
      $('.customer-care-numbers-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
      $(this).addClass('active-btn-item');
      $('.customer-care-numbers-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
      $(target).addClass('tab-content-box-item-active');
    }
  });
}






