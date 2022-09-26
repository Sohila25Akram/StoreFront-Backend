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

    it("create user ", async(done)=>{
        const res = await request.post('/Uesrs')
        .send({firstName:'Sohila', lastName:'Akram', password:'password123'});
        token = res.body;
        console.log(token);
        expect(res.status).toBe(200);
        done();
    })

    it("gets list of users", async(done)=>{
        const res = await request.get('/Users').auth(token, {type: 'bearer'})
        except(res.status).toBe(200);
        except(res.body).toBeTruthy();
        except(res.body.length).toEqual(1);
        except(res.body[0].id).toEqual(1);
        done();
    })

    it("returns unauthorized", async(done)=>{
        const res = await request.get('/Users');
        except(res.status).toBe(401);
        done();
    })

    it("gets user by id", async(done)=>{
        const res = await request.get('/Users/1').set('Authorization', 'Bearer '+token)
        except(res.status).toBe(200);
        except(res.body.firstName).toEqual('Sohila');
        except(res.body.lastName).toEqual('Akram');
        done();
    })
})