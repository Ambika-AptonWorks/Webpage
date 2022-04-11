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
      <Link to="/"  />
          <h1 >Home</h1>
          <p>if you want to continue signin here!</p>
          <div className='button d-flex justify-content-center'>
          <button id="signup" className="btn btn-warning" onClick={()=>setAuth(true)}>Signin</button> 
          </div>
    </>
  )
}
