import React, { useState } from 'react';
import {isEmail,isPassword,isKeyUpInput} from '../services/auth'
import Nav from './Nav';

function Login() {
    const [show,setShow]=useState(false)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
  return (
    <>
        <Nav/>
        <div className='container'>
            <div className='card'>
                <div className='card-title-login'>Login</div>
                <div className='label-login'>Email:</div>
                <div className='field' id='email'>
                    <input type='text' className='input' placeholder='example@kyanon.digital' value={email} onChange={(e)=>setEmail(e.target.value)} onKeyUp={()=>isKeyUpInput('email')} onBlur={()=>isEmail('email',email)}/>
                    <span className='message-error'></span>
                </div>
                
                <div className='label-login'>Password:</div>
                <div className='field' id='password'>
                    <input type={!show?'password':'text'} className='input' placeholder='********' value={password} onChange={(e)=>setPassword(e.target.value)} onKeyUp={()=>isKeyUpInput('password')} onBlur={()=>isPassword('password',password)}/>
                    <span className='message-error'></span>
                </div>

                <div className='form-check'>
                    <div className='form-checkbox'>
                        <input id='input-password' type='checkbox' onChange={()=>setShow((show)=>!show)}/>
                        <div className='check-content'>
                            Show password
                        </div>
                    </div>
                    <button className='btn-signIn' onClick={()=>{isEmail('email',email);isPassword('password',password)}}>Sign in</button>
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;
