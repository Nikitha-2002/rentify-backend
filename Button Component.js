// LikeButton Component
import React, { useState } from 'react';
import axios from 'axios';

const LikeButton = ({ propertyId }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = async () => {
    try {
      const { data } = await axios.post(`/api/properties/${propertyId}/like`);
      setLikes(data.likes);
    } catch (error) {
      console.error('Error liking property', error);
    }
  };

  return (
    <button onClick={handleLike}>
      Like ({likes})
    </button>
  );
};

export default LikeButton;
