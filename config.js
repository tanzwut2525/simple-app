const DB_HOST = process.env.DB_HOST || "127.0.0.1";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_USER = process.env.DB_USER || app_username;
const DB_PASSWORD = process.env.DB_PASSWORD || app_password;
const DB_NAME = process.env.DB_NAME || dbname;

const config = {
    db: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      connectTimeout: 60000
    },
    listPerPage: 10,
  };

  module.exports = config;