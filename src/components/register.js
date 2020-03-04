import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function RegistrationForm(props) {
    const [userCredentials, setCredentials] = useState({
        username: "",
        password1: "",
        password2: ""
    });
    const onSubmit = event => {
        event.preventDefault();
        axios
            .post("https://pathwaystodestiny.herokuapp.com/api/register/", userCredentials)
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
        <div className='container'>
            <h2 className='title'>Registration</h2>
            <form className='form' onSubmit={onSubmit}>

                <label className='label'>Username: 
                    <input className='input' type='text' name='username' placeholder='Username' onChange={changeHandler} value={userCredentials.username} required />
                </label>

                <label className='label'>Password:
                    <input className='input' type='password' name='password1' placeholder='Password' onChange={changeHandler} value={userCredentials.password1} required />
                </label>

                <label className='label'>Confirm Password:
                    <input className='input' type='password' name='password2' placeholder='Password' onChange={changeHandler} value={userCredentials.password2} required />
                </label>

                <div>
                    <button className='button' type='submit'>Sign Up!</button>
                </div>
                
                <Link to='/login'><p className='loginhere'>Already Registered? Login here</p></Link>
            </form>
        </div>
    );
};