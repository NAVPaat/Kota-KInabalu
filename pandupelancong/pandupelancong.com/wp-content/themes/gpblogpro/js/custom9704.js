$(document).ready(function(){
    $('.sticky_slider').owlCarousel({
        loop:false,
        margin:11,
        autoplay:false,
        autoplayTimeout:3000,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.latest_post').owlCarousel({
        loop:false,
        margin:20,
        autoplay:true,
        autoplayTimeout:3000,
        nav:false,
        dots:true,
        responsive:{
            0:{
                margin:10,
                autoplay:false,
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.slider').owlCarousel({
        loop:false,
        margin:20,
        autoplay:false,
        autoplayTimeout:3000,
        nav:false,
        dots:true,
        responsive:{
            0:{
                margin:10,
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.cat_slider').owlCarousel({
        loop:false,
        margin:10,
        autoplay:false,
        autoplayTimeout:3000,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.stories').owlCarousel({
        loop:false,
        margin:20,
        autoplay:false,
        autoplayTimeout:3000,
        nav:false,
        dots:true,
        responsive:{
            0:{
                margin:10,
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

});