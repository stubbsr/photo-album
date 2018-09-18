const request = require('request');

const photoAlbum = url => {
    request.get(url);
};

const parseData = data => {
    const result = JSON.parse(data);
    return result.map(({ id, title }) => {
        return `[${id}] ${title}`;
    });
};

module.exports = { photoAlbum, parseData };
