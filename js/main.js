$(document).ready(function() {
    $('#skillBtn1 > img').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.skill_gauge').toggleClass('on');
    });
});