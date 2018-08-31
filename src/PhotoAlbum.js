const request = require('request');


export const photoAlbum = (url) => {
    request.get(url, {}, (err, result) => {
        if (err) {
            console.log(err);
            return
        }

        const bodyPhotos = JSON.parse(result.body);
        const photoInfo = bodyPhotos.map((photo) => `[id] ${photo.id}, ${photo.title}`);
        photoInfo.forEach((item) => console.log(item));
    });
};
