
import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API=process.env.REACT_APP_API_URL || "http://localhost:8080/students"

function App(){

 const [students,setStudents]=useState([])
 const [name,setName]=useState("")

 useEffect(()=>{
  fetchStudents()
 },[])

 const fetchStudents=()=>{
  axios.get(API).then(res=>setStudents(res.data))
 }

 const addStudent=()=>{
  axios.post(API,{name}).then(()=>{
   setName("")
   fetchStudents()
  })
 }

 return(
 <div>
 <h2>Student Deployment App</h2>

 <input value={name} onChange={e=>setName(e.target.value)} placeholder="Student Name"/>
 <button onClick={addStudent}>Add</button>

 <ul>
 {students.map((s,i)=>(
  <li key={i}>{s.name}</li>
 ))}
 </ul>

 </div>
 )
}

export default App
