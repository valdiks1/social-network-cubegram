import express from 'express';
import { addUserToRoom, checkOwner, createRoom, getAllRooms, getMyRooms, getRoomData, getUserById, removeUser, getOpenRooms } from '../../models/rooms.js';

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
        for (let i = 0; i < roomData.rows[0].allowed_users.length; i++) {
            const user = await getUserById(roomData.rows[0].allowed_users[i]);
            allowed_users_list.push(user.rows[0]);
        }
        const result = {
            roomData: roomData.rows[0],
            allowed_users: allowed_users_list
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

export default router;