import Sequelize, { Model } from 'sequelize';

export default class Products extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      price: {
        type: Sequelize.FLOAT,
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
}
