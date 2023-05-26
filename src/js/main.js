$(function () {
    $(".top-slider__content-box").slick({
        appendArrows: $(".btn"),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $(".header__btn, .modal-feedback__btn-close").on("click", function () {
        $(".modal-feedback").toggleClass("modal-feedback--active");
        console.log('cli')
    });


});
