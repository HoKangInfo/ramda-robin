
import {
  curryN,
  pipe,
  type,
  identical
} from 'ramda'

const _isString = curryN(1, pipe(type, identical('String')))

export default _isString
