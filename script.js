$(document).ready(function() {
    // Smooth scrolling
    $('.menu-btn, .scroll-up-btn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'linear');
    });

    // Toggle menu
    $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Scroll up button show/hide
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // Typed.js
    var typed = new Typed('.typing', {
        strings: ["Web Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed('.typing-2', {
        strings: ["Web Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel
    $('.serv-content').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Waypoints
    $('.line').waypoint(function() {
        $(this.element).animate({
            width: $(this.element).attr('aria-valuenow') + '%'
        }, 1000);
    }, {
        offset: '80%'
    });
});