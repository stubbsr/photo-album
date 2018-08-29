/*const fetch = require('node-fetch')*/
require('isomorphic-fetch');

export const photoAlbum = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.map((photo) => `id[${photo.id}] ${photo.title}`));
    })
    .catch((error) => {
    console.log(error);
    });
};   

