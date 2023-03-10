import Sequelize, { Model } from 'sequelize';
// import appConfig from '../config/appConfig';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.APP_URL;

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${url}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      { sequelize, tableName: 'fotos' },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
