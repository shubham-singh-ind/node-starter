const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '$$' : err.stack
  });
}

module.exports = {
  notFound,
  errorHandler
};
