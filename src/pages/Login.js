import React, { useState } from "react";
import {useLogin} from "../hooks/useLogin"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
const {error,login}=useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email,password)
  };
  return (
    <div>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
            <label><span>Email :</span>
            <input type="text"  required value={email} onChange={(e)=>setEmail(e.target.value)}/></label>
            <label><span>Password :</span>
            <input type="password"  required value={password} onChange={(e)=>SetPassword(e.target.value)}/></label>
            <button>Enter</button>
            {error && <p>{error}</p>}
        </form>
    </div>
    )
};

export default Login;
