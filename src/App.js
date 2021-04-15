import { Component } from 'react';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

import imagesAPI from './services/images-api.js';

import './styles.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
    if (this.state.currentPage !== 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSearchQuery = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
      isLoading: false,
      error: null,
    });
  };

  getImages = () => {
    const { currentPage, searchQuery } = this.state;
    //=====newsApi
    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    imagesAPI
      .fetchImages(options)
      .then(hits =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error: 'zhopa' }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchQuery} />
        <ImageGallery images={images} />
        {isLoading && (
          <Loader
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
               
          />
        )}

        {!isLoading && images.length > 0 && (
          <Button onClick={this.getImages}> Load more</Button>
        )}
      </div>
    );
  }
}

export default App;
