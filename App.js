const photoAlbum = require('./photoAlbum').photoAlbum;
const fetchMock = require('fetch-mock');

let url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + process.argv[2]

photoAlbum(url)