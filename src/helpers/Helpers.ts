/**
 * @class Helpers - contains all helper methods
 */
export default class Helpers {
  /**
   * @method
   * @param items - list of items
   * @param defaultIndex - position that should me moved to the beginning
   * @returns {Array} - list of indexed based on the items where the 
   * default index is in the first position
   */
  public static moveDefaultIndexToBegin:
    (
      items: Array<any> | undefined,
      defaultIndex: number,
    ) => number[] =
    (items, defaultIndex) => {
      if (items === undefined)
        return []
      const sortedIndexArray = items.map((_,index) => index)
      sortedIndexArray.splice(defaultIndex, 1);
      sortedIndexArray.unshift(defaultIndex);
      return sortedIndexArray
    }
}