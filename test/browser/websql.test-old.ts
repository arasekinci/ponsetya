import { WebSQL } from '../../src/browser/websql'

describe('WebSQL', () => {
  let db: WebSQL

  beforeEach(() => {
    db = new WebSQL('testdb', '1.0', 'Test Database', 1)
  })

  test('can execute a simple query', (done) => {
    db.executeSql(
      'CREATE TABLE test (id INTEGER PRIMARY KEY, value TEXT)',
      (transaction: SQLTransaction, resultSet: SQLResultSet) => {
        expect(resultSet).toBeDefined()
        done()
      }
    )
  })

  test('can check if a table exists', (done) => {
    db.tableExists('test', (result) => {
      expect(result).toBe(false)
      done()
    })
  })

  test('can change the version of the database', (done) => {
    db.changeVersion('1.0', '2.0', (transaction: SQLTransaction) => {
      expect(transaction).toBeDefined()
      done()
    })
  })
})
