import React, { useState } from "react";
import "./Login.css";
import { TextField, Button, Paper, FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackDrop from "./BackDrop";
const Login = () => {
  const [open,setOpen] = useState(false);
  const navigate = useNavigate();
  const [userData,setUserData] = useState(null);
  const [error,setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setOpen(true);
    const response = fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    try{
      const jsonResponse = await response.json();
      setOpen(false);
      const user = jsonResponse.user;
      if(!user)
      {
        console.log("Un authorized");
      }
      else{
        navigate('/AddCourse');
      }
    }
    catch(err)
    {
      console.log(err);
    }
  };
  return (
    <div className="outerLoginDiv">
      <Paper>
      <h1>Login</h1>
        <div className="loginDiv">
          <form onSubmit={handleSubmit} className="loginForm">
            <FormLabel>Email</FormLabel>
            <TextField
              color="secondary"
              size="small"
              name="email"
              type={"email"}
              value={form.email}
              
              onChange={handleFormChange}
              required
            />
            <FormLabel>Password</FormLabel>
            <TextField
              color="secondary"
              size="small"
              name="password"
              value={form.password}
              type={"password"}
              
              onChange={handleFormChange}
              required
            />
            <Button variant="contained" type="submit" id="login">
              login
            </Button>
            <FormLabel>{error}</FormLabel>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
