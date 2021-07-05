import React, { useState } from 'react';

const TodoForm = (props) => {
    const [item, setItem] = useState();

    const handleChanges = e => {
        setItem(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (item !== '') {
            props.dispatch({type: 'addToList', payload: item});
            setItem('');
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChanges}
                    type='text'
                    name='item'
                    value={item}
                    placeholder='Task'
                />
                <button>Add to List</button>
            </form>
        </div>
    )
}

export default TodoForm;