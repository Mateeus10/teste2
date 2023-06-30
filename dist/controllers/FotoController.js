"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfigjs = require('../config/multerConfig.js'); var _multerConfigjs2 = _interopRequireDefault(_multerConfigjs);

var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

const upload = _multer2.default.call(void 0, _multerConfigjs2.default).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { produto_id } = req.body;
        const foto = await _Fotojs2.default.create({ originalname, filename, produto_id });
        return res.json(foto);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: ['Foto não enviada'],
        });
      }
    });
  }
}

exports. default = new FotoController();
