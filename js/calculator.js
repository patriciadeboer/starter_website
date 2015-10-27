function get_word_statistics() {
	
	// 1. Getting input phrase
	var phrase_input = document.getElementById('phraseInput');
	console.log(phrase_input);

	var phrase = phrase_input.value;
	console.log(phrase);

	// 2. Getting desired statistics
	var character_count = phrase.length;
	console.log(character_count);

	var no_spaces_count = phrase.replace(/\s+/g, '').length;
	console.log(no_spaces_count);

	var word_count = phrase.split(' ').length;
	console.log(word_count);

	// 3. Putting Stats into the DOM
	var target_string_span = document.getElementById('js_target_string');
	target_string_span.innerHTML = phrase;

	var character_count_span = document.getElementById('js_character_count');
	character_count_span.innerHTML = character_count;

	var no_spaces_span = document.getElementById('js_character_count_no_spaces');
	no_spaces_span.innerHTML = no_spaces_count;

	var word_count_span = document.getElementById('js_word_count');
	word_count_span.innerHTML = word_count;

	// 4. Reset text field
	phrase_input.value = "";
}


function generate_character() {

	var first_names = ['Ragnar', 'Roneesh', 'Ellice', 'Starfire', 'Renita', 'Fargone', 'Zistop', 'Rigby'],
		last_names = ['Roxin', 'Piverr', 'Tristway', 'Mistborne', 'Walkfire', 'Lostlake', 'Cornithian', 'Wasberry'];

	function randomName() {
		// get a random element from each array, then return them as a string, replace mistborn with a random element from the last_names array;

		// The return statement is a short way of writing something like this...
		// var random_index = Math.floor(Math.random()*last_names.length);
		// var random_last_name = last_names[random_index];
		// return random_first_name + ' '  + random_last_name;

		return first_names[Math.floor(Math.random()*first_names.length)] + ' ' + 'Mistborne';
	}

	function randomAlignment() {
		var adjective = ['lawful', 'neutral', 'chaotic'];
		var alignment = ['good', 'neutral', 'evil'];

		// make this output work, e.g. return lawful evil, or chaotic good;
		// if the alignment is 'neutral neutral' instead return 'true neutral'
	}

	function rollStat() {
		// add up three rolls of a six-sided die
		// replace this with your function that doesn't allow a dice roll to be a 1

		return Math.floor(Math.random()*6) + Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
	}

	document.getElementById('js_dnd_name').innerHTML = randomName();
	document.getElementById('js_dnd_str').innerHTML = rollStat();
	document.getElementById('js_dnd_dex').innerHTML = rollStat();

}

function numberLikes(idName) {
	var likes = document.getElementById(idName).innerHTML;

	console.log(likes);
	likes++;
	console.log(likes)

	document.getElementById('countLikes1').innerHTML = likes++;
}

/*extra from class for calc 2*/

function countingWords(){
	//step 1 getting inputs
	var textInput = document.getElementById('wordz'); //built function into browser

	var actualText = textInput.value
	console.log('step1:'+ actualText);

	//step 2 is doing our work

	//Count all chars including space
	console.log('char count: '+ actualText.length);
	var character_count= actualText.length;

	//count chars no spaces
	var char_count_no_space = 0; // need to define it

	for (var i= 0; i < actualText.length; i++){
		//console.log(actualText[i]);
		if(actualText[i]===' '){
			char_count_no_space=char_count_no_space+0;
		}else{
			char_count_no_space=char_count_no_space+1;
		}
	}

	console.log('char count without space: '+ char_count_no_space);

   ////count words method 1
   var word_count=0;

   // for(var i=0; i<actualText.length; i++){
   // 		if(actualText[i]===' '){
   // 			word_count=word_count+1;
   // 		}
   // }
   // word_count++;

   // console.log(word_count)


   for (var i= 0; i <actualText.split(' ').length; i++){
   		console.log(actualText.split(' ')[i]);
   		if(actualText.split(' ')[i] != " "){
   			word_count = word_count + 1;
		}else{
			word_count=word_count+0;
		}
   }


  // word_count = actualText.split(' ').length;
   console.log('word count: '+word_count);

   var tweetable;

   if (character_count > 140){
   	tweetable='no';
   }else {
   	tweetable = 'totally tweetable';
   }



   //step 3 put results back into web page
   var targetStringSpan = document.getElementById('string');
   targetStringSpan.innerHTML = actualText;

   var chars= document.getElementById('char_count');
   chars.innerHTML =character_count;

   var chars_nospace= document.getElementById('chars_no_space');
   chars_nospace.innerHTML =char_count_no_space;

   var chars_nospace= document.getElementById('chars_no_space'); // put yellow text in ID of Html in the span
   chars_nospace.innerHTML =char_count_no_space; // this tells us to input it back in HTMl and output to file

   var word_count_span = document.getElementById('word_count');
   word_count_span.innerHTML = word_count;

   var tweetable_span = document.getElementById('tweetable');
   tweetable_span.innerHTML = tweetable;

}
