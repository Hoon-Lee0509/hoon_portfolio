$(document).ready(function() {
    $('.skill_btn').on('click', function () {
        $(this).parent().toggleClass('on').parent().next().next('p').toggleClass('on');

    });

    $('.tab:first-of-type, .tabpanel:first-of-type').addClass('active').attr({tabIndex: 0});
    $('.tab:first-of-type').attr({'aria-selected': true}).siblings().attr({'aria-selected': false});
    $('.tabpanel:first-of-type').attr({'aria-hidden': false}).siblings().attr({'aria-hidden': true});

    $('.tab').on('keydown', function (e) {
        const key = e.keyCode;
        console.log(key);
        
        switch (key) {
            case 37:
                $(this).attr({tabIndex: -1});
                if ($(this).is('.first')) {
                    $(this).siblings('.last').attr({tabIndex: 0}).focus();
                } else {
                    $(this).prev().attr({tabIndex: 0}).focus();
                }
                break;
            case 39:
                $(this).attr({tabIndex: -1});
                if ($(this).is('.last')) {
                    $(this).siblings('.first').attr({tabIndex: 0}).focus();
                } else {
                    $(this).next().attr({tabIndex: 0}).focus();
                }
                break;
            case 36:
                e.preventDefault();
                $(this).siblings('.first').attr({tabIndex: 0}).focus();
                break;
            case 35:
                e.preventDefault();
                $(this).siblings('.last').attr({tabIndex: 0}).focus();
                break;
            case 13:
            case 32:
                e.preventDefault();
                $(this).click();
        }
    });

    $('.tab').on('click', function () {
        $(this).addClass('active').attr({tabIndex: 0, 'aria-selected': true}).siblings().removeClass('active').attr({tabIndex: -1, 'aria-selected': false});

        const $tgPanel = $( '#' + $(this).attr('aria-controls'));
        $tgPanel.addClass('active').attr({tabIndex: 0, 'aria-hidden': false}).siblings('.tabpanel').removeClass('active').attr({tabIndex: -1, 'aria-hidden': true});

    });

    $('#tab1').on('click', function () {
        $(this).parent().parent().prev().children().children('span').text('ABOUT HOON_이훈에 대한 정보입니다');
    });
    $('#tab2').on('click', function () {
        $(this).parent().parent().prev().children().children('span').text('skill_사용하는 프로그램 및 주 사용 언어의 능력치입니다');
    });
    $('#tab3').on('click', function () {
        $(this).parent().parent().prev().children().children('span').text('틀림이 아닌 다름_서로 다름의 차이를 인정할 줄 압니다');
    });
    $('#tab4').on('click', function () {
        $(this).parent().parent().prev().children().children('span').text('잘 부탁드립니다_기대에 부흥하도록 노력하겠습니다');
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