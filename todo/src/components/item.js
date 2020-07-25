import React from 'react';
import moment from 'moment/moment.js';

const Item = props => {
    let itemClassName = 'item';

    if (props.item.completed) {
        itemClassName = itemClassName + 'completed';
    }

    const handleClick = e => {
        props.dispatch({type: 'toggleCompleted', payload: props.item.id});
    }
    
    return(
        <div>
            <p>
                <span className={itemClassName} onClick={handleClick} value={props.item.id}>{props.item.item} </span>
                {props.item.completed === true ?  <span className='time'> Completed {moment().calendar()}</span> : null} 
            </p>
        </div>
    )
}

export default Item;