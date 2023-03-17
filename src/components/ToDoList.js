import React  from "react";

// import components
import Todo from "./ToDo";

const ToDoList = ({ toDos, setToDos, filteredTodos})=>{
    
    
    return (
        <div className="todo-container">    
            <ul className="todo-list">
               {filteredTodos.map((todo) =>(
                   <Todo setToDos={setToDos} toDos={toDos} key={todo.id} 
                   todo={todo} text={todo.text} /> 
               ))}
            </ul>

        </div>
    )



}


export default ToDoList