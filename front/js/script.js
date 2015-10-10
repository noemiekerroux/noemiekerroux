jQuery(document).ready(function($){
	$(".to_click_close").click(function(){
		$(this).parent().parent().fadeToggle("slow");
	});
	$(".scroll_to").click(function() {
		var thisOne = $(this);
	    $('html, body').animate({
	        scrollTop: jQuery( thisOne.attr("href") ).offset().top
	    }, 1000);
	});
});