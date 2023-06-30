import Category from '../models/Category.js';
import Produto from '../models/Produto.js';

class CategoryController {
  async index(req, res) {
    const category = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: {
        model: Produto,
        attributes: ['id', 'name', 'price'],
      },
    });
    res.json(category);
  }

  async store(req, res) {
    try {
      const { category_id, category_name } = req.body;
      const category = await Category.create({ category_name, category_id });
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

      const category = await Category.findByPk(id, {
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
      const category = await Category.findByPk(req.params.id);
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

export default new CategoryController();
