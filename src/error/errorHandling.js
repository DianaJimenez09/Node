function errorHandling(err, _, res, _) {
  res.status(500).json({ message: err.message });
}

module.exports = errorHandling;
