import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {axiosWithAuth} from "../utils/axioswithAuth.js";


export default function RegistrationForm(props) {
    const [userCredentials, setCredentials] = useState({
        username: "",
        password1: "",
        password2: ""
    });
    const onSubmit = event => {
        event.preventDefault();
        axios
            .post("https://pathwaystodestiny.herokuapp.com/api/registration/", userCredentials)
            .then(res => {
                console.log(res);
                props.history.push("/game");
            })
            .catch(err => console.log(err.response))
    }
    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    return (
        <div className='register-container'>
            <h2 className='reg-title'>Registration</h2>
            <form className='reg-form' onSubmit={onSubmit}>

                <label className='reg-label'>
                    <input className='reg-input' type='text' name='username' placeholder='Username' onChange={changeHandler} value={userCredentials.username} required />
                </label>

                <label className='reg-label'>
                    <input className='reg-input' type='password' name='password1' placeholder='Password' onChange={changeHandler} value={userCredentials.password1} required />
                </label>

                <label className='reg-label'>
                    <input className='reg-input' type='password' name='password2' placeholder='Confirm Password' onChange={changeHandler} value={userCredentials.password2} required />
                </label>

                <div>
                    <button className='reg-button' type='submit'>Sign Up!</button>
                </div>
            </form>

                {/* <Link to='/login'><p className='reg-login-here'>Already Registered? Login here</p></Link> */}
                Already Registered? <Link to='/login' className="reg-login-here">Log in Here!</Link>
            
        </div>
    );
};