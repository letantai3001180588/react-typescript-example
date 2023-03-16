import {  useNavigate } from "react-router-dom";

export default function Nav(){
    const navigate=useNavigate()
    return(
        <div className="nav">
            <span onClick={()=>navigate('/')}>
                <h3>Home</h3>
            </span>
            <div style={{width:200,display:'flex',justifyContent:'space-around'}}>
                <button className="btn" onClick={()=>navigate('/login')}>Login</button>
                <button className="btn" onClick={()=>navigate('/profile')}>Profile</button>
            </div>
        </div>
    );
}