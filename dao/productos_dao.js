var Producto = require('../schemas/productos_model');
var productoDAO = {};

productoDAO.crear = (producto) => {
    let model = new Producto({
        categoria: producto['categoria'],
        nombre: producto['nombre'],
        precio: producto['precio'],
        stock: producto['stock']
    });
    model.save();
}

productoDAO.leer = (id) => Producto.findOne({ _id: id }, (error, result) => {
    if (error) throw error;
    else
        return result;
});

productoDAO.actualizar = (producto) => Producto.findByIdAndUpdate(producto._id, { $set: producto }, { new: true },
    (error, result) => {
        if (error) throw error;
    });

productoDAO.eliminar = (id) => Producto.deleteOne({ _id: id }, (error) => {
    if (error) throw error;
});

productoDAO.listar = () => Producto.find((error, result) => {
    if (error) throw error;
    else
        return result;
});

module.exports = productoDAO;