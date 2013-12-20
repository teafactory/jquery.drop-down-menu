/*************************************************
**  jQuery Drop Down version 1.0.1
**  Copyright Nao Fujimoto, licensed MIT
**************************************************/

(function($){
	$.fn.dropDown = function() {
		var originalH = 0;
		var target = $(this);
		
		$('> li', this).each(function(){
			$('ul:first', this).addClass('sub_category');
		});			
		
		$('li', this).each(function(){
			$(this).hover(function(){
				if($('> ul', this).length > 0){			
					$('> ul', this).css('height', '')
					originalH = $('> ul', this).height();
					originalW = $(this).width();
					var classes= $('> ul', this).attr('class');		
					if(classes.indexOf("sub_category") > -1){
						var y = $(this).height();
						var x = 0;
					} else {
						var y = 0;
						var offset = $(this).offset();
						var offsetLeft =  offset.left + $(this).width() + $('> ul', this).width();
						if(offsetLeft > $(window).width()){
							var x = -$('> ul', this).width();
						} else {
							var x = originalW;
						}							
					}	
					
					$('> ul', this).css({'height': 0, 'top': y, 'left': x, 'overflow': 'visible'}).show().stop().animate({'height': originalH}, 200, 'easeOutQuad');
				}
			}, function(){
					$('> ul', this).stop().animate({'height': 0}, 200, 'easeOutQuad', function(){
						$(this).hide();
					})
			});		
		});

	}	
})(jQuery);
