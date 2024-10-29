import React from "react";
import {Route, Routes } from "react-router-dom";
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
export default App;