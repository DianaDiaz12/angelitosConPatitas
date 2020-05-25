const Service = require('../service/products');

/**
 * Obtains the data from the body of the request. Depending on each exposed path, calls a different Service,
 * finally passes the response to the common controller function to send back the response to the client.
 */
module.exports = class Controller {


    /**
     * Metodo que obtiene el total de los productos
     * @param {Object} req 
     * @param {Object} res 
     */
    async getTotalProducts(req, res) {
        const response = await new Service().getTotalProducts();
        new Controller().controller(req, res, response);
    }


    /**
     * Metodo que realiza la busqueda por nombre
     * @param {Object} req 
     * @param {Object} res 
     */
    async getProductsName(req, res) {
        const response = await new Service().getProductsName(req);
        new Controller().controller(req, res, response);
    }


    /**
     *  Metodo que retorna la respuesta l cliente
     * @param { Object containing information about the HTTP request that raised the event } req 
     * @param {  Object containing information to send back the desired HTTP response } res 
     * @param { Response given for the service class, managed by controller function down below } response
     */
    async controller(req, res, response) {
        try {
            if (response.status === 200) {
                res.status(200).send(response);
            } else {
                console.log('Error controller')
            }
        } catch (error) {
            console.log(`Internal server error: ${error}`);
        }
    }
};
