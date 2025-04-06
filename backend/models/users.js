import pool from '../config/db.js';

export function getUsers(email){
    return pool.query("SELECT * FROM users WHERE users.email=$1",[email]);
}