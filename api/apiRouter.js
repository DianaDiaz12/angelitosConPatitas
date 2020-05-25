const express = require('express');
const Controller = require('../api/controller/controller');

const controller = new Controller();
/**
 * Enrutador, definición de paths.
 */
module.exports = express
  .Router()
  .get('/total', controller.getTotalProducts)
  .get('/:nombreProducto', controller.getProductsName)
  .delete('/:idProducto', controller.deleteProduct)
  .post('', controller.insertProduct);
  
