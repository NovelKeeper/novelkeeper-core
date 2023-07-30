export abstract class NKSource {
  /**
   * The id of the source
   */
  abstract id: number;
  /**
   * The name of the source
   */
  abstract name: string;
  /**
   * The base url of the source
   * @example https://novelfull.com
   * @example https://www.wuxiaworld.com
   */
  abstract baseUrl: string;
  /**
   * Whether the chapter list for the source is paginated
   */
  abstract chapterListPaginated: boolean;

  /**
   * Extract the chapter urls from the novel page html
   * @param html The html of the novel page
   * @returns A promise that resolves to an array of chapter urls
   */
  abstract extractChapterUrls(_html: string): Promise<string[]>;
}
