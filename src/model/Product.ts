import client from "../database";

export type Product={
    id:Number;
    name:string;
    price:number;
}

export class ProductStore{
    async index():Promise<Product[]>{
        try{
            const conn = await client.connect()

            const sql = 'SELECT * FROM Product_table'

            const result = await conn.query(sql)

            conn.release()

            return result.rows
        }catch(err){
            throw new Error(`Could not find any Products ${err}`)
        }
    }
    async show(id: string): Promise<Product> {
        try {
            const sql = 'SELECT * FROM Product_table WHERE id=($1)'
        
            const conn = await client.connect()
    
            const result = await conn.query(sql, [id])
    
            conn.release()
    
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find Product ${id}. Error: ${err}`)
        }
    }
    async create(P: Product): Promise<Product> {
       
        try {
            const conn = await client.connect()

            const sql = 'INSERT INTO Product_table(name, price) VALUES ($1, $2)'
    
            const result = await conn.query(sql, [P.name, P.price])
    
            conn.release()
    
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find Product ${P.name}. Error: ${err}`)
        }
    }
}