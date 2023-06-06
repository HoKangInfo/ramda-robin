'use strict'

import { has } from 'ramda'

/**
 * 依傳入的 key 找物件對應的值, 如果沒找到相通的 key 則原 key 傳回
 * @param {*} keysMap
 * @param {*} key
 * @returns {*} value or key
 */
const valueOrKey = keysMap => key => has(key, keysMap) ? keysMap[key] : key

export default valueOrKey
