/* ==========================================================================
   Author's custom scripts
   ========================================================================== */

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
