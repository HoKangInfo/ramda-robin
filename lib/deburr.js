;`use strict`

import { split } from 'ramda'

/**
 * 切割英數字字串
 * @param {String} str
 * @returns {Array} 傳回切割後的陣列
 */
const deburr = split(/[^0-9a-zA-Z]/)

export default deburr
