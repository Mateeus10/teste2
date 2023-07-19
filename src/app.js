import { resolve } from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import './database';

import homeRoutes from './routes/homeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/produtoRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import fotoRoutes from './routes/fotoRoutes.js';
import tokenRoutes from './routes/tokenRoutes.js';

const whiteList = {
  origin: 'http://localhost:3000',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,

};

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};




class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/produtos/', productRoutes);
    this.app.use('/category/', categoryRoutes);
    this.app.use('/fotos/', fotoRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
