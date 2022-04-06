import React,{useState} from 'react'
import './Home.css'
import {Link} from "react-router-dom"
import { Navigate } from 'react-router-dom'

export default function Home() {
  const[auth,setAuth]=useState(false)
 
  if(auth){
      return < Navigate to="/CreateAccount" />
  }
  
  return (
      <>
      <Link to="/Home"  />
         <div className='Container'>
          <h1 >Home</h1>
          <div>
          <button id="signup" className="btn btn-warning" onClick={()=>setAuth(true)}>Signin</button> 
          </div>
          </div>
    </>
  )
}
