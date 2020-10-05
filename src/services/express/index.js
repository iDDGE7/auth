require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

module.exports = (apiRoot, routes) => {
  const app = express();
  
  app.use(morgan('dev'))
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(apiRoot, routes);
  
  return app;
}