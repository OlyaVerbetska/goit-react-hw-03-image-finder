
import {Component} from 'react';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    modalImage: '',
    showModal:false,
  }
componentDidMount() {
  this.setState({
    modalImage: this.props.bigImage
  })
}
toggleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
};

  render () {
    return (
    <>
      <li className="ImageGalleryItem">
    <img
      src={this.props.galleryImage}
      alt=""
      className="ImageGalleryItem-image"
      onClick ={this.toggleModal} 
         />
  </li>
      {this.state.showModal && (
          <Modal onClose={this.toggleModal} image = {this.state.modalImage}>
             <img src={this.state.modalImage} alt="" className = ".ImageGalleryItem-image"/>
          </Modal>
        )}
        </>
  )
  }
}
export default ImageGalleryItem;
      