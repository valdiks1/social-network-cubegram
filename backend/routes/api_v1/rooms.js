import express from 'express';
import { addUserToRoom, checkOwner, createRoom, getAllRooms, getMyRooms, getRoomData, getUserById, removeUser, getOpenRooms, addAttemptIntoRoom, getUsersAttemptsIntoRoom, checkPermission } from '../../models/rooms.js';
import { addAttempt } from '../../models/timer.js';
import {getPuzzleId} from '../../models/puzzles.js';
import { average } from '../../utils/attemptsHelper.js';

var router = express.Router();

router.post('/', (req, res) => {
    if (req.session && req.session.userId) {
        const { name, typeOfCube } = req.body;
        createRoom(req.session.userId, name, typeOfCube).then(r => res.status(200).end()).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    } else {
        res.status(500).end();
    }
})

router.get('/', (req, res) => {
    getAllRooms().then(result => {
        res.status(200).json(result.rows);
    }).catch(e => {
        console.log(e);
        res.status(500).end();
    })
})

router.get('/myrooms', (req, res) => {
    if (req.session && req.session.userId) {
        getMyRooms(req.session.userId).then(result => {
            res.status(200).json(result.rows);
        }).catch(e => {
            console.log(e);
            res.status(500);
        })
    } else {
        res.status(500).end();
    }
})

router.get('/openrooms', (req, res) => {
    if (req.session && req.session.userId) {
        getOpenRooms(req.session.userId).then(result => {
            res.status(200).json(result.rows);
        }).catch(e => {
            console.log(e);
            res.status(500);
        })
    } else {
        res.status(500).end();
    }
})

router.get('/room/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const roomData = await getRoomData(id);
        let allowed_users_list = [];
        let usersData = []
        for (let i = 0; i < roomData.rows[0].allowed_users.length; i++) {
            const user = await getUserById(roomData.rows[0].allowed_users[i]);
            allowed_users_list.push(user.rows[0]);
            const attempts = await getUsersAttemptsIntoRoom(id, roomData.rows[0].allowed_users[i]);
            const userData = {
                username: attempts.rows[0] ? attempts.rows[0].name : user.rows[0].name,
                info: {
                    avg: average(attempts.rows),
                    avg5: average(attempts.rows, 5),
                    avg10: average(attempts.rows, 10),
                    avg25: average(attempts.rows, 25),
                    avg50: average(attempts.rows, 50),
                    worst: Math.max(...attempts.rows.map(a => a.time)),
                    best: Math.min(...attempts.rows.map(a => a.time))
                },
                attempts: attempts.rows.map(a => a.time)
            };
            usersData.push(userData);
        }
        const result = {
            roomData: roomData.rows[0],
            allowed_users: allowed_users_list,
            usersData
        }
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(500).end();
    }

})

router.post('/room/:id/users', (req, res) => {
    if (req.session && req.session.userId) {
        const roomId = req.params.id;
        const { userId } = req.body;

        addUserToRoom(roomId, userId).then(r => res.status(200).end()).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    }else{
        res.status(400).end();
    }
})

router.delete('/room/:id/users', async (req, res) => {
    if (req.session && req.session.userId) {
        const roomId = req.params.id;
        const { userId } = req.body;

        try {
            const result = await checkOwner(roomId, userId);
            if (result.rows.length !== 0) {
                return res.status(401).end();
            }

            await removeUser(roomId, userId);
            res.status(200).end();
        } catch (e) {
            console.error(e);
            res.status(500).end();
        }
    }else{
        res.status(400).end();
    }

});

router.post('/room/:id/timer', async (req, res) => {
    if(req.session && req.session.userId){
        const roomId = req.params.id;
        const {id, time, type} = req.body;
        try{
            const result = await getPuzzleId(type);
            const id_p = result.rows[0].id;
            const now = new Date();
            await addAttempt(id, time, id_p , req.session.userId, now);
            await addAttemptIntoRoom(id, req.session.userId, roomId);
            res.status(200).end();
        }catch(e){
            console.log(e);
            res.status(500).end();
        }
    }else{
        res.status(500).end();
    }
})

router.get('/room/:id/permission', (req, res) => {
    if(req.session && req.session.userId){
        const id = req.params.id;
        console.log(id + " " + req.session.userId);
        checkPermission(id, req.session.userId).then(r => {
            console.log(r.rows);
            if(r.rows.length !== 1){
                res.status(401).end();
            }else{
                res.status(200).json({permission: true});
            }
        }).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    }else{
        res.status(401).end();
    }
})

export default router;