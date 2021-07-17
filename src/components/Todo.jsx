import React from 'react';

const Todo = ({todo, todos, setTodos}) => {

    const deleteTodoHandler = () => {
        const result = todos.filter(item => (item.id !== todo.id));
        setTodos(result);
    }

    const completedTodosHandler = () => {

        
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return({...item, completed: !item.completed});
            }

            return(item);
        }));
    }

    console.log(todos)

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.entry}</li>
            <button onClick={completedTodosHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteTodoHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;