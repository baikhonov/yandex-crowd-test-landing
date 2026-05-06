const stepsSliderEl = document.querySelector(".steps__slider");
const mobileMQ = window.matchMedia("(max-width: 768px)");
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

const membersSliderEl = document.querySelector(".members__slider");

if (membersSliderEl) {
    const membersCounterRootEl = membersSliderEl
        .closest(".members")
        ?.querySelector(".members__slider-controls .swiper-counter");
    const membersCounterCurrentEl = membersCounterRootEl?.querySelector(
        ".swiper-counter-current"
    );
    const membersCounterTotalEl = membersCounterRootEl?.querySelector(
        ".swiper-counter-total"
    );

    const totalMembersSlides = membersSliderEl.querySelectorAll(
        ".swiper-slide:not(.swiper-slide-duplicate)"
    ).length;


    membersCounterTotalEl.textContent = totalMembersSlides;

    const updateMembersCounter = (swiper) => {
        if (!membersCounterCurrentEl || !membersCounterTotalEl) return;

        const currentSlide = swiper.realIndex + 1;

        membersCounterCurrentEl.textContent = currentSlide;
    };

    new Swiper(membersSliderEl, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        // autoplay: {
        // delay: 4000,
        // disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".members .members__slider-controls .swiper-button-next",
            prevEl: ".members .members__slider-controls .swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        on: {
            init(swiper) {
                updateMembersCounter(swiper);
            },
            slideChange(swiper) {
                updateMembersCounter(swiper);
            },
        },
    });
}

const heroPrimaryButton = document.querySelector(".hero__button--primary");
const heroSecondaryButton = document.querySelector(".hero__button--secondary");
const lectionSection = document.querySelector(".lection");
const membersSection = document.querySelector(".members");

const scrollToSection = (event, section) => {
    event.preventDefault();

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

heroPrimaryButton?.addEventListener("click", (event) =>
    scrollToSection(event, lectionSection)
);
heroSecondaryButton?.addEventListener("click", (event) =>
    scrollToSection(event, membersSection)
);
