const mongoose = require('mongoose')
const config = require('../../config/config')
const connectionString = config.MONGODB_URI
mongoose.connect(connectionString, { useNewUrlParser: true })

class MongoConnectionService {
  constructor(connectionString) {
    this.connectionString = connectionString
    mongoose.Promise = global.Promise

    this.connection = mongoose.createConnection(connectionString, {
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      bufferMaxEntries: 0,
      useNewUrlParser: true
    })
    this._setupTriggers(this.connection)
    process
      .on('SIGINT', this._gracefulExit(this.connection))
      .on('SIGTERM', this._gracefulExit(this.connection))
  }

  getConnection() {
    return this.connection
  }

  _setupTriggers(connection) {
    connection
      .once('open', () => {
        console.log(`mongodb connection created to ${this.connectionString}`);
      })
      .on('disconnected', () => {
        console.log('mongodb disconnected');
      })
      .on('reconnect', () => {
        console.log('mongodb reconnected');
      })
      .on('error', (error) => {
        console.log(`Warning: ${error}`);
      });
  }

  _gracefulExit(connection) {
    return () => connection.close(() => {
      console.log(`Mongoose connection :${this.connectionString} is disconnected through app termination`);
      process.exit(0);
    });
  }
}

module.exports = {
  MongoConnectionService,
  mongoConnectionService: new MongoConnectionService(connectionString)
}