import React from 'react';
import '../styles/ConfirmModal.css';

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">{title}</h3>
        <p className="modal-message">{message}</p>
        
        <div className="modal-actions">
          <button onClick={onCancel} className="modal-cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="modal-confirm">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;