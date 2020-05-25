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

    /**
     * Metodo que elimina el producto por ID
     * @param {*} req 
     */
    async deleteProduct(req) {
        try {
            let data = await db.excuteDeleteProduct(req.params.idProducto);
            if (data.affectedRows > 0) {
                let response = 'Se elimino producto exitosamente';
                return { status: 200, response };
            }
            return { status: 204, content: 'No content' };
        } catch (error) {
            console.log('Error en getProductsName()');
            throw Error(error);
        }
    }


    /**
     * Metodo que inserta un producto
     * @param {*} req 
     */
    async insertProduct(req) {
        try {
            const { nombreProducto, descripcion, precio, cantidad, fecha_vencimiento } = req.body;
            let data = await db.excuteInsertProduct(nombreProducto, descripcion, precio, cantidad, fecha_vencimiento);
            if (data.affectedRows > 0) {
                let response = 'Se inserto producto exitosamente';
                return { status: 200, response };
            }
            return { status: 204, content: 'No content' };
        } catch (error) {
            console.log('Error en getProductsName()');
            throw Error(error);
        }
    }
};