'use strict'

import { toLower, replace } from 'ramda'

/**
 * 將開頭第一個字母轉為小寫
 * @param {String} str
 * @returns {String} 傳回小寫開頭的字串
 */
const lowerHead = replace(/^./, toLower)

export default lowerHead
