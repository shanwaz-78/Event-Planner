const { DataSource } = require('typeorm');
import { configDotenv } from "dotenv";

configDotenv();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/**/*.entity.ts'],
    logging: true
});

module.exports = { AppDataSource };
