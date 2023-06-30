"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Produtojs = require('../models/Produto.js'); var _Produtojs2 = _interopRequireDefault(_Produtojs);
var _Categoryjs = require('../models/Category.js'); var _Categoryjs2 = _interopRequireDefault(_Categoryjs);
var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

class ProdutoController {
  async store(req, res) {
    try {
      const produto = await _Produtojs2.default.create(req.body);
      return res.json(produto);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    const produtos = await _Produtojs2.default.findAll({
      attributes: [
        'id',
        'name',
        'price',
      ],
      include: [{
        model: _Categoryjs2.default,
        attributes: ['category_name'],

      }, {
        model: _Fotojs2.default,
        attributes: ['url', 'filename'],
      },

      ],

    });
    return res.json(produtos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Faltando Id'] });
      }
      const produtos = await _Produtojs2.default.findByPk(id, {
        attributes: ['id', 'name', 'price'],
        include: [{
          model: _Categoryjs2.default,
          attributes: ['category_name'],

        }, {
          model: _Fotojs2.default,
          attributes: ['url', 'filename'],
        },

        ],

      });
      if (!produtos) {
        return res.status(400).json({ errors: ['Produto não existe'] });
      }
      return res.json(produtos);
    } catch (e) {
      return res.json('Produto não encontrado');
    }
  }

  async update(req, res) {
    try {
      const produtos = await _Produtojs2.default.findByPk(req.params.id);
      if (!produtos) {
        return res.status(400).json({
          errors: ['Produto não existe'],
        });
      }

      const novoProduto = await produtos.update(req.body);
      const { id, name, price } = novoProduto;

      return res.json({ id, name, price });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const produtos = await _Produtojs2.default.findByPk(req.params.id);
      if (!produtos) {
        return res.status(400).json(
          'Produto não existe mas',
        );
      }
      await produtos.destroy();
      return res.json('Produto apagado');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new ProdutoController();
