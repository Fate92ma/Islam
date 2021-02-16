$(document).ready(function () { // Start Coding Here

    // ScrollSpy

    $('.section').headerhighlight({
        elementsChanging: $('.nav-link'),
        currentClass: 'nav-active',
        offset: 0
    });

    // Back To Top

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 800) {
            $(".top i").css("visibility", "visible");

        } else {
            $(".top i").css("visibility", "hidden");
        }

    });

    $('.top i').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });

    // Smooth Scroll

    $('nav a').click(function () {

        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1200);

    });

    // Mini nav

    $(".list").click(function () {
        $("nav").toggleClass("mini");
        $("nav a").toggleClass("mini-item");
    });

}); // End Code