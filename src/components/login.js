import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = props => {

    const [userCredentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = e => {
        e.preventDefault()
        axios
        .post("https://pathwaystodestiny.herokuapp.com/api/login/", userCredentials)
        .then(res => {
            // props.history.push('/')
            console.log(res)
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

                <div>
                    <button className='button' type='submit'>Log in!</button>
                </div>

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