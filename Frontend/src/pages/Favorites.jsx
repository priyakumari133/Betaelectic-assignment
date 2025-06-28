import React, { useState, useEffect } from 'react';
import FavoriteCard from '../Components/FavoriteCard';
import ConfirmModal from '../Components/ConfirmModal';
import '../styles/Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    packageId: '',
    packageName: ''
  });

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  const handleRemove = (id) => {
    const packageToRemove = favorites.find(fav => fav.id === id);
    if (packageToRemove) {
      setConfirmModal({
        isOpen: true,
        packageId: id,
        packageName: packageToRemove.name
      });
    }
  };

  const confirmRemove = () => {
    const updatedFavorites = favorites.filter(fav => fav.id !== confirmModal.packageId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    
    setConfirmModal({
      isOpen: false,
      packageId: '',
      packageName: ''
    });
  };

  const cancelRemove = () => {
    setConfirmModal({
      isOpen: false,
      packageId: '',
      packageName: ''
    });
  };

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <h1 className="favorites-title">My Favorite NPM Packages</h1>
        
        {favorites.length > 0 ? (
          <div className="favorites-grid">
            {favorites.map((favorite) => (
              <FavoriteCard
                key={favorite.id}
                favorite={favorite}
                onRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          <div className="empty-favorites">
            <div className="empty-icon">💝</div>
            <p className="empty-title">No favorite packages yet!</p>
            <p className="empty-subtitle">Go to the search page to add some packages to your favorites.</p>
          </div>
        )}
      </div>
      
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Favorite Package"
        message={`Are you sure you want to remove "${confirmModal.packageName}" from your favorites? This action cannot be undone.`}
        onConfirm={confirmRemove}
        onCancel={cancelRemove}
      />
    </div>
  );
};

export default Favorites;