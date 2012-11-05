(function($) {
	
	//PRASCO HOME PAGE SLIDER
	
	$.fn.respondZipper = function(newO) {
	
		var $this = $(this);
		
		
		//default options
		var o = {
			
			'breakpoint'				: 768,
			'zipper_under'			: 'entry',
			'number_to_zipper'	: 2,
			'nth_articles'			: 1
						
		}
		
		//extend default options
		$.extend(o, newO);
		
		
		function zipper(){
			var windowWidth = $(window).width();
			
			if (windowWidth <= o.breakpoint) {
			
				//build regions to insert sidebar elements
				$('.' + o.zipper_under + ':nth-child(' + o.nth_articles + 'n)').after('<div class="rz-zipperto" />');
				
				
				var insertSections = $('.rz-zipperto');
				var detachedSections = $this.detach();
				
				for(var i = 0; i<detachedSections.length; i++){
					$(insertSections[i]).append(detachedSections[i]);
				}
			
			}
			
		} //end zipper function
		
		zipper();
		$(window).resize(function(){
			zipper();
		});
		
		
			
	}
	
})(jQuery);