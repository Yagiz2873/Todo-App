import { useState } from "react";
import TodoForm from "./todo-form";

function TodoApp() {
    const [todo,setToDo] = useState("");
    const [todoList,setToDoList] = useState([]);


    const addToDo = () =>{
        setToDoList([...todoList,todo]);
        setToDo("");
    }


    const deleteToDo = (ix) =>{
        const newTodoList = todoList.filter((item,index)=>ix!==index) 
        setToDoList(newTodoList); 
    }
    return ( 
        <>
            <div className="container d-flex flex-column w-50 align-items-center mt-5">
                <h1 className="text-center display-2">TodoApp</h1> 
                <TodoForm todo={todo} setToDo = {setToDo} addToDo = {addToDo}/>
                {/* <div className="input-group mb-3">
                    <input value={todo} onChange={(e)=>setToDo(e.target.value)} type="text" className="form-control"/> 
                    <button onClick={addToDo} className="btn btn-outline-secondary" type="button" id="button-addon2">Ekle</button>
                </div>  */}
                <h1 className="mt-5">ToDo List</h1> 
                <ul className="list-group w-100"> 
                    {
                        todoList.map((item,index)=>(
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>{item} <button onClick={()=>deleteToDo(index)} className="btn btn-danger ">X</button> </li>
                        )) 
                    }
                </ul>
            </div>
        </>
     );
}

export default TodoApp;