import { useState } from 'react';

import { postTodos } from '../todoApi/todo.api';

function AddTodoForm(props) {
    let [taskValue, setTaskValue] = useState('');
    let [descriptionValue, setDescriptionValue] = useState('');
    //let [completeValue, setUnitValue] = useState('');


const handleSubmitItem = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
        task: taskValue,
        description: descriptionValue,
      
    });
    
    //Post Item Data
    postTodos({
        task: taskValue,
        description: descriptionValue,

    })
    .then((response) => {
        props.todoRefreshCallback();
        alert('POSTED a new task!');

        setTaskValue('');
        setDescriptionValue('');

    })
    .catch((err) => {
        console.error('Error', err);
    });
};


return (
 <section>
    <form onSubmit={handleSubmitItem}>
        <label>
            <span>Task: </span>
            <input id="task" onChange={(event) => setTaskValue(event.target.value)}
            value={taskValue}
            />
        </label>
        <label>
            <span>Description: </span>
            <input id="description" onChange={(event) => setDescriptionValue(event.target.value)}
            value={descriptionValue}
            />
        </label>
        <p>
        <button type="submit">Add Task</button>
        </p>
    </form>
            {/* <h2>Shopping List</h2>
            <span id="resetButtons">
                <button type="button" onClick={clearList}>Reset</button>
                <button type="button">Clear</button>
            </span> */}
</section>
);

}
    
    export default AddTodoForm;

//     import { useState, useEffect } from "react";
// import Header from "../Header/Header";
// import { fetchTodos, deleteTodos, updateTodos } from "../todoApi/todo.api";
// import AddTodoForm from "../AddTodoForm/AddTodoForm";

// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { lime, purple } from "@mui/material/colors";
// import Button from "@mui/material/Button";

// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';




// const theme = createTheme({
//   palette: {
//     primary: lime,
//     secondary: purple,
//   },
// });

// function App() {
//   let [taskList, setTaskList] = useState([]);

//   const refreshTodos = () => {
//     const taskListPromise = fetchTodos();
//     taskListPromise
//       .then((response) => {
//         //confirm data
//         console.log("Server DATA:", response.data);
//         //target data
//         setTaskList(response.data);
//       })
//       //catch errors
//       .catch((err) => {
//         console.error("ERROR", err);
//       });
//   };

//   //initial load of component & rendor to DOM
//   useEffect(() => {
//     //body
//     console.log("Lets Get IT!!");
//     //api call
//     refreshTodos();
//   }, []);

//   //DELETE function
//   const handleClickDelete = (id) => {
//     //confirm data
//     console.log("DELETE to-dos!!:", id);
//     //api call
//     deleteTodos(id)
//       //success
//       .then((response) => {
//         refreshTodos();
//       })
//       //catch errors
//       .catch((err) => {
//         console.error("ERROR", err);
//       });
//   };

//   //UPDATE function
//   const handleUpdateButtonClick = (id) => {
//     //confirm data
//     console.log("UPDATE to-dos!!:", id);
//     //api call
//     updateTodos(id)
//       //success
//       .then((response) => {
//         refreshTodos();
//         // toggleButton()
//       })
//       //catch errors
//       .catch((err) => {
//         console.log("ERROR:", err);
//       });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       {/* <div> */}
//       <Header />
//       <AddTodoForm todoRefreshCallback={refreshTodos} />

//       <Grid container spacing={6}>
//       {taskList.map((itemData, dataIndex) => {
//         return (
//           <Grid
//           item
//            key={dataIndex}>
//             {/* <h3>Shopping List</h3> */}
//             <Box               borderRadius={4}
//                 sx={{
//                   width: 250,
//                   height: 200,
//                   borderRadius:1,
//                   bgcolor: 'aquamarine',
//                   '&:hover': {
//                     bgcolor: '#ce93d8',
//                     // justifyContent ='center',
//                   },
//                 }} id="listContainer">
//               <p>{itemData.task}</p>
//               <p
//                 style={{
//                   textDecoration: itemData.complete ? "line-through" : "none",
//                 }}>
//                 To - Do: {itemData.description}
//               </p>
//               <p className="complete">
//                 {" "}
//                 {itemData.complete ? "COMPLETE!!!" : ""}
//               </p>
//               <Button
//                 variant="contained"
//                 onClick={(event) => handleUpdateButtonClick(itemData.id)}>
//                 Complete
//               </Button>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 sx={{ ml: 2 }}
//                 onClick={(event) => handleClickDelete(itemData.id)}>
//                 Delete
//               </Button>
//             </Box>
//             </Grid>
//         );
//       })}
//       </Grid>
      

//       {/* </div> */}
//     </ThemeProvider>
//   );
// }

// export default App;
