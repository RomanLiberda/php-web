$('.toggle-opened').click(function () {

    console.log('j');
    $(this).toggleClass('opened');
    $('.top-panel').toggleClass('opened');
    $('.mobile>a').each(function (i) {
        $(this).delay(50 * i).queue(function () {
            $(this).toggleClass('opened').dequeue();
        })
    });
});
