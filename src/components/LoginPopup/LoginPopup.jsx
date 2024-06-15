import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState]=useState("Login")

  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:<><input type="text" placeholder='First Name' name="" id="" required/><input type="text" placeholder='Last Name' name="" id="" required/></>}
                
                <input type="email" placeholder='Your Email' name="" id="" required/>
                <input type="password" placeholder='Password' name="" id="" required/>
            </div>
            <button>{currentState==="Sign Up"?"Sign Up":"Login"}</button>
            
            {currentState==="Login"
            ?<></>
            :<>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            </>
            }  
                  
            {currentState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Sign Up</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login</span></p>
            }            
        </form>
    </div>
  )
}

export default LoginPopup