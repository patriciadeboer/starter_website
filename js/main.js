/* ==========================================================================
   Author's custom scripts
   ========================================================================== */
//Homework 5
console.log('*********** Homework 5 *********** \n')

console.log('\n1st die roll: \n' )

function d20(){
	var roll = Math.floor(Math.random()*20) + 1;
	console.log(roll)
}

d20();


//PART 2 number of rolls determined user
console.log('\n\nDETERMINE NUMBER OF DICE: \n')
function manyD20(numberOfDice) {
	  	console.log('\n***********\nNumber of dice: '+ numberOfDice);
	  	for(i=1; i<=numberOfDice; i++){
  		var rollmany = Math.floor(Math.random()*20) + 1; // function uses same Math.floor but does it x times, 
  		console.log('\n dice ' + [i] + ' is ' + rollmany)
	}	
}
manyD20(5); 
//logs out:
// dice 1 is 15, dice 2 is 20, dice 3 is 8, dice 4 is 12, dice 5 is 12

manyD20(2); 
//logs out:
// dice 1 is 4, dice 2 is 18 

console.log('\n\nDETERMINE NUMBER OF DICE & SIDES: \n')

function rollDice(sidedDice, numberOfDice) {
	console.log('\n***********\nNumber of dice: '+ numberOfDice + '; Number of sides: '+ sidedDice);
	for(i=1; i<=numberOfDice; i++){
  		var rollmanysides = Math.floor(Math.random()*sidedDice) + 1; // function uses same Math.floor but does it x times, 
  		console.log('\n dice ' + [i] + ' is ' + rollmanysides)
  // Math.floor(Math.random()*sidedDice) done numberOfDice times...
	}
}

// examples of using the function

rollDice(6, 4);  //a classic 6-sided die
//logs out: dice 1 is 6, dice 2 is 4, dice 3 is 1, dice 4 is 2

rollDice(10, 2); //a 10-sided die
//logs out: dice 1 is 8, dice 2 is 7

console.log('\n\nVERIFY NUMBER OF SIDES: \n')

var validDice = [2,4,6,8,10,12,20];

function rollDiceWithChecking(sidedDice, numberOfDice) {
	console.log('\n***********\nNumber of dice: '+ numberOfDice + '; Number of sides: '+ sidedDice);
	//if(sidedDice==validDice){
	if(sidedDice==2||sidedDice==4||sidedDice==6||sidedDice==8||sidedDice==10||sidedDice==12||sidedDice==20){
		for(i=1; i<=numberOfDice; i++){
  		var rollmanysides3 = Math.floor(Math.random()*sidedDice) + 1; // function uses same Math.floor but does it x times, 
  		console.log('\n dice ' + [i] + ' is ' + rollmanysides3);
  		if(rollmanysides3==1 && sidedDice==20){
  				console.log(' , critical fail');
			}
		}
	// } else if(sidedDice==20){
	else{
		console.log("There are no " +[sidedDice]+'-sided dice, certainly not ' + [numberOfDice] +' of them!')
	}
}

rollDiceWithChecking(6, 2);
//logs out: dice 1 is 5, dice 2 is 4

rollDiceWithChecking(7, 4);
//logs out: "There are no 7-sided dice, certainly not 4 of them!"

rollDiceWithChecking(9, 5);
//logs out: "There are no 9-sided dice, certainly not 5 of them!"


function rollDiceCriticalStrike(sidedDice, numberOfDice) {
  //code to check if sided dice is valid
  // Math.floor(Math.random()*sidedDice) done numberOfDice times...
  // log out each value, but if a d20 and is 20 or 1 log out extra info
}

// examples of using the function

rollDiceCriticalStrike(20, 3);
//logs out: 
//dice 1 is 20, critical strike!
//dice 2 is 15
//dice 3 is 18

rollDiceCriticalStrike(20, 1);
//logs out: 
//dice 1 is 1, critical fail!

rollDiceCriticalStrike(20, 2);
//logs out: 
//dice 1 is 20, critical strike!
//dice 2 is 20, critical strike!


 //Homework week 2-4

console.log('\n ******** Homework 4 *********** \n')
 var character_name= 'Roaring Panda';

 var character_desc={
 	'class_level':'Newbie',
 	'background': 'queen',
 	'name':'Patricia',
 	'race':'panda',
 	'player_name':'dutchchica',
 	'exp_points':'none'
 };
 // var character_name = prompt('What is character name');

console.log('\nCharacter Name: ' + character_name+ '\n\n******************************\n')

 // var class_level = "Newbie";
 // var background = "Queen";
 // var name = "Patricia";
 // var race="Panda";





var intro='Real Name: ' + character_desc.name + '.\nI am at class level, ' + character_desc.class_level + ', and my background is ' + character_desc.background + '.\nRace: '+ character_desc.race + ' . \nMy player name is ' + character_desc.player_name + ' and I have ' + character_desc.exp_points + ' experience points.';

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
