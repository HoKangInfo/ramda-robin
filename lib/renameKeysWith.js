'use strict'

import { curry, pipe, map, over, lensIndex, fromPairs, toPairs } from 'ramda'

/**
 * 依函式將屬性名變換
 * @param {Function} fn
 * @param {Object} obj
 * @returns {Object} 更換名稱後的物件
 */
const renameKeysWith = curry((fn, obj) =>
  pipe(toPairs, map(over(lensIndex(0), fn)), fromPairs)(obj)
)

export default renameKeysWith
