const apiRouter = require('./apiRouter');

/**
 * Rutas generales del microservicio
 */
module.exports = function routes(app) {
  /** Route de API */
  app.use('/products', apiRouter);

  /** Route admin */
  // app.use('/admin', );
};
