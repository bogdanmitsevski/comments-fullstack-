const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../models/models');
const {validationResult}  = require('express-validator');
const generateJwt = (id, email) => {
    return jwt.sign(
      {id, email}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        );
}

class UserController {
    async registration(req, res) {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400).json({message:'Registration Error',errors});
        }
        else {
            const {email, username, password} = req.body;
            const isUserRegistered = await Users.findOne({where:{email}});
        if(isUserRegistered) {
            res.status(400).json({message:`User with ${email} was already registered`})
        }
        else {
            const hashPasword = await bcrypt.hash(password, 8);
            const newUser = await Users.create({email, username, password:hashPasword});
            const token = generateJwt(newUser.id, newUser.email);
            await newUser.save();
            res.json({message:`New User was succesfully created with token ${token}`});
        }
        }
    
    }
    catch(e) {
        console.log(e);
    }
    }

    async login(req, res) {
        
    try {
    const {email, password} = req.body;
        const User = await Users.findOne({where:{email}});
        if(!User) {
            res.status(400).json({message:`User with this email ${email} does not exist`});
        }
        else {
            let comparePassword = bcrypt.compareSync(password, User.password);
            if(!comparePassword) {
                res.status(401).json({message: 'Invalid Password'});
            }
            const token = generateJwt(User.id, User.email);
            return res.json({token: `Bearer ${token}`});
        }
    }   
    
    catch(e) {
    console.log(e)
    }
    }
   
}

module.exports =  new UserController;
