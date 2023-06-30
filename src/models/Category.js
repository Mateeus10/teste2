import Sequelize, { Model } from 'sequelize';

export default class Category extends Model {
  static init(sequelize) {
    super.init({
      category_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não Pode fica vazio',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Products, { foreignKey: 'category_id' });
  }
}
