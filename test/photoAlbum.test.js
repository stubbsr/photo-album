const chai = require('chai');
const request = require('request')
const Chance = require('chance')
const sinon = require('sinon');
const sinonChai = require('sinon-chai')
const { photoAlbum } = require('../lib/photoAlbum')

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=3'


chai.use(sinonChai);
chance = new Chance();
const expect = chai.expect;
const sandbox = sinon.createSandbox()

describe('photo album request working', () => {
    let randomResponseBody;

    beforeEach(() => {
        sandbox.stub(request, 'get');
        sandbox.stub(console, 'log');
        photoAlbum(BASE_URL);

        randomResponseBody = chance.n(()=> {
            return {
                id: chance.natural(),
                title: chance.sentence({ words: 5 })
            };
        }, chance.d6());
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should call the correct number of times', () => {
        request.get.yield(null, {
            'body': JSON.stringify(randomResponseBody)
        });
        expect(request.get).to.have.callCount(1);
        expect(console.log.callCount).to.equal(randomResponseBody.length);
    });
});

describe('photo album returns the correct information', ()=> {
    beforeEach(() => {
        sandbox.stub(request, 'get');
        sandbox.stub(console, 'log');
        photoAlbum(BASE_URL);
        randomResponseBody = chance.n(()=> {
            return {
                id: chance.natural(),
                title: chance.sentence({ words: 5 })
            };
        }, chance.d6());
    });
    afterEach(() => {
        sandbox.restore();
    });

    it('should return the info in the correct format', ()=> {
        request.get.yield(null, {
            'body': JSON.stringify(randomResponseBody)
        });
        for (let i = 0; i < randomResponseBody.length; i++) {
            const photo = randomResponseBody[i];
            expect(console.log.getCall(i).calledWith(`[id] ${photo.id}, ${photo.title}`)).to.equal(true);    
        }
    });    
});


describe('when photo album encounters error', ()=> {
    beforeEach(() => {
      sandbox.stub(request, 'get');
      photoAlbum(BASE_URL); 
      errorMsg = "whoopsies"
      request.get.throws(errorMsg)
    });
    afterEach(() => {
        sandbox.restore();
    });

    it('should return error message on error', ()=>{
        expect(request.get).to.have.callCount(1);
        expect(request.get).to.throw(Error)

    });

});




