import pool from '../config/db.js';

export function addAttempt(id, time, id_p, userId, date){
    return pool.query("INSERT INTO attempts(id, time, id_u, datetime, flags, id_p) VALUES($1, $2, $3, $4, $5, $6)", [id, time, userId, date, 'none', id_p]);
}

export function updateAttempt(id, flag){
    return pool.query("UPDATE attempts SET flags=$1 WHERE id=$2",[flag,id]);
}