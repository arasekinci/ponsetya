export * from './apis'
export * from './functions'

import * as functions from './functions'

export class Vanilla {
  classnames = functions.classnames
  getname = functions.getname
  gettype = functions.gettype
  uid = functions.uid
}

export default new Vanilla()
