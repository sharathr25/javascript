const SingleTon = (function () {
  class DBConnection {
    constructor () {}

    connect () {
      console.log('Connecting.....')
      console.log('Connected.....')
    }
  }

  let dbConnection

  return {
    getDbConnection: () => {
      if (dbConnection) return dbConnection
      dbConnection = new DBConnection()
      return dbConnection
    }
  }
})()

const dbConnection1 = SingleTon.getDbConnection()
const dbConnection2 = SingleTon.getDbConnection()

console.log(dbConnection1 === dbConnection2)
dbConnection1.connect()
