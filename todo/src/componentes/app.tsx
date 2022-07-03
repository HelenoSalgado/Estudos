import React from 'react';
import Navbar from './navbar';
import TodoList from './todoList';

const App = () => {
    return (
     <div>
         <Navbar></Navbar>
         <TodoList></TodoList>
     </div>
    );
}

export default App;