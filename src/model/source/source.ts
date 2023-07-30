import { NKUrl } from '../../util/url';
import { NovelMetadata } from '../novel/novel_metadata';

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
   * The hostname of the source
   * @example https://novelfull.com
   * @example https://www.wuxiaworld.com
   */
  abstract hostname: string;

  /**
   * Whether the chapter list for the source is paginated
   */
  abstract chapterListPaginated: boolean;

  /**
   * Extract the novel metadata from the novel page html
   * @param _url The url of the novel page
   * @param _html The html of the novel page
   * @returns A promise that resolves to a NovelMetadata object
   */
  abstract extractNovelMetadata(
    _url: NKUrl,
    _html: string
  ): Promise<NovelMetadata>;

  /**
   * Extract the chapter urls from the novel page html
   * @param html The html of the novel page
   * @returns A promise that resolves to an array of chapter urls
   */
  abstract extractChapterUrls(_html: string): Promise<string[]>;
}
