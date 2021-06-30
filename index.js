const express = require('express');
const morgan = require('morgan');
const url = require('url');
const router = require('./routes');

const app = express();

const PORT = 3030;
app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
  console.log(req);
  console.log(res);
  res.send('Hello world');
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
