$(document).ready(function(){
	
	$('#menu').click(function(){
		$(this).toggleclass('fa-times');
		$('.navbar').toggleclass('nav-toggle');
	});
	
	$(window).on('load scroll', function(){
	$(menu).removeclass('fa-times');
		$('.navbar').removeclass('nav-toggle');
	
	if($(window).scrollTop()>0){
		$('header').addclass('sticky');
	}else{
		$('header').removeclass('sticky');
	}
	});
	
});