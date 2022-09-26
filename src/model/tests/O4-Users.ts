import {UsersStore} from '../Users'

const store = new UsersStore()

describe("Users Mode", () => {

    it('should have an index method', async() => {
        expect(store.index).toBeDefined();
        
    });

    it('should have an show method', async() => {
        expect(store.show).toBeDefined();
        
    });

    it('should have an create method', async() => {
        expect(store.create).toBeDefined();
        
    });

    it('index method should return a list of Users', async() => {
        const res = await store.index();
        expect(res).toBeTruthy();
        expect(res.length).toEqual([]);
        
    });

    it('index method should show a Object', async() => {
        const res = await store.show('1');
        expect(res).toBeTruthy();
        
    });

    it('index method should create a user', async() => {
        const res = await store.create;
        expect(res).toBeTruthy();
        expect(res.length).toEqual(2);
    });
})