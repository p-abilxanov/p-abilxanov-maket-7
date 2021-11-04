$('.banner-carousel').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    arrows: true,
    responsive: [{
        breakpoint: 877,
        settings: {
            arrows: false
        }
    }]
});

$('.carousel-group').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    arrows: true,
    responsive: [{
            breakpoint: 1135,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 870,
            settings: {
                slidesToShow: 2,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 590,
            settings: {
                slidesToShow: 1,
                dots: false,
                arrows: false,
                focusOnSelect: true,
                centerMode: true,
                centerPadding: '50px'
            }
        }
    ]
});