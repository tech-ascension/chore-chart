import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faUsers, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; // Import custom navbar styles

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false); // To toggle the navbar collapse

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleNavbar}>
          {collapsed ? '>' : '<'}
        </button>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} />
            {!collapsed && <span className="nav-text">Home</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/calendar" className="nav-link">
            <FontAwesomeIcon icon={faCalendar} />
            {!collapsed && <span className="nav-text">Calendar</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/chores" className="nav-link">
            <FontAwesomeIcon icon={faClipboardList} />
            {!collapsed && <span className="nav-text">Chores</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link">
            <FontAwesomeIcon icon={faUsers} />
            {!collapsed && <span className="nav-text">Users</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
