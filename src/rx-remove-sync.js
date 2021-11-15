import fs from 'fs'

const LibRms = {}

/**
 * Delete file/directory
 * @param {string} path
 * @returns Promise
 */
 LibRms.removeSync = function (path) {
  const info = this.existsSync(path)
  if (info.dir) {
    this.deleteDir(path)
  } else if (info.file) {
    fs.unlinkSync(path); // Delete file
  }
}

export default LibRms