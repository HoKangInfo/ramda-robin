'use strict'

import { compose, toLower } from 'ramda'

import upperHead from './upperHead.js'

/**
 * 傳回只有開頭大寫其他小寫的字串
 * @param {String} str
 * @returns {String} 傳回只有開頭大寫其他小寫的字串
 */
const capitalize = compose(upperHead, toLower)

export default capitalize
