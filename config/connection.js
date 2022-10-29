const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;