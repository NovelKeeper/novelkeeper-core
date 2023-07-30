import { NKUrl } from '../../util/nkurl';
import { ChapterMetadata } from '../novel/chapter_metadata';
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
   * The type of pagination for the chapter list
   * @example 'page' - https://novelfull.com/against-the-gods.html?page=1
   * @example 'offset' - https://www.wuxiaworld.com/novel/against-the-gods/atg-chapter-1
   */
  abstract chapterListPaginationType: ChapterListPaginationType;

  /**
   * The number of chapters per page
   */
  abstract chaptersPerPage: number;

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
   * @param _url The url of the novel page
   * @param html The html of the novel page
   * @returns A promise that resolves to an array of [ChapterMetadata]
   */
  abstract extractChapterUrls(
    _url: NKUrl,
    _html: string
  ): Promise<ChapterMetadata[]>;

  /**
   * Extract the list of pagination urls from the novel page html
   * @param _url The url of the novel page
   * @param html The html of the novel page
   */
  abstract getChapterListPageUrls(_url: NKUrl, _html: string): Promise<NKUrl[]>;
}

export enum ChapterListPaginationType {
  PAGE = 'page',
  OFFSET = 'offset',
  NONE = 'none',
}
