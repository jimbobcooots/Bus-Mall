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
  //we want to write an array that iterates three times to generate three random numbers that each CANNOT be the same

  //we want the numbers to be drawn from the indexes of our Picture.allPictures array 

  //we need our array to produce three different values and not repeat those same values for three more iterations

  //potential six index array

  //if (the index === any other index in the array){then math random until the index does not equal any other index}
    var randomIndexOne = Math.floor(Math.random() * Picture.allPictures.length);

    var randomIndexTwo = Math.floor(Math.random() * Picture.allPictures.length);

    var randomIndexThree = Math.floor(Math.random() * Picture.allPictures.length);

    imgElementOne.src = Picture.allPictures[randomIndexOne].filepath;
    imgElementOne.alt = Picture.allPictures[randomIndexOne].name;
    
    imgElementTwo.src = Picture.allPictures[randomIndexTwo].filepath;
    imgElementTwo.alt = Picture.allPictures[randomIndexTwo].name;

    imgElementThree.src = Picture.allPictures[randomIndexThree].filepath;
    imgElementThree.alt = Picture.allPictures[randomIndexThree].name;

    //for this above ^^ function, we want to clean up this functionality so that we don't have three separate variables and incorporate a 'for' loop instead
}

imgElementOne.addEventListener('click', randomPicture);
imgElementTwo.addEventListener('click', randomPicture);
imgElementThree.addEventListener('click', randomPicture);

randomPicture();

