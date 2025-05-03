import pool from "../config/db.js";

export default function getRecords(){
    return pool.query(`
    SELECT u.name AS username, u.country, MIN(a.time) AS record, p.name 
    FROM users AS u, attempts AS a, puzzles AS p 
    WHERE u.id=a.id_u AND a.id_p=p.id 
    GROUP BY (u.name, u.country, p.name) 
    ORDER BY record ASC;`, []);
}