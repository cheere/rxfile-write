declare module 'rxfile-write' {

  export function exists(
    path: String,
  ): Promise<void>;

  export function read(
    path: String,
  ): Promise<void>;

  export function write(
    path: String,
    data: String | Buffer
  ): Promise<void>;

  export function writeAppend(
    path: String,
    data: String | Buffer
  ): Promise<void>;

  export function writeTo(
    path: String,
    data: String | Buffer,
    isAppend: Boolean
  ): Promise<void>;

  export function writeSync(
    path: String,
    data: String | Buffer
  ): void;

  export function writeAppendSync(
    path: String,
    data: String | Buffer
  ): void;

  export function remove(
    path: String,
  ): Promise<void>;
}