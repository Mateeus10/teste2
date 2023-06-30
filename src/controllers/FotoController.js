import multer from 'multer';
import multerConfig from '../config/multerConfig.js';

import Foto from '../models/Foto.js';

const upload = multer(multerConfig).single('foto');

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
        const foto = await Foto.create({ originalname, filename, produto_id });
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

export default new FotoController();
