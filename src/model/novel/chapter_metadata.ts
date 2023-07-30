import { NKHash } from '../../util/crypto';
import { NKUrl } from '../../util/nk_url';

export class ChapterMetadata {
  id: string;
  url: NKUrl;
  title: string;
  constructor(url: NKUrl, title: string) {
    this.id = NKHash(url.urlStr());
    this.url = url;
    this.title = title;
  }
}
