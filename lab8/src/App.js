import React from 'react';
import TodoList from "./components/TodoList.jsx";
import Context from "./context";
import AddItem from "./components/AddItem.jsx";
import "./App.css";

function App() {
    const [todos, setTodos] = React.useState([]);

    function toggleTodo(id) 
    {
        setTodos(todos.map(todo => 
          {
            if (todo.id === id) { todo.completed = !todo.completed }
            return todo;
        }))
    }

    function editTodo(id, newTitle)
    {
        setTodos(
            todos.map((todo) => 
            {
                if (todo.id === id) todo.title = newTitle;
                return todo;
            })
        );
    }

    function createTodo(title) 
    {
        setTodos(
            todos.concat([{
                title,
                id: Date.now(),
                completed: false,
            }, ])
        );
    }
    function removeTodo(id) { setTodos(todos.filter(todo => todo.id !== id)) }
    return ( 
    <div class="main">.
        <Context.Provider value = {{ removeTodo, editTodo }} >
          <div className = "wrapper" >
          <h1 class="header">Список тудушек</h1>
          <AddItem onCreate = { createTodo } />  
          {
            todos.length ? < TodoList todos = { todos }
            onToggle = { toggleTodo } /> : <p class="foot">Пока дел нет:)</p >
          }

        </div>
      </Context.Provider>
    .</div>
);
}
export default App 