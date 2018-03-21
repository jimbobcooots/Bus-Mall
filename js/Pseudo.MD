

//clickCounter
//1. we want a function that counts how many times we've clicked on an instance and stores that count into a property of our constructor object 
//we also want the function to turn off the event listener at 25 clicks and display our results

//a function that adds an event listener to each image so that when it is clicked, it triggers a new set of three, random images (threeRandomImages)
// it triggers a new imgElementOne, Two and Three

displayResults
 //we create a list element to display our results in

JSON STORAGE INFO
When to store
- Immediately
  - Pro: they are there for next time
  - Con: zeroes
- At the very end
  - Pro: stores all the values of clicks and views
  - Con: partial data is not captured
- After a load or after a click
  - Pro: You're saving storage at every instance of an event
  - Con: Potential scale issue with huge data
         Chatter
  
  //threeRandomImages
    //we are establishing three random number variables
  //They are generating a number between 0 and 1, mulitplying that num by the length of our instances constructor, then rounding the num

// 1. we have generated three random, unique images
// 2. we have made it so that each set of three images is unique from the previous set
// 3. we have displayed those images in our document
// 4. we have counted for each image instance how many times it is displayed randomly

//What is this saying? The property of timesDisplayed of the index (which is one of our image instances) of our array of objects increments +1 when it is displayed. 
  //Whatever number enters our randomIndexes will be incremented at its own index position
    
  //we are setting the 'src' of imgElementOne to the filepath of our instances constructor and we are setting its 'alt' to the instances constructor name PROPERTY

    // console.log(previousRandomImages);
  //After our 'while' loop has run, we want to display the three nums we got on the page


    //Now we have three random images, but there is a chance they could be the same num

    //we also want to set these variables equal to our imgElement variables within our HTML doc

  //PSEUDO: until randomIndexOne(Two,Three) !== each other or until our three index images do not equal the array of , keep generating random numbers for each var

    //what do we want our condition to be, we want to loop until randomIndexOne, randomIndexTwo, and randomIndexThree DO NOT equal each other
  
  //we also want to loop until the next cycle of three random numbers is UNIQUE from the previous three (this is where we use includes())

    //if the imageName we click on is === to the name of our instance in our allPictures array, then add to the vote total of that instance