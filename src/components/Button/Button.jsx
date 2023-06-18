import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={style.LMButton}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
