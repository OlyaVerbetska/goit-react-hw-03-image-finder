import { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery';

import './styles.css';

class App extends Component {


  handleSearchQuery = ({ query }) => {
    console.log(query);
  };

  render() {
    
    return (
      <>
        <Searchbar onSubmit={this.handleSearchQuery} />
        <p>searchResults</p>
        <ImageGallery/>
      </>
    );
  }
}

export default App;
