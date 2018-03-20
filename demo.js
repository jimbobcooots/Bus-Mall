'use strict';

// array to hold all of the Goat objects
Goat.allGoats = [];

// make a Goat constructor for goat objects
function Goat(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Goat.allGoats.push(this);
}

// new instances of Goats
new Goat('img/cruisin-goat.jpg', 'Cruisin\' goat');
new Goat('img/kissing-goat.jpg', 'Kissing goat');
new Goat('img/sassy-goat.jpg', 'Sassy goat');
new Goat('img/smiling-goat.jpg', 'Smiling goat');
new Goat('img/sweater-goat.jpg', 'Sweater goat');

// access the element from the DOM
var imgElement = document.getElementById('goat-pic');

// add an event listener
imgElement.addEventListener('click', randomGoat);

// callback function when image is clicked:
function randomGoat() {
  // random number generator
  var randomIndex = Math.floor(Math.random() * Goat.allGoats.length);
  // use the randomIndex to set the src and alt attributes of the imgElement
  imgElement.src = Goat.allGoats[randomIndex].filepath;
  imgElement.alt = Goat.allGoats[randomIndex].name;
}

// render an image on page load
randomGoat();