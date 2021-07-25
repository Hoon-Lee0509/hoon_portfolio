$(document).ready(function () {
    $('.subs_btn div button').on('click', function () {
        $(this).next().toggleClass('on');
    });
});