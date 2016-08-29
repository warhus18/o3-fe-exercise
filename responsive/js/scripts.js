$(function() {

    // mobile menu
    $('.hamburger').click(function (e) {
        $(this).parent().find('ul').toggleClass('active-menu');
        $(this).toggleClass('active');
    });

    // image swap
    $('.media').click(function (e) {

        // get the banner image
        $('.banner').find('picture img').each(function () {
            bannerImage = $(this).attr('srcset').split('-')[0];
        });

        // get the media image
        $(this).find('picture img').each(function () {
            mediaImage = $(this).attr('srcset').split('-')[0];
        });

        // swap the media picture
        $(this).fadeOut(function () {

            // replace all image sources
            $(this).find('source').each(function () {
                var thisSize = $(this).attr('srcset').split('-')[1]; 

                // set the new srcset
                $(this).attr('srcset', bannerImage + '-' + thisSize);
            });

            // change image
            $(this).find('img').attr('srcset', bannerImage);

            // fade image in
            $(this).fadeIn();
        });

        // swap the banner picture
        $('.banner picture').fadeOut(function () {

            // replace all image sources
            $('.banner picture').find('source').each(function () {
                var thisSize = $(this).attr('srcset').split('-')[1]; 

                // set the new srcset
                $(this).attr('srcset', mediaImage + '-' + thisSize);
            });

            // change image
            $('.banner picture').find('img').attr('srcset', mediaImage);

            // fade image in
            $('.banner picture').fadeIn();
        });      
    });
});