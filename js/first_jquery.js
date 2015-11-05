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


$('.fifthEvent').on('click', {newText: "working!"}, changeTextOnFifthBox);

function changeTextOnFifthBox(the_click_event) {
  $(this).text(the_click_event.data.newText);
}

