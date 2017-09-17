var chai = require('chai')
var expect = chai.expect;
var JWT = require('../../../services/jwt');

describe('JSON Web Token', () => {
    describe('#encode()', () => {
        it('should be able to encode json', (done) => {
            let jsonObject = JSON.stringify({ test: 'object' })
            let encoded = JWT.encode(jsonObject, process.env.ENC_PASS)
            expect(encoded).to.not.be.null;
            done()
        })
    })

    describe('#decode()', () => {
        it('should be able to decode the encoded JWT', (done) => {
            let key = process.env.ENC_PASS
            let jsonObject = JSON.stringify({ test: 'object' })
            let encoded = JWT.encode(jsonObject, key)
            expect(JWT.decode(encoded, key)).to.be.equal(jsonObject)
            done()
        })
    })
})