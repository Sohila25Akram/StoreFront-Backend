import client from "../database";
import bcrypt from 'bcrypt'

export type Users={
    id:Number;
    firstName:string;
    lastName:number;
    password:string;
}

export class UsersStore{
    async index():Promise<Users[]>{
        try{
            const conn = await client.connect()

            const sql = 'SELECT * FROM Users_table'

            const result = await conn.query(sql)

            conn.release()

            return result.rows
        }catch(err){
            throw new Error(`Could not find any Users ${err}`)
        }
    }
    async show(id: string): Promise<Users> {
        try {
            const sql = 'SELECT * FROM Users_table WHERE id=($1)'
        
            const conn = await client.connect()
    
            const result = await conn.query(sql, [id])
    
            conn.release()
    
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find Users ${id}. Error: ${err}`)
        }
    }
    async create(U: Users): Promise<Users> {
        try {
            const conn = await client.connect()

            const sql = 'INSERT INTO Users_table(firstName, lastName, password) VALUES ($1, $2, $3)'

            const hash = bcrypt.hashSync(
                U.password + pepper,
                parseInt(saltRounds)
            )
    
            const result = await conn.query(sql, [U.firstName, hash])
    
            conn.release()
    
            return result.rows[0]
        } catch (err) {
            throw new Error(`User not created ${U.firstName +" "+ U.lastName}. Error: ${err}`)
        }
    }

    async authenticate(firstName:string, password:string):Promise<Users | null>{
        const conn = await client.connect
        const sql = 'SELECT user_password FROM Users_table WHERE firstName=($2)'
        const result = await conn.query(sql, [firstName])
        console.log(password + pepper)

        if(result.rows.length){
            const user = result.rows[0]
            console.log(user)
            if(bcrypt.compareSync(password+ pepper, user.password)){
                return user
            }
        }
        return null
    }
}