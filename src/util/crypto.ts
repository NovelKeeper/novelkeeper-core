import crypto from 'crypto';

export const NKHash = (str: string) => {
  return crypto.createHash('md5').update(str).digest('hex');
};
