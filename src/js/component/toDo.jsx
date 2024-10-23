import React, { useState, useEffect } from 'react'
import ToDoForm from "./toDoForm"
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from 'react-icons/ti'


const ToDo = ({toDos, completeToDo, removeToDo, updateToDo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
 
       
    const submitUpdate = (value) => {
    updateToDo(edit.id, value)
    setEdit ({
        id: null,
        value: ''
    })
  }

  if(edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate}/>
  }

  return toDos.map((ToDo, index) => (
    <div className={ToDo.is_done ? 'ToDo-row complete' : 'ToDo-row'} key={index}>
    
    <div key={ToDo.id} onClick={() => completeToDo(ToDo.id, ToDo.label)} className ="text-white">
        {ToDo.label}
    </div>
    
    <div className="icons">
        <RiCloseCircleLine 
        onClick={() => removeToDo(ToDo.id)}
        className='delete-icon'
        />
        <TiEdit onClick={() => setEdit({id : ToDo.id, value: ToDo.label })}
        className='delete-icon'/>
    </div>
    </div>
  ))
}

export default ToDo