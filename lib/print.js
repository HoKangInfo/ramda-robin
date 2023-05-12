<<<<<<< HEAD
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
=======

import {
  curryN
} from 'ramda'
import _print from './internal/_print.js'

>>>>>>> 7a07dab70faf300617f3bab8f150c69885ac27f0
const print = curryN(1, _print)

export default print
