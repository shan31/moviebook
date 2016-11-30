// Owl Carousel Video
$('.owl-carousel_video').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        nav: true,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4,
                 mergeFit:false
            }
        }
    })


// Owl Carousel
 var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

// Semantic Search Box
$('#search-select').dropdown();
