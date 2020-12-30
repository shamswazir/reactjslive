import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [passwordErr,setPasswordErr] = useState("");
    
    let handleSubmit = e => {
        e.preventDefault();
        const isVaild = formValidation();
        if(isVaild){
          setEmail("");
          setPassword("");
        }
      }
    

  const formValidation = ()=>{
        const passwordErr = {};
        let isVaild= true;
    
    
    if(password.trim().length>10){
      passwordErr.passwordLong = "password too long";
      isVaild=false;
    }
    if(password.trim().length<=0){
      passwordErr.passwordRequired = "required filled";
      isVaild=false;
    }
    if(password.trim().length>=1&&password.trim().length<=5){
      passwordErr.passwordShort = "password too short";
      isVaild=false;
    }
    

        setPasswordErr(passwordErr);
    
        return isVaild;
    
      }
    
 
    return (
     
      <div className="wrapper">
       <div className="form-wrapper">
         <h1>Login</h1>
         <form onSubmit={handleSubmit}>
           <div className="email">
             <label htmlFor="email">Email</label>
             <input autoComplete="off"  className="" value={email}  placeholder="Email" type="email" required onChange={(e)=>{setEmail(e.target.value)}} />
           </div>
           <div className="password">
             <label htmlFor="password">Password</label>
             <input autoComplete="off" className="" type="password" value={password} placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}}  />
             {Object.keys(passwordErr).map((key)=>{
               return <span className="errorMessage">{passwordErr[key]}</span>
             })}
          </div>
          
           <div className="createAccount">
             <button type="submit">LogIn</button>
             <Link to='/'>Go for Registration</Link>
           </div>
         </form>
       </div>
    </div>
        
    )
}

export default Login
