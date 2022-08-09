function TodoForm({todo,setToDo,addToDo}) { 
    return ( 
        <div className="input-group mb-3">
                    <input value={todo} onChange={(e)=>setToDo(e.target.value)} type="text" className="form-control"/> 
                    <button onClick={addToDo} className="btn btn-outline-secondary" type="button" id="button-addon2">Ekle</button>
        </div> 
     );
}

export default TodoForm; 