import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router'

import './Create.css'
const initialValues = {
    firstname: '',
    Email: '',
    password: '',
}
export default function CreateAccount() {
    const [value, setValue] = useState({ initialValues })
    const [formerror, setFormerror] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [back, setBack] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormerror(validate(value));
        setIsSubmit(true)
    };
    useEffect(() => {
        if (Object.keys(formerror).length === 0 && isSubmit) {
            console.log(value)
        }
    }, [formerror]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "username is required"
        }
        if (!values.Email) {
            errors.Email = "Email is required"
        } else if (!regex.test(values.Email)) {
            errors.Email = "invalid Email"
        }
        if (!values.password) {
            errors.password = "password is requied"
        } else if (values.password.length < 4) {
            errors.password = "passsword must in greater than 4 characters"
        } else if (values.password.length > 10) {
            errors.password = "password do not exceed 10 characters"
        }
        return errors;
    };
    if (back) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <>
            <Link to="/CreateAccount" />
            <div className='form d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className="container form-control">
                <h1>CreateAccount</h1>
                <div className='ui divider'></div>
                <div className='ui form'>
                    <div className='field  '>
                        <label>Username</label>
                        <input type="text" name='username' placeholder='username'
                            value={value.username}
                            onChange={e => setValue({ ...value, username: e.target.value })}></input>
                    </div>
                    <p>{formerror.username}</p>
                    <div className='field '>
                        <label>Email</label>
                        <input type="email" name='Email' placeholder='Email'
                            value={value.Email}
                            onChange={e => setValue({ ...value, Email: e.target.value })}></input>
                    </div>
                    <p>{formerror.Email}</p>
                    <div className='field '>
                        <label>Password</label>
                        <input type="password" name='password' placeholder='password'
                            value={value.password}
                            onChange={e => setValue({ ...value, password: e.target.value })}></input>
                    </div>
                    <p>{formerror.password}</p>
                    <div>
                        <button className='btn btn-info mx-3' onClick={() => setBack(true)}>Back</button>
                        <button className='btn btn-success'>Create</button>
                    </div>
                    <span>Already have Account?Login<a href="#">Here</a></span>
                </div>
                {Object.keys(formerror).length === 0 && isSubmit ? (<div className='success'> Account Created Successfully!</div>) :
                    (null)}
            </form>
            </div>
            
        </>
    )
}
