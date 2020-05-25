const express = require('express');
const Controller = require('../api/controller/controller');

const controller = new Controller();
/**
 * Enrutador, definición de paths.
 */
module.exports = express
  .Router()
  .get('/total', controller.getTotalProducts)
  .get('/:nombreProducto', controller.getProductsName);
  //.post('', controller.formatAmt)
  //.put('', controller.converCurrency);
