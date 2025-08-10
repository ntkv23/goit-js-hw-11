import axios from 'axios';

const API_KEY = '51715057-18e32c1eb7da364006690b614';
const BASE_URL = 'https://pixabay.com/api/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function getImagesByQuery(query) {
  return api.get('', { params: { q: query } }).then(response => response.data);
}
