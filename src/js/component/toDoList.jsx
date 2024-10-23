import React, { useState, useEffect } from 'react'
import ToDoForm from './toDoForm'
import ToDo from './toDo'

const toDoList = () => {
    const [toDos, setToDos] = useState([])
    
    const getToDos = async() => {
        let response = await fetch("https://playground.4geeks.com/todo/users/pmvroque")
        let data = await response.json()
        setToDos(data.todos)
        }
    
        useEffect(() => {
        const createUser = async() => {
            let response = await fetch("https://playground.4geeks.com/todo/users/pmvroque")
            let data = await response.json()
            if(data.detail == "User pmvroque doesn't exist.") {
                let response = await fetch("https://playground.4geeks.com/todo/users/pmvroque", {
                    method: "POST"
                })
                let data = await response.json()
            }
        }
        createUser()
          getToDos()
        } , [])
    
 
    const addToDo = async(toDo) => {
        
        if(!toDo.text || /^\s*$/.test(toDo.text)) {
            return
        }
        let response = await fetch("https://playground.4geeks.com/todo/todos/pmvroque", {
            method: "POST",
            body: JSON.stringify({
                "label": toDo.text,
                "is_done": false
            }),
            headers: {
                "Content-Type": "application/json",
              }
        })
        let data = await response.json()
        const newToDos = [toDo, ...toDos]

        getToDos()
        
    }

    const updateToDo = async(toDoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        let response = await fetch("https://playground.4geeks.com/todo/todos/" + toDoId, {
            method: "PUT",
            body: JSON.stringify({
                "label": newValue.text,
                "is_done": false 
            }),
            headers: {
                "Content-Type": "application/json",
              }

        })
        let data = response.json()
        getToDos()

    }

    const removeToDo = async(id, toDo) => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id)
        let response = await fetch("https://playground.4geeks.com/todo/todos/" + id, {
            method: "DELETE"
        })
        let data = await response.json()
        window.location.reload();
        getToDos()
    }
    
    

    const completeToDo = async(id, toDo) => {
       
            let response = await fetch("https://playground.4geeks.com/todo/todos/" + id, {
                method: "PUT",
                body: JSON.stringify({
                    "label": toDo,
                    "is_done": true 
                }),
                headers: {
                    "Content-Type": "application/json",
                  }
    
            })
            let data = await response.json()
            return toDo
            window.location.reload();
        getToDos()
    }


    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <ToDoForm onSubmit={addToDo}/>
            <ToDo 
            toDos={toDos}
            completeToDo={completeToDo}
            removeToDo={removeToDo}
            updateToDo={updateToDo}
            />
        </div>
    )
}

export default toDoList