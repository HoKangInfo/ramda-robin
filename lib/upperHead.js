'use strict'

import { toUpper, replace } from 'ramda'

/**
 * 將開頭第一個字母轉為大寫
 *
 * @param {String} str
 * @returns {String} 傳回大寫開頭的字串
 */
const upperHead = replace(/^./, toUpper)

export default upperHead
