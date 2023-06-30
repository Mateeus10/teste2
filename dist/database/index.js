"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _databasejs = require('../config/database.js'); var _databasejs2 = _interopRequireDefault(_databasejs);

var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _Produtojs = require('../models/Produto.js'); var _Produtojs2 = _interopRequireDefault(_Produtojs);
var _Categoryjs = require('../models/Category.js'); var _Categoryjs2 = _interopRequireDefault(_Categoryjs);
var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

const models = [_Userjs2.default, _Produtojs2.default, _Categoryjs2.default, _Fotojs2.default];

const connection = new (0, _sequelize2.default)(_databasejs2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
