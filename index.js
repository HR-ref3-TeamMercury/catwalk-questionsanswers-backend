const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const app = express();
const db = require('./db');
const PORT = 3030;
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));