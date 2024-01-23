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