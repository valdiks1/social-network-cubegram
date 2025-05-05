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

export function getMyRooms(userId) {
    return pool.query(`
        SELECT rooms.id, rooms.name as room_name, puzzles.name as type
        FROM rooms JOIN puzzles ON rooms.id_p=puzzles.id
        WHERE rooms.id_owner=$1
    `,[userId]);
}

export function getOpenRooms(userId){
    return pool.query(`
        SELECT rooms.id, rooms.name as room_name, puzzles.name as type
        FROM rooms JOIN puzzles ON rooms.id_p=puzzles.id
        WHERE $1 = ANY(rooms.allowed_users)
    `,[userId]);
}

export function getRoomData(id){
    return pool.query(`
        SELECT rooms.name, rooms.allowed_users, puzzles.name as type
        FROM rooms JOIN puzzles ON rooms.id_p=puzzles.id
        WHERE rooms.id=$1
    `,[id]);
}

export function getUserById(id){
    return pool.query( `
        SELECT id, name
        FROM users
        WHERE users.id=$1
    `,[id]);
}

export function addUserToRoom(roomId, userId){
    return pool.query(`
        UPDATE rooms
        SET allowed_users=array_append(allowed_users, $1)
        WHERE rooms.id=$2 AND NOT ($1 = ANY(allowed_users))
    `,[userId, roomId]);
}

export function checkOwner(roomId, userId){
    return pool.query(`
        SELECT * FROM rooms WHERE rooms.id=$1 AND rooms.id_owner=$2
    `,[roomId,userId]);
}

export function removeUser(roomId, userId){
    return pool.query(`
        UPDATE rooms
        SET allowed_users=array_remove(allowed_users, $1)
        WHERE rooms.id=$2
    `,[userId, roomId]);
}

export function addAttemptIntoRoom(attemptId, userId, roomId){
    return pool.query(`
        INSERT INTO room_attempts(id_a, id_u, id_r)
        VALUES($1, $2, $3)
    `,[attemptId, userId, roomId]);
}

export function getUsersAttemptsIntoRoom(roomId, userId){
    return pool.query(`
        SELECT users.name as name, attempts.time
        FROM room_attempts, users, attempts
        WHERE room_attempts.id_r=$1 AND room_attempts.id_u=$2 AND attempts.id=room_attempts.id_a AND room_attempts.id_u=users.id
        ORDER BY attempts.datetime ASC
    `,[roomId, userId]);
}