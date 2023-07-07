import { thunkify, clone } from 'ramda'

const alwaysNew = thunkify(clone)

export default alwaysNew
