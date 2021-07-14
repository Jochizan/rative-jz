import mysql from 'mysql2/promise';
import { config } from './config';

const connect = async () => {
  const conn = await mysql.createConnection(config);
  console.log("Connect DataBase MySQL mariadb ✔")
  return conn;
}

export default connect;