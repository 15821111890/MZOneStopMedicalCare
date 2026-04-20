import md5 from 'blueimp-md5';

export function md5Hash(text: string): string {
  return md5(text);
}
