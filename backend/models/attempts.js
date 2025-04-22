import pool from '../config/db.js';

export function getAttemptsByCubeType(userId, type){
    return pool.query("SELECT attempts.id, attempts.time, attempts.flags FROM attempts, puzzles WHERE puzzles.name=$1 AND puzzles.id=attempts.id_p AND attempts.id_u=$2 ORDER BY datetime ASC ",[type, userId]);
}