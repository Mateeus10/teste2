"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Categoryjs = require('../models/Category.js'); var _Categoryjs2 = _interopRequireDefault(_Categoryjs);
var _Produtojs = require('../models/Produto.js'); var _Produtojs2 = _interopRequireDefault(_Produtojs);

class CategoryController {
  async index(req, res) {
    const category = await _Categoryjs2.default.findAll({
      attributes: ['id', 'category_name'],
      include: {
        model: _Produtojs2.default,
        attributes: ['id', 'name', 'price'],
      },
    });
    res.json(category);
  }

  async store(req, res) {
    try {
      const { category_id, category_name } = req.body;
      const category = await _Categoryjs2.default.create({ category_name, category_id });
      return res.json(category);
    } catch (e) {
      return res.status(400).json({
        errors: ['Categoria não existe'],
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Falta ID do produto'],
        });
      }

      const category = await _Categoryjs2.default.findByPk(id, {
        attributes: ['id', 'category_name'],
      });

      if (!category) {
        return res.status(400).json({
          errors: ['category não exites'],
        });
      }
      return res.json(category);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const category = await _Categoryjs2.default.findByPk(req.params.id);
      if (!category) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }
      await category.destroy();

      return res.json(null);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new CategoryController();
