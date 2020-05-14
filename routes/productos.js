var express = require('express');
var router = express.Router();

var productos = [
    {
        "id": 1,
        "categoria": "Alimentos",
        "nombre": "Arroz",
        "precio": 1.50,
        "stock": 10
    },
    {
        "id": 2,
        "categoria": "Electronicos",
        "nombre": "Router TP-Link",
        "precio": 21.75,
        "stock": 5
    },
    {
        "id": 3,
        "categoria": "Lacteos",
        "nombre": "Yogurt",
        "precio": 0.75,
        "stock": 25
    },
];

//--------------------------------------------------------------------------------------------------------------//

router.get('/', function (req, res, next) {
    return res.render('pages/productos/list', { title: 'Productos', productos: productos });
});

router.get('/add', function (req, res, next) {
    let producto = { "id": 0 };
    return res.render('pages/productos/create', { title: 'Crear - Productos', producto: producto });
});

router.get('/update/:id', function (req, res, next) {
    var id = req.params.id;
    let producto = leer(id);
    return res.render('pages/productos/create', { title: 'Editar - Productos', producto: producto });
});

router.get('/remove/:id', function (req, res, next) {
    var id = req.params.id;
    return res.render('pages/productos/delete', { title: 'Eliminar - Producto', producto: leer(id) });
});

//--------------------------------------------------------------------------------------------------------------//

router.post('/create', function (req, res, next) {
    guardar(req.body);
    return res.redirect('/productos');
});

router.post('/delete', function (req, res, next) {
    eliminar(req.body.id);
    return res.redirect('/productos');
});

//--------------------------------------------------------------------------------------------------------------//

function guardar(producto) {
    if (producto.id <= 0) {
        let id = productos[productos.length - 1].id;
        producto.id = id + 1;
        productos.push(producto);
    } else {
        let index = productos.findIndex((p => p.id == producto.id));
        productos[index] = producto;
    }
}

function leer(id) {
    let producto;
    for (const p of productos) {
        if (p.id == id) {
            producto = p;
            break;
        }
    }
    return producto;
}

function eliminar(id) {
    productos = productos.filter(function (producto) {
        return producto.id != id;
    });
}

//--------------------------------------------------------------------------------------------------------------//

module.exports = router;