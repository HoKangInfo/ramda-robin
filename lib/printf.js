
import {
  curryN
} from 'ramda'
import _print from './internal/_print.js'

const printf = (fmt, ...args) => 
  _print(args.reduce((s, w) => s.replace(/%s/, w), fmt))


export default printf
