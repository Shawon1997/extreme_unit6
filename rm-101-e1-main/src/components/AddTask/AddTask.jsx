import React from "react";
import styles from "./addTask.module.css";
import { useState,useEffect } from 'react'
const storagedata=()=>{
  const data=localStorage.getItem("todolist")
  if(data)
  {
    return JSON.parse(data)
  }
  else{
    return []
  }
}

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [inputdata,setinputdata]=useState("")
  const [show,setshow]=useState([])
  const [editite,seteditite]=useState("")
  const [toggle,settoggle]=useState(false)
  const fatchdata=async()=>{
    try {
      let res=await fetch("http://localhost:8080/data")
      res=await res.json()
      setshow(res.data)
      //console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  //useEffect(()=>{},[])
  const add=()=>{
    if(!inputdata)
    {
      alert("please add something")
    }
    else if(inputdata && toggle)
    {
      setshow(show.map((e)=>{
        if(e.id==editite)
        {
          return {...e,name:inputdata}
        }
        return e
      }))


      setinputdata([])
    seteditite()
    settoggle(false)
    }
    
    else{
const createid= {
  id:new Date().getTime().toString(),
   name:inputdata
};
//console.log(id)
      setshow([...show, createid])
      setinputdata("")
    }
  }


const Delete=(param)=>{
  //console.log(show)
const update=show.filter((el)=>{
  return (el.id!==param)
})
console.log(update)
setshow(update)
}

useEffect(()=>{
  localStorage.setItem("todolist",JSON.stringify(show))
},[show])
  return (
    <div className={styles.todoForm}>
    <h2>Todo List</h2>
      <input data-testid="add-task-input" 
      type="text" value={inputdata} onChange={(e)=>setinputdata(e.target.value)} placeholder='Add Task ...'/>
      <button data-testid="add-task-button" onClick={add}>Add</button>
      <div >
         {show.map((el)=>(
           <div className='showdata' key={el.id}>
             {el.name}
     
         <span><button className="far fa-trash-alt" onClick={()=>Delete(el.id)}>Delete</button></span>
           </div>
         ))}
       </div>
    </div>
  );
};

export default AddTask;
