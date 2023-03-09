
import {
  curryN
} from 'ramda'
import _print from './internal/_print.js'

const print = curryN(1, _print)

export default print
