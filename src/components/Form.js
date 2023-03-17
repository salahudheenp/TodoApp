import React from "react";


const Form = ({setInputText,toDos,setToDos,inputText,setStatus}) => {

    const inputTextHandler=(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value)
    }

    const submitTodoHandler=(e)=>{
        e.preventDefault()
        setToDos([
            ...toDos,{text:inputText,completed:false,id:Math.random() *1000}
        ])
        setInputText("")

    }
    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input'></input>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus square"></i>
            </button>
            <div className="select">
                <select  onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form