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
new Picture('assets/boots.jpg', 'Boots');

var imgElementOne = document.getElementById('pic-one');

var imgElementTwo = document.getElementById('pic-two');

var imgElementThree = document.getElementById('pic-three');

function randomPicture() {
  //we want three numbers to be drawn from the indexes of our Picture.allPictures array 
  var indexArray = [];
  for (var count = 0; count < 3; count++) {
    var randomIndex = Math.floor(Math.random() * Picture.allPictures.length);
  
    indexArray.push(randomIndex);
    console.log(indexArray);

    while (count < 3) {
      imgElementOne.src = Picture.allPictures[indexArray[count]].filepath;
      imgElementOne.alt = Picture.allPictures[indexArray[count]].name;
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

