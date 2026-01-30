class BookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async getAllBooks() {
    const books = await this.bookRepository.findAll();

    return books;
  }

  async getBookById(id) {
    const book = await this.bookRepository.findById(id);

    if (!book) {
      const error = new Error('Das Buch wurde nicht gefunden');
      error.statusCode = 404;
      throw error;
    }
    return book;
  }

  async createBook(bookData) {
    const newBook = {
      id: Date.now(),
      ...bookData,
    };

    return await this.bookRepository.create(newBook);
  }

  async updateBook(idToUpdateBook, newBook) {
    const updatedBook = await this.bookRepository.update(
      idToUpdateBook,
      newBook
    );

    if (updatedBook === null) {
      const error = new Error('Das Buch wurde nicht gefunden');
      error.statusCode = 404;
      throw error;
    }

    return updatedBook;
  }

  async deleteBook(idToDeleteBook) {
    const res = await this.bookRepository.delete(idToDeleteBook);

    if (res === null) {
      const error = new Error('Das Buch wurde nicht gefunden');
      error.statusCode = 404;
      throw error;
    }

    return true;
  }
}

export default BookService;
