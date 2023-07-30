import { parse } from 'node-html-parser';

import { NotImplementedException } from '../../../exception/exception';
import { NovelMetadata } from '../../novel/novel_metadata';
import { NKSource } from '../source';
import { NKUrl } from '../../../util/url';

export class NovelFullCom extends NKSource {
  id = 1;
  name = 'NovelFull';
  hostname = 'novelfull.com';
  chapterListPaginated = true;

  async extractNovelMetadata(
    _url: NKUrl,
    _html: string
  ): Promise<NovelMetadata> {
    const root = parse(_html);
    const title =
      root
        .querySelector('div.col-xs-12:nth-child(3) > h3:nth-child(1)')
        ?.text.trim() ?? 'Unknown Title';

    const authors = root
      .querySelectorAll('.info > div:nth-child(1) > a')
      .map((a) => a.text.trim());

    const description = root
      .querySelectorAll('.desc-text > *')
      .map((p) => p.text.trim())
      .filter((p) => p !== undefined && p !== '');

    const genres = root
      .querySelectorAll('.info > div:nth-child(3) > a')
      .map((a) => a.text.trim());

    const coverUrl =
      _url.host() +
        root.querySelector('.book > img:nth-child(1)')?.getAttribute('src') ??
      '';

    // Alternate titles <>Alternative names: <h3></h3> title1, title2</>
    const altTitles =
      root
        .querySelector('.info > div:nth-child(2)')
        ?.text.trim()
        .split('names:')[1]
        .split(',')
        .map((title) => title.trim()) ?? [];

    const status =
      root.querySelector('.info > div:nth-child(5) > a:nth-child(2)')?.text ??
      '';

    return new NovelMetadata(
      _url,
      title,
      authors,
      description,
      genres,
      coverUrl,
      status,
      altTitles
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async extractChapterUrls(_html: string): Promise<string[]> {
    throw new NotImplementedException('NovelFullCom.extractChapterUrls()');
  }
}