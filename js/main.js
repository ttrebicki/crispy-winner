/* AOS */

AOS.init();

/* BACK TO TOP */

$(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
        $('.back_to_top').fadeIn('slow');
    } else {
        $('.back_to_top').fadeOut('slow');
    }
});