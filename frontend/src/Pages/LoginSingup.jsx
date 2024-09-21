import React, { useState } from 'react'
import '../Pages/CSS/LoginSingup.css'

function LoginSingup() {

  const [state,setState]= useState("Login")
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const login = async () =>{
    console.log("login Fuction Executed",formData);
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors || 'Sign up failed');
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      alert('An error occurred. Please try again.');
    }
  }

  const singup = async () => {
    console.log("SignUp Function Executed", formData);
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors || 'Sign up failed');
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">
        <h1>{state}</h1>
        <div className="loginsingup-fields">
          {state==="Sing Up"?
          <input name='username' value={formData.username}
          onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} 
          onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler}
           type="password" placeholder='password' />
        </div>
        <button onClick={()=>{state==="Login"?login():singup()}}>Continue</button>
        {state==="Sing Up"?<p className='loginsingup-login'>Already have an account? 
          <span onClick={()=>{setState("Login")}}
            >Login Here</span></p>:<p className='loginsingup-login'>
            Create An Acount ? <span onClick={()=>{setState("Sing Up")}}>Click Here</span></p>}
        <div className="loginsingup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup