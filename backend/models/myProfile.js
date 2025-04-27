import pool from '../config/db.js';

export function getUser(id){
    return pool.query("SELECT name, country, sex FROM users WHERE users.id=$1",[id]);
}

export function createPost(userId, text){
    const now = new Date();
    now.setSeconds(0, 0);
    return pool.query("INSERT INTO posts(id_u, text, date) VALUES($1,$2,$3)",[userId, text, now]);
}

export function getPosts(userId){
	return pool.query("SELECT id, text, date FROM posts WHERE id_u=$1 ORDER BY id DESC", [userId]);
}

export function deletePost(id){
    return pool.query("DELETE FROM posts WHERE id=$1",[id]);
}

export function editPost(id, text){
    return pool.query("UPDATE posts SET text=$1 WHERE id=$2", [text,id]);
}

export function getUserRecords(id){
    return pool.query("SELECT puzzles.name, MIN(attempts.time) FROM attempts LEFT OUTER JOIN puzzles ON attempts.id_p=puzzles.id WHERE attempts.id_u=$1 GROUP BY(puzzles.name)", [id]);
}