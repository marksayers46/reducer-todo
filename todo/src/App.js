import React, { useReducer } from 'react';
import { initialState, todoReducer } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const clearCompleted = () => {
    dispatch({type:'clearCompleted', payload: state})
  }

  return (
    <div className='app'>
      <TodoForm
        state={state}
        dispatch={dispatch}
      />
      <TodoList 
        state={state}
        dispatch={dispatch}
      />
      <button onClick={clearCompleted}>Clear Completed Task</button>
    </div>
  );
}

export default App;