import $ from "jquery";
import "slick-carousel";

$(document).ready(function() {
  const $body = $("body");
  $(window).on("load resize", function() {
    const $thirdCat = $(".cat:nth-child(3)");
    if ($thirdCat.length) {
      const thirdCatOffset = $thirdCat.offset().top;
      const thirdCatHeight = $thirdCat.height();

      $(".socials--absolute").css({
        top: thirdCatOffset + thirdCatHeight + 40
      });
    }
  });

  function scrollStarted() {
    const start = 1;

    if (start <= window.pageYOffset) {
      $body.addClass("is-scrolled");
    } else {
      $body.removeClass("is-scrolled");
    }
  }
  if (window.innerWidth > 300) {
    window.addEventListener(
      "scroll",
      function windowOnScroll() {
        window.requestAnimationFrame(scrollStarted);
      },
      { passive: !0 }
    );

    scrollStarted();
  }

  $(".video-slider__in").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<button type='button' class='slick-prev'>
    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.15817 20.9165C9.69689 21.4998 10.6191 21.4981 11.1557 20.9129C11.6329 20.3926 11.6315 19.5933 11.1525 19.0746L4.94849 12.3569C4.24085 11.5907 4.24085 10.4093 4.94848 9.64308L11.1525 2.92538C11.6315 2.40671 11.6329 1.60742 11.1557 1.08707C10.6191 0.501853 9.69689 0.500229 9.15817 1.08355L1.25316 9.64308C0.545527 10.4093 0.545527 11.5907 1.25316 12.3569L9.15817 20.9165Z" fill="white"/>
    </svg>
  </button>`,
    nextArrow: `<button type='button' class='slick-next'>
    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.15817 20.9165C9.69689 21.4998 10.6191 21.4981 11.1557 20.9129C11.6329 20.3926 11.6315 19.5933 11.1525 19.0746L4.94849 12.3569C4.24085 11.5907 4.24085 10.4093 4.94848 9.64308L11.1525 2.92538C11.6315 2.40671 11.6329 1.60742 11.1557 1.08707C10.6191 0.501853 9.69689 0.500229 9.15817 1.08355L1.25316 9.64308C0.545527 10.4093 0.545527 11.5907 1.25316 12.3569L9.15817 20.9165Z" fill="white"/>
    </svg>
  </button>`,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          asNavFor: ".video-slider__nav"
        }
      }
    ]
  });

  $(".video-slider__nav").slick({
    asNavFor: ".video-slider__in",
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  });

  $(".cols-slider .cols__row").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev'>
    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.15817 20.9165C9.69689 21.4998 10.6191 21.4981 11.1557 20.9129C11.6329 20.3926 11.6315 19.5933 11.1525 19.0746L4.94849 12.3569C4.24085 11.5907 4.24085 10.4093 4.94848 9.64308L11.1525 2.92538C11.6315 2.40671 11.6329 1.60742 11.1557 1.08707C10.6191 0.501853 9.69689 0.500229 9.15817 1.08355L1.25316 9.64308C0.545527 10.4093 0.545527 11.5907 1.25316 12.3569L9.15817 20.9165Z" fill="white"/>
    </svg>
  </button>`,
    nextArrow: `<button type='button' class='slick-next'>
    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.15817 20.9165C9.69689 21.4998 10.6191 21.4981 11.1557 20.9129C11.6329 20.3926 11.6315 19.5933 11.1525 19.0746L4.94849 12.3569C4.24085 11.5907 4.24085 10.4093 4.94848 9.64308L11.1525 2.92538C11.6315 2.40671 11.6329 1.60742 11.1557 1.08707C10.6191 0.501853 9.69689 0.500229 9.15817 1.08355L1.25316 9.64308C0.545527 10.4093 0.545527 11.5907 1.25316 12.3569L9.15817 20.9165Z" fill="white"/>
    </svg>
  </button>`,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: "10%"
        }
      }
    ]
  });

  function slickOnMobile(slider, settings, width, isRemembers) {
    const $window = $(window);
    $window.on("load resize", function onLoadResize() {
      if ($window.width() > width) {
        if (slider.hasClass("slick-initialized")) {
          slider.slick("unslick");
        }
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        slider.slick(settings);

        if (isRemembers) {
          slider.slick("slickGoTo", 1);
          setSlideVisibility(slider);

          slider.on("afterChange", function() {
            setSlideVisibility(slider);
          });
        }
      }
    });
  }

  function setSlideVisibility(slider) {
    //Find the visible slides i.e. where aria-hidden="false"
    var visibleSlides = slider.find('.remembers__slide[aria-hidden="false"]');
    //Make sure all of the visible slides have an opacity of 1
    $(visibleSlides).each(function() {
      $(this).css("opacity", 1);
    });

    //Set the opacity of the first and last partial slides.
    $(visibleSlides)
      .first()
      .prev()
      .css("opacity", 0);
  }

  slickOnMobile($(".remembers__slider"), {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    centerMode: true
  });

  // slickOnMobile(
  //   $(".remembers__slider"),
  //   {
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     dots: true,
  //     arrows: false,
  //     centerMode: true,
  //     centerPadding: "10%",
  //     mobileFirst: true,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: "unslick"
  //       }
  //     ]
  //   },
  //   768
  // );

  slickOnMobile(
    $(".fatwas__slider"),
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      asNavFor: ".fatwas__num"
    },
    1024
  );

  slickOnMobile(
    $(".fatwas__num"),
    {
      slidesToShow: 5,
      dots: false,
      arrows: false,
      asNavFor: ".fatwas__slider",
      focusOnSelect: true
    },
    1024
  );

  const $headercarousel = $(".js-headercarousel");

  const $headercarouselNav = $(".js-headercarousel-nav");
  const $headercarouselIndicator = $(".js-headercarousel-indicator");

  $headercarousel.on("init", function() {
    $headercarouselIndicator.addClass("is-slide1 is-active");
  });
  $headercarousel.on("init", function() {
    $body
      .addClass("headercarousel-is-init")
      .removeClass("headercarousel-isnot-init");
  });
  $headercarousel.slick({
    slidesToShow: 1,
    infinite: true,
    dots: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 2e4,
    fade: true,
    cssEase: "linear",
    speed: 500,
    adaptiveHeight: true,
    prevArrow: $headercarousel.parent().find(".js-carousel-prev"),
    nextArrow: $headercarousel.parent().find(".js-carousel-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplaySpeed: 4e3
        }
      }
    ]
  });
  $headercarousel.on("beforeChange", function() {
    $body.removeClass("headercarousel-is-init");
  });
  $headercarousel.on("beforeChange", function(t, e, i, o) {
    $headercarouselNav.children("div").removeClass("is-active");
    $headercarouselNav
      .children("div")
      .eq(o)
      .addClass("is-active");
    $headercarouselIndicator.removeClass(
      "is-slide1 is-slide2 is-slide3 is-slide4 is-active"
    );
    $headercarouselIndicator.addClass(`is-slide${o + 1}`);
    setTimeout(function() {
      $headercarouselIndicator.addClass("is-active");
    }, 300);
  });
  $headercarouselNav.children("div").on("click", function(event) {
    event.preventDefault();

    const e = $(this).index();
    $headercarousel.slick("slickGoTo", e);
  });

  $(".js-togglenav").click(function() {
    $body.toggleClass("mobilenav-is-open");
    $body.removeClass("mobilelang-is-open");
    $(".stickysubnav__item.is-active").removeClass("is-active");
  });

  $(".js-toggle-search").click(function() {
    $(this)
      .closest(".sticky")
      .toggleClass("show-search");
  });
});
