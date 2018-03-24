'use strict'

//array that will hold each Picture
Picture.allPictures = [];

//grab image section
var sectionElement = document.getElementById('image-section');

//three previous images array
Picture.previousRandomImages = [];

//total picture votes
var picVotes = [];

//total votes/clicks
var maxClicks = 5;
Picture.clicks = 0;

//unorder list element
var ulElement = document.getElementById('results');

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
  // picNames.push(this.name);
}

//These are our image instances
function setUpPictures() {
  //setting up a key name
  var picsAsString = localStorage.getItem('pictures');
  var usablePics = JSON.parse(picsAsString);
  if (usablePics && usablePics.length) { //if usablePics exists && if it has a length then {
    Picture.allPictures = usablePics;
    console.log('Picture.allPictures loaded from local storage');
    return;
  }

  new Picture('assets/sweep.png', 'Baby Sweep');
  new Picture('assets/banana.jpg', 'Banana Slicer');
  new Picture('assets/breakfast.jpg', 'Breakfast-Maker');
  new Picture('assets/cthulhu.jpg', 'Cthulhu');
  new Picture('assets/dragon.jpg', 'Dragon Meat');
  new Picture('assets/dog-duck.jpg', 'Duck Mouth for Dogs');
  new Picture('assets/bubblegum.jpg', 'Meatball Bubblegum');
  new Picture('assets/wine-glass.jpg', 'Modern Wine Glass');
  new Picture('assets/chair.jpg', 'Outie Chair');
  new Picture('assets/pet-sweep.jpg', 'Paw Sweeps');
  new Picture('assets/pen.jpg', 'Pen Utensils');
  new Picture('assets/scissors.jpg', 'Pizza Scissors');
  new Picture('assets/bag.jpg', 'R2D2 Bag');
  new Picture('assets/boots.jpg', 'RainBoot Sandals');
  new Picture('assets/water-can.jpg', 'Reverse Watering Can');
  new Picture('assets/shark.jpg', 'Shark Sleeping Bag');
  
  new Picture('assets/tauntaun.jpg', 'Tauntaun Sleeping Bag');
  new Picture('assets/usb.gif', 'Tentacle USB');
  new Picture('assets/bathroom.jpg', 'Toilet Paper Tablet');
  new Picture('assets/unicorn.jpg', 'Unicorn Meat');
}

function threeRandomImages() {
  var randomIndexOne = Math.floor(Math.random() * Picture.allPictures.length);

  var randomIndexTwo = Math.floor(Math.random() * Picture.allPictures.length);

  var randomIndexThree = Math.floor(Math.random() * Picture.allPictures.length);
  
  while(randomIndexOne === randomIndexTwo || randomIndexTwo === randomIndexThree || randomIndexOne === randomIndexThree || Picture.previousRandomImages.includes(randomIndexOne) || Picture.previousRandomImages.includes(randomIndexTwo) || Picture.previousRandomImages.includes(randomIndexThree)) {

    randomIndexOne = Math.floor(Math.random() * Picture.allPictures.length);

    randomIndexTwo = Math.floor(Math.random() * Picture.allPictures.length);

    randomIndexThree = Math.floor(Math.random() * Picture.allPictures.length);
  }
  
  Picture.previousRandomImages = [];
  //we are pushing our random numbers into our previous random images array
  Picture.previousRandomImages.push(randomIndexOne);
  Picture.previousRandomImages.push(randomIndexTwo);
  Picture.previousRandomImages.push(randomIndexThree);

  Picture.allPictures[randomIndexOne].timesDisplayed++;
  Picture.allPictures[randomIndexTwo].timesDisplayed++;
  Picture.allPictures[randomIndexThree].timesDisplayed++;
  
  imgElementOne.src = Picture.allPictures[randomIndexOne].filepath;
  imgElementOne.alt = Picture.allPictures[randomIndexOne].name;

  imgElementTwo.src = Picture.allPictures[randomIndexTwo].filepath;
  imgElementTwo.alt = Picture.allPictures[randomIndexTwo].name;

  imgElementThree.src = Picture.allPictures[randomIndexThree].filepath;
  imgElementThree.alt = Picture.allPictures[randomIndexThree].name;
}

// // function renderImageTags () {
// //   for(var i = 0; i < 3; i++) {
// //     var card = document.createElement('div');
// //     var figure = document.createElement('figure');
// //     var figcaption = document.createElement('figcaption');
// //     imgElementOne.id = 'picture' + i;


//     figure.appendChild(image);
//     figure.appendChild(figcaption);
//     card.appendChild(figure);
//     sectionElement.appendChild(card);
//   }
// }

function handleClick(event) {
  Picture.clicks++ //every time our event occurs we increment our totalClicks number

  for(var i in Picture.allPictures) {
    if(event.target.alt === Picture.allPictures[i].name) {
      Picture.allPictures[i].votes++;
    }
  }

  if(Picture.clicks >= maxClicks) {
    sectionElement.removeEventListener('click', handleClick);

    displayResults();

    renderChart();

  } else {

    threeRandomImages();
  }
}

function displayResults() {
  for(var i in Picture.allPictures) {
    var listItemElement = document.createElement('li');

    listItemElement.textContent = Picture.allPictures[i].name + ' has ' + Picture.allPictures[i].votes + ' votes and was displayed ' + Picture.allPictures[i].timesDisplayed + ' times.';

    ulElement.appendChild(listItemElement);
  }
}

function toggleEventListener() {
  if(Picture.clicks >= maxClicks) {
    sectionElement.removeEventListener('click', handleClick);
  } else {
    sectionElement.addEventListener('click', handleClick);
  }
}

function chartVotes () {
  for(var i in Picture.allPictures) {
    picVotes[i] = Picture.allPictures[i].votes;
  }
}

function renderChart() {
  var colors = [];
  var votePercent = [];
  var indicators =[];
    
  for(var i in Picture.allPictures) {
    if (Picture.allPictures[i].timesDisplayed) {
      indicators.push(Picture.allPictures[i].name);
      
      var pct = Math.round(Picture.allPictures[i].votes/Picture.allPictures[i].timesDisplayed * 100);
      
      votePercent.push(pct);
      
      //random hex color
      var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      colors.push(randomColor);
    }
  }

  // access the canvas element from the DOM
  var context = document.getElementById('image-chart').getContext('2d');

  debugger;
  new Chart(context, {
    type: 'bar',
    data: {
      labels: indicators,
      datasets: [{
        label: 'Popularity (Click/Times Displayed %)',
        data: votePercent,
        backgroundColor: colors,
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            autoSkip: false,
            beginAtZero: true
        }
          }]
      }
    }
  });
}

function saveToLS() {
  var savePictures = JSON.stringify(Picture.allPictures); //converting our Picture.allPictures array to JSON string
  localStorage.setItem('pictures', savePictures); //setting a key-value pair in our localStorage

  toggleEventListener();
  renderChart();
}

//create picture list in JSON
setUpPictures();

// //image tags
// renderImageTags();

//turn on event listener
toggleEventListener();

//push votes into our global variable, picVotes array
chartVotes();

//browser opens with three random images
threeRandomImages();
