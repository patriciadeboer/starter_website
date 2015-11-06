//Create your own Mondrian


$(document).ready(function () {

	var selectedColor;

	$('.activeColor').on('click', findColor);

	function findColor() {
		selectedColor = $(this).css('background-color');
	};

	$('.boxes').on('click', changeColor);

	function changeColor() {

		$(this).css("background-color", selectedColor );
	};

});