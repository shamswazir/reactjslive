import React,{useState} from 'react';
import Login from './Login';

function Registration() {
    
 const [firstName,setFirstName] = useState("");
 const [lastName,setLastName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 
 const [firstNameErr,setFirstNameErr] = useState("");
 const [lastNameErr,setLastNameErr] = useState("");
 const [passwordErr,setPasswordErr] = useState("");
 
  let handleSubmit = e => {
    e.preventDefault();
    const isVaild = formValidation();
    if(isVaild){
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }

  const formValidation = ()=>{
    const firstNameErr = {};
    const lastNameErr = {};
    const passwordErr = {};
    let isVaild= true;

    if(firstName.trim().length<5){
      firstNameErr.firstNameLong = "First name too short";
      isVaild=false;
    }
    if(firstName.trim().length>15){
      firstNameErr.firstNameLong = "First name too long";
      isVaild=false;
    }
    if(!lastName.includes("123")){
      lastNameErr.lastName123 = "Last name mush  have 123";
      isVaild=false;
    }

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


    
    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setPasswordErr(passwordErr);

    return isVaild;



  }


  return (
    <div className="wrapper">
       <div className="form-wrapper">
         <h1>Registration</h1>
         <form onSubmit={handleSubmit} >
           <div className="firstname">
             <label htmlFor="firstname">First Name</label>
             <input autoComplete="off" type="text" className="" value={firstName} placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}}  name="firstname"   />
             {Object.keys(firstNameErr).map((key)=>{
               return <span className="errorMessage">{firstNameErr[key]}</span>
             })}
           </div>
           <div className="lastname">
             <label htmlFor="lastname">Last Name</label>
             <input autoComplete="off" type="text" className="" value={lastName} placeholder="Last Name"  onChange={(e)=>{setLastName(e.target.value)}} name="lastname"   />
             {Object.keys(lastNameErr).map((key)=>{
               return <span className="errorMessage">{lastNameErr[key]}</span>
             })}
           </div>
           <div className="email">
             <label htmlFor="email">Email</label>
             <input autoComplete="off"  className="" value={email} placeholder="Emial" type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" required  />
           </div>
           <div className="password">
             <label htmlFor="password">Password</label>
             <input autoComplete="off" className="" type="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} name="password"   />
             {Object.keys(passwordErr).map((key)=>{
               return <span className="errorMessage">{passwordErr[key]}</span>
             })}
           </div>
           <div className="gender">
             <label htmlFor="gender">Gender:</label>
             <label className="male" >Male</label>
             <input  className="radio" type="radio" defaultChecked name="gender" ></input>
             <label className="female">Female</label>
             <input  className="radio" type="radio" name="gender" />
           </div>
           <div className="createAccount">
             <button type="submit">Create Account</button>
             <link src={Login}>Already Have an Account</link>
           </div>
         </form>
       </div>
    </div>
  );
}

export default Registration
