jQuery(document).ready(function($){
	$(".to_click_close").click(function(){
		$(this).parent().parent().fadeToggle("slow");
	});
});