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
      const result = [];
      for (
        let i = activePage;
        i < activePage + shownPages && i <= numberOfPages;
        i++) {
        result.push(i);
      }

      while (result.length < shownPages && result[0] !== 1) {
        console.log(result);
        result.unshift(result[0] - 1);
      }
      return result;
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
}
