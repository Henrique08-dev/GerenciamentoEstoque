const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    riscada: { type: Boolean, default: true },
    pagamentoEfetuado: { type: Boolean, default: false },
    preco: { type: Number, default: 0 },
    promocao: { type: Number, default: 0 },
});

module.exports = mongoose.model('Produto', produtoSchema);
