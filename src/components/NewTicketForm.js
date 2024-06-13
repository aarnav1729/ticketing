// src/components/NewTicketForm.js
import React from 'react';
import './NewTicketForm.css';

const NewTicketForm = ({ onClose }) => {
  return (
    <div className="new-ticket-form-overlay">
      <div className="new-ticket-form">

        <button className="close-button" onClick={onClose}>✖️</button>

        <h2>Create a ticket</h2>
        <form>

          <div className="form-group">
            <label>Organization (required)</label>
            <select defaultValue="webstax" required>
              <option value="webstax">Webstax</option>
              <option value="techsol">TechSol</option>
              <option value="innovate">Innovate</option>
            </select>
          </div>

          <div className="form-group">
            <label>Contact (required)</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select defaultValue="Unspecified">
              <option value="Unspecified">Unspecified</option>
              <option value="bug">Bug</option>
              <option value="feature_request">Feature Request</option>
              <option value="customer_support">Customer Support</option>
            </select>
          </div>

          <div className="form-group">
            <label>Summary (required)</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Description (required)</label>
            <textarea required></textarea>
          </div>

          <div className="form-group">
            <label>Assignee</label>
            <input type="text" defaultValue="Unassigned" />
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
            <input type="file" />
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