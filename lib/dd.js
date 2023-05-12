import { curryN } from 'ramda'
import _isString from './internal/_isString.js'
import _print from './internal/_print.js'
import { inspect } from 'util'

/**
 * 使用標題來將內容的前後包括再列印出來，並將輸入的內容回傳
 *
 * @func
 * @since v0.0.1
 * @category Function
 * @sig String -> String|Object -> String|Object
 * @param {String} title 使用頭尾部標題來包括輸出內容
 * @param {String|Object} x 要輸出的內容
 * @returns {String|Object} 回傳輸入的內容
 * @see internal/_print
 * @example
 *
 *     dd('test', {"hello": "world"})
 *
 * // outpout:
 * // ---v: test :v---
 * // { hello: 'world' }
 * // ---^: test :^---
 */
const dd = curryN(
  2,
  (title, x) =>
    _print(
      `---v: ${title} :v---\n 
${_isString(x) ? x : inspect(x)}\n
---^: ${title} :^---`
    ) || x
)

export default dd
