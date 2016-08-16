$(function() {

    $('.hamburger').click(function (e) {
        $(this).parent().find('ul').toggleClass('active-menu');
        $(this).toggleClass('active');
    });

});