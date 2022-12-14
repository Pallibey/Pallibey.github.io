const swiper = new Swiper('.swiper', {
    breakpoints: {
        720: {
            enabled: false,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
});