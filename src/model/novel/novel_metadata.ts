import { NKHash } from '../../util/crypto';
import { NKUrl } from '../../util/nk_url';

export class NovelMetadata {
  // Required
  id: string;
  novelUrl: NKUrl;
  title: string;
  authors: string[];
  description: string[];
  genres: string[];
  coverUrl: string;

  // Optional
  altTitles?: string[];
  status?: string;

  constructor(
    novelUrl: NKUrl,
    title: string,
    authors: string[],
    description: string[],
    genres: string[],
    coverUrl: string,
    status?: string,
    altTitles?: string[]
  ) {
    this.id = NKHash(novelUrl.href());
    this.novelUrl = novelUrl;
    this.title = title;
    this.authors = authors;
    this.description = description;
    this.genres = genres;
    this.coverUrl = coverUrl;
    this.status = status;
    this.altTitles = altTitles;
  }
}
