import { curryN } from 'ramda'
import _print from './internal/_print.js'

/**
 * 封裝 console.log
 *
 * @func
 * @since v0.0.1
 * @category Function
 * @sig any -> void
 * @param {any} x 要輸出的內容
 * @returns void
 * @example
 *  print('hello world')
 */
const print = curryN(1, _print)

export default print
