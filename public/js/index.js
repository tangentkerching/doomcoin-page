$(document).ready(function () {

    var switchOn = $("#switchon")[0];
    var dsgetpow = $("#dsgetpow")[0];

    $('#pagepiling').pagepiling({
        verticalCentered: false,
        scrollingSpeed: 10
    });

    $('#enter').on('click', function () {
        $.fn.pagepiling.moveSectionDown();
        switchOn.play();
    });

    $('.highlight').hover(function () {
        dsgetpow.play()
    })

});