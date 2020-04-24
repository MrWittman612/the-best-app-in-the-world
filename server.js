const express = require('express');

const app = express();

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
