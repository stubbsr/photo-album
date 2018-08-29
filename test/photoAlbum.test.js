const chai = require('chai');
const chaiFetchMock = require('chai-fetch-mock');
const fetchMock = require('fetch-mock');
require('isomorphic-fetch');
const Chance = require('chance');
const photoAlbum = require('../lib/photoAlbum').photoAlbum;

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos?albumId='


chai.use(chaiFetchMock)
const expect = chai.expect;

let chance = new Chance();

describe('test', () => {
  before(() => fetchMock.get('*', { cats: 5 }))
 
  it('calls fetch', () => {
    return fetch('/cats').then(() => {
      expect(fetchMock).route('*').to.have.been.called;
    });
  });
 
  after(() => fetchMock.restore());
});

describe('photo album working', () => {
   before(() => fetchMock.get('*', { catName: 'Taco' }))
   photoAlbum(BASE_URL);

   it('should give a response', () => {
        expect(()=>photoAlbum).not.throw();
    });
   it('should return a JSON object', () => {
        expect(()=>photoAlbum.response.JSON()).to.include({ catName: 'Taco' });
    });
   it('should return the correct information', () => {
      photoAlbum(BASE_URL);
         expect(()=>photoAlbum().response.JSON().data).to.deep.include('Taco');
    });

   after(() => fetchMock.restore());

});
  
