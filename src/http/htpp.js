import axios from 'axios';

export const fetchAlbum = function () {
  return axios
    .get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'id',
        apiKey: '4f317f081f534f3b8004047ef047ff7c',
      },
    })
    .then(response => {
      return response.data;
    });
};
