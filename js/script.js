let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 1,
    slidesPerGroup: 1,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: null,
    },
});