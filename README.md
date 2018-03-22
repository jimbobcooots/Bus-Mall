# Bus-Mall
A skymall-similar website for busses

Pair programming with Emery, scaffolding our JS

What this script will run
- This script will:
1. Store multiple image properties in a constructor function
2. Display three random images upon a click event and then subsequently display three different images than the three previous on the next click event
  - This will be done using a function that generates three random numbers that will be used to reference indexes in our consructor function
  - This function will also generate three different numbers (indexes) by referencing an array of the previous three numbers and writing an 'if' condition to ensure that no number is the same as the previous
3. Store the number of instances an image was displayed, the number of times it was clicked, and the percentage of times it was click vs. the times it was displayed
  - This will be stored in our constructor function using variables 'timesDisplayed' and 'votes'
  - These variables will be set to zero and incremented at each display and event 
4. Terminate the click event upon the 25th event and display results
  - An 'if' condition will state that once we hit 25 clicks, to display the results
5. Produce a chart that displays a visual representation of our results for how many times an item displayed, how many times it was clicked, and the ratio of the times it was clicked over the times it was displayed
 --------------------------------------------------------------------------------------------

JSON STORAGE
  - What do we want to store?
    - Our allPictures array
  -    

