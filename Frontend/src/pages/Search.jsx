import React, { useState } from 'react';
import { searchNPMPackages } from '../utils/api';
import SearchForm from '../Components/SearchForm';
import '../styles/Search.css';

const Search = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [addingFavorite, setAddingFavorite] = useState(null);
  const [favoriteReason, setFavoriteReason] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    
    try {
      const results = await searchNPMPackages(query);
      setPackages(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToFavorites = (pkg) => {
    setAddingFavorite(pkg.name);
    setFavoriteReason('');
  };

  const confirmAddToFavorites = () => {
    if (!addingFavorite || !favoriteReason.trim()) return;

    const packageToAdd = packages.find(pkg => pkg.name === addingFavorite);
    if (!packageToAdd) return;

    const existingFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    // Check if already exists
    if (existingFavorites.some(fav => fav.name === packageToAdd.name)) {
      alert('This package is already in your favorites!');
      setAddingFavorite(null);
      return;
    }

    const newFavorite = {
      id: Date.now().toString(),
      name: packageToAdd.name,
      description: packageToAdd.description,
      version: packageToAdd.version,
      reason: favoriteReason.trim(),
      dateAdded: new Date().toISOString()
    };

    const updatedFavorites = [...existingFavorites, newFavorite];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    
    setAddingFavorite(null);
    setFavoriteReason('');
    alert('Package added to favorites!');
  };

  const cancelAddToFavorites = () => {
    setAddingFavorite(null);
    setFavoriteReason('');
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <h1 className="search-title">Search NPM Packages</h1>
        
        <SearchForm onSearch={handleSearch} loading={loading} />
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {packages.length > 0 && (
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.name} className="package-card">
                <div className="package-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <span className="package-version">v{pkg.version}</span>
                </div>
                
                <p className="package-description">{pkg.description}</p>
                
                {pkg.author && (
                  <p className="package-author">By: {pkg.author.name}</p>
                )}
                
                <button
                  onClick={() => handleAddToFavorites(pkg)}
                  className="add-favorite-button"
                >
                  Add to Favorites
                </button>
              </div>
            ))}
          </div>
        )}
        
        {packages.length === 0 && !loading && (
          <div className="empty-state">
            <p className="empty-message">Search for NPM packages to get started!</p>
          </div>
        )}
      </div>
      
      {/* Add to Favorites Modal */}
      {addingFavorite && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">
              Add "{addingFavorite}" to Favorites
            </h3>
            <p className="modal-message">
              Tell us why this is your favorite package:
            </p>
            
            <textarea
              value={favoriteReason}
              onChange={(e) => setFavoriteReason(e.target.value)}
              placeholder="e.g., Great for handling dates, Easy to use, Excellent documentation..."
              className="reason-textarea"
              rows={4}
              required
            />
            
            <div className="modal-actions">
              <button onClick={cancelAddToFavorites} className="modal-cancel">
                Cancel
              </button>
              <button
                onClick={confirmAddToFavorites}
                disabled={!favoriteReason.trim()}
                className="modal-confirm"
              >
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;