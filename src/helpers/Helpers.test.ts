import Helpers from './Helpers'
let testList = [2,3,4,5,6,4,3,5]
describe('moveDefaultIndexAsFirst', () => { 
  it('should move the 3rd element to first position', () => { 
    let result = Helpers.moveDefaultIndexToBegin(testList, 2)
    expect(result[0]).toBe(2)
  })
})