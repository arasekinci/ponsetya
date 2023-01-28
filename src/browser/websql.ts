/**
 * A class for interacting with a Web SQL database.
 */

export class WebSQL {
  /**
   * The internal `Database` object.
   */
  private db: Database

  /**
   * Creates a new WebSQL instance.
   *
   * @param name The name of the database.
   * @param version The version of the database.
   * @param description A description of the database.
   * @param size The size of the database in bytes.
   */

  constructor(
    name: string,
    version: string,
    description: string,
    size: number
  ) {
    this.db = window.openDatabase(name, version, description, size)
  }

  /**
   * Executes an SQL query on the database.
   * @param query The SQL query to execute.
   * @param success A callback function to be called when the query completes successfully.
   * @param error A callback function to be called when the query fails.
   */

  public executeSql(
    query: string,
    success?: SQLStatementCallback,
    error?: SQLStatementErrorCallback
  ) {
    this.db.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(query, [], success, error)
    })
  }

  /**
   * Executes a database transaction.
   * @param callback A function to be called to perform the transaction.
   */

  public transaction(callback: (transaction: SQLTransaction) => void) {
    this.db.transaction(callback)
  }

  /**
   * Executes a read-only database transaction.
   * @param callback A function to be called to perform the transaction.
   */

  public readTransaction(callback: (transaction: SQLTransaction) => void) {
    this.db.readTransaction(callback)
  }

  /**
   * Changes the version of the database.
   * @param oldVersion The current version of the database.
   * @param newVersion The desired version of the database.
   * @param successCallback A callback function to be called when the version change completes successfully.
   * @param errorCallback A callback function to be called when the version change fails.
   */

  public changeVersion(
    oldVersion: string,
    newVersion: string,
    callback?: SQLTransactionCallback,
    error?: SQLTransactionErrorCallback,
    success?: SQLVoidCallback
  ) {
    this.db.changeVersion(oldVersion, newVersion, callback, error, success)
  }

  /**
   * Checks if a table with the specified name exists in the database.
   * @param tableName The name of the table to check.
   * @param success A callback function to be called with the result of the check.
   * @param error A callback function to be called when the check fails.
   */

  public tableExists(
    tableName: string,
    success: (result: boolean) => void,
    error?: SQLStatementErrorCallback
  ) {
    this.db.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`,
        [],
        (transaction, resultSet) => {
          success(resultSet.rows.length > 0)
        },
        error
      )
    })
  }
}
