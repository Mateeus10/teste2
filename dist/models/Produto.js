"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Products extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      price: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Tem que ser decimal',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'products',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id' });
    this.hasMany(models.Foto, { foreignKey: 'produto_id' });
  }
} exports.default = Products;
