# Books REST API

RESTful API for managing a book library with layered architecture.

## 🚀 Technologies

- **Node.js** - Server platform
- **Express.js** - Web framework
- **File System** - JSON-based data storage

## 🏗️ Architecture

The project is built using **Layered Architecture**:

- **Controller** - Handles HTTP requests/responses
- **Service** - Contains business logic
- **Repository** - Data access layer (CRUD operations)

**Principles:**

- Repository Pattern
- Dependency Injection
- Separation of Concerns

## 📡 API Endpoints

| Method | URL              | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/books`     | Get all books     |
| GET    | `/api/books/:id` | Get book by ID    |
| POST   | `/api/books`     | Create a new book |
| PUT    | `/api/books/:id` | Update book       |
| DELETE | `/api/books/:id` | Delete book       |

## 📦 Project Structure

```
books-api/
├── src/
│   ├── controllers/
│   │   └── bookController.js
│   ├── services/
│   │   └── bookService.js
│   ├── repositories/
│   │   └── bookRepository.js
│   └── routes/
│       └── bookRoutes.js
├── server.js
├── books.json
├── package.json
└── README.md
```

## 🛠️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/neverovvitalij/books-rest-api.git
cd books-rest-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create data file

Copy `books.example.json` to `books.json`:

```bash
cp books.example.json books.json
```

Or create `books.json` manually with an empty array:

```json
[]
```

### 4. Start the server

```bash
node server.js
```

Server will start at `http://localhost:3000`

## 📝 Usage Examples

### Get all books

```bash
GET http://localhost:3000/api/books
```

### Create a new book

```bash
POST http://localhost:3000/api/books
Content-Type: application/json

{
  "title": "1984",
  "author": "George Orwell",
  "year": 1949
}
```

### Get book by ID

```bash
GET http://localhost:3000/api/books/1
```

### Update a book

```bash
PUT http://localhost:3000/api/books/1
Content-Type: application/json

{
  "title": "Animal Farm",
  "author": "George Orwell",
  "year": 1945
}
```

### Delete a book

```bash
DELETE http://localhost:3000/api/books/1
```

## 🧪 Testing

Use **Postman**, **Thunder Client**, or **curl** to test the endpoints.

## 📚 What I Learned

- Building REST APIs with Express.js
- Layered Architecture (Controller → Service → Repository)
- Repository Pattern for data isolation
- Dependency Injection for flexibility
- HTTP methods and status codes
- Asynchronous programming (async/await)
- Working with Node.js File System

## 🔮 Future Improvements

- [ ] Add data validation (middleware)
- [ ] Add error handling (error handler)
- [ ] Connect to database (MongoDB/PostgreSQL)
- [ ] Add authentication (JWT)
- [ ] Write tests (Jest)

## 📄 License

Educational project
