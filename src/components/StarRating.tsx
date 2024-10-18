import React from 'react';

interface StarRatingProps {
  id: number;
  rating: number; 
}

const StarRating: React.FC<StarRatingProps> = ({ id, rating }) => {
  const clampedRating = Math.max(0, Math.min(10, rating));

  return (
    <div className="rating-div" key={id}>
      <strong>Rating:</strong>
      {[...Array(10)].map((_, index) => {
        const starType = index < clampedRating ? '★' : '☆'; 
        return (
          <span 
            key={index} 
            style={{ fontSize: '24px', color: index < clampedRating ? '#FFD700' : '#ccc' }}>
            {starType}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
