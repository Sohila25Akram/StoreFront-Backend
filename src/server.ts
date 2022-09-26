import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { Product, ProductStore } from './model/Product'
import { Users, UsersStore } from './model/Users'
import Product_routes from './holders/Product'
import Users_routes from './holders/Users'
import Orders_routes from './holders/Orders'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

const corsOptions={
    origin:'http://storeFront.com',
    optionSuccessStatus: 200
}

function cors(corsOptions: { origin: string; optionSuccessStatus: number }): any {
    throw new Error('Function not implemented.')
}

app.use(cors(corsOptions))
app.use(bodyParser.json())


app.get('/Product', (req: Request, res: Response) => {
    try{
        res.send('This in INDEX routes')
    }catch(err){
        res.status(400)
        return res.json(err)
    }
})

app.get('/Product/:id', (req: Request, res: Response) => {
    try{
        res.send('This in SHOW routes')
    }catch(err){
        res.status(400)
        return res.json(err)
    }
})

app.post('/Product', (req: Request, res: Response) => {
    const product:Product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    }
    try{
        res.send('This in CREATE routes')
    }catch(err){
        res.status(400)
        return res.json(err)
    }
})

//-----------------------------

app.get('/Users', (req: Request, res: Response) => {
    try{
        res.send('This in INDEX routes')
    }catch(err){
        res.status(400)
        return res.json(err)
    }
})

app.get('/Users/:id', (req: Request, res: Response) => {
    try{
        res.send('This in SHOW routes')
    }catch(err){
        res.status(400)
        return res.json(err)
    }
})

app.post('/Users', (req: Request, res: Response) => {
    const users:Users = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    }
    try{
        res.send('This in CREATE routes')
    }catch(err){
        res.status(400)
        return res.json(err)
    }
})

//------------------------------------------

app.get('/Orders/:id', (req: Request, res: Response) => {
    try{
        res.send('This in SHOW routes')
    }catch(err){
        res.status(400)
        return res.json(err)
    }
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

app.get('/test-cors', cors(corsOptions), function(req, res, next){
    res.json({msg: 'This is CORS-enabled with a middle ware'})
})

Product_routes(app)
Users_routes(app)
Orders_routes(app)



