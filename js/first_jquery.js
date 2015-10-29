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