import React from "react";

const Todo = ({ text, todo, toDos, setToDos })=>{
    console.log(todo);
    console.log('uuuuu');


    // event
    const deleteHandler=()=>{
        console.log(todo.id);
        console.log(toDos);
        setToDos(toDos.filter(el =>el.id !== todo.id))

    }
    const completeHandler = () =>{
        setToDos(toDos.map(item=>{
            if (item.id===todo.id) {
                return {
                    ...item,completed:!item.completed
                }

            }
            return item;

        }
        ))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":""}` }>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn ">
                 <li className="fas fa-trash"></li>
             </button>
        </div>


    );
}


export default Todo