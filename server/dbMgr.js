const mysql = require('mysql');
const util = require('util');

/**
 * Se crea la conexion
 */
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'acp'
});

/**
 * Se realiza la conexion
 */
mysqlConnection.connect((error) => {
  if (!!error) {
    console.log('Error');
  } else {
    console.log('Conectado')
  }
});

// node native promisify
const query = util.promisify(mysqlConnection.query).bind(mysqlConnection);

/**
 * Ejecuta la consulta que trae todos los productos
 */
async function excuteSelectTotal() {
  try {
    const rows = await query('SELECT * FROM products');
    return rows;
  } catch (error) {
    console.log(error)
  }
}

/**
 * Ejecuta la consulta que trae los productos que tengan el nombre asociado
 * 
 * @param {String} nombreProducto Nombre del producto a buscar
 */
async function excuteSelectProductName(nombreProducto) {
  try {
    const rows = await query('SELECT * FROM products WHERE nombreProducto LIKE ?', '%' + [nombreProducto] + '%');
    return rows;
  } catch (error) {
    console.log(error)
  }
}

async function excuteDeleteProduct(idProducto) {
  try {
    const rows = await query('DELETE FROM products WHERE id LIKE ?', [idProducto]);
    return rows;
  } catch (error) {
    console.log(error)
  }
}

async function excuteInsertProduct(nombreProducto, descripcion, precio, cantidad, fecha_vencimiento) {
  try {
    const sql = "INSERT INTO products(nombreProducto, descripcion, precio, cantidad, fecha_vencimiento) VALUES (" + "'" + nombreProducto + "'," + "'" + descripcion + "'," + precio + "," + cantidad + "," + "'" + fecha_vencimiento + "')";
    const rows = await query(sql);
    return rows;
  } catch (error) {
    console.log(error)
  }
}

module.exports = { excuteSelectTotal, excuteSelectProductName, excuteDeleteProduct, excuteInsertProduct }
