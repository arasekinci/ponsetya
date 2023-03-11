export * from './apis'
export * from './instances'

import * as instances from './instances'

export class Node {
  env = instances.env
}

export default new Node()
