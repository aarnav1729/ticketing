// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">spiceworks</div>
      <ul>
        <li><span className="icon">🏠</span></li>
        <li><span className="icon">📩</span></li>
        <li><span className="icon">📊</span></li>
        <li><span className="icon">💾</span></li>
        <li><span className="icon">⚙️</span></li>
        <li><span className="icon">💻</span></li>
        <li><span className="icon">⬇️</span></li>
        <li><span className="icon">📄</span></li>
        <li><span className="icon">🗂️</span></li>
        <li><span className="icon">❓</span></li>
      </ul>
    </div>
  );
};

export default Sidebar;
