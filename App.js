const photoAlbum = require('./photoAlbum').photoAlbum;

let url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + process.argv[2]

photoAlbum(url)