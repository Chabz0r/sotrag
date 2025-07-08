import {config} from 'dotenv';

config();

const env = process.env;

export const environments = {
  proxyEnabled: env.PROXY_ENABLED === 'true',
  frontEndUrl: env.FRONTEND_URL,
  jwt: {
    secret: env.JWT_SECRET,
  },
  accessTokenSecret: env.ACCESS_TOKEN_SECRET,
  accessTokenExpiration: env.ACCESS_TOKEN_EXPIRATION,
  refreshTokenSecret: env.REFRESH_TOKEN_SECRET,
  refreshTokenExpiration: env.REFRESH_TOKEN_EXPIRATION,
  email: {
    sender: process.env.EMAIL_SENDER,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
  bucket: {
    credentials: {
      accessKeyId: process.env.BUCKET_ACCESS_KEY_ID,
      secretAccessKey: process.env.BUCKET_SECRET_ACCESS_KEY,
    },
    region: process.env.BUCKET_REGION,
    name: process.env.BUCKET_NAME,
    endpoint: `https://${process.env.BUCKET_NAME}.s3.${process.env.BUCKET_REGION}.scw.cloud`,
    path: `https://${process.env.BUCKET_NAME}.s3.${process.env.BUCKET_REGION}.scw.cloud/${process.env.BUCKET_NAME}`,
  }
};
