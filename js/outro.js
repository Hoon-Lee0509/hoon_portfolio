$(document).ready(function () {
    $('.subs_btn div button').on('click', function () {
        $(this).next().toggleClass('on');
    });

    $('.md_open_btn').on('click', function () {
         const $openBtn = $(this);
         const $mdCnt = $($(this).attr('data-href'));
         console.log($mdCnt, typeof $mdCnt);
         const $closeBtn = $mdCnt.find('.md_close_btn');
         const $first = $mdCnt.find('[data-link="first"]');
         const $last = $mdCnt.find('[data-link="last"]'); 
     
         const wrapHei = $('#wrap').outerHeight();
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