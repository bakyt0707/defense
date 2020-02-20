$('.mobile-btn').on('click',  function() {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.menu').toggleClass('show-menu');
    $('.menu_item').toggleClass('show-menu_item')
});

$('.menu nav a').on('click',  function() {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.menu').removeClass('show-menu');
    $('.menu_item').removeClass('show-menu_item')
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('header').addClass('header-fixed');
    } else {
        $('header').removeClass('header-fixed');
    }
});
