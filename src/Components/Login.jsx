import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './ComponentsCSS.css';
import {login, authFetch, useAuth, logout} from "../auth"


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("You pressed login")
    let body = {
      'username': username,
      'password': password
    }
    fetch('/api/login', {
        'method':'POST',
         headers : {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    }).then(r => r.json())
      .then(token => {
        if (token.access_token){
          login(token)
          console.log(token)          
        }
        else {
          console.log("Please type in correct username/password")
        }
      })
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const [logged] = useAuth();

  return (
    <div>
      <h2>Login Page</h2>
      { !logged ? <form action="#">
          <div className="Inputs">
              <TextField
                id="outlined-helperText"
                placeholder="Username" 
                onChange={handleUsernameChange}
                value={username} 
              />
          </div>
          <div className="Inputs">
              <TextField
                    id="outlined-helperText"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                 />
            </div>
        <Button size="large" variant="contained" onClick={onSubmitClick} type="submit">Login</Button>
      </form>
      : <Button size="large" variant="contained" onClick={() => logout()} type="submit">Loout</Button>
    }
    </div>
  )
}