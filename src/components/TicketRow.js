// src/components/TicketRow.js
import React from 'react';
import './TicketRow.css';

const TicketRow = ({ ticket }) => {
  return (
    <tr>
      <td>{ticket.id}</td>
      <td>{ticket.summary}</td>
      <td><a href="#">{ticket.assignee}</a></td>
      <td>{ticket.creator}</td>
      <td>{ticket.organization}</td>
      <td>{ticket.priority}</td>
      <td>-</td>
      <td>{ticket.status}</td>
      <td>{ticket.created}</td>
      <td>{ticket.updated}</td>
      <td>-</td>
    </tr>
  );
};

export default TicketRow;
