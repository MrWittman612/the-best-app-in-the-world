const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

function connectDB() {
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) =>
      console.log(
        'MongoDB:',
        res.connection.name,
        'is start on PORT:',
        res.connection.port,
        'Host:',
        res.connection.host
      )
    )
    .catch((err) => console.log(err));
}

module.exports = connectDB;
