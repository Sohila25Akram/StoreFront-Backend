import express, {Request, Response} from 'express'
import { Users, UsersStore } from '../model/Users'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'


const store = new UsersStore()

const index = async (_req:Request, res:Response) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    try{
        const User = await store.index()
        res.json(User)
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const show = async (req:Request, res:Response) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    try{
        const User = await store.show(req.body.id)
        res.json(User)
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const create = async (req:Request, res:Response) => {
    const users: Users = {
        id:req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password:req.body.password
    }
    
    try{

        const Users = await store.create(users)
        var token = jwt.sign({users:Users}, process.env.TOKEN_SECRET);
        res.json(token)

    }catch(err){
        res.status(400)
        res.json(err + users)
    }
}

const authenticate = async (req: Request, res: Response) => {
    const users: Users = {
        id:req.body.id,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password,
    }
    try {
        const u = await store.authenticate(users.firstName,users.lastName , users.password)
        var token = jwt.sign({ users: u }, process.env.TOKEN_SECRET);
        res.json(token)
    } catch(error) {
        res.status(401)
        res.json({ error })
    }
  }


const Users_routes = (app:express.Application) => {
    app.get('/Users', index)
    app.get('/Users/:id', show)
    app.post('/Users', create)
    app.post('/Users/authenticate', authenticate)
}


export default Users_routes