const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;