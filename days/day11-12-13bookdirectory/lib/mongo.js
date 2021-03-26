const { MongoClient } = require("mongodb");
const { config } = require("../config");

const USER = encodeURI(config.dbUSer);
const PASSWORD = encodeURI(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:
            ${PASSWORD}@cluster0.wwpya.mongodb.net
            /${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI);
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }
          console.log("Conned succesfully to mongo");
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoLib.connection;
  }

  getAll(collection, query) {
    return this.connect().then((db) => {
      return db.collection(collection).find(query).toArray();
    });
  }
}

module.exports = MongoLib;
