import pool from '../config/db.js';

export function getUser(id){
    return pool.query("SELECT name, country, sex FROM users WHERE users.id=$1",[id]);
}

export function createPost(userId, text){
    const now = new Date();
    now.setSeconds(0, 0);
    return pool.query("INSERT INTO posts(id_u, text, date) VALUES($1,$2,$3)",[userId, text, now]);
}

/*

CREATE TABLE posts(
	id serial NOT NULL PRIMARY KEY,
	id_u int NOT NULL,
	text text NOT NULL,
	date timestamp without time zone NOT NULL,
	CONSTRAINT FK_id_u FOREIGN KEY(id_u) REFERENCES users(id)
);


*/