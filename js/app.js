'use strict'

//array that will hold each Picture
Picture.allPictures = [];

//array that contains the previous three indices we generated for our image instances
Picture.previousRandomImages = [];

//Here we access our image elements from the DOM
var imgElementOne = document.getElementById('pic-one');
var imgElementTwo = document.getElementById('pic-two');
var imgElementThree = document.getElementById('pic-three');

function Picture(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Picture.allPictures.push(this);
}

//These are our image instances
new Picture('assets/bag.jpg', 'Bag');
new Picture('assets/banana.jpg', 'Banana');
new Picture('assets/bathroom.jpg', 'Bathroom');
new Picture('assets/boots.jpg', 'Boots');
new Picture('assets/breakfast.jpg', 'Breakfast');
new Picture('assets/bubblegum.jpg', 'Bubblegum');
new Picture('assets/chair.jpg', 'Chair');
new Picture('assets/cthulhu.jpg', 'Cthulhu');
new Picture('assets/dog-duck.jpg', 'Dog-Duck');
new Picture('assets/dragon.jpg', 'Dragon');
new Picture('assets/pen.jpg', 'Pen');
new Picture('assets/pet-sweep.jpg', 'Pet-Sweep');
new Picture('assets/scissors.jpg', 'Scissors');
new Picture('assets/shark.jpg', 'Shark');
new Picture('assets/sweep.png', 'Sweep');
new Picture('assets/tauntaun.jpg', 'Tauntaun');
new Picture('assets/unicorn.jpg', 'Unicorn');
new Picture('assets/usb.gif', 'USB');
new Picture('assets/water-can.jpg', 'Water-Can');
new Picture('assets/wine-glass.jpg', 'Wine-Glass');

//we want to randomly display three of our instances
function threeRandomImages() {
  //we are establishing three random number variables
  //They are generating a number between 0 and 1, mulitplying that num by the length of our instances constructor, then rounding the num
  var randomIndexOne = Math.floor(Math.random() * Picture.allPictures.length);

  var randomIndexTwo = Math.floor(Math.random() * Picture.allPictures.length);

  var randomIndexThree = Math.floor(Math.random() * Picture.allPictures.length);

  //what do we want our condition to be, we want to loop until randomIndexOne, randomIndexTwo, and randomIndexThree DO NOT equal each other
  
  //we also want to loop until the next cycle of three random numbers is UNIQUE from the previous three (this is where we use includes())
  
  while(randomIndexOne === randomIndexTwo || randomIndexTwo === randomIndexThree || randomIndexOne === randomIndexThree || Picture.previousRandomImages.includes(randomIndexOne) || Picture.previousRandomImages.includes(randomIndexTwo) || Picture.previousRandomImages.includes(randomIndexThree)) {
  //PSEUDO: until randomIndexOne(Two,Three) !== each other or until our three index images do not equal the array of , keep generating random numbers for each var
    randomIndexOne = Math.floor(Math.random() * Picture.allPictures.length);

    randomIndexTwo = Math.floor(Math.random() * Picture.allPictures.length);

    randomIndexThree = Math.floor(Math.random() * Picture.allPictures.length);

    //Now we have three random images, but there is a chance they could be the same num

    //we also want to set these variables equal to our imgElement variables within our HTML doc

  }
  
  Picture.previousRandomImages = [];
  //we are pushing our random numbers into our previous random images array
  Picture.previousRandomImages.push(randomIndexOne);
  Picture.previousRandomImages.push(randomIndexTwo);
  Picture.previousRandomImages.push(randomIndexThree);
  // console.log(previousRandomImages);
  //After our 'while' loop has run, we want to display the three nums we got on the page
    
  //we are setting the 'src' of imgElementOne to the filepath of our instances constructor and we are setting its 'alt' to the instances constructor name PROPERTY
  imgElementOne.src = Picture.allPictures[randomIndexOne].filepath;
  imgElementOne.alt = Picture.allPictures[randomIndexOne].name;

  imgElementTwo.src = Picture.allPictures[randomIndexTwo].filepath;
  imgElementTwo.alt = Picture.allPictures[randomIndexTwo].name;

  imgElementThree.src = Picture.allPictures[randomIndexThree].filepath;
  imgElementThree.alt = Picture.allPictures[randomIndexThree].name;
}

imgElementOne.addEventListener('click', threeRandomImages);
imgElementTwo.addEventListener('click', threeRandomImages);
imgElementThree.addEventListener('click', threeRandomImages);

threeRandomImages();

