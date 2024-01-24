import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { fetchTodos, deleteTodos, updateTodos } from "../todoApi/todo.api";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { teal } from "@mui/material/colors";

const color = teal;
const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});

function App() {
  let [taskList, setTaskList] = useState([]);

  const refreshTodos = () => {
    const taskListPromise = fetchTodos();
    taskListPromise
      .then((response) => {
        //confirm data
        console.log("Server DATA:", response.data);
        //target data
        setTaskList(response.data);
      })
      //catch errors
      .catch((err) => {
        console.error("ERROR", err);
      });
  };

  //initial load of component & rendor to DOM
  useEffect(() => {
    //body
    console.log("Lets Get IT!!");
    //api call
    refreshTodos();
  }, []);

  //DELETE function
  const handleClickDelete = (id) => {
    //confirm data
    console.log("DELETE to-dos!!:", id);
    //api call
    deleteTodos(id)
      //success
      .then((response) => {
        refreshTodos();
      })
      //catch errors
      .catch((err) => {
        console.error("ERROR", err);
      });
  };

  //UPDATE function
  const handleUpdateButtonClick = (id) => {
    //confirm data
    console.log("UPDATE to-dos!!:", id);
    //api call
    updateTodos(id)
      //success
      .then((response) => {
        refreshTodos();
        // toggleButton()
      })
      //catch errors
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <div> */}
      <Header />
      <AddTodoForm todoRefreshCallback={refreshTodos} />

      {taskList.map((itemData, dataIndex) => {
        return (
          <div key={dataIndex}>
            {/* <h3>Shopping List</h3> */}
            <div id="listContainer">
              <p>{itemData.task}</p>
              <p                style={{
                  textDecoration: itemData.complete ? "line-through" : "none",
                }}>To - Do: {itemData.description}</p>
              <p className="complete">
                {" "}
                {itemData.complete ? "COMPLETE!!!" : ""}
              </p>
              <Button

                variant="contained"
                onClick={(event) => handleUpdateButtonClick(itemData.id)}>
                Complete
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ ml: 2 }}
                onClick={(event) => handleClickDelete(itemData.id)}>
                Delete
              </Button>
            </div>
          </div>
        );
      })}
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
