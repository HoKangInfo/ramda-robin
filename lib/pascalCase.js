import { compose, join, map } from 'ramda'

import capitalize from './capitalize.js'
import deburr from './deburr.js'

/**
 * 將字串轉為 pascal 字串後傳回
 *
 * @param {string} str
 * @returns {string} 傳回轉換後的字串
 */
const pascalCase = compose(join(''), map(capitalize), deburr)

export default pascalCase
