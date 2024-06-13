// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import TicketTable from './components/TicketTable';
import NewTicketForm from './components/NewTicketForm';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleNewTicketClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const addTicket = (newTicket) => {
    setTickets([...tickets, newTicket]);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="auth-container">
        <Login onLogin={handleLogin} />
        <Register />
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <button onClick={handleNewTicketClick} className="new-ticket-button">+ New Ticket</button>
        <TicketTable tickets={tickets} setTickets={setTickets} />
        {showForm && <NewTicketForm onClose={handleCloseForm} onAddTicket={addTicket} />}
      </div>
    </div>
  );
};

export default App;