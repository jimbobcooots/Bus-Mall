'use strict'

//array that will hold each Picture
Picture.allPictures = [];

function Picture(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Picture.allPictures.push(this);
}

new Picture('assets/bag.jpg', 'Bag');
new Picture('assets/banana.jpg', 'Banana');
new Picture('assets/bathroom.jpg', 'Bathroom');


var imgElementOne = document.getElementById('pic-one');
var imgElementTwo = document.getElementById('pic-two');
var imgElementThree = document.getElementById('pic-three');

function randomPicture() {
  var randomIndex = Math.floor(Math.random() * Picture.allPictures.length);

  imgElementOne.src = Picture.allPictures[randomIndex].filepath;
  imgElementOne.alt = Picture.allPictures[randomIndex].name;

  imgElementTwo.src = Picture.allPictures[randomIndex].filepath;
  imgElementTwo.alt = Picture.allPictures[randomIndex].name;

  imgElementThree.src = Picture.allPictures[randomIndex].filepath;
  imgElementThree.alt = Picture.allPictures[randomIndex].name;
}

imgElementOne.addEventListener('click', randomPicture);
imgElementTwo.addEventListener('click', randomPicture);
imgElementThree.addEventListener('click', randomPicture);



randomPicture();

