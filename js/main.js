$(document).ready(function() {
    $('.skill_btn').on('click', function () {
        $(this).parent().toggleClass('on');
    });

    $('.slick-pause').on('click', function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('.slick-wrapper').slick('slickPause');
    });
    
    $('.slick-play').on('click', function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('.slick-wrapper').slick('slickPlay');
    });
});