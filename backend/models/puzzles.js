import pool from "../config/db.js";

export function getPuzzleId(name){
    return pool.query("SELECT id FROM puzzles WHERE name=$1",[name]);
}