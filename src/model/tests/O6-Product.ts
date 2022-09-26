import {ProductStore } from "../Product";

const store = new ProductStore()


describe("Products Mode", () => {

    it('should have an index method', async(done) => {
        expect(store.index).toBeDefined();
        done()
    });

    it('should have an show method', async(done) => {
        expect(store.show).toBeDefined();
        done()
    });

    it('should have an create method', async(done) => {
        expect(store.create).toBeDefined();
        done()
    });

    it('index method should return a list of Products', async(done) => {
        const res = await store.index();
        expect(res).toBeTruthy();
        expect(res.length).toEqual(2);
        done()
    });

    it('index method should show a Object', async(done) => {
        const res = await store.show('1');
        expect(res).toBeTruthy();
        done()
    });

    it('index method should create a product', async(done) => {
        const res = await store.create;
        expect(res).toBeTruthy();
        expect(res.length).toEqual(2);
        done()
    });
})