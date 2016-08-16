$(function() {

    $('.hamburger').click(function (e) {
        $(this).parent().find('ul').toggleClass('active-menu');
        $(this).toggleClass('active');
    });

    $('.media img').click(function() { 
	    var article = this;
	    var src = this.src;
	    $('.banner img').fadeOut(400,function(){
	        article.src = this.src;
	        $(this).fadeIn(400)[0].src = src;
	    });
	});

});