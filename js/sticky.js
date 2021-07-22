$(document).ready(function () {
    const winHei = $(window).height();
    const stickyY = $('.sticky').offset().top;

    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        $('.text_wrap>div').each(function (idx, ele) {
            if (scrollY > stickyY + winHei*idx) $(this).addClass('on').siblings().removeClass('on');
        });
    });
    
    const elements = $('.sticky');
    Stickyfill.add(stickyCnt);
});