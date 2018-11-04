const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const { getCreatedProperties } = require('../../dist/test')

var testNumber = 0
/**
 * getCreatedProperties function result in A it('', () => {}) is returned in getCreatedProperties function result in B it('', () => {})
 */
describe('get-created-properties', () => {
  it(`#${testNumber++}`, done => {
    const predecessorObject = {
      
    }
    const currentObject = {
      
    }

    const actualResult = getCreatedProperties([], predecessorObject, currentObject)
    const expectedResult = {
      
    }

    expect(actualResult).to.deep.equal(expectedResult)
    done()
  })


  it(`#${testNumber++}`, done => {
    const predecessorObject = {
      
    }
    const currentObject = {
      name: 'Ashley'
    }

    const actualResult = getCreatedProperties([], predecessorObject, currentObject)
    const expectedResult = {
      name: 'Ashley'
    }

    expect(actualResult).to.deep.equal(expectedResult)
    done()
  })


  it(`#${testNumber++}`, done => {
    const predecessorObject = {
      name: 'Ashley'
    }
    const currentObject = {
      
    }

    const actualResult = createHistoryObject([], predecessorObject, currentObject)
    const expectedResult = {

    }

    expect(actualResult).to.deep.equal(expectedResult)
    done()
  })
})