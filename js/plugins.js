// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

			$(document).ready(function() {
			$('.homepage-first-content-slider').slick({
			        dots: true,
			        arrows:true,
			        infinite: true,
			        speed: 1000,
			        slidesToShow: 5,
			        slidesToScroll: 5,
			        autoplay:true,
			        autoplaySpeed: 2000,
			        responsive: [
    				{
    				  breakpoint: 600,
				      settings: {
				      arrows: false,
				      slidesToShow: 1,
				      slidesToScroll: 1,
				      arrows:false
				      }
					}
					]
			        
			    });

			$('.homepage-bottom-slider').slick({
			        dots: true,
			        infinite: true,
			        speed: 1000,
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        autoplay:false,
			        autoplaySpeed: 2000,
			        responsive: [
    				{
    				  breakpoint: 600,
				      settings: {
				      slidesToShow: 1,
				      slidesToScroll: 1,
				      arrows:false
      				  }
    				}
    				]
			    });
			    
				$('.chpgbc-top-slider').slick({
			        dots: false,
			        arrows:false,
			        swipe:false,
			        infinite: true,
			        speed: 1000,
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        autoplay:false,
			        adaptiveHeight: true,
			        responsive: [
    				{
    				  breakpoint: 480,
				      settings: {
				      slidesToShow: 1,
				      slidesToScroll: 1,
				      arrows:false,
				      dots:true,
				      swipe:true
      				  }
    				}
    				]
			    });

			
			$('.chpgbc-news-slider').slick({
			        dots: true,
			        infinite: true,
			        speed: 1000,
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        autoplay:false,
			        autoplaySpeed: 2000,
			        responsive: [
    				{
    				  breakpoint: 600,
				      settings: {
				      slidesToShow: 2,
				      arrows:false
      				  }
    				},
    				{
    				  breakpoint:480,
    				  settings:{
    				  slidesToShow: 1,
    				  arrows:false
    				  }
    				
    				
    				}
    				]

			        
			    });

			    
			$('.simple-menu').sidr({
				side: 'right',
				displace:true,
				speed:500 
				}); 
	
			});
			

			$(function() {
				$('.close-sidr-link').click(function(event){
					event.preventDefault();
					$.sidr('close')
				});  
			});


