require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  timezone: 'america/sao_paulo',
  dialectOptions: {
    timezone: 'local',
  },
};
