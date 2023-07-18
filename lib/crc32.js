const CRC32 = () => {
  const crcTable = (() => {
    let c
    const hash = []
    for (let n = 0; n < 256; n++) {
      c = n
      for (let k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
      }
      hash[n] = c
    }
    return hash
  })()

  return str => {
    let crc = 0 ^ -1

    for (let i = 0; i < str.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xff]
    }

    return (crc ^ -1) >>> 0
  }
}

/**
 * 取CRC32雜湊
 *
 * @func
 * @since v0.0.19
 * @category Function
 * @sig String -> Number
 * @param {String} x 要取雜湊的字串
 * @returns {Number} 回傳該字串的 CRC32 數字
 * @example
 *
 *     crc32('test') // ~> 3632233996
 *
 */
const crc32 = CRC32()

export default crc32
