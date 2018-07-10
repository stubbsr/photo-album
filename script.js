const fetch = require('node-fetch')

let url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + process.argv


fetch('https://jsonplaceholder.typicode.com/photos?albumId=3')
.then((response) => response.json())
.then((data) => {
	console.log(data.map((photo) => `id[${photo.id}] ${photo.title}`));

	
})



.catch((error) => {
    console.log(error);
 });   
