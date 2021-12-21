const axios = require('axios');
const {fetchAlbum} = require('../src/http/htpp');

jest.mock('axios');
test('mock axios get function', async () => {
  expect.assertions(1);
  const berita = {
    id: 1,
    title: [],
  };
  const payload = {data: berita};

  // sekarang mock axios get method
  axios.get = jest.fn().mockResolvedValue(payload);
  await expect(fetchAlbum()).resolves.toEqual(berita);
});
