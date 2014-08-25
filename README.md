Swype.js
=======

Detect mobile swype in JavaScript


----------


Use it !
--------
It's very easy to use

 - JQuery plugin just :

    $(sel).swype(direction, detection_size);

 - No plugin version :
 -swype(element, direction, detection_size);

Detect event :

	$(sel).on("swype", function() {
		alert("It swyped");
	});
>sel/element : a css selector.
>direction : swype direction i.e: right for a left to right swype
>detection_size : differance between the start and the end needed to do the swype i.e: 20

TODO
--------

 - Make a pure JS version (w/o JQuery)
 - callback on touchmove

