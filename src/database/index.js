import Sequelize from 'sequelize';
import DatabaseConfig from '../config/database.js';

import User from '../models/User.js';
import Product from '../models/Produto.js';
import Category from '../models/Category.js';
import Foto from '../models/Foto.js';

const models = [User, Product, Category, Foto];

const connection = new Sequelize(DatabaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
