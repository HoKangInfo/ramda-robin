
import { curryN } from 'ramda'
import _isString from './internal/_isString.js'
import _print from './internal/_print.js'

/**
 * 
 *
 * @func
 * @memberOf 
 * @since v0.0.1
 * @category Function
 * @sig * -> String
 * @param {String}
 * @return {String}
 * @see 
 * @example
 *
 *      dd(); //=> false
 */
const dd = curryN(2, (title, x) => _print(
`---v: ${title} :v---\n 
${_isString(x) ? x : JSON.stringify(x, null, 4)}\n
---^: ${title} :^---`
))

export default dd
