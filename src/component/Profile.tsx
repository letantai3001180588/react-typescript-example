import React, { useEffect, useState } from 'react';
import {isRequire,isEmail,removeError,isKeyUpInput} from '../services/auth'

function Profile() {
    const [fullname,setFullname]=useState('')
    const [email,setEmail]=useState('')
    const [birth,setBirth]=useState('')
    const [phone,setPhone]=useState('')

    const setMaxDateInput=()=>{
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();

        let d:string=''
        let m:string=''
        let y=String(yyyy)
        let setToday:string

        if(dd<10) d='0'+dd
        else d=String(dd)

        if(mm<10) m='0'+mm
        else m=String(dd)

        setToday = y+'-'+m+'-'+d;
        document.getElementById("datefield")?.setAttribute("max", setToday);
    }

    useEffect(()=>{
        setMaxDateInput();
    })

  return (
    <div className='container'>
        <div className='card'>
            <div className='card-title-profile'>Profile</div>
            
            <div className='label-profile'>Fullname:</div>
            <div className='field' id='fullname'>
                <input type='text' className='input'  value={fullname} onChange={(e)=>setFullname(e.target.value)} onKeyUp={()=>isKeyUpInput('fullname')} onBlur={()=>isRequire('fullname',fullname)}/>
                <span className='message-error'></span>
            </div>

            <div className='label-profile'>Day Of Birth:</div>
            <div className='field' id='birth'>
                <input type='date' id='datefield' className='input' value={birth} onChange={(e)=>setBirth(e.target.value)} onChangeCapture={()=>isKeyUpInput('birth')}  onBlur={()=>isRequire('birth',birth)}/>
                <span className='message-error'></span>
            </div>

            <div className='label-profile'>Email:</div>
            <div className='field' id='email'>
                <input type='email' className='input' value={email} onChange={(e)=>setEmail(e.target.value)} onKeyUp={()=>isKeyUpInput('email')} onBlur={()=>isEmail('email',email)}/>
                <span className='message-error'></span>
            </div>            

            <div className='label-profile'>Phone:</div>
            <div className='field' id='phone'>
                <input type='number' className='input'  value={phone} onChange={(e)=>setPhone(e.target.value)} onKeyUp={()=>isKeyUpInput('phone')} onBlur={()=>isRequire('phone',phone)}/>
                <span className='message-error'></span>
            </div>

            <div className='form-update'>
                <div></div>
                <div>
                    <button className='btn-signIn' onClick={()=>{
                        isRequire('fullname',fullname);
                        isRequire('birth',birth);
                        isRequire('phone',phone);
                        isEmail('email',email);
                    }}>
                        Update
                    </button>
                    <button className='btn-cancel' onClick={()=>{
                        removeError('email');removeError('fullname');removeError('birth');removeError('phone');
                        setBirth('');setEmail('');setFullname('');setPhone('')
                    }}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;
