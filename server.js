const express = require('express');
const connectDB = require('./utils/connectDB');
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.router');
const { protect } = require('./utils/authUtilsFunctions');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8888;

app.use('/api', authRouter);
app.use('/api/user', protect, userRouter);

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
