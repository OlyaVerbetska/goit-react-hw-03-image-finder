import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '20318294-75f546a505c22d4a6a744da7a';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${key}=yellow+flowers&image_type=photo`,
    )
    .then(response => console.log(response));
};

export default { fetchImages };
