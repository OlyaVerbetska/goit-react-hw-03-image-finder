const ImageGalleryItem = ({ imageGallery }) => (
  <li className="ImageGalleryItem">
    <img
      src={imageGallery.webformatURL}
      alt=""
      className="ImageGalleryItem-image"
    />
  </li>
);

export default ImageGalleryItem;
