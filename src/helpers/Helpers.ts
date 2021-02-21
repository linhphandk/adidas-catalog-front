/**
 * Helpers - contains all helper methods
 * @class
 */
export default class Helpers {
  /**
   * @method
   * @param {Array<any> | undefined } items - list of items
   * @param {number} defaultIndex - position that should be
   * moved to the beginning
   * @return {Array} - list of indexed based on the items where the
   * default index is in the first position
   */
  public static moveDefaultIndexToBegin:
    (
      items: Array<any> | undefined,
      defaultIndex: number,
    ) => number[] =
    (items, defaultIndex) => {
      if (items === undefined) {
        return [];
      }
      const sortedIndexArray = items.map((_, index) => index);
      sortedIndexArray.splice(defaultIndex, 1);
      sortedIndexArray.unshift(defaultIndex);
      return sortedIndexArray;
    };
  /**
   * @param {number} activePage - currently active page
   * @param {number} count - total number of items
   * @param {number} itemsPerPage - number of items
   * displayed on a page
   * @param {number} shownPages - number of pages in the Pagination
   * @return {number[]} array of items in the pagination components
   */
  public static getAvailablePages:
    (
      activePage: number,
      count: number,
      itemsPerPage: number,
      shownPages: number,
    ) => number[] =
    (activePage, count, itemsPerPage, shownPages) => {
      const numberOfPages = Helpers.getNumberOfPages(count, itemsPerPage);
      if (numberOfPages === 0) {
        return [];
      }
      const result = new Array(shownPages);
      const positionIndicator = shownPages / 2;

      if (activePage < positionIndicator) {
        result[activePage - 1] = activePage;
      } else if (numberOfPages - activePage < positionIndicator) {
        result[shownPages - (numberOfPages - activePage) - 1] = activePage;
      } else {
        result[Math.floor(positionIndicator)] = activePage;
      }
      console.log(result);
      return Helpers.getPopulatedArray(result);
    };

  /**
   * @param {number} count - total number of items
   * @param {number} itemsPerPage - number of items
   * @return {number}
   */
  public static getNumberOfPages:
    (count: number, itemsPerPage: number) => number =
    (count, itemsPerPage) => {
      return count % itemsPerPage > 0 ?
        Math.ceil(count / itemsPerPage) :
        count / itemsPerPage;
    };
  /**
 * Takes array that has only 1 defined item
 * and fills the rest n+1
 * @method
 * @param {Array<number | undefined>} array - array that has only 1 defined
 * item
 * @return {number[]} populated array
 */
  public static getPopulatedArray:
    (array: Array<number | undefined>) => number[] =
    (array) => {
      const definedIndex = array.indexOf(array.find(
          (item) => (item !== undefined),
      ));

      /**
       * prefill beginning
       */
      for (let i = definedIndex - 1; i >= 0; i--) {
        const nextItem = array[i + 1];
        if (nextItem) {
          array[i] = nextItem - 1;
        } else {
          array[i] = undefined;
        }
      }
      /**
       * prefill end
       */
      for (let i = definedIndex + 1; i < array.length; i++) {
        const prevItem = array[i - 1];
        if (prevItem) {
          array[i] = prevItem + 1;
        } else {
          array[i] = undefined;
        }
      }
      if (array.indexOf(undefined) === -1) {
        return array as number[];
      } else {
        return [];
      }
    }
}
