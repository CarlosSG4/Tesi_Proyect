$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scroll();
		var posicion = barra * 0.80;

		$('body').css({
			'background-position':'0 -' + posicion + 'px'
		})

	});
});