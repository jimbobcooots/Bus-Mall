'use strict'

//array that will hold each Picture
Picture.allPictures = [];

//create an element for the section, this will handle an event listener for all its children
var sectionElement = document.getElementById('image-section');

//array that contains the previous three indices we generated for our image instances
Picture.previousRandomImages = [];

//click tracker
Picture.totalClicks = 0;

//unorder list element
var ulElement = document.createElement('ul');

//TABLE DATA VARIABLES
var picVotes = [];

var picNames = [];

//Here we access our image elements from the DOM
var imgElementOne = document.getElementById('pic-one');
var imgElementTwo = document.getElementById('pic-two');
var imgElementThree = document.getElementById('pic-three');

function Picture(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.votes = 0;
  this.timesDisplayed = 0;
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

  Picture.allPictures[randomIndexOne].timesDisplayed++;
  Picture.allPictures[randomIndexTwo].timesDisplayed++;
  Picture.allPictures[randomIndexThree].timesDisplayed++;
  //What is this saying? The property of timesDisplayed of the index (which is one of our image instances) of our array of objects increments +1 when it is displayed. 
  //Whatever number enters our randomIndexes will be incremented at its own index position
  console.log(Picture.allPictures[randomIndexOne].timesDisplayed++);
    
  //we are setting the 'src' of imgElementOne to the filepath of our instances constructor and we are setting its 'alt' to the instances constructor name PROPERTY
  imgElementOne.src = Picture.allPictures[randomIndexOne].filepath;
  imgElementOne.alt = Picture.allPictures[randomIndexOne].name;

  imgElementTwo.src = Picture.allPictures[randomIndexTwo].filepath;
  imgElementTwo.alt = Picture.allPictures[randomIndexTwo].name;

  imgElementThree.src = Picture.allPictures[randomIndexThree].filepath;
  imgElementThree.alt = Picture.allPictures[randomIndexThree].name;
}
//threeRandomImages
// 1. we have generated three random, unique images
// 2. we have made it so that each set of three images is unique from the previous set
// 3. we have displayed those images in our document
// 4. we have counted for each image instance how many times it is displayed randomly

function clickCounter (event) {
  Picture.totalClicks++ //every time our event occurs we increment our totalClicks number

  for(var i in Picture.allPictures) {
    if(event.target.alt === Picture.allPictures[i].name) {
      Picture.allPictures[i].votes++;
      //if the event we target is === to the name of our instance in our allPictures array, then add to the vote total of that instance
    }
  }

  //outside the for loop
  if(Picture.totalClicks > 5) {
    sectionElement.removeEventListener('click', clickCounter);
    //if the amount of clicks equals 5, then display the results

    displayResults();
  }
}

function displayResults() {
  for(var i in Picture.allPictures) {
    var listItemElement = document.createElement('li');
    //we create a list element to display our results in

    listItemElement.textContent = Picture.allPictures[i].name, 'has', Picture.allPictures[i].votes, 'votes and was displayed', Picture.allPictures[i].timesDisplayed, 'times';
  }
  
  ulElement.appendChild(listItemElement);

}

function


//clickCounter
//1. we want a function that counts how many times we've clicked on an instance and stores that count into a property of our constructor object 
//we also want the function to turn off the event listener at 25 clicks and display our results

//a function that adds an event listener to each image so that when it is clicked, it triggers a new set of three, random images (threeRandomImages)
// it triggers a new imgElementOne, Two and Three

sectionElement.addEventListener('click', clickCounter);
sectionElement.addEventListener('click', threeRandomImages);


threeRandomImages();

