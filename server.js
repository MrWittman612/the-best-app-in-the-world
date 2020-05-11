const express = require('express');
const authRouter = require('./routes/auth.router');
const connectDB = require('./utils/connectDB');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8888;

app.use('/api', authRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
connectDB();
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
