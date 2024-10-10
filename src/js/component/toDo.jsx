import React, { useState } from 'react'
import ToDoForm from "./toDoForm"
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from 'react-icons/ti'


const toDo = ({toDos, completeToDo, removeToDo, updateToDo}) => {
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

  return toDos.map((toDo, index) => (
    <div className={toDo.isComplete ? 'toDo-row complete' : 'toDo-row'} key={index}>
    
    <div key={toDo.id} onClick={() => completeToDo(toDo.id)}>
        {toDo.text}
    </div>
    
    <div className="icons">
        <RiCloseCircleLine 
        onClick={() => removeToDo(toDo.id)}
        className='delete-icon'
        />
        <TiEdit onClick={() => setEdit({id : toDo.id, value: toDo.text })}
        className='delete-icon'/>
    </div>
    </div>
  ))
}

export default toDo