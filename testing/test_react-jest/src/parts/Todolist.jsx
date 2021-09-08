import React from 'react';
import {TodoItem} from './TodoItem';
export const Todolist = ({todos})=>(
    <ul>
        {todos.map(todo=><TodoItem todo={todo}/>)}
    </ul>
);