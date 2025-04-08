import pool from '../config/db.js';

export function getUser(id){
    return pool.query("SELECT name, country, sex FROM users WHERE users.id=$1",[id]);
}