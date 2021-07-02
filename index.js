const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const url = require('url');
// const querystring = require('querystring');
const router = require('./routes');

const app = express();

const PORT = 3030;
app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
