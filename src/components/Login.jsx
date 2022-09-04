import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username,setUsername]=useState('')
    const navigate=useNavigate(false)
    function gotoCanvas(){
        localStorage.setItem('username',username)
        navigate('/Canvas')
        
    }
    return ( <div className="mt-20">
        <input value={username} onChange={(e)=>setUsername(e.target.value)} className="w-1/2 ml-40 h-10 p-5 text-gray-600" type="text" placeholder="Please Enter a username" />
        <div><button onClick={gotoCanvas} className="bg-green-400 p-5 rounded-full ml-96 text-lg mt-10">Go to Canvas</button></div>
    </div> );
}
 
export default Login;