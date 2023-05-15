import { __, allPass, equals, is, gt, compose, modulo } from 'ramda'

/**
 * 傳回現在時間的 ISO 字串
 * @returns {String} ISOString
 */
const isNatural = allPass([
  is(Number),
  gt(__, -1),
  compose(equals(0), modulo(__, 1))
])

export default isNatural
