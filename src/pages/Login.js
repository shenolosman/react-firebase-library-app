import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
        </form>
    </div>
    )
};

export default Login;
