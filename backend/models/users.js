import pool from '../config/db.js';

export function getUsers(email){
    return pool.query("SELECT * FROM users WHERE users.email=$1",[email]);
}

export function getUsersByName(name){
    return pool.query("SELECT id, name FROM users WHERE name ILIKE $1", [`%${name}%`]);
}