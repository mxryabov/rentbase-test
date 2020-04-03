$(".collapsible__header").on('click', function(e) {
    var header = $(e.target);
    if (header.hasClass('active')) {
        header.removeClass('active');
    } else {
        header.addClass('active');
    }
});