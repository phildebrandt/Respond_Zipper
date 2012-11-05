(function($) {
	
	//PRASCO HOME PAGE SLIDER
	
	$.fn.respondZipper = function(newO) {
	
		var $this = $(this);
		
		
		//default options
		var o = {
			
			'breakpoint'				: 768,
			'zipper_under'			: '.entry',
			'number_to_zipper'	: 1,
			'nth_articles'			: 1,
			'sidebar_container' : '.side-bar'
						
		}
		
		//extend default options
		$.extend(o, newO);
		
		
		function zipper(){
		
			var windowWidth = $(window).width();
			var zipperableSections = $this.detach();
			var zipperUnder = $(o.zipper_under);
			
			if (windowWidth <= o.breakpoint) { 
			
				//zip
				$('.rz-zipperable').remove();
				for(var i = 0; i < zipperableSections.length; i++){
					if($('.rz-zipperto').length < zipperableSections.length){
						$(zipperUnder[i]).after('<div class="rz-zipperto" />');
					}
					$(zipperUnder[i]).next().append(zipperableSections[i]);
				}
			
			} else { 
				
				//unzip
				$('.rz-zipperto').remove();
				var zipperHTML = '';
				for(var i = 0; i < zipperableSections.length; i++){
					zipperHTML += zipperableSections[i].outerHTML;
				}
				if(!$('.rz-zipperable', o.sidebar_container).length != 0){
				
					$(o.sidebar_container).prepend(zipperHTML);
				}
				
				console.log($('.rz-zipperable', o.sidebar_container).length !=0);
				console.log(zipperHTML);
				
				
			}
			
		} //end zipper function
		
		//
		zipper();
		$(window).resize(function(){
			zipper();
		});
		
		
			
	}
	
})(jQuery);