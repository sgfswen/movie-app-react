'use strict';

const
  path = require('path'),
  express = require('express');

const
  app = express(),
  join = path.join;

app.use(express.static(join(__dirname, './public')));

app.listen('8080');