"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _path = require('path');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

require('./database');

var _homeRoutesjs = require('./routes/homeRoutes.js'); var _homeRoutesjs2 = _interopRequireDefault(_homeRoutesjs);
var _userRoutesjs = require('./routes/userRoutes.js'); var _userRoutesjs2 = _interopRequireDefault(_userRoutesjs);
var _produtoRoutesjs = require('./routes/produtoRoutes.js'); var _produtoRoutesjs2 = _interopRequireDefault(_produtoRoutesjs);
var _categoryRoutesjs = require('./routes/categoryRoutes.js'); var _categoryRoutesjs2 = _interopRequireDefault(_categoryRoutesjs);
var _fotoRoutesjs = require('./routes/fotoRoutes.js'); var _fotoRoutesjs2 = _interopRequireDefault(_fotoRoutesjs);
var _tokenRoutesjs = require('./routes/tokenRoutes.js'); var _tokenRoutesjs2 = _interopRequireDefault(_tokenRoutesjs);





class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _homeRoutesjs2.default);
    this.app.use('/users/', _userRoutesjs2.default);
    this.app.use('/produtos/', _produtoRoutesjs2.default);
    this.app.use('/category/', _categoryRoutesjs2.default);
    this.app.use('/fotos/', _fotoRoutesjs2.default);
    this.app.use('/tokens/', _tokenRoutesjs2.default);
  }
}

exports. default = new App().app;
