// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import TicketTable from './components/TicketTable';
import NewTicketForm from './components/NewTicketForm';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tickets, setTickets] = useState([]);

  // Load tickets from local storage when the component mounts
  useEffect(() => {
    const savedTickets = localStorage.getItem('tickets');
    if (savedTickets) {
      setTickets(JSON.parse(savedTickets));
    }
  }, []);

  // Save tickets to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  const handleNewTicketClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const addTicket = (newTicket) => {
    setTickets([...tickets, newTicket]);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <button onClick={handleNewTicketClick} className="new-ticket-button">+ New Ticket</button>
        <TicketTable tickets={tickets} />
        {showForm && <NewTicketForm onClose={handleCloseForm} onAddTicket={addTicket} />}
      </div>
    </div>
  );
};

export default App;