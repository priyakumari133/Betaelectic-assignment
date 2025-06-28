import React from 'react';
import '../styles/FavoriteCard.css';

const FavoriteCard = ({ favorite, onRemove }) => {
  return (
    <div className="favorite-card">
      <div className="favorite-header">
        <h3 className="favorite-name">{favorite.name}</h3>
        <span className="favorite-version">v{favorite.version}</span>
      </div>
      
      <p className="favorite-description">{favorite.description}</p>
      
      <div className="favorite-reason">
        <h4 className="reason-title">Why it's my favorite:</h4>
        <p className="reason-text">"{favorite.reason}"</p>
      </div>
      
      <div className="favorite-footer">
        <span className="date-added">
          Added: {new Date(favorite.dateAdded).toLocaleDateString()}
        </span>
        <button
          onClick={() => onRemove(favorite.id)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;