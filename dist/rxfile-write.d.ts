declare module 'rxfile-write' {

  /**
   * Determine whether the file/directory exists
   * Asynchronous
   */
  export function exists(
    path: String,
  ): Promise<{
    dir: Boolean;
    file: Boolean
  }>;

   export function existsSync(
    path: String,
  ): {
    dir: Boolean;
    file: Boolean
  };

  /**
   * Asynchronously reads the entire contents of a file.
   * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
   */
  export function read(
    path: String,
  ): Promise<{ data: String }>;

  /**
   * Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it
   * @param srcPath source filename to copy
   * @param destPath destination filename of the copy operation
   */
  export function cp(
    srcPath: String,
    destPath: String,
  ): Promise<void>;

  /**
   * Synchronously copies `src` to `dest`. By default, `dest` is overwritten if it
   * @param srcPath source filename to copy
   * @param destPath destination filename of the copy operation
   */
  export function cpSync(
    srcPath: String,
    destPath: String,
  ): Boolean;

  /**
   * Erase write content to file
   */
  export function write(
    path: String,
    data: String | Buffer
  ): Promise<void>;

  /**
   * Add content to a file
   */
  export function writeAppend(
    path: String,
    data: String | Buffer
  ): Promise<void>;

  /**
   * Write content to file
   */
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

  /**
   * Delete file/directory
   */
  export function remove(
    path: String,
  ): Promise<void>;
}