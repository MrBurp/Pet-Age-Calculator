/*
Animal Age Calculator

Write a function named 'calculateAge' that takes 2 argument: 
- an animal
- the age of the animal

calculates the correspondent human age of your animal based on the conversion rates below and outputs the result to the screen like so: "Your dog is XX years old in human years (YY dog years)!" or "Your cow is XX years old in human years (YY cow years)!" or "Your chinchilla is NN years old in human years (YY chinchilla years)!"

Conversion rates: 
- 1 year for a dog is 7 years of human life.
- 1 year for a cat is 7 years of human life. 
- 1 year for a parrot is 4 years of human life.
- 1 year for a chinchilla is 25 years of human life.

Call the function three times with different sets of values.
Hints, try first with one animal first and then use conditionals for other animals!
Use literals

Bonus: use DOM manipulation and create a mini-web app! 
Check https://github.com/FBW-12/fortune-js 
HTML/CSS/JS with animal images from (https://unsplash.com/)

*/

function calculateDogAge() {
  var myAge = document.getElementById('yearsDog').value;
  var dogAge = myAge * 7;

  document.getElementById('dog-result').innerHTML = dogAge + ' years old in human years.';

}

function calculateCatAge() {
  var myAge = document.getElementById('yearsCat').value;
  var catAge = myAge * 7;

  document.getElementById('cat-result').innerHTML = catAge + ' years old in human years.';

}

function calculateChinchillaAge() {
  var myAge = document.getElementById('yearsChi').value;
  var chinchillaAge = myAge * 25;

  document.getElementById('Chi-result').innerHTML = chinchillaAge + ' years old in human years.';

}

function calculateParrotAge() {
  var myAge = document.getElementById('yearsPar').value;
  var ParrotAge = myAge * 4;

  document.getElementById('Parrot-result').innerHTML = ParrotAge + ' years old in human years.';

}