// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import TicketTable from './components/TicketTable';
import NewTicketForm from './components/NewTicketForm';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleNewTicketClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <button onClick={handleNewTicketClick} className="new-ticket-button">+ New Ticket</button>
        <TicketTable />
        {showForm && <NewTicketForm onClose={handleCloseForm} />}
      </div>
    </div>
  );
};

export default App;
