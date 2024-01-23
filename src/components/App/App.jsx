import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { fetchTodos, deleteTodos, updateTodos } from "../todoApi/todo.api";

import AddTodoForm from "../AddTodoForm/AddTodoForm";

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
        //setButtonsVisible(false)
      })
      //catch errors
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };

  return (
    <div>
      <Header />
      <AddTodoForm todoRefreshCallback={refreshTodos} />

      {taskList.map((itemData, dataIndex) => {
        return (
          <div key={dataIndex}>
            {/* <h3>Shopping List</h3> */}
            <div id="listContainer">
              <p>{itemData.task}</p>
              <p>To - Do: {itemData.description}</p>
              <p>{itemData.complete ? "COMPLETE" : ""}</p>
              <button onClick={(event) => handleUpdateButtonClick(itemData.id)}>
                Complete
              </button>
              <button onClick={(event) => handleClickDelete(itemData.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
