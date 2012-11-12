(function($) {
		
	$.fn.respondZipper = function(newO) {
	
		var $this = $(this);
		
		
		//default options
		var o = {
			
			'breakpoint'				: 768,
			'zipper_under'			: '.entry',
			'number_to_zipper'	: 2,
			'nth_articles'			: 3,
			'sidebar_container' : '.side-bar'
						
		}
		
		//extend default options
		$.extend(o, newO);
		
		var sidebarHTML = $(o.sidebar_container).html();
		
		function zipper(){
		
			var windowWidth = $(window).width();
			var zipperableSections = $this;
			var zipperUnder = $(o.zipper_under);
			
			
			//zip everything up!
			if (windowWidth <= o.breakpoint) {
				
				var availableZipperTo = Math.floor($(o.zipper_under).length / o.nth_articles);
				var neededZipperTo = Math.ceil(zipperableSections.length / o.number_to_zipper);
				var zipperableSectionsToRemove = availableZipperTo * o.number_to_zipper;
				
				for (var i = 1; i <= zipperableSections.length; i++) {
					
					var zipperToPosition = (i * o.nth_articles) - 1;
					var zipperTo = $('.rz-zipperto');
					var zipperToIndex = Math.floor((i-1) / o.number_to_zipper);
					var availableZipperToCheck = zipperTo.length < availableZipperTo;
					var neededZipperToCheck = zipperTo.length < neededZipperTo;
					var zipperableSectionsToRemoveCheck = zipperableSections.length - $(zipperableSections.selector, o.sidebar_container).length < zipperableSectionsToRemove;

					if (availableZipperToCheck && neededZipperToCheck) {
						$(zipperUnder[zipperToPosition]).after('<div class="rz-zipperto" />');
					}
					
					if (i <= zipperableSectionsToRemove && zipperableSectionsToRemoveCheck) {
						$(zipperableSections.selector + ':eq(0)', o.sidebar_container).remove()
					}
										
					$('.rz-zipperto:eq(' + zipperToIndex + ')').append(zipperableSections[i-1]);
					
				}
				
			//unzip everything!
			} else { 
				
				$('.rz-zipperto').remove();
				$(o.sidebar_container).html(sidebarHTML);
								
			}
			
		} //end zipper function
		
		//
		zipper();
		$(window).resize(function(){
			zipper();
		});
		
		
			
	}
	
})(jQuery);