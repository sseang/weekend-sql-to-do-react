import { useState } from 'react';

import { postTodos } from '../todoApi/todo.api';

function AddTodoForm(props) {
    let [nameValue, setNameValue] = useState('');
    let [quantityValue, setQuantityValue] = useState('');
    let [unitValue, setUnitValue] = useState('');


const handleSubmitItem = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
        name: nameValue,
        quantity: quantityValue,
        unit: unitValue,
    });
    
    //Post Item Data
    postTodos({
        name: nameValue,
        quantity: quantityValue, 
        unit: unitValue,
    })
    .then((response) => {
        props.itemRefreshCallback();

        setNameValue('');
        setQuantityValue('');
        setUnitValue('');
    })
    .catch((err) => {
        console.error('Error', err);
    });
};

const clearList = () => {
    ;


};

return (
 <section>
    <form onSubmit={handleSubmitItem}>
        <label>
            <span>Name:</span>
            <input id="name" onChange={(event) => setNameValue(event.target.value)}
            value={nameValue}
            />
        </label>
        <label>
            <span>Quantity:</span>
            <input id="quantity" onChange={(event) => setQuantityValue(event.target.value)}
            value={quantityValue}
            />
        </label>
        <label>
            <span>Unit:</span>
            <input id="unit" onChange={(event) => setUnitValue(event.target.value)}
            value={unitValue}
            />
        </label>
        <button type="submit">Submit</button>
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