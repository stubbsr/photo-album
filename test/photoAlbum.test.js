const chai = require('chai');
const photoAlbum = require('../lib/photoAlbum').photoAlbum;
const BASE_URL = 'https://jsonplaceholder.typicode.com/photos?albumId='

const expect = chai.expect;


describe('photo album', () => {
	it('should give a response', () => {
		let url = BASE_URL + "3";
		return photoAlbum(url)
			expect(photoAlbum.ok).to.be.true;
		})
	});
	it('should return a JSON object', () => {
		let url = BASE_URL + "1";
		return photoAlbum(url)
			expect(photoAlbum).to.be.an('array');
		});
	it('should fail with error on bad url', () => {
		let url = BASE_URL + "2222"
		return photoAlbum(url) 
			expect(photoAlbum).to.eventually.be.rejected;
	});
