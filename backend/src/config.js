import { config as dotenv } from 'dotenv';

dotenv();

export const config = {
  host: process.env.HOST || 'localhost',
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || '',
  database: process.env.DATABASE || 'test_db'
}