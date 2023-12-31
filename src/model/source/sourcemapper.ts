import { NovelFullCom } from './impl/novelfull_com';
import { NKSource } from './source';

/**
 * A map of source hostname to source objects
 */
export const SourceMapper = new Map<string, NKSource>(
  [new NovelFullCom()].map((source) => {
    return [source.hostname, source];
  })
);
