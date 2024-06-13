// src/components/NewTicketForm.js
import React from 'react';
import './NewTicketForm.css';

const NewTicketForm = ({ onClose, onAddTicket }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTicket = Object.fromEntries(formData.entries());
    newTicket.created = new Date().toLocaleString();
    newTicket.updated = new Date().toLocaleString();
    if (formData.get('attachment').name) {
      newTicket.attachment = formData.get('attachment').name;
    } else {
      newTicket.attachment = "No file attached";
    }
    if (typeof onAddTicket === 'function') {
      onAddTicket(newTicket);
    }
    onClose(); 
  };

  return (
    <div className="new-ticket-form-overlay">
      <div className="new-ticket-form">
        <button className="close-button" onClick={onClose}>✖️</button>
        <h2>Create a ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Organization (required)</label>
            <select name="organization" defaultValue="Premier Energies Limited" required>
              <option value="premier energies pvt ltd">Premier Energies Ltd</option>
              <option value="premier solar powertech">Premier Solar Powertech</option>
              <option value="premier photovoltaic pvt ltd">Premier Photovoltaic Pvt Ltd</option>
            </select>
          </div>
          <div className="form-group">
            <label>Contact (required)</label>
            <input type="text" name="contact" required />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select name="category" defaultValue="SAP/IT/Other">
              <option value="SAP">SAP</option>
              <option value="IT">IT</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Summary (required)</label>
            <input type="text" name="summary" required />
          </div>

          <div className="form-group">
            <label>Description (required)</label>
            <textarea name="description" required></textarea>
          </div>

          <div className="form-group">
            <label>Assignee</label>
            <select name="assignee" defaultValue="Unassigned">
              <option value="Unspecified">Unspecified</option>
              <option value="bug">Bug</option>
              <option value="feature_request">Feature Request</option>
              <option value="customer_support">Customer Support</option>
            </select>
          </div>

          <div className="form-group">
            <label>Priority</label>
            <div>
              <input type="radio" id="high" name="priority" value="High" />
              <label htmlFor="high">High</label>
              <input type="radio" id="medium" name="priority" value="Medium" defaultChecked />
              <label htmlFor="medium">Medium</label>
              <input type="radio" id="low" name="priority" value="Low" />
              <label htmlFor="low">Low</label>
            </div>
          </div>
          <div className="form-group">
            <label>Attach a file</label>
            <input type="file" name="attachment" />
          </div>
          <div className="form-buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicketForm;