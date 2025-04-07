import express from 'express';
import { getUsers } from '../../models/users.js';
import {comparePassword} from '../../utils/authHelper.js';
import { config } from '../../config/config.js';

var router = express.Router();

router.post('/login', (req,res) => {
    const {email, password} = req.body;
    getUsers(email)
        .then((result) => {
            if(result.rows && result.rows.length === 1){
                const userId = result.rows[0].id;
                const hashedPassword = result.rows[0].password;                
                comparePassword(password, hashedPassword)
                    .then((isValid) => {
                        if(isValid){
                            req.session.userId = userId;
                            return res.status(200).end();
                        }else{
                            console.log("Invalid password");
                            return res.status(401).end();
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                        res.status(500).end();
                    })
                    
            }else {
                console.log("User does not exist");
                return res.status(401).end();
            }
        })
        .catch((e) => {
            console.log(e);
            res.status(500).end();
        })
})

router.delete("/logout", (req, res) => {    
    if (req.session && req.session.userId) {        
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
                return res.status(500).end();
            } else {
                res.clearCookie(config.session.cookieName);
                return res.status(200).end();
            }
        });
    } else {
        return res.status(400).end();
    }
});

export default router;