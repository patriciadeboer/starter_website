/* ==========================================================================
   Node only scripts - Only to be used via node command line tool
   				     - this file is NOT included in index.html
   ========================================================================== */

var arr1 = [1, 2, 3, 4, 5]; // length is 5.
var arr2 = ['banana', 'apple', 'pear'];
var arr3 = [arr1, arr2];

// console.log(arr1, arr1.length);
// console.log(arr2, arr2.length);
// console.log(arr3, arr3.length);


// 2. SLICE
// Slicing is a way of getting only a portion of the array for our uses
// Slice works by specifying the index to start at, and then the index to end at
// The index ended at is not included in the slice!
// If only a single number is given, slice assumes you want to start at that index and get the rest
// Slice does not alter the original! So you save what you slice to a new array


var single_fruit = arr2.slice(0,1);
var single_fruit2 = arr2.slice(1);
var books = [ 'life of pi', 'dr seuss', 'the circle', 'I know why the caged bird sings'];

// console.log(single_fruit);
// console.log(single_fruit2);
// console.log(books.slice(0,1));
// console.log(books.slice(1,2));
// console.log(books.slice(2));
// console.log(books.slice(1));
// console.log(books.slice(3));

// 3. Combining slice and array.length
//Slice is fine if you know how many elements you have in an array, but what if you don't?
//It's time to utilize slice with array.length
//The first thing to do is get the length in it's own variable
//Then you can do any math inside the slice



var bands= ['Justin Bieber', 'Taylor Swift' ,  '1D' , 'Backstreet Boys']
var band_count= bands.length; // 4

// console.log(band_count);
// console.log(bands.slice(bands.length-1)); // will give the last element in the array
// console.log(bands.slice(0,band_count-1)); // will give all but the last element
// console.log(bands.slice(0,band_count-2)); // will give all but hte last 2 elements
// console.log(bands.slice(band_count-3)); // will give last 3
// console.log(bands.slice(1,band_count-1)); // will give middle 2



var movies = ['pulp fiction' , 'up'],
movie_count = movies.length;

// console.log(movies, movie_count);

// movies.push('kill bill vol 2', 'the hills have eyes');
// console.log(movies, movie_count, 'holy cow, movie_count is wrong!');

// console.log(movies, movies.length);


//FOR LOOP
//a 'for' loop is built into the langue, 'for' is a special reserved word, you can't name a var 'for'
//We'll have to use our Array.legth properly to make this work
//a 'for'

var animals = [
  ['dog', 'woof'],
  ['cat', 'meow'],
  ['bear','growl'],
  ['bat', 'squeak'],
  ['fish','bloop'],
  ['buffalo', 'braaaay'],
  ['macaw','squak!'],
  ['ant','silence...']
];

//    start     while             each time
// for (var i=0; i < animals.length; i=i+1){ //start counting at 0 and limit i to less than number of animal arrays in this case <8
//   console.log(animals[i]); //log every sub array
// }

// for (var i=0; i < animals.length; i++){
//   console.log('the ' + animals[i][0]+ ' goes ' + animals[i][1]); //logs arrays prettily
// }

// for (var i = 0; i < animals.slice(0,3).length; i++) {
//   // console.log('the ' + animals[i][0]+ ' goes ' + animals[i][1]); //logs arrays prettily
// }
// console.log('\n');
// for (var i = 0; i < animals.length; i = i + 2) {
//   console.log('element at index ' + i);
//   console.log('the ' + animals[i][0]+ ' goes ' + animals[i][1]); //every other 0, 2, 4. 6
// }

// console.log('\n');

// for (var i = animals.length; i > 0; i--) {
//   console.log('the ' + animals[i - 1][0]+ ' goes ' + animals[i - 1][1]); //logs arrays backwards
// }


//6. iteration with a conditional

var best_movies = ['disney movies', 'harry potter'],
list_has_garden_state = false;

console.log(best_movies);

for (var i=0; i < best_movies.length; i++){
  if(best_movies[i]==='garden state'){
    list_has_garden_state = true;
  }
} // list_has_garden_state= false (since not in the list currently)

console.log(list_has_garden_state);

if(list_has_garden_state){
  console.log('whw good, has to be on the list');
} else{
  console.log("This list doesn't have garden state!? I'm adding it to the list!");
  best_movies.push('garden state')
}

console.log(best_movies);
