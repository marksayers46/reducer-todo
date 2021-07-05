import React from 'react';
import Item from './item';

const TodoList = (props) => {
    
    return(
        <div>
            {props.state.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    dispatch={props.dispatch}
                />
            ))}
        </div>
    )
}

export default TodoList;