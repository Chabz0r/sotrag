import {DataSource, DataSourceOptions} from 'typeorm';
import * as path from 'path';
import 'dotenv/config';

const env = process.env;

export const ormConfig: DataSourceOptions = {
  migrationsTableName: 'migrations',
  type: 'mysql', //environments.database.type,
  host: env.MYSQL_HOST,
  port: Number(env.MYSQL_PORT),
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  logging: false,
  synchronize: false,
  entities: [path.join(__dirname, '**/**.entity{.ts,.js}')],
  migrations: [path.join(__dirname, 'typeorm/**/*{.ts,.js}')],
}

const datasource = new DataSource(ormConfig)

export default datasource
