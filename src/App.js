import React,{useState,useEffect} from "react"
import './App.css';
// importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";



function App() {

  // use state
  const [inputText,setInputText]= useState("")
  const [toDos,setToDos]= useState([])
  const [status,setStatus]=useState("all")
  const [filteredTodos,setFilteredTodos] = useState([])

  // runs once when the app start
  useEffect(()=>{
    getLocalTodos()
  },[])
  // use effect
  useEffect (() => {
    filterHandler()
  }, [toDos,status]);
  // function
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(toDos.filter(todo => todo.completed===true))
        break;
      case 'uncompleted ':
        setFilteredTodos(toDos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(toDos)
        break;   

    }
  };
  // save to local
  const saveLocalTodos = () =>{
    localStorage.setItem('toDos', JSON.stringify(toDos))

  }

  const getLocalTodos = () =>{
    if (localStorage.getItem('toDos') === null) {
      localStorage.setItem('toDos', JSON.stringify([]))

    } else {
      let todoLocal= JSON.parse(localStorage.getItem('toDos'))
      setToDos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>TO DO LIST </h1>
      </header>
       <Form  inputText={inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText}
       setStatus={setStatus} filteredTodos={filteredTodos} />
      
      <ToDoList filteredTodos={filteredTodos} setToDos={setToDos} toDos={toDos} />

    </div>
  );
}

export default App;
