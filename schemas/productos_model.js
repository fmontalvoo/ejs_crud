var mongoose = require("mongoose");

var ProductoSchema = new mongoose.Schema({
    categoria: {
        type: String,
        unique: false,
        required: true,
    },
    nombre: {
        type: String,
        unique: false,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    }
});

let ProductoModel = mongoose.model("Producto", ProductoSchema);
module.exports = ProductoModel;