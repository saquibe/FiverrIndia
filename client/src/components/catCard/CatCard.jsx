import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import "./CatCard.scss";
import { Link } from 'react-router-dom';

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.img} alt={item.title} /> {/* Better to use item.title for alt */}
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

// Define PropTypes for validation
CatCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,   // Validate img as required string
    desc: PropTypes.string.isRequired,  // Validate desc as required string
    title: PropTypes.string.isRequired, // Validate title as required string
  }).isRequired,  // The entire item object is required
};

export default CatCard;
