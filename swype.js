function swype (element, direction, detection_size) {
	parseInt(detection_size, 10);
	if(direction == "left" || "right") {
		var startY, endY;
		$(element).on('touchstart', function (ev) {
			startY = ev.originalEvent.changedTouches[0].clientY;
		});

		$(element).on('touchend', function (ev) {
			endY = ev.originalEvent.changedTouches[0].clientY;
			if(direction == "right" && endY - startY > detection_size)
				{
				$(element).trigger("swype");
				}
			else if(direction == "left" && endY - startY < -detection_size)
				{
				$(element).trigger("swype");
				}
			
			
		});	
		
			
	}
	else if(direction == "top" || "bottom") {
		var startX, endX;
		$(element).on('touchstart', function (ev) {
			startX = ev.originalEvent.changedTouches[0].clientX;
		});

		$(element).on('touchend', function (ev) {
			endX = ev.originalEvent.changedTouches[0].clientX;
			if(direction == "bottom" && endX - startX > detection_size)
				{
				$(element).trigger("swype");
				}
			else if(direction == "top" && endX - startX < -detection_size)
				{
				$(element).trigger("swype");
				}
			
			
		});	
		
			
	}
	

}
