import { NKHash } from '../../util/crypto';
import { NKUrl } from '../../util/nkurl';

export class ChapterContent {
  /**
   * The id of the chapter
   */
  chapterMetadataId: string;
  /**
   * The url of the chapter
   */
  chapterUrl: NKUrl;
  /**
   * The content of the chapter in html
   */
  chapterContent: string;

  constructor(chapterUrl: NKUrl, chapterContent: string) {
    this.chapterMetadataId = NKHash(chapterUrl.urlStr());
    this.chapterUrl = chapterUrl;
    this.chapterContent = chapterContent;
  }
}
