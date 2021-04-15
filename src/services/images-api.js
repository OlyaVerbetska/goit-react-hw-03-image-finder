import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '20318294-75f546a505c22d4a6a744da7a'

const fetchImages = ({searchQuery, currentPage = 1 , perPage = 12})=> {return axios
    .get(
      `/?key=${key}&q=${searchQuery}&image_type=photo&per_page=${perPage}&page=${currentPage}`,
    ).then(response => response.data.hits)
  
}
//eslint-disable-next-line
export default {fetchImages};