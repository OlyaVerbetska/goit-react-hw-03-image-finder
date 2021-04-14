
import ImageGalleryItem from './ImageGalleryItem'

const ImageGallery = ({ images }) => (<ul className="ImageGallery">
    {images.map(image => (
        <ImageGalleryItem imageGallery={image} key = {image.id}  />
    ))}
</ul>)

export default ImageGallery;