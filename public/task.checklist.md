 # Project Name: To-Do Task Checklist
 
 <!-- create checklist for project -->

 [x] - SQL to create the database table
        - Needs to be called: weekend-to-do-app
 [x] - Create a database.sql file and add the create table SQL
        -save database from Postico to project folder
 [x] - Create TABLE and add the create table SQL
        -save database from Postico to project folder
 [x] - Add sample data with insert statements
     - Add insert statements into the database.sql file
     <!-- //should add date to complete column?? -->

 [x] - Create a GET route in the todo.router.js file to return sample data
       [x] - Test the GET route with Postman/Postico
 [x] - Create a POST route in the todo.router.js file to return sample data
       [x] - Test the POST route with Postman/Postico
 [x] - Create a PUT route in the todo.router.js file to return sample data
       [x] - Test the PUT route with Postman/Postico
 [x] - Create a DELETE route in the todo.router.js file to return sample data
       [x] - Test the DELETE route with Postman/Postico

  [] - Create HTML/App.js
       [] - Source Axios to the App.jsx?
       [] - Source script/index.js GET to the App.jsx?
       [] - Source css/App.css GET to the App.jsx?
       [] - Add useEffect and Axios GET to the App.jsx
       [] - Display items on the page with .map ...
       [] - Create Header
       [] - Create Form
              [] - Create DELETE button
              [] - Create COMPLETE button 
       [] - Create Table or List for rendered Objects from SQL to DOM

  [] - Clien/index.js
       [] - function to fetch data or GET request via Axios
       [] - function for submit task or POST request via Axios
       [] - function for complete task or UPDATE request via Axios
       [] - function for delete task or DELETE request via Axios
              [] - see koala/client.js




  [] - Update CSS for styling
       [] - When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
       [] - Whether or not a Task is complete should also be stored in the database.
       [] - Deleting a Task should remove it both from the front end as well as the Database.