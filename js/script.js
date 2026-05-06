const stepsSliderEl = document.querySelector(".steps__slider");
const mobileMQ = window.matchMedia("(max-width: 767px)");
let stepsSwiper = null;

function syncStepsSlider(e) {
  if (!stepsSliderEl) return;

  if (e.matches) {
    if (!stepsSwiper) {
      stepsSwiper = new Swiper(stepsSliderEl, {
        slidesPerView: 1,
        loop: false,
        autoplay: false,
        pagination: {
          el: ".steps__slider .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".steps__slider .swiper-button-next",
          prevEl: ".steps__slider .swiper-button-prev",
        },
      });
    }
  } else if (stepsSwiper) {
    stepsSwiper.destroy(true, true);
    stepsSwiper = null;
  }
}

syncStepsSlider(mobileMQ);
mobileMQ.addEventListener("change", syncStepsSlider);
