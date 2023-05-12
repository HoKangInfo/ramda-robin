import { forEachObjIndexed, curryN } from 'ramda'

/**
 * 依照 spec 格式檢查 obj，並回傳符合 spec 格式的 obj
 *
 * @func
 * @since v0.0.1
 * @category Function
 * @sig Object -> Object -> Object
 * @param {Object} spec 檢查格式
 * @param {Object} obj 要檢查的物件
 * @returns {Object} 符合 spec 格式的 obj
 * @example
 *
 *    inspect({ a: 'a', b: { c: 'c' } }, { a: 1, b: { c: 2 } }) // => { a: 1, c: 2 }
 *
 */
const inspect = curryN(2, (spec, obj) => {
  const props = {}
  const inspectProps = (spec, obj) => {
    forEachObjIndexed((v, k) => {
      const objValue = obj[k]
      if (typeof v === 'string') {
        props[v] = objValue
      } else if (typeof objValue === 'object') {
        inspectProps(v, objValue)
      }
    }, spec)
  }

  inspectProps(spec, obj)
  return props
})

export default inspect
