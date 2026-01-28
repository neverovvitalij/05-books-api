import { readFile, writeFile } from 'fs/promises';

class BookRepository {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async findAll() {
    try {
      const data = await readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.log('File wurde nicht gefunden');
      return [];
    }
  }

  async findById(id) {
    const data = await this.findAll();

    const book = data.find((b) => b.id === Number(id));
    return book;
  }

  async create(book) {
    const data = await this.findAll();
    data.push(book);

    try {
      await writeFile(this.filePath, JSON.stringify(data, null, 2));
      console.log('Das Buch wurde eingefügt');
      return book;
    } catch (error) {
      console.log('Fehler beim Buch einfügen');
      return false;
    }
  }

  async update(id, book) {
    const data = await this.findAll();

    const indx = data.findIndex((b) => b.id === Number(id));
    if (indx === -1) {
      console.log('Das Buch wurde nicht gefunden');
      return null;
    }

    data[indx] = { ...data[indx], ...book };

    try {
      await writeFile(this.filePath, JSON.stringify(data, null, 2));
      console.log('Buch wurde geändert');
      return book;
    } catch (error) {
      console.log('Fehler beim Buch ändern');
      return false;
    }
  }

  async delete(id) {
    const data = await this.findAll();

    const indx = data.findIndex((book) => book.id === Number(id));

    if (indx === -1) {
      return null;
    }

    data.splice(indx, 1);

    try {
      await writeFile(this.filePath, JSON.stringify(data, null, 2));
      console.log('Buch wurde gelöscht');
      return true;
    } catch (error) {
      console.log('Fehler beim Buch löschen');
      return false;
    }
  }
}
export default BookRepository;
