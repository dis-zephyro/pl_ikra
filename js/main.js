$(function() {
    var pull = $('.login-link');
    var menu = $(pull.attr("data-target"));

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(0);
        pull.toggleClass('open')
    });
});


$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    $('.prev').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 300;
        count = count < 1 ? 300 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.next').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 300);
        $input.change();
        return false;
    });
});


// Collapse panel_main

$('.close').click(function (event) {
    event.preventDefault();
    var panel = $(this).closest('ul.row');
    var icon = $(this).find('i:first');

    icon.toggleClass('fa-caret-up').toggleClass('fa-caret-down');
    panel.toggleClass('').toggleClass('collapse');
});


$(".btn-modal").fancybox({
    'padding' : 0
});
