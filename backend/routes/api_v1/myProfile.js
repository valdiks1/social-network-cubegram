import express from 'express';
import { createPost, getUser } from '../../models/myProfile.js';

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
export default router;