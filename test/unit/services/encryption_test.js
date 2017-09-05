var chai = require('chai')
var expect = chai.expect;
var Encryption = require('../../../services/encryption');

describe('Encryption', () => {
    beforeEach((done) => {
        done()
    });

    describe('#encodeHash()', () => {
        it('should not be null if only string to encode is passed', (done) => {
            let value = 'someValue'
            expect(Encryption.encodeHash(value)).to.not.be.null;
            done();
        })

        it('should be able to get a key', (done) => {
            let value = 'someValue'
            expect(Encryption.encodeHash(value, 'somekey')).to.not.be.null;
            done();
        })
    })

    describe('#decodeHash()', () => {
        it('should decode a given string', (done) => {
            let value = 'someValue';
            expect(Encryption.decodeHash(Encryption.encodeHash(value)))
                .to.be.equal(value);
            done()
        })
    })
})