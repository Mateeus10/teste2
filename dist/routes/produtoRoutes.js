"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _ProdutoController = require('../controllers/ProdutoController'); var _ProdutoController2 = _interopRequireDefault(_ProdutoController);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const route = _express2.default.call(void 0, );

route.get('/', _ProdutoController2.default.index);
route.get('/:id', _ProdutoController2.default.show);
route.post('/', _loginRequiredjs2.default, _ProdutoController2.default.store);
route.put('/:id', _loginRequiredjs2.default, _ProdutoController2.default.update);
route.delete('/:id', _loginRequiredjs2.default, _ProdutoController2.default.delete);

exports. default = route;
