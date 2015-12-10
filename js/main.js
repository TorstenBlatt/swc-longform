var elementName ="";
var linkName = "";
var counter = 0; 
var startSticky;
var stickyHeight;
var stopSticky;
var glBgFixed;
var glBgBottom;




$(function K7showHide() {
		$(".chov a[class^='thema']").click(function(event){
			event.preventDefault();

			$('.main.channels article').removeClass('item-1 item-2 item-3 item-4 item-5 item-6') 
			counter = 0;
			var channelName = this.className;
			elementName = ".main.channels article."+channelName;
			linkName = "a."+channelName;
			//this.parentNode.parentNode.parentNode.id=channelName;
			$('div.main-container > div.channels').attr('id',channelName);
			
			$('.main.channels article').not(elementName).fadeOut(600);
			$(elementName).fadeIn(600);
					
			$(elementName).addClass(function() {
			if(counter==6){counter=0;}
			counter= counter+1;
			return "item-" + counter;
			});
			
			$('a.active-link').removeClass('active-link');  /* remove class from last active link */
			$(linkName).addClass('active-link');	 /* set new active link */
		
		});
		
		$("a.search-link").click(function(event){
		event.preventDefault();
		$.sidr('close');
		$("div#the-search-overlay").toggle(400, function(){});		
		$("body").toggleClass("no-scrolling");
					
		});
		
		$("a.register-link").click(function(event){
		event.preventDefault();
		$.sidr('close');
		$("div#the-register-overlay").toggle(400, function(){});		
		$("body").toggleClass("no-scrolling");
					
		});


			
});

$(function K7showHideChannelNav() {

		
		$('#channel-menu-link').click(function(event){
		$(".chov .main nav.channel-filter a").not("#channel-menu-link").toggle(400, function(){
			});		
		});

});


$(function K7closeSidrAfterClick() {

		$('#sidr ul li a').click(function(event){
		$.sidr('close');
		});

		$('.wrapper').parent().click(function(event){
		$.sidr('close');
		});


});


$(function() {
    	function abso() {
        $('.full-screen').css({
            width: $(window).width(),
            height: $(window).height()
        });
		    }
		    $(window).resize(function() {
		             startSticky = $(window).height()-stickyHeight;
		             
		             abso();         
		    });
		
		    abso();
		
});


$(function K7scrollAdvancedPage() {

		$("a.scroll-top-link").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:startSticky}, 800, function(){
		});
		
		});

});


//* Sticky Bg Container *//

$(window).scroll(function K7headGoesSticky(event) {
    
    
     if ($(window).scrollTop() >= startSticky  && $(window).scrollTop() <= stopSticky) {
     		 glBgFixed = true;
             $('.sticky-element').addClass('fixed');
                                     
         }
         else {
             glBgFixed = false;
             $('.sticky-element').removeClass('fixed');
         }
         

	     if ($(window).scrollTop() >= stopSticky) {
     		 glBgBottom = true;
             $('.sticky-element').addClass('bg-bottom');
                                     
         }
         else {
             glBgBottom = false;
             $('.sticky-element').removeClass('bg-bottom');
         }


     
    
	});




$(document).ready(function() {
				
			stickyHeight = $('div.sticky-bg').position().top; /*20 less for the missing border-bottom of header fixed */
			startSticky = stickyHeight;
			stopSticky = $('.readOnSticky').height() - $(window).height();
			stopSticky += startSticky; 
			//alert(stopSticky);
});


