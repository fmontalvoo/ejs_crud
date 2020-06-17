var express = require('express');
var router = express.Router();

var productoDAO = require('../dao/productos_dao');

//--------------------------------------------------------------------------------------------------------------//

router.get('/', async function (req, res, next) {
    try {
        const result = await productoDAO.listar();
        return res.render('pages/productos/list', { title: 'Productos', productos: result });
    }
    catch (error) {
        return res.json({ error: error });
    }
});

router.get('/add', function (req, res, next) {
    return res.render('pages/productos/create', { title: 'Crear - Productos', producto: {} });
});

router.get('/update/:id', async function (req, res, next) {
    try {
        const result = await productoDAO.leer(req.params.id);
        return res.render('pages/productos/create', { title: 'Editar - Productos', producto: result });
    }
    catch (error) {
        return res.json({ error: error });
    }
});

router.get('/remove/:id', async function (req, res, next) {
    try {
        const result = await productoDAO.leer(req.params.id);
        return res.render('pages/productos/delete', { title: 'Eliminar - Producto', producto: result });
    }
    catch (error) {
        return res.json({ error: error });
    }
});

//--------------------------------------------------------------------------------------------------------------//

router.post('/create', function (req, res, next) {
    let producto = req.body;
    if (producto._id === "")
        productoDAO.crear(producto);
    else
        productoDAO.actualizar(producto);
    return res.redirect('/productos');
});

router.post('/delete', function (req, res, next) {
    productoDAO.eliminar(req.body._id);
    return res.redirect('/productos');
});

//--------------------------------------------------------------------------------------------------------------//

module.exports = router;