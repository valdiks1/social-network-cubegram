import express from 'express';
import { createRoom, getAllRooms, getMyRooms, getRoomData } from '../../models/rooms.js';

var router = express.Router();

router.post('/', (req, res) => {
    if(req.session && req.session.userId){
        const {name, typeOfCube} = req.body;
        createRoom(req.session.userId, name, typeOfCube).then(r => res.status(200).end()).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    }else{
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
    if(req.session && req.session.userId){
        getMyRooms(req.session.userId).then(result => {
            res.status(200).json(result.rows);
        }).catch(e => {
            console.log(e);
            res.status(500);
        })
    }else{
        res.status(500).end();
    }
})

router.get('/room/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const roomData = await getRoomData(id);
        const result = {
            roomData: roomData.rows[0]
        }
        res.status(200).json(result);
    }catch(e){
        console.log(e);
        res.status(500).end();
    }
    
})

export default router;