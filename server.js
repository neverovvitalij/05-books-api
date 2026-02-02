import express from 'express';
import BookRepository from './src/repositories/BooksRepository.js';
import BookService from './src/services/book-service.js';
import BookController from './src/controllers/bookConroller.js';
import createBookRoutes from './src/routes/bookRoutes.js';
import errorHandler from './src/middleware/errorHandler.js';
import notFound from './src/middleware/notFound.js';

const app = express();

app.use(express.json());

const bookRepository = new BookRepository('./books.json');
const bookService = new BookService(bookRepository);
const bookConroller = new BookController(bookService);

const bookRoutes = createBookRoutes(bookConroller);

app.use('/api', bookRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
