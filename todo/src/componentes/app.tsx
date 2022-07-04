import React from 'react';
import Navbar from './navbar';
import TodoList from './todoList';
import TodoContext from '../contexts/todoContext';

const App = () => {
    return (
    <TodoContext>
        <div className="uk-container">
           <Navbar></Navbar>
           <TodoList></TodoList>
        </div>
    </TodoContext>
     
    );
}

export default App;