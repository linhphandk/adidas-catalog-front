import Helpers from './Helpers';
const testList = [2, 3, 4, 5, 6, 4, 3, 5];
describe('moveDefaultIndexAsFirst', () => {
  it('should move the 3rd element to first position', () => {
    const result = Helpers.moveDefaultIndexToBegin(testList, 2);
    expect(result[0]).toBe(2);
  });
});

describe('getAvailablePages', () => {
  it('should return array that contains 1', () => {
    const result = Helpers.getAvailablePages(1, 5, 5, 5);
    expect(result).toEqual([1]);
  });

  it('should return array that contains 1 to 5', () => {
    const result = Helpers.getAvailablePages(1, 25, 5, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return array that contains 1 to 4', () => {
    const result = Helpers.getAvailablePages(1, 19, 5, 5);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should return array that contains 5 to 10', () => {
    const result = Helpers.getAvailablePages(6, 50, 5, 5);
    expect(result).toEqual([6, 7, 8, 9, 10]);
  });
});
