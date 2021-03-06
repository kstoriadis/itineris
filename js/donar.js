$(document).ready(function() {
	$.blockUI({
		css : {
			backgroundColor : '#3B3B3B',
			color : '#fff',
			top : '20%',
			left : '20%',
			width : '0px',
			height : '0px',
			border : '0px'
		},
		overlayCSS : {
			backgroundColor : '#D1CCCD',
			opacity : 1,
			cursor : 'wait'
		},
		message : '<img src="css/images/loading.gif" /> '
	});
	$.get("header.html", function(msg) {
		$('body').removeClass('oculto');
		$('#header').html(msg);
		$.get("footer.html", function(footCont) {
			$('#footer').html(footCont);
			$("#fondoHeader").height($("#header").height() - $("#menu").height() - 5);
			var altura1 = $("html").height() - $("#header").height() - $("#footer").height() - 5;
			//el 5 es por el padding
			var altura2 = $("#cuerpo").height() * 1.1 + $("#cuerpoGrande").height() * 1.1 + $("#cuerpoDonar").height() * 1.1;
			//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
			$("#wrapperDonar").height(altura1 < altura2 ? altura2 : altura1);
			//el 5 es por el padding
			$('#logo').click(function() {
				window.location.href = "index.html";
			});
			$.unblockUI();
		});
	});
	var navegacion = {};

	navegacion["donarPrincipal"] = "pages/donar/donarPrincipal.html";
	navegacion["donarcorto"] = "pages/donar/donarCorto.html";
	navegacion["donarlargo"] = "pages/donar/donarLargo.html";

	$('#tamanioLetra').slider({
		min : 11,
		max : 43,
		value : 16,
		step : 5,
		change : function(event, ui) {
			$('.texto').css("font-size", $('#tamanioLetra').slider("option", "value"));
			$('.listaD > li').css("font-size", $('#tamanioLetra').slider("option", "value"));
			$('.listaL > li').css("font-size", $('#tamanioLetra').slider("option", "value"));
			var altura1 = $("html").height() - $("#header").height() - $("#footer").height() - 5;
			//el 5 es por el padding
			var altura2 = $("#cuerpoDonar").height() * 1.1;
			//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
			$("#wrapperDonar").height(altura1 < altura2 ? altura2 : altura1);
		}
	});
	$('.ui-slider-handle').attr('tabindex', 30);
	$('.texto').css("font-size", $('#tamanioLetra').slider("option", "value"));
/*
	$('#titulo').click(function() {

		var linkS = $('.linkSeleccionado');

		$(linkS).removeClass("linkSeleccionado");
		$(this).addClass("linkSeleccionado");
		linkS = this;

		$('#cuerpoContenido').fadeOut('slow', function() { $
			$.get(navegacion[$(linkS).attr("rel")], function(msg) {
				$('#cuerpoContenido').html(msg);
				$('#cuerpoContenido').fadeIn('slow');
				//tomar tamaño letra elegido
				$('.texto').css("font-size", $('#tamanioLetra').slider("option", "value"));
				$('.listaD > li').css("font-size", $('#tamanioLetra').slider("option", "value"));
				$('.listaL > li').css("font-size", $('#tamanioLetra').slider("option", "value"));
				var altura1 = $("html").height() - $("#header").height() - $("#footer").height() - 5;
				//el 5 es por el padding
				var altura2 = $("#cuerpoContenido").height() * 1.2;
				//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
				$("#wrapperDonar").height(altura1 < altura2 ? altura2 : altura1);

				$('.datosTransf').click(function() {
					$('#cbu').leanModal({
						top : 100,
						overlay : 0.4,
						closeButton : ".modal_close"
					});
					$('#cbu').click();
				});
				$('.tarjeta').click(function() {
					window.open('https://www.donaronline.org/fundacion-itineris/en-que-nos-ayudas-para-lograr-la-vivienda-independiente', '_blank');
				});
				//$('#cuerpoContenido').html('CAMBIO');

			});
		});
		$(this).blur();
	});*/
	
/*
	$('.linkNavegacion').each(function(index) {
		$(this).click(function() {

			var linkS = $('.linkSeleccionado');

			$(linkS).removeClass("linkSeleccionado");
			$(this).addClass("linkSeleccionado");
			linkS = this;

			$('#cuerpoContenido').fadeOut('slow', function() {

				$.get(navegacion[$(linkS).attr("rel")], function(msg) {
					$('#cuerpoContenido').html(msg);
					$('#cuerpoContenido').fadeIn('slow');
					//tomar tamaño letra elegido
					$('.texto').css("font-size", $('#tamanioLetra').slider("option", "value"));
					$('.listaD > li').css("font-size", $('#tamanioLetra').slider("option", "value"));
					$('.listaL > li').css("font-size", $('#tamanioLetra').slider("option", "value"));
					var altura1 = $("html").height() - $("#header").height() - $("#footer").height() - 5;
					//el 5 es por el padding
					var altura2 = $("#cuerpoContenido").height() * 1.2;
					//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
					$("#wrapperDonar").height(altura1 < altura2 ? altura2 : altura1);

				});
			});
			$(this).blur();
		});
		$(this).keypress(function(e) {
			if (e.which == 13) {//Enter key pressed
				$(this).click();
				$(this).focus();
				//Trigger search button click event
			}
		});
	});*/
	
	$('.datosTransf').click(function() {
		$('#cbu').leanModal({
			top : 100,
			overlay : 0.4,
			closeButton : ".modal_close"
		});
		$('#cbu').click();
	});
	$('.tarjeta').click(function() {
		window.open('https://donaronline.org/fundacion-itineris/con-tu-aporte-desarrollamos-estas-acciones', '_blank');
	});
	$('#linkImagen1').each(function(){
		$(this).click(function() {
		window.open('https://donaronline.org/fundacion-itineris/con-tu-ayuda-los-autogestores', '_blank');
		});
	});
	$('#linkImagen2').each(function(){
		$(this).click(function() {
		window.open( 'https://donaronline.org/fundacion-itineris/tu-ayuda-se-transforma-en', '_blank');
		});
	});
	$('#linkImagen3').each(function(){
		$(this).click(function() {
		window.open( 'https://donaronline.org/fundacion-itineris/con-tu-aporte-desarrollamos-estas-acciones', '_blank');
		});
	});
	
	

});
