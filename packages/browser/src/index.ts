export * from './apis'
export * from './instances'

import * as instances from './instances'

export class Browser {
  cookie = instances.cookie
  session = instances.session
  storage = instances.storage
}

export default new Browser()
