$(document).ready(function() {
    $('#skillBtn1').on('click', function () {
        $(this).closest('.skill_gauge').toggleClass('on');
        return false;
    });
});