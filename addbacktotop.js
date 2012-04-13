/* 
 
 jQuery Add-BackToTop include WAI-ARIA
 jQuery Plugin addbacktotop ver 0.1
 jQuery required (tested on version 1.5.1 or later)
 Licensed under the MIT
 Copyright (c) 2012 Minoru Hayakawa (E-riverstyle Design)
 Minoru Hayakawa (E-riverstyle Design) - http://twitter.com/eriver
                                       - http://www.e-riverstyle.com/
 Date: 2011-02-27
 
*/


(function($) {
	$.fn.addBackToTop = function(options){
	
		var setting = $.extend({
			addBackToTopIcon : "img/icon32.png",
			addBackToTopIconWidth : 32,
			addBackToTopIconHeight : 32,
			addBackToTopWidth : "50px",
			addBackToTopHeight : "50px",
			addBackToTopLeft : "95%",
			addBackToTopTop : "90%",
			addBackToTopzIndex : 100
		},options);
		
		var $pElement = $('<p id="addBackToTop" role="button"><img src="' +setting.addBackToTopIcon+ '" width="'+setting.addBackToTopIconWidth+'" height="'+setting.addBackToTopIconHeight+'" /></p>');
		$pElement.css({
			width : setting.addBackToTopWidth,
			height : setting.addBackToTopHeight,
			position : "absolute",
			top : setting.addBackToTopTop,
			left : setting.addBackToTopLeft,
			zIndex : setting.addBackToTopzIndex,
			display : "none"
		});
		
		$("body").append($pElement);
		
		var scrollLisner = function(){
			$("#addBackToTop").fadeIn("normal")
			.css("position" , "fixed");
		};
		
		var scrollBackToTop = function(){
			var init = 0;
			var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
			if(posY === init){
				$("#addBackToTop").fadeOut("normal");
			};
		};
		
		var clickLisner = function(e){
			window.scrollTo(0,0);
		};
		
		$(this).each(function(){
			$("#addBackToTop").click(clickLisner);
			$(window).bind("scroll", scrollLisner);
			$(window).bind("scroll", scrollBackToTop);
		});

	};
})(jQuery);