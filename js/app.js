'use strict'

//array that will hold each Picture
Picture.allPictures = [];

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
new Picture('assets/sweep.jpg', 'Sweep');
new Picture('assets/tauntaun.jpg', 'Tauntaun');
new Picture('assets/unicorn.jpg', 'Unicorn');
new Picture('assets/usb.jpg', 'USB');
new Picture('assets/water-can.jpg', 'Water-Can');
new Picture('assets/wine-glass.jpg', 'Wine-Glass');

//we want to randomly display three of our instances
function threeRandomImages() {
  var randomOne= Math.floor(Math.random()Picture.allPictures.length);

  var randomTwo = Math.floor(Math.random()Picture.allPictures.length);

  var randomThree = Math.floor(Math.random()Picture.allPictures.length);

  //we are establishing three random number variables
  //They are generating a number between 0 and 1, mulitplying that num by the length of our instances array, then rounding the num

  //Now we have three random images, but there is a chance they could be the same num

  //we also want to set these variables equal to our imgElement variables within our HTML doc
  
}

function randomPicture() {
  //we want three numbers to be drawn from the indexes of our Picture.allPictures array 
  var indexArray = [];
  for (var i = 0; i < 3; i++) {
    var randomIndex = Math.floor(Math.random() * Picture.allPictures.length);
  
    indexArray.push(randomIndex);
    console.log(indexArray);
    
    imgElementOne.src = Picture.allPictures[indexArray[i]].filepath;
    imgElementOne.alt = Picture.allPictures[indexArray[i]].name;

     
      //while the count is less than 3, set imgElement.src to the filepath in Picture.allPictures to be an index of our filepaths contained by a random num in our indexArray
    }
  }

  //we want to generate those random numbers three times and each CANNOT be the same

  //we need our array to produce three different values and not repeat those same values for three more iterations

  //potential six index array

  //if (the index === any other index in the array){then math random until the index does not equal any other index}

    // imgElementOne.src = Picture.allPictures[randomIndexOne].filepath;
    // imgElementOne.alt = Picture.allPictures[randomIndexOne].name;
    
    // imgElementTwo.src = Picture.allPictures[randomIndexTwo].filepath;
    // imgElementTwo.alt = Picture.allPictures[randomIndexTwo].name;

    // imgElementThree.src = Picture.allPictures[randomIndexThree].filepath;
    // imgElementThree.alt = Picture.allPictures[randomIndexThree].name;

    //for this above ^^ function, we want to clean up this functionality so that we don't have three separate variables and incorporate a 'for' loop instead
}

imgElementOne.addEventListener('click', randomPicture);
// imgElementTwo.addEventListener('click', randomPicture);
// imgElementThree.addEventListener('click', randomPicture);

randomPicture();

