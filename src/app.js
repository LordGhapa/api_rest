/* eslint-disable quotes */

import dotenv from 'dotenv';

dotenv.config();
import { resolve } from 'path';
import cors from 'cors';

import './database';
import express, { urlencoded } from 'express';
import homeRoutes from './routes/homeRoutes';
import alunoRoutes from './routes/alunoRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'http://localhost:3000'];
const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('not allow by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));

    this.app.use(urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      '/images',
      // eslint-disable-next-line comma-dangle
      express.static(resolve(__dirname, '..', 'uploads', 'images'))
    );
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
