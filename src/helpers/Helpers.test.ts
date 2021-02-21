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
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return array that contains 1 to 5', () => {
    const result = Helpers.getAvailablePages(1, 25, 5, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return array that contains 1 to 4', () => {
    const result = Helpers.getAvailablePages(1, 19, 5, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return array that contains 5 to 10', () => {
    const result = Helpers.getAvailablePages(6, 50, 5, 5);
    expect(result).toEqual([4, 5, 6, 7, 8]);
  });

  it('should return array of 16 - 20', () => {
    const result = Helpers.getAvailablePages(18, 99, 5, 5);
    expect(result).toEqual([16, 17, 18, 19, 20]);
  });
});

describe('populateArray', () => {
  it('should return a populated array', () => {
    const array = Array(5);
    array[2] = 6;
    const result = Helpers.getPopulatedArray(array);
    expect(result).toEqual([4, 5, 6, 7, 8]);
  });

  it('should return a populated array if first defined', () => {
    const array = Array(5);
    array[array.length - 1] = 6;
    const result = Helpers.getPopulatedArray(array);
    expect(result).toEqual([2, 3, 4, 5, 6]);
  });
  it('should return a the same array', () => {
    const array = [1];
    const result = Helpers.getPopulatedArray(array);
    expect(result).toEqual([1]);
  });

  it('should return array of 16 - 20', () => {
    const array = Array(5);
    array[2] = 18;
    const result = Helpers.getPopulatedArray(array);
    expect(result).toEqual([16, 17, 18, 19, 20]);
  });
});
