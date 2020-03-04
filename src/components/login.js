import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axioswithAuth';
import { Link } from 'react-router-dom';
//

const Login = props => {

    const [userCredentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = e => {
        e.preventDefault()
        axios
        .post("")
        .then(res => {
            props.history.push('/')
        })
        .catch(err => {
            console.log("Error eggboy", err)
        })
    }

    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }


    return (
        <div>
            <h3>Log In!</h3>
            <form onSubmit={handleSubmit}>
                <label className='label'>Username: 
                <input className='input' type='text' name='username' placeholder='Username' onChange={changeHandler} value={userCredentials.username} required />
                </label>

                <label className='label'>Password:
                <input className='input' type='password' name='password' placeholder='Password' onChange={changeHandler} value={userCredentials.password} required />
                </label>
            </form>
            <div>
                <p>
                    Need to create an account? <Link to='/Register'>Register Here!</Link>
                </p>
            </div>
        </div>
    )
}

export default Login