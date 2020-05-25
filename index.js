const Server = require('./server/ExpressServer');
const db = require('./server/dbMgr');
/**
 * Inicia el microservicio:
 *  Inicia conexión DB
 *  Inicia Express Server con routes asociados al api
 * */


/** Inicialización de microservicio, lanza definición de route en api */
async function startup() {
  console.log('Control de inicialización de microservicio Products');
  try {
    console.log('Inicia HTTP');
    new Server();
  } catch (err) {
    console.log(`Falla en inicializacion HTTP. El microservicio no se iniciará: ${err}`);
    process.exit(1); // Non-zero failure code
  }
}


/** Inicialización del microservicio */
startup();
