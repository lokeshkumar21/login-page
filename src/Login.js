import React from 'react'
import Home from './Home'
import './Login.css'

const Login = () => {

  var userData=[{userName:"Lokesh",passCode:123,cart:[]},{userName:"Yuvaraja",passCode:1234,cart:[]},{userName:"Vignesh",passCode:12345,cart:[]}];
  const signup=()=>{
    var Name=document.getElementById("name").value;
    var Password=document.getElementById("password").value;
    const activeUser=userData.filter((value)=> Name == value.userName);
    
    if(activeUser.length>0){
      
      if(activeUser[0].passCode == Password){
        
       localStorage.setItem("userName",activeUser[0].userName);
       window.location.replace("/home");

       
      }
    }
    else{
      console.log("Incorect username and password");
    }

  }
  return (
    <div className="container">
        
        <div class="form">
          <h1 className="title">Login</h1>
          <input type="text" id="name" placeholder='Username'/>
          <input type="password" id="password" placeholder="password"/>
          <div className="row">
            <div class="checkbox">
              <input type="checkbox" name="check" id="check"></input>
              <label for="check">Remainder me</label>
            </div>
            <a href="amazon.com">Forget Password?</a>
          </div>
         
          <button className="btn" onClick={signup}>Login</button>
          <p>Don't have an account? <span>Register</span></p>
         </div>
         
         
    </div>
  )
}

export default Login