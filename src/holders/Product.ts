import express, {Request, Response} from 'express'
import { Product, ProductStore } from '../model/Product'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const store = new ProductStore()

const index = async (_req:Request, res:Response) => {
    const Product = await store.index()
    res.json(Product)
}

const show = async (req:Request, res:Response) => {
    
    const Product = await store.show(req.body.id)
    res.json(Product)
}

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
        const product: Product = {
            id:req.body.id,
            name: req.body.name,
            price: req.body.price,
            catogery:req.body.catogery
        }

        const Product = await store.create(product)
        res.json(Product)

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

const Product_routes = (app:express.Application) => {
    app.get('/Product', index)
    app.get('/Product/:id', show)
    app.post('/Product', verifyAuthToken, create)
}


export default Product_routes