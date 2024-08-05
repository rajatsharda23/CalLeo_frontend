// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import GetStarted from './pages/GetStarted';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-soft-white text-charcoal-black pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
