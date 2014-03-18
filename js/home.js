jQuery.fn.animateAuto = function(prop, speed, callback) {
	var elem, height, heightNeg;
	return this.each(function(i, el) { el = jQuery(el), elem = el.clone().css({
			"overflow" : "visible",
			"height" : "auto",
			"max-width" : '180px'
		}).appendTo("body");
		 height = elem.css("height"), heightNeg = elem.height() * 1 / -3, elem.remove();
		var margin = heightNeg + 'px 0 0 0';
	if(prop == 'both'){
		el.animate({
			"height" : height,
			"margin" : margin
		}, speed, callback);
		}else{
			el.animate({
			"height" : height
		}, speed, callback);
		}

	});
}

$(document).ready(function() {
	$(".agrandable").hover(function() {
		var elem, valHeight, heightNeg;
		$(this).children('p').each(function(i, el) { el = jQuery(el), elem = el.clone().css({
			"overflow" : "visible",
			"height" : "auto",
			"max-width" : '180px'
		}).appendTo("body");
		 valHeight = elem.height() * 1.9, heightNeg = elem.height() * 2 / -3, elem.remove();
		
		});
		 var margin = heightNeg + 'px 2% 0 2%';
		var padre = $(this); 
		$(this).animate({height:valHeight +'px',"margin" : margin},1000);
		$(this).children('p').animateAuto("height", 1000);
		
	}, function() {
		$(this).children('p').animate({			
			height: '35%'
		}, 1000);
		$(this).animate({			
			height: '90%',
			margin: '1% 2% 0 2%'
		}, 1000);
	});
	
	$('.imagenPrincipal > ul').height($(".imagenPrincipal").height());
	$('.imagenPrincipal').unslider({
		speed : 1000, //  The speed to animate each slide (in milliseconds)
		delay : 7000, //  The delay between slide animations (in milliseconds)
		complete : function() {
			$('.imagenPrincipal > ul').height($(".imagenPrincipal").height());
		}, //  A function that gets called after every slide animation
		keys : true, //  Enable keyboard (left, right) arrow shortcuts
		dots : true, //  Display dot navigation
		fluid : false              //  Support responsive design. May break non-responsive designs
	});
});
