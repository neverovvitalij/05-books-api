class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  async getAll(req, res) {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;

      const book = await this.bookService.getBookById(id);

      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const bookData = req.body;

      const book = await this.bookService.createBook(bookData);

      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const newBook = req.body;

      const book = await this.bookService.updateBook(id, newBook);

      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await this.bookService.deleteBook(id);

      res.status(200).json({ message: 'true' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default BookController;
