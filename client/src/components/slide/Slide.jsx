import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import "./Slide.scss";
import Slider from 'infinite-react-carousel';

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className='slide'>
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

// Define PropTypes for the component
Slide.propTypes = {
  children: PropTypes.node.isRequired,       // Validate children as React nodes (elements, components, text, etc.)
  slidesToShow: PropTypes.number.isRequired, // Validate slidesToShow as a required number
  arrowsScroll: PropTypes.number.isRequired, // Validate arrowsScroll as a required number
};

export default Slide;
