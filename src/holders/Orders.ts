import express, {Request, Response} from 'express'
import { Orders, OrdersStore } from '../model/Orders'
import jwt from 'jsonwebtoken'


const store = new OrdersStore()

const create = async (req:Request, res:Response) => {
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
        const orders: Orders = {
            id:req.body.id,
            user_id: req.body.user_id,
            status: req.body.status  
        }

        const Order = await store.create(orders)
        res.json(Order)

    }catch(err){
        res.status(400)
        res.json(err)
    }

    const verifyAuthToken = (req: Request, res: Response, next: () => void) => {
        try {
            const authorizationHeader = req.headers.authorization
            const token = authorizationHeader.split(' ')[1]
            const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
            
            next()
        } catch (error) {
            res.status(401)
        }
    }
}


const Orders_routes = (app:express.Application) => {
    app.post('/Orders', verifyAuthToken, create)

}


export default Orders_routes