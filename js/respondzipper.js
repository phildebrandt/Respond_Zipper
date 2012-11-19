(function($) {
		
	$.fn.respondZipper = function(newO) {
	
		var $this = $(this);
		
		
		//default options
		var o = {
			
			'breakpoint'				: 768,
			'zipper_under'			: '.entry',
			'number_to_zipper'	: 1,
			'nth_zipper_under'	: 1,
			'sidebar_container' : '.side-bar'
						
		}
		
		//extend default options
		$.extend(o, newO);
		
		var sidebarHTML = $(o.sidebar_container).html();
		
		function heyIsThisSidebarEmptyOrNot(){
			if ($(o.sidebar_container).children().length == 0){
				$(o.sidebar_container).hide();
			} else {
				$(o.sidebar_container).show()
			}
		}
		
		function zipper(){
		
			var windowWidth = $(window).width();
			var zipperableSections = $this;
			var zipperUnder = $(o.zipper_under);
			
			//zip everything up!
			if (windowWidth <= o.breakpoint) {
			
				
				var availableZipperTo = Math.ceil(($(o.zipper_under).length / o.nth_zipper_under) - 1);
				var neededZipperToNum = Math.ceil(zipperableSections.length / o.number_to_zipper);
				var zipperableSectionsToRemove = availableZipperTo * o.number_to_zipper;

				for (var i = 1; i <= zipperableSections.length; i++) {
					
					var zipperToPosition = (i * o.nth_zipper_under) - 1;
					var zipperTo = $('.rz-zipperto');
					var zipperToIndex = Math.floor((i-1) / o.number_to_zipper);
					var availableZipperToCheck = zipperTo.length < availableZipperTo;
					var neededZipperToCheck = zipperTo.length < neededZipperToNum;
					var zipperableSectionsToRemoveCheck = zipperableSections.length - $(zipperableSections.selector, o.sidebar_container).length < zipperableSectionsToRemove;
					var zipperToLastCheck = (zipperToIndex + 1) * o.nth_zipper_under < $(o.zipper_under).length;

					if (availableZipperToCheck && neededZipperToCheck && zipperToLastCheck) {
						$(zipperUnder[zipperToPosition]).after('<div class="rz-zipperto" />');
					}
										
					if (i <= zipperableSectionsToRemove && zipperableSectionsToRemoveCheck && zipperToLastCheck) {
						$(zipperableSections.selector + ':eq(0)', o.sidebar_container).remove()
					}
					
					if (zipperToLastCheck) {
						$('.rz-zipperto:eq(' + zipperToIndex + ')').append(zipperableSections[i-1]);
					}
					
					heyIsThisSidebarEmptyOrNot();
					
				}
				
			//unzip everything!
			} else { 
								
				$('.rz-zipperto').remove();
				$(o.sidebar_container).html(sidebarHTML);
				
				heyIsThisSidebarEmptyOrNot();
								
			}
			
		} //end zipper function
		
		//
		zipper();
		$(window).resize(function(){
			zipper();
		});
		
		
			
	}
	
})(jQuery);