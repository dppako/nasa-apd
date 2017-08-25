import React from 'react';
import PropTypes from 'prop-types';
import './ImageCard.css';

const ImageCard = ({ imageData = {} }) => {
  const { title, url, explanation, date, copyright } = imageData;
  return (
    <article className='ImageCard'>
      <header>
        <h2 className='siimple-h3'>{title}</h2>
      </header>
      <img className='ImageCard__image' src={url} alt={title} />
      <p>
        <small className='siimple-small'>{copyright}, {date}</small>
      </p>
      <p className='siimple-p'>{explanation}</p>
    </article>
  );
};

ImageCard.propTypes = {
  imageData: PropTypes.object
};

export default ImageCard;