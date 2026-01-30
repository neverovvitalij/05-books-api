class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  async getAll(req, res, next) {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const book = await this.bookService.getBookById(id);

      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const bookData = req.body;

      const book = await this.bookService.createBook(bookData);

      res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const newBook = req.body;

      const book = await this.bookService.updateBook(id, newBook);

      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await this.bookService.deleteBook(id);

      res.status(200).json({ message: 'true' });
    } catch (error) {
      next(error);
    }
  }
}

export default BookController;
