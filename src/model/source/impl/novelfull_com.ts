import { NotImplementedException } from '../../exception/exception';
import { NKSource } from '../source';

export class NovelFullCom extends NKSource {
  id = 1;
  name = 'NovelFull';
  hostname = 'novelfull.com';
  chapterListPaginated = true;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async extractChapterUrls(_html: string): Promise<string[]> {
    throw new NotImplementedException('NovelFullCom.extractChapterUrls()');
  }
}
