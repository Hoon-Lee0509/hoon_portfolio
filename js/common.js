$(document).ready(function() {

    $('.gnb_open_btn').on('click', function () {
        $('#gnb').addClass('on');
        return false;
    });

    $('.hover_bg').attr({tabIndex: 0});

    // $('.hover_bg').on('mouseenter', function() {
    //     $(this).siblings('.cl_hover').css({visibility: 'visible', top: 60%})
    // });
    // $('.hover_bg').on('mouseleave', function() {
    //     $(this).siblings('.cl_hover').css({visibility: 'hidden', paddingTop: 30})
    // });
});