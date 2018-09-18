const chai = require('chai');
const request = require('request');
const Chance = require('chance');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { photoAlbum, parseData } = require('../src/photoAlbum');

const chance = new Chance();
chai.use(sinonChai);
const expect = chai.expect;
const sandbox = sinon.createSandbox();

describe('photoAlbum', () => {
    let randURL;

    beforeEach(() => {
        randURL = chance.url();
        sandbox.stub(request, 'get');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should reach the API', () => {
        photoAlbum();
        expect(request.get).callCount(1);
    });

    it('should call get with the url', () => {
        photoAlbum(randURL);
        expect(request.get).calledWith(randURL);
    });
});


describe('parseData', () => {
    let randomResponseBody = chance.n(()=> {
        return {
            id: chance.natural(),
            title: chance.sentence({ words: 5 }),
            bullshit: chance.sentence()
        };
    }, chance.d6());

    it('should remove bullshit', () => {
        const actual = parseData(JSON.stringify(randomResponseBody));
        const expected = randomResponseBody.map(({id, title}) => {
            return `[${id}] ${title}`;
        });
        expect(actual).to.deep.eql(expected);
    });
});
