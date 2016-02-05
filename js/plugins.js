$(document).ready(function(){
	
	$('.carousel').carousel({
	
		interval:2000
	});

	$("[rel='tooltip']").tooltip();

	$('.thumbnail').hover(
		function(){
			$(this).find('.caption').slideDown(250); //.fadeIn(250)
		},
		function(){
			$(this).find('.caption').slideUp(250); //.fadeOut(205)
		}
	);

	$('#myCarousel').carousel({
		interval: 10000
	});

	/************************************   When Hover On Team Members ****************************/
	
	/************************************   When Hover On Team  ****************************/



});

