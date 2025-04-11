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
	return pool.query("SELECT text, date FROM posts WHERE id_u=$1 ORDER BY id DESC", [userId]);
}