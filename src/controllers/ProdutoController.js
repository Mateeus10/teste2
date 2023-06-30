import Produto from '../models/Produto.js';
import Category from '../models/Category.js';
import Foto from '../models/Foto.js';

class ProdutoController {
  async store(req, res) {
    try {
      const produto = await Produto.create(req.body);
      return res.json(produto);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    const produtos = await Produto.findAll({
      attributes: [
        'id',
        'name',
        'price',
      ],
      include: [{
        model: Category,
        attributes: ['category_name'],

      }, {
        model: Foto,
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
      const produtos = await Produto.findByPk(id, {
        attributes: ['id', 'name', 'price'],
        include: [{
          model: Category,
          attributes: ['category_name'],

        }, {
          model: Foto,
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
      const produtos = await Produto.findByPk(req.params.id);
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
      const produtos = await Produto.findByPk(req.params.id);
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

export default new ProdutoController();
