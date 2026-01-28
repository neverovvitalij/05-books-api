import express from 'express';
import validateBook from '../middleware/validateBook.js';

const router = express.Router();

export default function createBookRoutes(bookController) {
  // GET /api/books
  router.get('/books', bookController.getAll.bind(bookController));

  // GET /api/books/:id
  router.get('/books/:id', bookController.getById.bind(bookController));

  // POST /api/books
  router.post(
    '/books',
    validateBook,
    bookController.create.bind(bookController)
  );

  // PUT /api/books/:id
  router.put(
    '/books/:id',
    validateBook,
    bookController.update.bind(bookController)
  );

  // DELETE /api/books/:id
  router.delete('/books/:id', bookController.delete.bind(bookController));

  return router;
}
