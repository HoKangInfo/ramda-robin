import { tap } from 'ramda'
import _print from './internal/_print.js'

/**
 * 將輸入的內容列印並回傳
 *
 * @func
 * @since v0.0.1
 * @category Function
 * @sig String|Object -> String|Object
 * @param {String|Object} x 要輸出的內容
 * @returns {String|Object} 回傳輸入的內容
 * @see internal/_print
 * @example
 *
 *     pp('test') // ~> 'test'
 *
 * // outpout:
 * // test
 */
const pp = tap(_print)

export default pp
