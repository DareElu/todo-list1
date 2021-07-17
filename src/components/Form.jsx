import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const Form = () => {

    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filteringOptions, setFilteringOptions] = useState("all");
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);


    useEffect(()=>{
        filterTodoHandler();
    },[filteringOptions, todos]);

    const filterTodoHandler = () =>{
        switch(filteringOptions){
        case "completed":
            setFilteredTodos(todos.filter(eachTodo =>(eachTodo.completed === true)));
            break;
        case "uncompleted":
            setFilteredTodos(todos.filter(eachTodo => eachTodo.completed === false ));
            break;
        default:
            setFilteredTodos(todos);
        }
    }


    const inputHandler = (entry) => (
        setInput(entry.target.value)
    );

    const submitTodoHandler = (e) => {
        e.preventDefault();

        return (
            setTodos([...todos, {
                entry: input,
                completed: false,
                id: Math.random()*1000
            }]),
                setInput("")
        ); 
    }

    const setFilteringOptionsHandler = (e) => {
        setFilteringOptions(e.target.value);
    }

    return(
        <div>
            <header>
                <h1>Dare's Todo List</h1>
            </header>
            <form>
                <input type="text" className="todo-input" value={input} onChange={inputHandler}/>
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={setFilteringOptionsHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => 
                        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Form;