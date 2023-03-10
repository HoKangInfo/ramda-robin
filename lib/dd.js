
import { curryN } from 'ramda'
import _isString from './internal/_isString.js'
import _print from './internal/_print.js'
import { inspect } from 'util'
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
${_isString(x) ? x : inspect(x)}\n
---^: ${title} :^---`
))

export default dd
