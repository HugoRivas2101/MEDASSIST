import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try{
        const response = await axios.post("http://localhost:5000/auth/login", {
            email,
            password,
          });
          if (response.status === 200) {
            alert("Usuario validado");
          }
          else {
            alert("Usuario invalido");
          }
    }catch(error){
        alert("Error en la solicitud")
    }
    
     
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Soy un login page</h1>
        <input
          type="text"
          placeholder="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Registrarse</button>
      </form>
    </main>
  );
}
