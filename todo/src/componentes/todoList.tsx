import React from "react";
import { Todo } from "../models/todo"

const TodoList = () => {
    const todos: Todo[] = [
        {id: 1, title: 'Ir ao supermecado', done: false},
        {id: 2, title: 'Ir pescar', done: false}
    ];

    return(<div>Todo List</div>);
}

export default TodoList;