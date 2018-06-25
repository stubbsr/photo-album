var fetch = require('node-fetch')


fetch('https://jsonplaceholder.typicode.com/photos?albumId=3')
.then((response) => response.json())
.then(function(data) {
	console.log(data.map((photo) => `[${photo.id}] ${photo.title}`));

	
})



.catch(function(error) {
    console.log(error);
 });   
