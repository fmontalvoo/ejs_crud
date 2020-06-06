var mongoose = require("mongoose");

var ProductosSchema = new mongoose.Schema({
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
var producto = mongoose.model("producto", ProductosSchema);
module.exports = producto;