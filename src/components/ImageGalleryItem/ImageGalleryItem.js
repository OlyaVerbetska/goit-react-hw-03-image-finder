
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
    return (
    <>
      <li className="ImageGalleryItem">
    <img
      src={this.props.galleryImage}
      alt={this.props.altImage}
      className="ImageGalleryItem-image"
      onClick ={this.toggleModal} 
         />
  </li>
      {this.state.showModal && (
          <Modal onClose={this.toggleModal} image = {this.state.modalImage}>
             <img src={this.state.modalImage} alt=""/>
            {this.state.isLoad && (
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
      