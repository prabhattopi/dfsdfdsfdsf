import React from 'react'


export const TodoItem = ({value,deleteTodo}) => {
  const gata={
    fontSize:"20px",
     

  }
  const rot={
    margin:"10px"
  }
  const tot={
    marginRight:"10px",
    
    
  }
  return (
    <div style={gata}>

     <li>
       <input style={tot} type="radio" />
         {value}
         <button style={rot} onClick={()=>{
          //  console.log(value)
             deleteTodo(value)
         }}>Delete</button>
        
     </li>
    

    </div>
  )
}
