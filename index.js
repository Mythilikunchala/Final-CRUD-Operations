import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Login from './Login';
import CRUD from './CRUD';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router> {/* Wrap your entire application with the Router */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/CRUD" element={<CRUD />} />
      {/* Define other routes as needed */}
    </Routes>
  </Router>
);
