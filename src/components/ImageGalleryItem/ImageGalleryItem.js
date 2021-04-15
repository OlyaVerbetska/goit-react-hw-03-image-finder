
import {Component} from 'react';
import Modal from '../Modal/Modal';
import Loader from 'react-loader-spinner';
import '../.././styles.scss';


import '../ImageGalleryItem/ImageGalleryItem.scss'

class ImageGalleryItem extends Component {
  state = {
    modalImage: '',
    showModal:false,
    isLoad: false,
  }
componentDidMount() {
  this.setState({
    modalImage: this.props.bigImage
  })
}
toggleModal = () => {
 const {isLoad} = this.state;
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
  this.setState({ isLoad: !isLoad });
};

  render () {
    const {galleryImage,altImage } = this.props;
    const {showModal, modalImage, isLoad} = this.state;
    return (
    <>
      <li className="ImageGalleryItem">
    <img
      src={galleryImage}
      alt={altImage}
      className="ImageGalleryItem-image"
      onClick ={this.toggleModal} 
         />
  </li>
      {showModal && (
          <Modal onClose={this.toggleModal} image = {modalImage}>
             <img src={modalImage} alt=""/>
            {isLoad && (
        <div className = "Loader">  <Loader
            type="Hearts"
            color="#fff"
            height={60}
            width={500}
            timeout={1000} //3 secs
               
          />
          </div>
        )}
            
          </Modal>
        )}


        </>
  )
  }
}
export default ImageGalleryItem;
      