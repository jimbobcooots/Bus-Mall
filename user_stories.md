Marketing research team
- As a market researcher I want to display three clickable images at a time to the user to observe which item image they choose of the three. I can create three img tags in my HTML
- As a market researcher I want display my data to the user with values applying to each image. I can do this by using a constructor function to store my image instances and data for each. I can display the data of my instances by creating a chart in JS.
- As a market researcher I want the images to be formatted nicely and for the shopping site to look appealing. I can use CSS borders to make the images pop, and can style my chart to make it visually pleasing and clear and concise
- As a market researcher I want a visual representation of how many times an image was voted for. I can create a bar chart in JS with my x axis being the name of the image and the y axis being set to number of votes

Developer
- As a developer I want to create an element (array) that will store all of my image elements
- As a developer I want to create a functionality that will display three random images simultaneously. I can do this using Math.random and reference this as an index of the array of my image instances
- As a developer, I want to create a functionality that tracks each time an image is randomly iterated. To track each time an item is displayed I can set a variable in my constructor that applies to each instance and increment it IF that instance is displayed
- As a developer I want to create a functionality that records an image selection upon a user clicking that particular image. I can write a function that increments a variable within my constructor that counts a time an instance was clicked
- As a developer I want to stop the user from being able to click after 25 clicks and to display results. I can do this by writing a function with a for loop that sets our index to be less than 25
- As a developer I also want to calculate a percentage of how many times an item was clicked versus how many times it was shown. I can use my values in my variables for each instance and divide them.

Focus Group
- As a focus group member I want to be able to click on an image and for the page to respond to when I click
- As a focus group member I want the webpage to be clear what my objective is and how to interact with it
- As a focus group member I want to see a display of my feedback on the items I preferred (clicked on the most) and the percentage of times I clicked on an item over the times it popped up