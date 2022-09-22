const mocha = require('mocha')
const chai = require('chai')
const { expect } = require('chai')
describe("Ci testing", () => {
    it("test #1", () => {

        var value = 5
        expect(value).to.equal(5)
    })
})