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
        <div className='login-container'>
            <h3 className='login-title'>Log In!</h3>
            <form className='login-form' onSubmit={handleSubmit}>

                <label className='login-label'> 
                    <input className='login-input' type='text' name='username' placeholder='Username' onChange={changeHandler} value={userCredentials.username} required />
                </label>

                <label className='login-label'>
                    <input className='login-input' type='password' name='password' placeholder='Password' onChange={changeHandler} value={userCredentials.password} required />
                </label>

                <div>
                    <button className='login-button' type='submit'>Log in!</button>
                </div>

            </form>


            Need to create an Account? <Link to='/' className="login-reg-here">Register Here!</Link>

            {/* <Link to='/'><p className='login-reg-here'>Need to create an account? </p></Link> */}

        </div>
    )
}

export default Login