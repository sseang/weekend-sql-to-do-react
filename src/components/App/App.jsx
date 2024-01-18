import {useState, useEffect} from 'react';
import Header from '../Header/Header';
import { fetchTodos } from '../todoApi/todo.api';

import AddTodoForm from '../AddTodoForm/AddTodoForm';


function App () {
  let [taskList, setTaskList] = useState([]);



  const refreshTodos = () => { 
    const taskListPromise = fetchTodos();
    taskListPromise
    .then((response) => {
        //confirm data
        console.log('Server DATA:', response.data);
        //target data
        setTaskList(response.data);
    })
    //catch errord
    .catch((err) => {
        console.error('ERROR', err);
    });
};

//initial load of component & rendor to DOM
useEffect(() => {
    //body
    console.log('Lets Get IT!!');
    //api call
    refreshTodos();
}, []);
  
  return (
<div>
<Header/>
<AddTodoForm todoRefreshCallback={refreshTodos}/>

{taskList.map((itemData, dataIndex) => {
                return (
                <div key={dataIndex}>
                    {/* <h3>Shopping List</h3> */}
                    <div id="listContainer">
                    <p>{itemData.task}</p>
                    <p>To - Do:  {itemData.description}</p>
                    <p>{itemData.complete ?  '' : ''}</p>
                    </div>
                </div>
                
            );
        })}
</div>
  );

}

export default App
