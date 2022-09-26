import supertest from 'supertest'
import {server} from '../../server'

const request = supertest(server)
var token:string = '';

describe("Products handler ", ()=>{
    beforeAll(async(done)=>{
        const res = await request.post('/Users')
        token = res.body
        await request.post('/Product')
        .send({name:'cheese', price:30})
        .send('Authorization', 'Bearer', token)
        done();
    })

    it("create products ", async(done)=>{
        const res = await request.post('/Product')
        .send({name:'cheese', price:30})
        .set('Authorization', 'Bearer'+token)
        expect(res.status).toBe(200);
        done();
    })

    it("gets list pf products", async(done)=>{
        const res = await request.get('/Product')
        except(res.status).toBe(200);
        except(res.body).toBeTruthy();
        done();
    })

    it("gets product by id", async(done)=>{
        const res = await request.get('/Product/1')
        except(res.status).toBe(200);
        except(res.body).toEqual({id:1, name:'cheese', price:30})
        done();
    })
})