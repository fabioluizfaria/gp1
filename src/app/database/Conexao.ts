import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'toxic',
    password: 'postgres',
    port: 5432
});