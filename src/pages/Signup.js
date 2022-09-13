import React, { useState } from "react";
import {useSignup} from "../hooks/useSignup"
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const {error,signup}=useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signup(email,password)
  };
  return (
    <div>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
            <label><span>Email :</span>
            <input type="text"  required value={email} onChange={(e)=>setEmail(e.target.value)}/></label>
            <label><span>Password :</span>
            <input type="password"  required value={password} onChange={(e)=>SetPassword(e.target.value)}/></label>
            <button>Register</button>
            {error && <p>{error}</p>}
        </form>
    </div>
    )
};

export default Signup;
