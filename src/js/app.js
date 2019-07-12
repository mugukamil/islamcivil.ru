import $ from "jquery";
import "slick-carousel";

$(document).ready(function ready() {
  const $thirdCat = $(".cat:nth-child(3)");
  if ($thirdCat.length) {
    const thirdCatOffset = $thirdCat.length ? $thirdCat.offset().top : false;
    const thirdCatHeight = $thirdCat.height();

    $(".socials--absolute").css({
      top: thirdCatOffset + thirdCatHeight + 40
    });
  }

  function scrollStarted() {
    const start = 1;

    if (start <= window.pageYOffset) {
      document.body.classList.add("is-scrolled");
    } else {
      document.body.classList.remove("is-scrolled");
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

  if (window.innerWidth < 768) {
    $(".remembers__slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    });
  }
});
