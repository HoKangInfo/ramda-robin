;`use strict`

import { __, allPass, equals, is, gt, compose, modulo } from 'ramda'

/**
 * 是否是自然數
 * @func
 * @param {*} x any
 * @returns {Boolean} 是否是自然數
 */
const isNatural = allPass([
  is(Number),
  gt(__, -1),
  compose(equals(0), modulo(__, 1))
])

export default isNatural
