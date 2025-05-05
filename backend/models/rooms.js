import pool from '../config/db.js';

export function createRoom(userId, name, typeOfCube){
    return pool.query(`
        INSERT INTO rooms(name, current_users, allowed_users, id_owner, id_p)
        VALUES($1, '{}', ARRAY[$2]::integer[], $2, (SELECT id FROM puzzles WHERE puzzles.name=$3))
    `,[name, userId, typeOfCube]);
}

export function getAllRooms(){
    return pool.query(`
        SELECT rooms.id, rooms.name as room_name, puzzles.name as type
        FROM rooms JOIN puzzles ON rooms.id_p=puzzles.id
    `);
}