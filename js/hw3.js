//Dungeons and Dragons homework

console.log("\n********************* Part 1: DUNGEON & DRAGONS *********************")

var character_name= 'Roaring Panda';
// var character_name = prompt('What is character name');

console.log('\nCharacter Name: ' + character_name+ '\n\n******************************\n')

 var class_level = "Newbie";
 var background = "Queen";
 var name = "Patricia";
 var race="Panda";


var intro='Real Name: ' + name + '.\nI am at class level, ' + class_level + ', and my background is ' + background + '.\nRace: '+ race;

console.log(intro+'\n\n******************************\n');

var strength = "+3";
var dexterity= "-1";
var constitution= "+2";
var intelligence= "+0";
var wisdom="+1";
var charisma="+2";

console.log('Below are my skill levels:\n'+"Strength: " +strength+ '\nDexterity: ' +dexterity + '\nConstitution: '+ constitution + '\nIntelligence: '+ intelligence + '\nWisdom: '+  wisdom + '\nCharisma: ' + charisma);

var personality_traits= "Personality Trait: I trick people with my cuteness and then I attack. I eat bamboo and that's it, but don't worry I'm not afraid to fight. That's why they call me roaring panda aka Kung Fu Panda! Cute but deadly!";

console.log('\n**************\n' + personality_traits +'\n**************\n');

var dexterity_speed= 30,armour_class= 15,initiative= -1;

console.log('My agility numbers:\nSpeed: ' + dexterity_speed + ', Armour: '+ armour_class + ', Initiative: '+ initiative);

var languages=["Common", "Pandaish", "Goblin", "English"];

console.log('\nLanguages I speak:');
for(i=0;i<languages.length;i++){
	console.log(languages.slice(i,i+1));
}

// Second, use a for loop to complete the classic "FizzBuzz" problem. This is a standard Javascript interview question!
// "Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
// This solution will require you to use the 'modulo operator: %' that we talked about in class, you'll want to test if i % 5 === 0 or 3 is equal to zero as a hint. You'll also need one compound conditional to test if it it's a multiple of 5 and 3

console.log("\n********************* Part 2: FIX BUZZ EXERCISE *********************")

var zero_to_100= [1];

for(var p=2; p<101; p++){
	if(p%3===0 && p%5===0){
		zero_to_100.push("FizzBuzz");
	} else{
		if(p%3===0){
			zero_to_100.push("Fizz");
		} else{
			if(p%5===0){
				zero_to_100.push("Buzz");
			} else{
				zero_to_100.push(p);
			}
		}
	}
}

console.log(zero_to_100);

// Third, use a for loop to display 99 bottles of beer on the wall, down to 1. Ignore the other lines for now (the take one down, pass it around, etc). Your for loop should start high and end low!
// "99 bottles of beer on the wall..." "98 bottles of beer on the wall..." etc

console.log("\n********************* Part 3: 99 BEERS ON THE WALL *********************")
for (var i=99; i>0; i--){
	console.log(i+" bottles of beer on the wall...");
}

// //Fourth, print the square of every number from 1 to 50

console.log("\n********************* Part 4: VALUE OF SQUARE OF 1 TO 50 *********************")
for(var j=1; j<51; j++){
	console.log(j+"*"+ j+"= "+j*j);
}

