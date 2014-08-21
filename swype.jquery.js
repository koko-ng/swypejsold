(function($) {
	$.fn.swype = function(direction, detection_size) {
		this.each(function () {
			parseInt(detection_size, 10);
			if(direction == "left" || "right") {
				var startY, endY;
				$(this).on('touchstart', function (ev) {
					startY = ev.originalEvent.changedTouches[0].clientY;
				});

				$(this).on('touchend', function (ev) {
					endY = ev.originalEvent.changedTouches[0].clientY;
					if(direction == "right" && endY - startY > detection_size)
						{
						$(this).trigger("swype");
						}
					else if(direction == "left" && endY - startY < -detection_size)
						{
						$(this).trigger("swype");
						}
			
			
				});	
		
			
			}
			else if(direction == "top" || "bottom") {
				var startX, endX;
				$(this).on('touchstart', function (ev) {
					startX = ev.originalEvent.changedTouches[0].clientX;
				});

				$(this).on('touchend', function (ev) {
					endX = ev.originalEvent.changedTouches[0].clientX;
					if(direction == "bottom" && endX - startX > detection_size)
						{
						$(this).trigger("swype");
						}
					else if(direction == "top" && endX - startX < -detection_size)
						{
						$(this).trigger("swype");
						}
			
			
				});	
		
			
			}
	

		});
	};
	return this;
})(jQuery);
