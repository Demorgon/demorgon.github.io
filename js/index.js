$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: '600',
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });



    var options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.05,
        "grainDensity": 1,
        "grainWidth": 1,
        "grainHeight": 1

    }
    grained("#grained-image1", options);
    grained("#grained-image2", options);
    grained("#grained-image3", options);
    grained("#grained-image4", options);
})
