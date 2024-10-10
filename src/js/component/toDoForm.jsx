import React, { useState, useEffect, useRef }from 'react'

const toDoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : ' ')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 1000), 
        text: input
    });
    
    setInput('')
  }

 
    return (
       
            <form className = "toDo-form" onSubmit={handleSubmit}>

                {props.edit ? (
                <>    
                <input 
                className="toDo-input edit" 
                type="text" 
                value={input}
                placeholder="Update" 
                onChange={handleChange}
                ref={inputRef}
                />
                <button type="button" className="btn edit btn-outline-info">Update</button>
                </>
                )
                 :
                (
                <>
                <input 
                className="toDo-input" 
                type="text" 
                value={input}
                placeholder="Add a to Do" 
                aria-label="default input example"
                onChange={handleChange}
                ref={inputRef}
                />
                <button type="button" className="btn btn-outline-info">Add To Do</button>
                </>
                )
            }

                
            </form>
        
  )
}

export default toDoForm