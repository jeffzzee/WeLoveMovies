function notFound(req, _, next) {
  next({ status: 404, message: `Not found: ${request.originalUrl}` });
}
module.exports = notFound;