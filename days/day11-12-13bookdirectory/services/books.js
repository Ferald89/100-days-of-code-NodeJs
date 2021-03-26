const MongoLib = require("../lib/mongo");

class BooksService {
  constructor() {
    this.collection = "movies";
    this.mongoDB = new MongoLib();
  }
  async getBooks({tags}){
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

}

module.exports = BooksService;
