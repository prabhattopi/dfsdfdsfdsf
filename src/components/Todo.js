import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from './TodoItem';
import "../App.css"

import { TodoList } from "./TodoList";
// import { TodoItem } from './TodoItem';

export const Todo = () => {
    const [value , setValue]=useState("")
    const [todos,setTodos]=useState([])
    const addTodo=(xyz)=>{
        setTodos(
            [
                ...todos,{
                    id:uuidv4(),
                    value:xyz

                }
            ]
        )
    };
    const deleteTodo=(value)=>{
        setTodos(todos.filter((todo)=>
    
        todo.value != value
     
        ))
   
    }
    const got={
        margin:"auto",
        display:"flex",
        width:"400px",
        // textAlign:"center",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",




    }
    const got1={
        margin:"auto",
        // display:"block",
        width:"310px",
        height:"23px",
        padding:"10px 20px",
        backGround:"white",
        borderRadius:"10px",
        fontSize:"22px",
        outline:"none",
        borderTopRightRadius:"0px",
        borderBottomRightRadius:"0px",
        borderRight:"0px"
      
       





    }
    const butt={
  
     marginLeft:"24rem",
     width:"40px",
     height:"47px",
      marginTop:"-47px",
     borderRadius:'10px',
     outline:"none",
     fontSize:"19px",
     color:"blue",
    //  background:"aqua",
     border:"none",
     borderTopLeftRadius:"0px",
     borderBottomLeftRadius:"0px",
     border:"2px solid black",
     borderLeft:"0px"


    }
  return (
    <div style={got}>
       <h1>TodoApp</h1>
       <input style={got1} type="text"  value={value}
       placeholder="Write Something"
       onChange={(e)=>{
           setValue(e.target.value)
          
        //    console.log(e.target.value)
       }}
     
       />
     <button style={butt} disabled={!value} className={value==""?"black":"red"} onClick={()=>{
        addTodo(value)
       
        setValue("")
    }}><i className="fa-solid fa-plus"></i></button>
       
       <TodoList todos={todos} deleteTodo={deleteTodo}/>
    

    </div>
  )
}
