$(document).ready(function () {
    $("#feedback-button").click(function () {
        $("#feedback-menu").animate({ bottom: '10px' });
    });

    $("#feedback-close").click(function () {
        $("#feedback-menu").animate({ bottom: '-500px' });
    });
});