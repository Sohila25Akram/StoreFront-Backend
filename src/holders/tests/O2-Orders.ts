import supertest from 'supertest'
import {server} from '../../server'

import {token} from './O1-Users'


const request=supertest(server)

describe("orders handler ", ()=>{
    beforeAll(async(done)=>{
        console.log(token);
        await request.post('/Orders')
        .send({status:'complete', user_id:1})
        done();
    })

    it("create products ", async(done)=>{
        const res = await request.post('/Orders/1')
        .set('Authorization', 'Bearer'+token)
        expect(res.status).toBe(200);
        expect(res.body.status).toEqual('complete');
        expect(res.body).toEqual({
            id:1,
            status:'comlete',
            user_id:1
        });
        done();
    })
    
})