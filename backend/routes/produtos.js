const express = require('express');
const Produto = require('../models/produto');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { nome } = req.body;

        const existente = await Produto.findOne({ nome: new RegExp(`^${nome}$`, 'i') });
        if (existente) {
            return res.status(400).json({ message: 'Esse produto já está cadastrado' });
        }

        const novoProduto = new Produto({ nome });
        await novoProduto.save();
        res.status(201).json(novoProduto);
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        res.status(500).send('Erro ao adicionar produto');
    }
});

router.delete('/:id', async (req, res) => {
    await Produto.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

router.patch('/:id', async (req, res) => {
    const produto = await Produto.findById(req.params.id);
    produto.riscada = !produto.riscada;
    await produto.save();
    res.send(produto);
});

router.delete('/', async (req, res) => {
    await Produto.deleteMany({});
    res.status(204).send();
});

router.get('/', async (req, res) => {
    const produtos = await Produto.find();
    res.send(produtos);
});

router.patch('/pagamento/:id', async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        produto.pagamentoEfetuado = !produto.pagamentoEfetuado;
        produto.riscada = !produto.pagamentoEfetuado;

        await produto.save();
        res.json(produto);
    } catch (error) {
        console.error('Erro ao atualizar status de pagamento:', error);
        res.status(500).send('Erro ao atualizar status de pagamento');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { nome } = req.body;
        const produto = await Produto.findById(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        const existente = await Produto.findOne({ nome: new RegExp(`^${nome}$`, 'i') });
        if (existente && existente._id.toString() !== produto._id.toString()) {
            return res.status(400).json({ message: 'Já existe um produto com esse nome no estoque.' });
        }

        produto.nome = nome;
        await produto.save();
        res.json(produto);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).send('Erro ao atualizar produto');
    }
});

router.patch('/preco/:id', async (req, res) => {
    try {
        const { preco } = req.body;
        const produto = await Produto.findById(req.params.id);

        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        produto.preco = preco;
        await produto.save();
        res.json(produto);
    } catch (error) {
        console.error('Erro ao atualizar preço:', error);
        res.status(500).send('Erro ao atualizar preço');
    }
});

router.patch('/promocao/:id', async (req, res) => {
    try {
        const { promocao } = req.body;
        const produto = await Produto.findById(req.params.id);

        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        produto.promocao = promocao;
        produto.preco = produto.preco - (produto.preco * (promocao / 100));
        await produto.save();
        res.json(produto);
    } catch (error) {
        console.error('Erro ao aplicar promoção:', error);
        res.status(500).send('Erro ao aplicar promoção');
    }
});


module.exports = router;
