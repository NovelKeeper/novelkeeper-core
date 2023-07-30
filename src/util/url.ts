export class NKUrl {
  _urlStr: string;
  _url: URL;
  constructor(url: string) {
    this._urlStr = url;
    this._url = new URL(url);
  }

  /**
   * The host property of the URL interface is a string containing the host, that is the hostname, and then, if the port of the URL is nonempty, a ':', followed by the port of the URL.
   * @example novelfull.com:443
   */
  host = () => {
    return this._url.host;
  };

  /**
   * The hostname property of the URL interface is a string containing the domain name of the URL.
   * @example novelfull.com
   */
  hostname = () => {
    return this._url.hostname;
  };

  /**
   * The href property of the URL interface is a string containing the whole URL.
   * @example https://novelfull.com/path/to/file?hello=world#hash
   */
  href = () => {
    return this._url.href;
  };

  /**
   * The pathname property of the URL interface represents a location in a hierarchical structure.
   * @example /path/to/file
   */
  pathname = () => {
    return this._url.pathname;
  };

  /**
   * Whether the protocol is https or not
   * @example https:// == true
   */
  isHttps = () => {
    return this._url.protocol === 'https:';
  };

  /**
   * The searchParams readonly property of the URL interface returns a URLSearchParams object allowing access to the GET decoded query arguments contained in the URL.
   * @example ?hello=world
   */
  searchParams = () => {
    return this._url.searchParams;
  };

  /**
   * The hash property of the URL interface is a string containing a '#' followed by the fragment identifier of the URL.
   * @example #hash
   */
  hash = () => {
    return this._url.hash;
  };
}
