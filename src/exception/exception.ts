export class NotImplementedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotImplementedException';
  }
}

export class InvalidUrlException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidUrlException';
  }
}
