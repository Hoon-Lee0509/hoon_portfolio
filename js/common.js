$(document).ready(function() {

    $('.hover_bg').attr({tabIndex: 0});

    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop() + $(this).height() * 2/3;
        console.log(scrollY);
    
        $('.fade').each(function (idx) {
          if (scrollY > $(this).offset().top) {
            $(this).addClass('on');
          } else { 
            $(this).removeClass('on');
          }
        });
      });
      
      $(window).trigger('scroll');

      $('.top').on('click', function () {
        $('html, body').stop().animate({scrollTop: 0}, 1000);
      });
});

document.addEventListener('DOMContentLoaded', function () {
  const digEle = document.getElementById('digital');

  function clock() {
    const now = new Date();
    const yy = now.getFullYear();
    const mm = now.getMonth() + 1;  //0~11월 => 1월~12월
    const dd = now.getDate();
    const day = now.getDay();  //0(일)~6(토)요일
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    console.log(now);
    console.log(yy, mm, dd, day, h, m, s);

    const week = ['일', '월', '화', '수', '목', '금', '토'];
    console.log(week[day]);

    const ampm = h < 12? 'AM' : 'PM';
    console.log(ampm);

    h %= 12;    //h = h % 12;
    console.log(h);
    h = h? h : 12;
    console.log(h);

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    console.log(h, m, s);

    const result = `${yy}년${mm}월${dd}일 ${week[day]}요일<br>${ampm} ${h}시${m}분${s}초`;
    console.log(result);

    digEle.innerHTML = result;
  }
  clock();  //문서가 실행되고 한번만 동작

  let timer = setInterval(clock, 1000);


  $('.d_mode').on('click', function () {
    $('body').addClass('dark_on');
    $(this).css({display: 'none'}).prev('.l_mode').css({display: 'block'});
    $('.res_list').children('li:first-child').children('img').attr({src: "../images/common/mobile_white.png"})
    $('.res_list').children('li:nth-child(2)').children('img').attr({src: "../images/common/tablet_white.png"})
    $('.res_list').children('li:last-child').children('img').attr({src: "../images/common/pc_white.png"})
    $('.html_icon').attr({src: "../images/common/html_white.png"});
  });

  $('.l_mode').on('click', function () {
    $('body').removeClass('dark_on');
    $(this).css({display: 'none'}).next('.d_mode').css({display: 'block'});
    $('.res_list').children('li:first-child').children('img').attr({src: "../images/common/mobile.png"})
    $('.res_list').children('li:nth-child(2)').children('img').attr({src: "../images/common/tablet.png"})
    $('.res_list').children('li:last-child').children('img').attr({src: "../images/common/pc.png"})
    $('.html_icon').attr({src: "../images/common/html.png"});
  });

  $('.md_open_btn').on('click', function () {
    const $openBtn = $(this);
    const $mdCnt = $($(this).attr('data-href'));
    console.log($mdCnt, typeof $mdCnt);
    const $closeBtn = $mdCnt.find('.md_close_btn');
    const $first = $mdCnt.find('[data-link="first"]');
    const $last = $mdCnt.find('[data-link="last"]'); 

    const wrapHei = $('body').outerHeight();
    $('html, body').css({height: wrapHei, overflow: 'hidden'});

    $mdCnt.siblings().attr({'aria-hidden': true, inert: ''});

    $mdCnt.before('<div id="dim"></div>');
    const $dim = $('#dim');
    $dim.stop().fadeIn().next().css('visibility', 'visible').find('[data-link="first"]').focus();

    $first.on('keydown', function (e) {
      console.log(e.keyCode);
      if (e.shiftKey && e.keyCode === 9) {
        e.preventDefault();  
        $last.focus();
      }
    });

    $last.on('keydown', function (e) {
      if (!e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        $first.focus();
      }
    });

    $closeBtn.on('click', function () {
      $('html, body').removeAttr('style');

        $dim.stop().fadeOut(function () {
        $(this).remove();
      });
      
      $mdCnt.css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');

      $openBtn.focus();
   });

    $dim.on('click', function () {
      $closeBtn.trigger('click');
    });
    $(window).on('keydown', function (e) {
      console.log(e.keyCode); 
      if (e.keyCode === 27) $closeBtn.click();
    });
 });
});