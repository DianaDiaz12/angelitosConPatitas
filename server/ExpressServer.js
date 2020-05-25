const Express = require('express');
const bodyParser = require('body-parser');
const routes = require('../api/routes');


/**
 * Configuraciones de Express encapsuladas en la clase ExpressServer
 */
const app = new Express();

class ExpressServer {
  constructor() {
    app.use(bodyParser.json());
    app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));
    routes(app);
  }


}


module.exports = ExpressServer;
