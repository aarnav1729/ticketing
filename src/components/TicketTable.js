// src/components/TicketTable.js
import React from 'react';
import TicketRow from './TicketRow';
import './TicketTable.css';

const TicketTable = () => {
  const tickets = [
    {
      id: 2,
      summary: 'Import tickets from your previous Spiceworks ...',
      assignee: 'aarnav singh',
      organization: 'webstax',
      priority: 'Medium',
      status: 'open',
      created: '18h ago',
      updated: '18h ago',
    },
    {
      id: 1,
      summary: 'Welcome to the Premier Energies Pvt Ltd Custom Ticketing Solution!',
      assignee: 'aarnav singh',
      organization: 'webstax',
      priority: 'Medium',
      status: 'open',
      created: '18h ago',
      updated: '18h ago',
    },
  ];

  return (
    <table className="ticket-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Summary</th>
          <th>Assignee</th>
          <th>Creator</th>
          <th>Organization</th>
          <th>Priority</th>
          <th>Category</th>
          <th>Status</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Due</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <TicketRow key={ticket.id} ticket={ticket} />
        ))}
      </tbody>
    </table>
  );
};

export default TicketTable;
