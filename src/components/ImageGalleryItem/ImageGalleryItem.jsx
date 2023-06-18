import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevModal => !prevModal);
  };

  return (
    <>
      <li className={style.gallery_item}>
        <img
          className={style.item_img}
          src={image.webformatURL}
          alt={image.tags}
          onClick={toggleModal}
        />
        {showModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={toggleModal}
          />
        )}
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
