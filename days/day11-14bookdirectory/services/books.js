const MongoLib = require("../lib/mongo");

class BooksService {
  constructor() {
    this.collection = "books";
    this.mongoDB = new MongoLib();
  }
  async getBooks({tags}){
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getBook({bookId}){
    const movie = await this.mongoDB.get(this.collection, bookId);
    return movie || {};
  }

  async putBook({body}){
    const book = await this.mongoDB.create(this.collection, body);
    return book || [];
  }
}

module.exports = BooksService;
