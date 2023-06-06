'use strict'

import renameKeysWith from './lib/renameKeysWith.js'

/**
 * 依傳入的 keyMap 的 key 對應到 value 為 obj 的 key
 * @param {Object} keyMap
 * @param {Object} obj
 * @returns {Object} 傳回更改屬性名稱的物件
 */
const renameKeys = curry((keysMap, obj) =>
  renameKeysWith(valueOrKey(keysMap), obj)
)

export default renameKeys
