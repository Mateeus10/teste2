"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _FotoControllerjs = require('../controllers/FotoController.js'); var _FotoControllerjs2 = _interopRequireDefault(_FotoControllerjs);

const router = new (0, _express.Router)();
router.post('/', _FotoControllerjs2.default.store);

exports. default = router;
