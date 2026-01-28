export default function validateBook(req, res, next) {
  const { title, author, year } = req.body;

  const fullYear = new Date().getFullYear();

  if (!title) {
    return res.status(400).json({ message: 'Bitte Title einfügen' });
  }
  if (typeof title !== 'string') {
    return res
      .status(400)
      .json({ message: 'Für Title sind nur Buchstaben erlaubt!' });
  }
  if (Array.from(title).length < 3) {
    return res
      .status(400)
      .json({ error: 'Title muss mindestens 3 Symbole lang sein!' });
  }

  if (!author) {
    return res.status(400).json({ message: 'Bitte Author einfügen' });
  }
  if (typeof author !== 'string') {
    return res
      .status(400)
      .json({ message: 'Für Author sind nur Buchstaben erlaubt!' });
  }

  if (Array.from(author).length < 2) {
    return res
      .status(400)
      .json({ error: 'Author muss mindestens 2 Symbole lang sein!' });
  }

  if (!year) {
    return res.status(400).json({ message: 'Bitte Das Jahr eingeben' });
  }

  if (typeof year !== 'number') {
    return res
      .status(400)
      .json({ message: 'Das Jahr muss unbedingt ein Zahl sein' });
  }
  if (year < 1000 || year > fullYear) {
    return res
      .status(400)
      .json({ error: 'Das Jahr muss zwischen 1000 - huetiger Tag liegen!' });
  }

  next();
}
