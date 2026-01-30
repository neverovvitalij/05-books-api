export default function errorHandler(err, req, res, next) {
  let status = err.statusCode || 500;

  return res.status(status).json({ error: err.message });
}
