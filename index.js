'use strict'

import { fromPairs } from 'ramda'

export { default as dd } from './lib/dd.js'

export { default as d } from './lib/d.js'

export { default as print } from './lib/print.js'

/**
 * @example
 *    p('hello world')
 */
export { default as p } from './lib/print.js'

export { default as pp } from './lib/pp.js'

export { default as printf } from './lib/printf.js'

export { default as isString } from './lib/isString.js'

export { default as now } from './lib/now.js'

export { default as inspect } from './lib/inspect.js'

export { default as isNatural } from './lib/isNatural.js'

/**
 * @example
 * camelCase('hello world')
 * // => 'helloWorld'
 */
export { default as camelCase } from './lib/camelCase.js'

/**
 * @example
 * capitalize('hello world')
 * // => 'Hello world'
 */
export { default as capitalize } from './lib/capitalize.js'

/**
 *
 */
export { default as envConfig } from './lib/envConfig.js'

/**
 * @example
 * deburr(hello world')
 * // => ['hello', 'world']
 */
export { default as deburr } from './lib/deburr.js'

/**
 * identity 別名
 * @example
 * I('hello world')
 * // => 'hello world'
 */
export { default as I } from './lib/I.js'

/**
 * @example
 * lowerHead('Hello World')
 * // => 'hello World'
 */
export { default as lowerHead } from './lib/lowerHead.js'

/**
 * @example
 * pascalCase('hello world')
 * // => 'HelloWorld'
 */
export { default as pascalCase } from './lib/pascalCase.js'

/**
 * @example
 * upperHead('hello world')
 * // => 'Hello world'
 */
export { default as upperHead } from './lib/upperHead.js'

/**
 * @example
 * renameKeysWith(
 *   (key) => key.toUpperCase(),
 *   { a: 1, b: 2 }
 * )
 * // => { A: 1, B: 2 }
 */
export { default as renameKeysWith } from './lib/renameKeysWith.js'

/**
 * @example
 * renameKeys({ a: 'x', b: 'y' }, { a: 1, b: 2 })
 * // => { x: 1, y: 2 })
 */
export { default as renameKeys } from './lib/renameKeys.js'
