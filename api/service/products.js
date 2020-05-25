const db = require('../../server/dbMgr');

module.exports = class ProductsService {

    /**
     * Metodo que trae todos los productos
     */
    async getTotalProducts() {
        try {
            let data = await db.excuteSelectTotal();
            if (data.length > 0) {
                return { status: 200, data };
            }
            return { status: 204, content: 'No content' };
        } catch (error) {
            console.log('Error en getTotalProducts()');
            throw Error(error);
        }
    }

    /**
     * Metodo que obtiene los productos asociados al producto
     * @param {Object} req 
     */
    async getProductsName(req) {
        try {
            let data = await db.excuteSelectProductName(req.params.nombreProducto);
            if (data.length > 0) {
                return { status: 200, data };
            }
            return { status: 204, content: 'No content' };
        } catch (error) {
            console.log('Error en getProductsName()');
            throw Error(error);
        }
    }
};