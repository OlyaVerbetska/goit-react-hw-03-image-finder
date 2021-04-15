import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImageGalleryItem
        bigImage={image.largeImageURL}
        galleryImage={image.webformatURL}
        key={image.id}
      />
    ))}
  </ul>
);

export default ImageGallery;
