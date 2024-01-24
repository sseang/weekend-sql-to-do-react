

# PROJECT NAME
Get er' Done APP
## Description
_Duration: 3 weeks_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 


This is an application to track individual task for people on the go! Maintianing a visual application will help you in schedulinig you daily, weekly or monthly routine. The application will take the challenge of tracking taks and keeping them in the forefront of your daily routine. All while ensuring that the task never deleted before you complete.

## Screen Shot

![Alt text](<public/images/Screenshot 2024-01-24 at 2.33.46 PM.png>)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- REACT 
- Vite
- Express




## Installation

1. **Use this template** to create a GitHub repo on your account
2. Clone the repo on to your computer
3. Open up your editor of choice and run an `npm install`
4. In the project folder, run `npm init --yes`
5. Install express `npm install express`
6. Set up server:

**server.js**

```JavaScript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.router.js');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); // needed for axios requests
app.use(bodyParser.json()); // needed for axios request
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/todo', todoRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
```   
## Testing the Server

You should be able to run your code by navigating to [http://localhost:5001](http://localhost:5001).


## Usage

1. Enter task & discription information in input fields
2. Click the 'Add Task' button to add item to the list
3. Click the 'Complete' button once an item is done on the list
4. The user will be flagged with a strike-through the To-do's & a green "COMPLETE!"
5. You can also click "Delete" a task to remove it from the list if no longer needed
6. After all task are completed, you can clear the and start a new list by clicking the "RESET TASK" button



## Built With

Client Side: 
 - Javascript
 - REACT
 - Axios
 - Node

 

Server Side: 
 - Express
 - Javascript
 - Node
 - Pool

 

Database
- Postgres





## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thanks to the #titanite cohort for the support!

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)