import {OrdersStore} from '../Orders'

const store = new OrdersStore()

describe("Orders Mode", () => {

    it('should have an create method', async(done) => {
        expect(store.create).toBeDefined();
        done()
    });

    it('index method should create a user', async(done) => {
        const res = await store.create;
        expect(res).toBeTruthy();
        expect(res.length).toEqual(2);
        done()
    });
})