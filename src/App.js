// src/App.js
import React from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import TicketTable from './components/TicketTable';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <TicketTable />
      </div>
    </div>
  );
};

export default App;