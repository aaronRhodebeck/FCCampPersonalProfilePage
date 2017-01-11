$("#navExamples").click(function() {
    $('html, body').animate({
        scrollTop: ($('#middleThird').offset().top)
    }, 500);
});

$('#navConnect').click(function() {
    $('html, body').animate({
        scrollTop: ($('#bottomThird').offset().top)
    }, 500);
});

$('#navAboutMe').click(function() {
    $('html, body').animate({
        scrollTop: ($('#aboutMe').offset().top)
    }, 500);
});