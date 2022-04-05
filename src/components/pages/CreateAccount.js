import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Create.css'

export default function CreateAccount() {
    const initialValues={
     firstname:'',
     Email:'',
     password:'',
    }
    const[value,setValue]=useState({initialValues})
    const[formerror,setFormerror]=useState({})
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target)
        
        
    };
  return (
      <>
        <Link to="/CreateAccount"   />
        <h1>CreateAccount</h1>
        <form onSubmit={handleSubmit} className="form-control">
            <div className='container'>
            <div className="row">
                <label>Username</label>
                <input type="text" name='username' placeholder='username'
                 value={value.username}  
                 onChange={e =>setValue({...value,username:e.target.value})}></input>
            </div>
           
            <div className='row'>
                <label>Email</label>
                <input type="email" name='Email' placeholder='Email' 
                value={value.Email}  
                onChange={e =>setValue({...value,Email:e.target.value})}></input>
            </div>
            <div className='row'>
                <label>Password</label>
                <input type="password" name='password' placeholder='password'
                  value={value.password}
                  onChange={e =>setValue({...value,password:e.target.value})}></input>
            </div>
            <div >
            <button className='btn btn-success'>Create</button>
            </div>
            <span>Already have Account?Login<a href="#">Here</a></span>
            </div>
        </form>
      
      </>
  )
}
