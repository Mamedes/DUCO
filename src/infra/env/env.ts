import 'dotenv/config';
import * as enValid from 'envalid';

const env = enValid.cleanEnv(process.env, {
  NODE_ENV: enValid.str({
    choices: ['development', 'test', 'production'],
    default: 'development',
  }),

  POSTGRES_HOST: enValid.str({
    devDefault: 'localhost',
    example: 'localhost',
  }),
  POSTGRES_PORT: enValid.port({
    devDefault: 5432,
    example: '5432',
  }),
  POSTGRES_USER: enValid.str({
    devDefault: 'docker',
    example: 'docker',
  }),
  POSTGRES_PASS: enValid.str({
    devDefault: 'docker',
    example: 'docker',
  }),
  POSTGRES_DB_NAME: enValid.str({
    devDefault: 'duco',
    example: 'duco',
  }),
});

export { env };
