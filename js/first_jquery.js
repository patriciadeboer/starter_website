function validateForm() {

	//1. Get Data
	var formName = $('.form-name').val();
	var formEmail = $('.form-email').val();
	var firstPass = $('.form-password').val();
	var repeatPass = $('.repeat-password').val();

	//2. validate each value...
	//check email
	if(formEmail.split('@').length === 2) {
		var email_valid = true; // roneesh@gmail.split('@') --> ['roneesh' , 'gmail.com']
	} else {
		email_valid=false
	}

	//check name
	var split_name = formName.split(''); //['r','o','n'...]
	for (var i=0; i <split_name.length; i++){
		if (/[a-zA-Z\s]/.test(split_name.length[i])){   // using a pattern
			var name_valid = true;
		} else {
			name_valid= false;
			break; // stop running for loop 
		}
	}

	//check passwords match
	if (firstPass === repeatPass) {
		var pass_valid = true;
	} else {
		pass_valid- false;
	}

	//3. output results
	if (email_valid === true) {
		var email_status = 'valid e-mail';
	} else {
		var email_status = 'invalid e-mail';
	}

	if (name_valid){
		var name_status = ' valid name';
	} else {
		var name_status = 'invalid name';
	}

	if (pass_valid) {
		var pass_status = 'valid password'
	} else {
		pass_status = 'invalid password';
	}

$('.feedback').text(email_status +  ' ' + name_status + ' ' + pass_status)

}

$('.select').on('click',function() {console.log('clicked!'); }); // click first box and it adds up


//validating form before hitting submit. 
$('.jquery-form').on('submit', function(event) { 
  event.preventDefault(); // default of submit is new page, here we are preventing that so we can validate the form
  validateForm();
});

//Change text in events.html and changing first box text
$('.firstEvent').on('click',function(){
	$(this).text('Clicked!');
});

//Toggle between blank and having Clicked! appear in second box
$('.secondEvent').on('click',function(){
	var textInsideDiv = $(this).text();

	if (textInsideDiv ===''){
		$(this).text('Clicked!');
	} else{
		$(this).text('');
	}

});


$('.thirdEvent').on('mouseenter',function(){
	$(this).text('Hover!');
});

$('.thirdEvent').on('mouseleave',function(){
	$(this).text('');
});

//different way of writing same thing as above. Cleaner version
$('.fourthEvent').on('mouseenter',function(){
	$(this).text('Hover!');
});

//this method allows you to name your function to be more descriptive
$('.fourthEvent').on('mouseleave',emptyText);

function emptyText(){
	$(this).text('');
}

//feeding an arguement to the function
$('.fifthEvent').on('click', {newText: "Patricia!"}, changeTextOnFifthBox);

function changeTextOnFifthBox(event) {
 //jQuery Object
 console.log($(this));
//DOM node
 console.log(this);
 //will tell you className of selector
 console.log(this.className);
 // console.log(event)
 // $(this).text(event.data.newText);
}

//to ensure that it's working the right js file
//alert('hello!')

//list changing
$('.example-list').on('click', '.example-list-item', changeColorWillWork )

function changeColorWillWork() {
  $(this).css('color', 'blue');
}

//Mondairn example

$('.mondrian-color').on('click',getColor);

//define var outside function for color
var activeColor;

function getColor(){
	if($(this).hasClass('red')){
		activeColor = 'red';
	}
	if($(this).hasClass('white')){
		activeColor = 'white';
	}
	if($(this).hasClass('yellow')){
		activeColor = 'yellow';
	}
	if($(this).hasClass('blue')){
		activeColor = 'blue';
	}
	console.log(activeColor)
}

$('.canvasBox').on('click', fillMondrian);

function fillMondrian(){
	$(this).css('background-color', activeColor);

}

//trigger boxes

$('.targetBox').on('woozy-wuzzle',function(){
	var txt = $(this).text();
	console.log(txt)
	if(txt === 'woozy'|| txt ==='Ex 1'){
		$(this).text('wuzzle');
	} else if (txt ==='wuzzle'){
		$(this).text('woozy');
	}

})

$('.boxExample1.callingBox').on('click',function(){
	console.log('clicked');
	$('.targetBox').trigger('woozy-wuzzle')
})

//BALL EXAMPLE
//set up an event on ball
var score=0;

//set up event
$('.ball').on('click', incrementScore);

//write event function
function incrementScore(){
	$('#score').trigger('increment');
}

$('#score').on('increment',function(){
	console.log('hi from increment!')
	score++;
	if(score > 20) {
		$(this).text('you win!')
	} else{
	$(this).text(score);
	}
});

//change source attribute on html of dice
//$('.dice1').attr('src',)