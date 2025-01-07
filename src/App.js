// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfileContainer from './views/UserProfile/UserProfileContainer';
import Home from './views/Home/Home';
import Calendar from './views/Calendar/Calendar';
import Chores from './views/Chores/Chores';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add the sidebar/navbar */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserProfileContainer />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/chores" element={<Chores />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
