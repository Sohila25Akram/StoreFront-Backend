import client from "../database";

export type Orders={
    id:Number;
    user_id:Number;
    status:string; //************ */
}

export class OrdersStore{
    
    async create(O: Orders): Promise<Orders> {
       
        try {
            const conn = await client.connect()

            const sql = 'INSERT INTO Orders_table(user_id, status) VALUES ($1, $2)'
    
            const result = await conn.query(sql, [O.id, O.user_id, O.status])
    
            conn.release()
    
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find orders ${O.user_id}. Error: ${err}`)
        }
    }
    
}