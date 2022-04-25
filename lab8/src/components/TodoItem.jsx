import React, {useState,useContext} from 'react';
import './styles/TodoItem.css';
import Context from "../context";

export default function TodoItem( {todo, onChange} ) {
    const {removeTodo} = useContext(Context);
    const [todoEdit, setTodoEdit] = useState(todo.title);
    const classes =[];
    const todoEditInput =["editTodo"];

    if (todo.completed)
    {
        classes.push("done");
        todoEditInput.push("done");
    }
    return ( 
        <li className="todo"> 
        <span className={classes.join(' ')}>
            <input type="checkbox" checked={todo.completed} 
                onChange = {() => onChange(todo.id)} />
            <input title="Редактировать" className={todoEditInput.join(' ')} type="text"
               value={todoEdit} onChange={(e) => setTodoEdit(e.target.value)} />
        </span>
        <button onClick={removeTodo.bind(null,todo.id)} className="todoDelBut">&times;</button>
        </li>  
    );
} 