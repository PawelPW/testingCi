const mocha = require('mocha')
const should = reguire('chai')
describe("Ci testing", () => {
    it("test #1", () => {

        var value = 5
        value.should.equal(5)
    })
})