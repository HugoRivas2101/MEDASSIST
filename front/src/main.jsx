import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.jsx'; // Importa el componente Login
import Agenda from './pages/login/agenda.jsx'; // Importa el componente Agenda
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </Router>
  </React.StrictMode>
);