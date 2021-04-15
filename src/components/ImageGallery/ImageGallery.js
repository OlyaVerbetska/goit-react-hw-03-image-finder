import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import '../ImageGallery/ImageGallery.scss'

const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImageGalleryItem
        bigImage={image.largeImageURL}
        galleryImage={image.webformatURL}
        altImage = {image.tags}
        key={image.id}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id:PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
