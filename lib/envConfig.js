import {
  __,
  curryN,
  compose,
  converge,
  flip,
  pickBy,
  replace,
  test,
  useWith,
  unary
} from 'ramda'

import camelCase from './camelCase.js'
import I from './I.js'
import renameKeysWith from 'renameKeysWith.js'

/**
 * envConfig
 * 傳回依正規表示式取出的屬性組成的物件
 * 屬性名依正規表示式移除前置
 * const env = {
 *   MYSQL_HOST: '127.0.0.1'
 *   MYSQL_PORT: 3066,
 *   MYSQL_USER: 'name',
 *   MYSQL_PASSWORD: 'password'
 *   MYSQL_DATABASE: 'mysql',
 *   MYSQL_CONNECTION_LIMIT: 3
 * }
 * envConfig(/^MYSQL_/, env)
 * // => {
 *   host: '127.0.0.1',
 *   port: 3066
 *   user: 'name',
 *   password: 'password',
 *   database: 'mysql'
 *   connectionLimit: 3
 * }
 * @param {RegExp} prefix
 * @param {Object} config
 * @returns {Object} config 傳回依正規表示式取出的屬性組成的物件
 */
const envConfig = curryN(
  2,
  compose(
    renameKeysWith(camelCase),
    converge(renameKeysWith, [
      unary(replace(__, '')),
      useWith(pickBy, [compose(flip, test), I])
    ])
  )
)
