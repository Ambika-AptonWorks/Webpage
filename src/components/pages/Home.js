import React,{useState} from 'react'
import './Home.css'
import {Link} from "react-router-dom"
import { Redirect } from 'react-router-dom'

export default function Home() {
  const[auth,setAuth]=useState(false)
  if(auth){
      return <Redirect to="/CreateAccount" />
  }
  
  return (
      <>
      <Link to="/Home"></Link>
    
          <h1>Home</h1>
          <form> 
          <button type="button" clasName="button-btn" onClick={()=>setAuth(true)}>Signin</button>
          </form>
          
    </>
  )
}
