"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _CategoryController = require('../controllers/CategoryController'); var _CategoryController2 = _interopRequireDefault(_CategoryController);

const route = _express2.default.call(void 0, );

route.get('/', _CategoryController2.default.index);
route.get('/:id', _CategoryController2.default.show);
route.post('/', _CategoryController2.default.store);
route.delete('/:id', _CategoryController2.default.delete);

exports. default = route;
