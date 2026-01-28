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
      throw new Error('Buch wurde NICHT gefunden');
    }
    return book;
  }

  async createBook(bookData) {
    const newBook = {
      id: Date.now(),
      ...bookData,
    };

    const book = await this.bookRepository.create(newBook);

    if (!book) {
      throw new Error('Buch wurde NICHT zugefügt');
    }
    return book;
  }

  async updateBook(idToUpdateBook, newBook) {
    const updatedBook = await this.bookRepository.update(
      idToUpdateBook,
      newBook
    );

    if (!updatedBook) {
      throw new Error('Fehler beim buch ändern');
    }

    return updatedBook;
  }

  async deleteBook(idToDeleteBook) {
    const res = await this.bookRepository.delete(idToDeleteBook);

    if (!res) {
      throw new Error('Buch wurde nicht gelöscht');
    }

    return true;
  }
}

export default BookService;
