import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from '../../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('')


    const login = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(e=>alert(e.message));
    }
    const register = e =>{
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(e=>alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG27.png"
                    className="login__logo"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} type="email" onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={e=>setPassword(e.target.value)} />
                    <button onClick={login} type="submit" className="login__loginBtn">Sign in</button>
                </form>
                <p>
                    By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login__regBtn">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
