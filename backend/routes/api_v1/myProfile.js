import express from 'express';
import { createPost, deletePost, editPost, getPosts, getUser, getUserRecords } from '../../models/myProfile.js';
import { formatDate, safeGetMin } from '../../utils/myprofileHelper.js';

var router = express.Router();

router.get('/', (req, res) => {
    if (req.session && req.session.userId) {
        getUser(req.session.userId)
            .then(
                (user) => {
                    const resUser = {
                        name: user.rows[0].name,
                        country: user.rows[0].country,
                        sex: user.rows[0].sex
                    }
                    res.status(200).json(resUser);
                })
            .catch(
                (err) => {
                    console.log(err);
                    // internal server error
                    res.status(500).end();
                })
    }
    // unauthorized
    else {
        res.status(401).end();
    }
})


router.post("/posts", (req,res) => {
    if(req.session && req.session.userId){
        const {text} = req.body;
        createPost(req.session.userId, text).then(r => res.status(200).end()).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    }else{
        res.status(401).end();
    }
    

})

router.get("/posts", (req,res) => {
    if(req.session && req.session.userId){
        getPosts(req.session.userId).then((posts) => {
            let result = [];
            posts.rows.map(post => result.push({id: post.id, text: post.text, date: formatDate(post.date)}));
            res.status(200).json(result);
        }).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    }else{
        res.status(401).end();
    }
})

router.delete("/posts", (req,res) => {
    const {id} = req.body;
    deletePost(id).then(r => res.status(200).end()).catch(e => {
        console.log(e);
        res.status(500).end();
    })
})

router.put("/posts", (req,res) => {
    const {id, text} = req.body;
    editPost(id,text).then(r => {
        res.status(200).end();
    }).catch(e => {
        console.log(e);
        res.status(500).end();
    })

})

router.get("/records", (req,res) => {
    if(req.session && req.session.userId){
        getUserRecords(req.session.userId).then(r => {
            console.log(r.rows);
            const result = {
                '2x2x2': safeGetMin(r.rows, '2x2x2'),
                '3x3x3': safeGetMin(r.rows, '3x3x3'),
                '4x4x4': safeGetMin(r.rows, '4x4x4'),
                '5x5x5': safeGetMin(r.rows, '5x5x5'),
            }

            res.status(200).json(result);
        }).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    }else{
        res.status(500).end();
    }
})
export default router;