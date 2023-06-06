import { compose } from 'ramda'

import lowerHead from './lowerHead'
import pascalCase from './pascalCase'

/**
 * 將字串轉駝峰式後傳回
 *
 * @param {String} str
 * @returns {String} 傳回轉換後的字串
 */
const camelCase = compose(lowerHead, pascalCase)

export default camelCase
