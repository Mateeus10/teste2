"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllerjs = require('../controllers/UserController.js'); var _UserControllerjs2 = _interopRequireDefault(_UserControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const route = new (0, _express.Router)();

route.get('/', _UserControllerjs2.default.index);
route.get('/:id', _UserControllerjs2.default.show);

route.post('/', _UserControllerjs2.default.store);
route.put('/:id', _loginRequiredjs2.default, _UserControllerjs2.default.update);
route.delete('/:id', _loginRequiredjs2.default, _UserControllerjs2.default.delete);

exports. default = route;
