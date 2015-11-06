//Create your own Mondrian


$(document).ready(function () {

	//Clear canvas
	$('.clearCanvas').on('click',clearCanvas);

	function clearCanvas() {
		//$(this).css("background-color", "white")
		$('.boxes').css("background-color", "white")
		$('.masterpiece').css("visibility", "hidden")
	};

	//Change color pallete
	function changePallete(){
		var color1= 'green';
		var color2= 'pink';
		var color3= 'red';
		var original = ['yellow', 'orange','blue']
	}

	//selecting and applying the color
	var selectedColor;

	$('.activeColor').on('click', findColor);

	function findColor() {
		selectedColor = $(this).css('background-color');
	};

	$('.boxes').on('click', changeColor);

	function changeColor() {

		$(this).css("background-color", selectedColor );
		$('.masterpiece').css("visibility", "visible")
	};



});