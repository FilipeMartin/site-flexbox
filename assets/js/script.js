$(document).ready(function() {

	$('#menu_mobile').click(function() {

		var menu = $('#menu');

		if(menu.css('display') == 'flex'){
			menu.css({'display':'none'});

		}else{
			menu.css({'display':'flex'});

		}

	});

});