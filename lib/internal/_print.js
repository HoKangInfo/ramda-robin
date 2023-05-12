import { bind } from 'ramda'

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
 *
 *    _print('hello world')
 */
const _print = bind(console.log, console)

export default _print
